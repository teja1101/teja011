import { createFileRoute } from "@tanstack/react-router";

const EXPENSE_TRACKER_GITHUB_URL =
  "https://github.com/teja1101/teja011/tree/main/projects/personal-expense-tracker";

export const Route = createFileRoute("/personal-expense-tracker")({
  head: () => ({
    meta: [
      { title: "Personal Expense Tracker & Expense Calculator — Gudavalli Prabhu Teja" },
      {
        name: "description",
        content:
          "Personal Expense Tracker and Expense Calculator case study built with Python, Flask, SQLite and Chart.js, covering CRUD operations, validation, filters, finance calculations, charts and CSV export.",
      },
      {
        property: "og:title",
        content: "Personal Expense Tracker & Expense Calculator — Gudavalli Prabhu Teja",
      },
      {
        property: "og:description",
        content:
          "A responsive personal-finance dashboard for recording transactions, calculating income, expenses and balance, and understanding spending patterns.",
      },
    ],
  }),
  component: PersonalExpenseTrackerCaseStudy,
});

const features = [
  {
    title: "Income & expense CRUD",
    text: "Create, view, edit and delete financial transactions through a simple browser-based workflow.",
  },
  {
    title: "Automatic expense calculation",
    text: "The dashboard calculates total income, total expenses and current balance directly from stored transactions.",
  },
  {
    title: "Category tracking",
    text: "Organise transactions into Food, Travel, Rent, Shopping, Bills, Health, Education, Salary and Other.",
  },
  {
    title: "Smart filtering",
    text: "Filter transaction history by month, category and income or expense type without changing the stored data.",
  },
  {
    title: "Interactive charts",
    text: "Chart.js visualises expense categories and compares monthly income against monthly expenses.",
  },
  {
    title: "CSV export",
    text: "Download the complete transaction history as a CSV file for backup or additional spreadsheet analysis.",
  },
  {
    title: "Input validation",
    text: "Transaction type, positive amount, supported category and YYYY-MM-DD date values are validated before database writes.",
  },
  {
    title: "Persistent SQLite storage",
    text: "Transactions remain available between sessions in a lightweight relational SQLite database.",
  },
];

const projectSnapshot = [
  {
    label: "Problem",
    text: "Daily spending is easy to forget, and a raw transaction list does not clearly explain where money is going.",
  },
  {
    label: "Solution",
    text: "A central finance dashboard records transactions, calculates totals and turns stored data into useful spending insights.",
  },
  {
    label: "My contribution",
    text: "Designed and implemented the Flask routes, SQLite schema, CRUD operations, validation, finance calculations, filters, charts and CSV export.",
  },
];

const dataFields = [
  ["id", "Auto-incremented primary key used to identify each transaction."],
  ["transaction_type", "Stores whether the record is Income or Expense."],
  ["amount", "Positive numeric value used by all income, expense and balance calculations."],
  ["category", "Groups transactions into meaningful spending or income categories."],
  ["transaction_date", "Stores the transaction date in YYYY-MM-DD format for sorting and monthly filtering."],
  ["description", "Optional note that gives extra context about the transaction."],
];

const backendRoutes = [
  ["GET /", "Loads transactions, applies optional filters, calculates totals and prepares chart data."],
  ["POST /add", "Validates the submitted transaction and inserts it into SQLite."],
  ["POST /edit/<id>", "Validates and updates the selected transaction using its database ID."],
  ["POST /delete/<id>", "Deletes a selected transaction from SQLite."],
  ["GET /export", "Returns the complete transaction history as a downloadable CSV file."],
];

const calculationLogic = [
  {
    title: "Total income",
    formula: "SUM(amount) WHERE transaction_type = 'Income'",
    text: "Adds all income records stored in the transactions table.",
  },
  {
    title: "Total expenses",
    formula: "SUM(amount) WHERE transaction_type = 'Expense'",
    text: "Adds all expense records so the user can see overall spending instantly.",
  },
  {
    title: "Current balance",
    formula: "Total Income − Total Expenses",
    text: "Shows the remaining balance after subtracting recorded spending from recorded income.",
  },
  {
    title: "Category spending",
    formula: "GROUP BY category",
    text: "Aggregates expense values per category to reveal where the largest share of money is being spent.",
  },
  {
    title: "Monthly comparison",
    formula: "GROUP BY YYYY-MM",
    text: "Compares monthly income and expense totals to make changes in spending over time easier to understand.",
  },
];

