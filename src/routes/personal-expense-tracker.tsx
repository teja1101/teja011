import { createFileRoute } from "@tanstack/react-router";

const EXPENSE_TRACKER_GITHUB_URL =
  "https://github.com/teja1101/teja011/tree/main/projects/personal-expense-tracker";

export const Route = createFileRoute("/personal-expense-tracker")({
  head: () => ({
    meta: [
      { title: "Personal Expense Tracker — Gudavalli Prabhu Teja" },
      {
        name: "description",
        content:
          "Personal Expense Tracker case study built with Python, Flask, SQLite and Chart.js, covering CRUD operations, filters, financial summaries, charts and CSV export.",
      },
      { property: "og:title", content: "Personal Expense Tracker — Gudavalli Prabhu Teja" },
      {
        property: "og:description",
        content: "A responsive personal-finance dashboard for tracking income, expenses, balance and spending patterns.",
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
    title: "Category tracking",
    text: "Organise transactions into categories such as Food, Travel, Rent, Shopping, Bills and Salary.",
  },
  {
    title: "Smart filtering",
    text: "Filter transaction history by month, category and income or expense type.",
  },
  {
    title: "Financial dashboard",
    text: "See total income, total expenses, current balance and transaction count at a glance.",
  },
  {
    title: "Interactive charts",
    text: "Use Chart.js to visualise expense categories and compare monthly income against expenses.",
  },
  {
    title: "CSV export",
    text: "Download transaction history as a CSV file for backups or additional spreadsheet analysis.",
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
          <p className="case-eyebrow">Finance / Full-stack web application</p>
          <h1>Personal Expense Tracker</h1>
          <p className="case-subtitle">
            Turning everyday transactions into a clear picture of income, spending and balance.
          </p>
          <dl className="case-facts">
            <div><dt>Focus</dt><dd>Python full-stack development</dd></div>
            <div><dt>Audience</dt><dd>Students &amp; personal-finance users</dd></div>
            <div><dt>Tools</dt><dd>Python · Flask · SQLite · Chart.js · HTML · CSS</dd></div>
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
            <li><span>02 / STORE</span><strong>Flask + SQLite</strong></li>
            <li><span>03 / UNDERSTAND</span><strong>Dashboard + charts</strong></li>
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
              Personal Expense Tracker is a responsive Flask application for recording income and expenses,
              categorising transactions and understanding spending through summaries and charts. It stores data
              in SQLite so entries remain available between sessions.
            </p>
            <h3>Project goal</h3>
            <p>
              Build a useful beginner-friendly full-stack Python project that combines forms, database operations,
              calculations, filtering and data visualisation in one portfolio-ready application.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="problem">
          <p className="case-eyebrow">02 / Problem</p>
          <div>
            <h2>The challenge</h2>
            <p>
              Small daily expenses are easy to forget, and a raw list of transactions does not immediately show
              where money is going. Users need a quick way to record transactions while still being able to see
              their overall balance and spending patterns.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="solution">
          <p className="case-eyebrow">03 / Solution</p>
          <div>
            <h2>The approach</h2>
            <p>
              I created a Flask dashboard with a simple transaction form, SQLite persistence, editable transaction
              history, filters, financial totals and Chart.js visualisations. The user can manage the full data
              lifecycle without leaving the dashboard.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="strategy">
          <p className="case-eyebrow">04 / Strategy</p>
          <div>
            <h2>Keep the finance flow simple</h2>
            <p>
              The application focuses on one repeatable flow: record a transaction, store it safely, update the
              totals and show the result visually. Each feature supports that flow instead of adding unnecessary
              complexity.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-6">
              <div className="rounded-[min(1vw,12px)] ring-1 ring-ink/15 p-4"><p className="case-eyebrow">Capture</p><p>Type, amount, category, date and description.</p></div>
              <div className="rounded-[min(1vw,12px)] ring-1 ring-ink/15 p-4"><p className="case-eyebrow">Calculate</p><p>Income, expenses and balance are aggregated from SQLite.</p></div>
              <div className="rounded-[min(1vw,12px)] ring-1 ring-ink/15 p-4"><p className="case-eyebrow">Visualise</p><p>Charts reveal category spending and monthly trends.</p></div>
            </div>
          </div>
        </section>

        <section className="case-chapter" id="discovery">
          <p className="case-eyebrow">05 / Discovery</p>
          <div>
            <h2>What the interface needed</h2>
            <p>
              The core information users need is current balance, where expenses are concentrated and how income
              compares with spending over time. That led to four dashboard metrics, category and monthly charts,
              plus a filterable transaction history.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="ideation">
          <p className="case-eyebrow">06 / Ideation</p>
          <div>
            <h2>From transaction list to finance dashboard</h2>
            <p>
              The first concept was a basic CRUD table. I expanded it into a dashboard by adding reusable categories,
              aggregated SQL queries, filtering and visual summaries so the project demonstrates more than form submission.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="design">
          <p className="case-eyebrow">07 / Design</p>
          <div>
            <h2>Responsive, dashboard-first UI</h2>
            <p>
              The dark interface uses clear metric cards, compact forms and responsive grids. On smaller screens,
              charts and transaction rows collapse into single-column layouts so the same actions remain usable on mobile.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-6">
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
          <p className="case-eyebrow">08 / Implementation &amp; visuals</p>
          <h2>How the application works</h2>
          <p className="case-process-intro">
            Flask handles routes and validation, SQLite stores transactions, Jinja renders the dashboard and Chart.js
            converts aggregated data into interactive visualisations.
          </p>

          <div className="case-legacy">
            <div className="bg-ink text-paper rounded-[min(1.2vw,16px)] ring-1 ring-black/5 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-4">Application flow</p>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                {["Transaction form", "Flask route", "Validation", "SQLite", "SQL totals", "Chart.js dashboard"].map((step, index, items) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="ring-1 ring-paper/20 px-2 py-1 rounded-md">{step}</span>
                    {index < items.length - 1 && <span className="text-lime">→</span>}
                  </span>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">Database record</p>
              <div className="grid sm:grid-cols-5 gap-2 font-mono text-[11px]">
                {["type", "amount", "category", "date", "description"].map((field) => (
                  <span key={field} className="ring-1 ring-paper/20 px-3 py-2 rounded-md text-center">{field}</span>
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
                <span className="font-mono text-xs">{"</>"}</span> View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="case-chapter" id="reflection">
          <p className="case-eyebrow">09 / Reflection</p>
          <div>
            <h2>What I learned</h2>
            <p>
              This project strengthened my understanding of Flask routing, SQL aggregation, form validation,
              persistent data storage and turning backend data into useful frontend visualisations. It also showed
              how a simple CRUD idea can become a more complete product by focusing on the user’s decisions.
            </p>
            <h3>Next improvements</h3>
            <p>
              The next version could add login accounts, monthly budgets, recurring transactions, overspending alerts,
              cloud deployment and downloadable monthly PDF reports.
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
