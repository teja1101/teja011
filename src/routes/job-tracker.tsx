import { createFileRoute } from "@tanstack/react-router";

const JOB_TRACKER_GITHUB_URL =
  "https://github.com/teja1101/teja011/tree/main/projects/python-job-application-tracker";

export const Route = createFileRoute("/job-tracker")({
  head: () => ({
    meta: [
      { title: "Job Application Tracker — Gudavalli Prabhu Teja" },
      {
        name: "description",
        content:
          "Python Flask Job Application Tracker case study covering the problem, solution, design, implementation, SQLite storage, CRUD operations, search, filters and CSV export.",
      },
      { property: "og:title", content: "Job Application Tracker — Gudavalli Prabhu Teja" },
      {
        property: "og:description",
        content: "A responsive Python, Flask and SQLite application for organizing and tracking job applications.",
      },
    ],
  }),
  component: JobTrackerCaseStudy,
});

const features = [
  {
    title: "CRUD operations",
    text: "Create, view, edit and delete application records through a simple browser-based workflow.",
  },
  {
    title: "Search & filtering",
    text: "Find applications by company, role or notes and narrow results by application status.",
  },
  {
    title: "Dashboard statistics",
    text: "Quickly see total applications, submitted applications, interviews and offers.",
  },
  {
    title: "SQLite persistence",
    text: "Application information is stored locally in a lightweight relational SQLite database.",
  },
  {
    title: "CSV export",
    text: "Download tracked applications as a CSV file for backup or spreadsheet analysis.",
  },
  {
    title: "Responsive UI",
    text: "A dark, mobile-friendly interface adapts from desktop layouts to smaller screens.",
  },
];