const technicalDecisions = [
  {
    title: "Flask for the backend",
    text: "Flask keeps the application lightweight while providing routing, form processing, redirects, flash messages and template rendering in one Python codebase.",
  },
  {
    title: "SQLite for storage",
    text: "SQLite requires no separate database server, which makes the project simple to run locally while still demonstrating relational data and SQL queries.",
  },
  {
    title: "Parameterized SQL",
    text: "Filter, insert, update and delete operations pass values as SQL parameters instead of concatenating user-entered values into query strings.",
  },
  {
    title: "SQL for financial summaries",
    text: "SUM, CASE, GROUP BY, substr and COALESCE are used to calculate totals and prepare chart-ready data efficiently on the backend.",
  },
  {
    title: "Jinja for server-rendered UI",
    text: "The browser receives current transaction data, totals and chart arrays from Flask and renders them through a simple server-driven workflow.",
  },
  {
    title: "Chart.js for visualisation",
    text: "Chart.js converts aggregated category and monthly values into visual summaries without adding a heavy front-end framework to the Flask application itself.",
  },
];

const challenges = [
  {
    title: "Keeping calculations accurate",
    text: "Income and expense totals are calculated directly from database records so editing or deleting a transaction automatically affects the next dashboard result.",
  },
  {
    title: "Combining multiple filters",
    text: "The transaction query is built incrementally so month, category and transaction-type filters can work independently or together.",
  },
  {
    title: "Validating financial input",
    text: "The backend rejects unsupported transaction types, non-positive amounts, invalid categories and malformed dates before saving changes.",
  },
  {
    title: "Going beyond basic CRUD",
    text: "Financial summaries, category analysis, monthly trends and CSV export turn a simple database exercise into a more complete portfolio application.",
  },
];

