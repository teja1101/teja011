from flask import Flask, render_template, request, redirect, url_for, flash, Response
import sqlite3
import csv
import io
from datetime import datetime

app = Flask(__name__)
app.secret_key = "expense-tracker-secret-key"
DB_NAME = "expenses.db"

CATEGORIES = ["Food", "Travel", "Rent", "Shopping", "Bills", "Health", "Education", "Salary", "Other"]


def get_db():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute(
        """
        CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            transaction_type TEXT NOT NULL CHECK(transaction_type IN ('Income', 'Expense')),
            amount REAL NOT NULL CHECK(amount > 0),
            category TEXT NOT NULL,
            transaction_date TEXT NOT NULL,
            description TEXT
        )
        """
    )
    conn.commit()
    conn.close()


def valid_date(value):
    try:
        datetime.strptime(value, "%Y-%m-%d")
        return True
    except ValueError:
        return False


@app.route("/")
def index():
    month = request.args.get("month", "").strip()
    category = request.args.get("category", "").strip()
    transaction_type = request.args.get("type", "").strip()

    conn = get_db()
    query = "SELECT * FROM transactions WHERE 1=1"
    params = []

    if month:
        query += " AND substr(transaction_date, 1, 7) = ?"
        params.append(month)
    if category:
        query += " AND category = ?"
        params.append(category)
    if transaction_type:
        query += " AND transaction_type = ?"
        params.append(transaction_type)

    query += " ORDER BY transaction_date DESC, id DESC"
    transactions = conn.execute(query, params).fetchall()

    total_income = conn.execute(
        "SELECT COALESCE(SUM(amount), 0) FROM transactions WHERE transaction_type='Income'"
    ).fetchone()[0]
    total_expense = conn.execute(
        "SELECT COALESCE(SUM(amount), 0) FROM transactions WHERE transaction_type='Expense'"
    ).fetchone()[0]
    balance = total_income - total_expense

    category_rows = conn.execute(
        """
        SELECT category, ROUND(SUM(amount), 2) AS total
        FROM transactions
        WHERE transaction_type='Expense'
        GROUP BY category
        ORDER BY total DESC
        """
    ).fetchall()

    monthly_rows = conn.execute(
        """
        SELECT substr(transaction_date, 1, 7) AS month,
               ROUND(SUM(CASE WHEN transaction_type='Income' THEN amount ELSE 0 END), 2) AS income,
               ROUND(SUM(CASE WHEN transaction_type='Expense' THEN amount ELSE 0 END), 2) AS expense
        FROM transactions
        GROUP BY substr(transaction_date, 1, 7)
        ORDER BY month ASC
        """
    ).fetchall()

    conn.close()

    return render_template(
        "index.html",
        transactions=transactions,
        categories=CATEGORIES,
        total_income=round(total_income, 2),
        total_expense=round(total_expense, 2),
        balance=round(balance, 2),
        category_labels=[row["category"] for row in category_rows],
        category_values=[row["total"] for row in category_rows],
        month_labels=[row["month"] for row in monthly_rows],
        month_income=[row["income"] for row in monthly_rows],
        month_expense=[row["expense"] for row in monthly_rows],
        selected_month=month,
        selected_category=category,
        selected_type=transaction_type,
        today=datetime.now().strftime("%Y-%m-%d"),
    )


@app.route("/add", methods=["POST"])
def add_transaction():
    transaction_type = request.form.get("transaction_type", "").strip()
    amount = request.form.get("amount", "").strip()
    category = request.form.get("category", "").strip()
    transaction_date = request.form.get("transaction_date", "").strip()
    description = request.form.get("description", "").strip()

    if transaction_type not in {"Income", "Expense"}:
        flash("Choose a valid transaction type.", "error")
        return redirect(url_for("index"))

    try:
        amount_value = float(amount)
        if amount_value <= 0:
            raise ValueError
    except ValueError:
        flash("Amount must be greater than zero.", "error")
        return redirect(url_for("index"))

    if category not in CATEGORIES:
        flash("Choose a valid category.", "error")
        return redirect(url_for("index"))

    if not valid_date(transaction_date):
        flash("Choose a valid date.", "error")
        return redirect(url_for("index"))

    conn = get_db()
    conn.execute(
        """
        INSERT INTO transactions
        (transaction_type, amount, category, transaction_date, description)
        VALUES (?, ?, ?, ?, ?)
        """,
        (transaction_type, amount_value, category, transaction_date, description),
    )
    conn.commit()
    conn.close()

    flash("Transaction added successfully.", "success")
    return redirect(url_for("index"))


@app.route("/edit/<int:transaction_id>", methods=["POST"])
def edit_transaction(transaction_id):
    transaction_type = request.form.get("transaction_type", "").strip()
    amount = request.form.get("amount", "").strip()
    category = request.form.get("category", "").strip()
    transaction_date = request.form.get("transaction_date", "").strip()
    description = request.form.get("description", "").strip()

    try:
        amount_value = float(amount)
        if amount_value <= 0:
            raise ValueError
    except ValueError:
        flash("Amount must be greater than zero.", "error")
        return redirect(url_for("index"))

    if transaction_type not in {"Income", "Expense"} or category not in CATEGORIES or not valid_date(transaction_date):
        flash("Please check the transaction details.", "error")
        return redirect(url_for("index"))

    conn = get_db()
    conn.execute(
        """
        UPDATE transactions
        SET transaction_type=?, amount=?, category=?, transaction_date=?, description=?
        WHERE id=?
        """,
        (transaction_type, amount_value, category, transaction_date, description, transaction_id),
    )
    conn.commit()
    conn.close()

    flash("Transaction updated.", "success")
    return redirect(url_for("index"))


@app.route("/delete/<int:transaction_id>", methods=["POST"])
def delete_transaction(transaction_id):
    conn = get_db()
    conn.execute("DELETE FROM transactions WHERE id=?", (transaction_id,))
    conn.commit()
    conn.close()
    flash("Transaction deleted.", "success")
    return redirect(url_for("index"))


@app.route("/export")
def export_csv():
    conn = get_db()
    rows = conn.execute(
        """
        SELECT transaction_type, amount, category, transaction_date, description
        FROM transactions
        ORDER BY transaction_date DESC, id DESC
        """
    ).fetchall()
    conn.close()

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Type", "Amount", "Category", "Date", "Description"])
    for row in rows:
        writer.writerow([
            row["transaction_type"], row["amount"], row["category"], row["transaction_date"], row["description"]
        ])

    return Response(
        output.getvalue(),
        mimetype="text/csv",
        headers={"Content-Disposition": "attachment;filename=expense_tracker.csv"},
    )


if __name__ == "__main__":
    init_db()
    app.run(debug=True)