function JobTrackerCaseStudy() {
  return (
    <main className="case-page">
      <header className="case-topbar">
        <a href="/#work">← All projects</a>
        <a href="mailto:pteja0960@gmail.com">Let’s connect ↗</a>
      </header>

      <div className="case-container">
        <header className="case-heading">
          <p className="case-eyebrow">Productivity / Full-stack web application</p>
          <h1>Job Application Tracker</h1>
          <p className="case-subtitle">
            A simpler way to organise applications, interviews and offers in one place.
          </p>
          <dl className="case-facts">
            <div><dt>Focus</dt><dd>Python full-stack development</dd></div>
            <div><dt>Audience</dt><dd>Students &amp; job seekers</dd></div>
            <div><dt>Tools</dt><dd>Python · Flask · SQLite · HTML · CSS</dd></div>
            <div>
              <dt>Source</dt>
              <dd>
                <a href={JOB_TRACKER_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  View GitHub ↗
                </a>
              </dd>
            </div>
          </dl>
        </header>

        <figure className="case-cover case-flow-cover">
          <figcaption>Job application management workflow</figcaption>
          <ol>
            <li><span>01 / CAPTURE</span><strong>Application details</strong></li>
            <li><span>02 / STORE</span><strong>Flask + SQLite</strong></li>
            <li><span>03 / TRACK</span><strong>Status dashboard</strong></li>
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
          <a href="#process">Implementation</a>
          <a href="#reflection">Reflection</a>
        </nav>

        <section className="case-chapter" id="overview">
          <p className="case-eyebrow">01 / Overview</p>
          <div>
            <h2>About the project</h2>
            <p>
              Job Application Tracker is a responsive Flask web application that helps job seekers
              record companies and roles, track application status, save job links and notes, search
              through records and export their application history.
            </p>
            <h3>Project goal</h3>
            <p>
              Build a practical beginner-friendly Python project that solves a real problem while
              demonstrating full-stack fundamentals, database operations and clean user-interface design.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="problem">
          <p className="case-eyebrow">02 / Problem</p>
          <div>
            <h2>The challenge</h2>
            <p>
              Job seekers often apply to many roles across different websites. Without a central record,
              it becomes easy to forget when an application was submitted, which stage it reached or
              which job link and follow-up notes belong to it.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="solution">
          <p className="case-eyebrow">03 / Solution</p>
          <div>
            <h2>The approach</h2>
            <p>
              Create one focused dashboard where application data can be added, updated, searched,
              filtered and deleted. Flask handles routes and server logic, while SQLite keeps the data
              persistent without requiring a separate database server.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="strategy">
          <p className="case-eyebrow">04 / Strategy</p>
          <div>
            <h2>Keep the workflow simple</h2>
            <p>
              The project is organised around the actions a user performs most: add an application,
              scan current statuses, search for a company or role, update progress and export records.
              The interface keeps those actions visible instead of hiding them behind complex navigation.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="discovery">
          <p className="case-eyebrow">05 / Discovery</p>
          <div>
            <h2>What information matters?</h2>
            <p>
              The core record was reduced to company, role, status, applied date, job link and notes.
              Those fields provide enough context to manage a job search while keeping data entry quick.
              Status values such as Applied, Interview, Offer, Rejected and On Hold make progress easy to scan.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="ideation">
          <p className="case-eyebrow">06 / Ideation</p>
          <div>
            <h2>From a Python script to a useful product</h2>
            <p>
              Instead of building only a command-line CRUD exercise, the idea evolved into a browser-based
              application with a visual dashboard, status cards, responsive forms and export functionality.
              This makes the same Python and SQL concepts easier to demonstrate in a portfolio.
            </p>
          </div>
        </section>

        <section className="case-chapter" id="design">
          <p className="case-eyebrow">07 / Design</p>
          <div>
            <h2>Dark dashboard, clear hierarchy</h2>
            <p>
              The interface uses a dark surface, high-contrast typography, compact status badges and green
              accents for key actions. Application cards adapt to smaller screens, while forms and filters
              remain easy to use on both desktop and mobile layouts.
            </p>
          </div>
        </section>

        <section className="case-process" id="process">
          <p className="case-eyebrow">08 / Implementation &amp; visuals</p>
          <h2>How it works</h2>
          <p className="case-process-intro">
            Flask connects the browser interface to SQLite and handles each application-management action.
          </p>

          <div className="case-legacy">
            <div className="bg-ink text-paper rounded-[min(1.2vw,16px)] ring-1 ring-black/5 overflow-hidden p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">FULL-STACK PYTHON</p>
                  <h3 className="font-display text-2xl font-semibold mt-2">Job Application Tracker</h3>
                </div>
                <a
                  href={JOB_TRACKER_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-lime text-ink py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium hover:bg-paper transition-colors"
                >
                  <span className="font-mono text-xs">{"</>"}</span> View on GitHub
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 mt-6">
                {[
                  { label: "Frontend", value: "HTML · CSS · Jinja" },
                  { label: "Backend", value: "Python · Flask" },
                  { label: "Database", value: "SQLite · SQL" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">{item.label}</p>
                    <p className="text-sm text-paper/70 mt-2">{item.value}</p>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                Core features
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={feature.title} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                    <p className="font-mono text-xs text-lime">{String(index + 1).padStart(2, "0")}</p>
                    <p className="font-display font-semibold text-base mt-1">{feature.title}</p>
                    <p className="text-sm text-paper/60 mt-1 text-pretty">{feature.text}</p>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                Request flow
              </p>
              <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                {[
                  "User submits form",
                  "Flask validates request",
                  "SQL updates SQLite",
                  "Dashboard reloads",
                  "Search / filter / export",
                ].map((step, index, steps) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="ring-1 ring-paper/20 px-2 py-1 rounded-md">{step}</span>
                    {index < steps.length - 1 && <span className="text-lime">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="case-chapter" id="reflection">
          <p className="case-eyebrow">09 / Reflection</p>
          <div>
            <h2>What I learned</h2>
            <p>
              This project strengthened my understanding of Flask routing, HTML forms, SQL queries,
              relational data persistence and CRUD operations. It also showed how backend functionality
              becomes easier to understand when it is presented through a clean, responsive interface.
            </p>
            <h3>What I would improve next</h3>
            <p>
              Add authentication, interview reminders, analytics charts, pagination and a cloud database,
              then deploy the Flask application so recruiters can use a live demo directly from the portfolio.
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