function PersonalExpenseTrackerCaseStudy() {
  return (
    <main className="case-page">
      <header className="case-topbar">
        <a href="/#work">← All projects</a>
        <a href="mailto:pteja0960@gmail.com">Let’s connect ↗</a>
      </header>

      <div className="case-container">
        <header className="case-heading">
          <p className="case-eyebrow">Finance / Full-stack Python application</p>
          <h1>Personal Expense Tracker</h1>
          <p className="case-subtitle">
            An expense calculator and finance dashboard that turns everyday transactions into a clear
            picture of income, spending and available balance.
          </p>
          <dl className="case-facts">
            <div><dt>Focus</dt><dd>Python full-stack development</dd></div>
            <div><dt>Audience</dt><dd>Students &amp; personal-finance users</dd></div>
            <div><dt>Tools</dt><dd>Python · Flask · SQLite · Jinja2 · Chart.js · HTML · CSS</dd></div>
            <div>
              <dt>Source</dt>
              <dd>
                <a href={EXPENSE_TRACKER_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  View GitHub ↗
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <figure className="case-cover case-flow-cover">
          <figcaption>Personal finance tracking workflow</figcaption>
          <ol>
            <li><span>01 / RECORD</span><strong>Income &amp; expenses</strong></li>
            <li><span>02 / CALCULATE</span><strong>Totals &amp; balance</strong></li>
            <li><span>03 / UNDERSTAND</span><strong>Filters &amp; charts</strong></li>
          </ol>
        </figure>

        <nav className="case-jump" aria-label="Case study sections">
          <a href="#overview">Overview</a>
          <a href="#problem">Problem</a>
          <a href="#solution">Solution</a>
          <a href="#strategy">Strategy</a>
          <a href="#discovery">Discovery</a>
          <a href="#ideation">Ideation</a>
          <a href="#design">Design</a>
          <a href="#implementation">Implementation</a>
          <a href="#reflection">Reflection</a>
        </nav>

        <section className="case-chapter" id="overview">
          <p className="case-eyebrow">01 / Overview</p>
          <div>
            <h2>About the project</h2>
            <p>
              Personal Expense Tracker is a responsive Flask web application that works as both a
              transaction manager and an expense calculator. Users can record income and expenses,
              organise them by category, edit or delete records, filter transaction history and immediately
              see updated income, expense and balance totals. The application also converts stored data into
              category and monthly charts so users can understand their spending instead of only storing it.
            </p>

            <h3>Project goal</h3>
            <p>
              Build a practical beginner-friendly Python project that demonstrates more than a calculator.
              The goal was to combine form handling, CRUD operations, relational storage, validation,
              financial calculations, SQL aggregation, filtering, data visualisation and file export inside
              one portfolio-ready application.
            </p>

            <div className="project-snapshot mt-6 grid sm:grid-cols-3 gap-3">
              {projectSnapshot.map((item) => (
                <article key={item.label} className="study-card">
                  <p className="case-eyebrow">{item.label}</p>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <h3>Project scope</h3>
            <p>
              The current version is designed as a local single-user finance tracker. It focuses on
              transaction management and financial visibility rather than authentication, bank integrations
              or cloud synchronisation. Keeping the scope focused made the application easier to understand
              while still demonstrating a complete backend-to-database-to-dashboard workflow.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="problem">
          <p className="case-eyebrow">02 / Problem</p>
          <div>
            <h2>The challenge</h2>
            <p>
              Small daily expenses are easy to forget. Even when someone writes down every transaction,
              a long list of amounts does not immediately answer the questions that matter: how much was
              earned, how much was spent, what balance remains and which categories consume the most money.
            </p>

            <h3>Why this matters</h3>
            <p>
              Manual calculation becomes repetitive as the number of transactions grows. Editing an old
              transaction can also make previous totals incorrect if the user has to recalculate everything
              by hand. A useful expense calculator should therefore treat the transaction records as the
              source of truth and automatically rebuild the financial summary whenever the dashboard loads.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="solution">
          <p className="case-eyebrow">03 / Solution</p>
          <div>
            <h2>The approach</h2>
            <p>
              I built one focused dashboard where users can enter a transaction and immediately see its
              effect on their financial totals. Flask processes the request, validates the fields and stores
              the record in SQLite. SQL queries then calculate total income and total expenses, and Python
              calculates the current balance before the updated dashboard is rendered.
            </p>

            <h3>Core product loop</h3>
            <p>
              Record a transaction, store it in SQLite, recalculate the financial summary, inspect the
              updated balance and charts, then edit, delete or filter records whenever deeper review is
              needed. This keeps data entry and financial understanding inside one continuous workflow.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="strategy">
          <p className="case-eyebrow">04 / Strategy</p>
          <div>
            <h2>Keep the finance flow simple</h2>
            <p>
              The application is organised around three actions: capture accurate transaction data,
              calculate useful totals from that data and present those totals in a form that is easy to
              understand. Every major feature supports one of those actions instead of adding unnecessary
              complexity.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              <div className="rounded-[min(1vw,12px)] ring-1 ring-ink/15 p-4">
                <p className="case-eyebrow">Capture</p>
                <p>Store type, amount, category, date and an optional description.</p>
              </div>
              <div className="rounded-[min(1vw,12px)] ring-1 ring-ink/15 p-4">
                <p className="case-eyebrow">Calculate</p>
                <p>Aggregate income and expenses from SQLite, then calculate the remaining balance.</p>
              </div>
              <div className="rounded-[min(1vw,12px)] ring-1 ring-ink/15 p-4">
                <p className="case-eyebrow">Understand</p>
                <p>Use filters and charts to reveal category spending and monthly financial trends.</p>
              </div>
            </div>

            <h3>What the expense calculator actually calculates</h3>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {calculationLogic.map((item) => (
                <article key={item.title} className="study-card">
                  <p className="font-display font-semibold">{item.title}</p>
                  <p className="font-mono text-[11px] text-brand mt-2">{item.formula}</p>
                  <p className="text-sm text-ink/65 mt-2">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-chapter" id="discovery">
          <p className="case-eyebrow">05 / Discovery</p>
          <div>
            <h2>What information users need first</h2>
            <p>
              The most important information is not the full transaction table. Users first need an answer
              to three simple questions: how much money came in, how much went out and what remains. After
              that, they need enough detail to understand which categories and months are responsible for
              the result.
            </p>

            <h3>Dashboard hierarchy</h3>
            <p>
              That led to a dashboard structure where financial totals provide the high-level picture,
              charts provide patterns and transaction history provides the underlying detail. Filters are
              placed around the transaction history so users can narrow the data without losing their stored
              records.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="ideation">
          <p className="case-eyebrow">06 / Ideation</p>
          <div>
            <h2>From CRUD table to expense calculator</h2>
            <p>
              The first concept was a straightforward transaction list with create, edit and delete actions.
              I expanded it by adding automatic totals, balance calculation, categories, filters, SQL
              aggregation, visual summaries and CSV export. This changed the project from a database exercise
              into a small personal-finance product.
            </p>

            <h3>Feature progression</h3>
            <div className="grid sm:grid-cols-4 gap-3 mt-4">
              {["CRUD records", "Finance totals", "Filters + charts", "CSV export"].map((step, index) => (
                <article key={step} className="study-card">
                  <p className="case-eyebrow">0{index + 1}</p>
                  <p className="font-display font-semibold">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-chapter" id="design">
          <p className="case-eyebrow">07 / Design</p>
          <div>
            <h2>Responsive, dashboard-first UI</h2>
            <p>
              The interface keeps transaction entry, financial totals and recent activity easy to scan.
              Compact cards create a visual hierarchy for important figures, while responsive grids allow
              forms, charts and transaction content to move into simpler single-column layouts on smaller
              screens.
            </p>

            <h3>Core features</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
              {features.map((feature) => (
                <article key={feature.title} className="rounded-[min(1vw,12px)] ring-1 ring-ink/15 p-4">
                  <p className="font-display font-semibold">{feature.title}</p>
                  <p className="text-sm text-ink/65 mt-2">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-process" id="implementation">
          <p className="case-eyebrow">08 / Implementation &amp; technical details</p>
          <h2>How the application works</h2>
          <p className="case-process-intro">
            Flask handles HTTP routes and validation, SQLite stores the transactions, SQL calculates the
            financial summaries, Jinja renders the latest data and Chart.js converts aggregated values into
            visual spending insights.
          </p>

          <div className="grid lg:grid-cols-2 gap-4 mt-8">
            <article className="study-card">
              <p className="case-eyebrow">Application architecture</p>
              <h3>Request-to-dashboard flow</h3>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] mt-4">
                {["Browser form", "Flask route", "Validation", "SQLite", "SQL calculations", "Jinja + charts"].map((step, index, items) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="ring-1 ring-ink/15 px-2 py-1 rounded-md">{step}</span>
                    {index < items.length - 1 && <span className="text-brand">→</span>}
                  </span>
                ))}
              </div>
            </article>

            <article className="study-card">
              <p className="case-eyebrow">Expense calculation example</p>
              <h3>₹50,000 income − ₹18,750 expenses = ₹31,250 balance</h3>
              <p className="mt-3">
                The displayed result is not stored as a separate manual total. It is derived from the
                transaction records, so editing or deleting a record changes the next calculated result.
              </p>
            </article>
          </div>

          <div className="case-legacy mt-8">
            <div className="bg-ink text-paper rounded-[min(1.2vw,16px)] ring-1 ring-black/5 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-4">Database schema</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {dataFields.map(([field, description]) => (
                  <div key={field} className="ring-1 ring-paper/20 rounded-md p-3">
                    <p className="font-mono text-[11px] text-lime">{field}</p>
                    <p className="text-sm text-paper/70 mt-1">{description}</p>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">Flask routes</p>
              <div className="space-y-2">
                {backendRoutes.map(([route, description]) => (
                  <div key={route} className="grid sm:grid-cols-[150px_1fr] gap-2 ring-1 ring-paper/15 rounded-md p-3">
                    <code className="font-mono text-[11px] text-lime">{route}</code>
                    <p className="text-sm text-paper/70">{description}</p>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">Technology stack</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Flask", "SQLite", "Jinja2", "HTML", "CSS", "Chart.js", "CSV"].map((tool) => (
                  <span key={tool} className="font-mono text-[11px] ring-1 ring-paper/20 px-2 py-1 rounded-md">{tool}</span>
                ))}
              </div>

              <a
                href={EXPENSE_TRACKER_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 bg-lime text-ink py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium hover:bg-paper transition-colors"
              >
                <span className="font-mono text-xs">{"</>"}</span> View source code on GitHub
              </a>
            </div>
          </div>

          <div className="mt-10">
            <p className="case-eyebrow">Technical decisions</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
              {technicalDecisions.map((item) => (
                <article key={item.title} className="study-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="case-eyebrow">Development challenges</p>
            <div className="grid sm:grid-cols-2 gap-3 mt-4">
              {challenges.map((item) => (
                <article key={item.title} className="study-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-chapter" id="reflection">
          <p className="case-eyebrow">09 / Reflection</p>
          <div>
            <h2>What I learned</h2>
            <p>
              This project strengthened my understanding of Flask routing, form processing, backend
              validation, SQLite CRUD operations and SQL aggregation. I also learned how to turn database
              records into calculations and visual information that support real user decisions rather than
              simply displaying stored rows.
            </p>

            <h3>Skills demonstrated</h3>
            <p>
              Python programming, Flask web development, relational database design, SQL queries, CRUD
              operations, form handling, validation, financial calculations, filtering, server-rendered
              interfaces, Chart.js data visualisation, responsive UI development, CSV generation and
              debugging a complete full-stack application.
            </p>

            <h3>How I would explain this project in an interview</h3>
            <p>
              I built a Personal Expense Tracker using Python, Flask and SQLite. Users can add income and
              expense transactions, and the backend validates and stores each record. The dashboard uses SQL
              aggregation to calculate total income and expenses, then calculates balance as income minus
              expenses. I also added category and monthly analysis using Chart.js, filters for reviewing
              transactions and CSV export. The project helped me understand how frontend forms, Flask routes,
              SQL queries and data visualisation work together in a full-stack application.
            </p>

            <h3>Next improvements</h3>
            <p>
              A future version could add user accounts, monthly budget limits, recurring transactions,
              savings goals, overspending alerts, searchable descriptions, cloud database deployment,
              downloadable monthly PDF reports and secure bank-data integrations.
            </p>
          </div>
        </section>

        <footer className="case-next">
          <span className="case-eyebrow">Next project</span>
          <a href="/smart-griev">SMART-GRIEV <span aria-hidden="true">↗</span></a>
          <a className="case-back" href="/#work">Back to all projects</a>
        </footer>
      </div>
    </main>
  );
}
