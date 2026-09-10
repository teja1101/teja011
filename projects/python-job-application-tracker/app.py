from flask import Flask, render_template, request, redirect, url_for, flash, Response
import sqlite3
import csv
import io
from datetime import datetime

app = Flask(__name__)
app.secret_key = "job-tracker-secret-key"
DB_NAME = "jobs.db"

def get_db():
    conn = sqlite3.connect(DB_NAME)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS applications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            company TEXT NOT NULL,
            role TEXT NOT NULL,
            status TEXT NOT NULL,
            applied_date TEXT NOT NULL,
            link TEXT,
            notes TEXT
        )
    """)
    conn.commit()
    conn.close()

@app.route("/")
def index():
    search = request.args.get("search", "").strip()
    status_filter = request.args.get("status", "").strip()

    conn = get_db()

    query = "SELECT * FROM applications WHERE 1=1"
    params = []

    if search:
        query += " AND (company LIKE ? OR role LIKE ? OR notes LIKE ?)"
        wildcard = f"%{search}%"
        params.extend([wildcard, wildcard, wildcard])

    if status_filter:
        query += " AND status = ?"
        params.append(status_filter)

    query += " ORDER BY id DESC"
    applications = conn.execute(query, params).fetchall()

    total = conn.execute("SELECT COUNT(*) FROM applications").fetchone()[0]
    applied = conn.execute(
        "SELECT COUNT(*) FROM applications WHERE status='Applied'"
    ).fetchone()[0]
    interviews = conn.execute(
        "SELECT COUNT(*) FROM applications WHERE status='Interview'"
    ).fetchone()[0]
    offers = conn.execute(
        "SELECT COUNT(*) FROM applications WHERE status='Offer'"
    ).fetchone()[0]

    conn.close()

    return render_template(
        "index.html",
        applications=applications,
        search=search,
        status_filter=status_filter,
        total=total,
        applied=applied,
        interviews=interviews,
        offers=offers
    )

@app.route("/add", methods=["POST"])
def add_job():
    company = request.form["company"].strip()
    role = request.form["role"].strip()
    status = request.form["status"].strip()
    applied_date = request.form["applied_date"].strip()
    link = request.form.get("link", "").strip()
    notes = request.form.get("notes", "").strip()

    if not company or not role:
        flash("Company and role are required.", "error")
        return redirect(url_for("index"))

    try:
        datetime.strptime(applied_date, "%Y-%m-%d")
    except ValueError:
        flash("Please enter a valid date.", "error")
        return redirect(url_for("index"))

    conn = get_db()
    conn.execute("""
        INSERT INTO applications
        (company, role, status, applied_date, link, notes)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (company, role, status, applied_date, link, notes))
    conn.commit()
    conn.close()

    flash("Application added successfully.", "success")
    return redirect(url_for("index"))

@app.route("/edit/<int:job_id>", methods=["POST"])
def edit_job(job_id):
    company = request.form["company"].strip()
    role = request.form["role"].strip()
    status = request.form["status"].strip()
    applied_date = request.form["applied_date"].strip()
    link = request.form.get("link", "").strip()
    notes = request.form.get("notes", "").strip()

    if not company or not role:
        flash("Company and role are required.", "error")
        return redirect(url_for("index"))

    conn = get_db()
    conn.execute("""
        UPDATE applications
        SET company=?, role=?, status=?, applied_date=?, link=?, notes=?
        WHERE id=?
    """, (company, role, status, applied_date, link, notes, job_id))
    conn.commit()
    conn.close()

    flash("Application updated.", "success")
    return redirect(url_for("index"))

@app.route("/delete/<int:job_id>", methods=["POST"])
def delete_job(job_id):
    conn = get_db()
    conn.execute("DELETE FROM applications WHERE id=?", (job_id,))
    conn.commit()
    conn.close()

    flash("Application deleted.", "success")
    return redirect(url_for("index"))

@app.route("/export")
def export_csv():
    conn = get_db()
    rows = conn.execute("""
        SELECT company, role, status, applied_date, link, notes
        FROM applications
        ORDER BY id DESC
    """).fetchall()
    conn.close()

    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["Company", "Role", "Status", "Applied Date", "Job Link", "Notes"])

    for row in rows:
        writer.writerow([
            row["company"],
            row["role"],
            row["status"],
            row["applied_date"],
            row["link"],
            row["notes"]
        ])

    return Response(
        output.getvalue(),
        mimetype="text/csv",
        headers={"Content-Disposition": "attachment;filename=job_applications.csv"}
    )

if __name__ == "__main__":
    init_db()
    app.run(debug=True)
