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
          "Python Flask Job Application Tracker case study covering the problem, solution, architecture, implementation, SQLite storage, CRUD operations, search, filters, validation and CSV export.",
      },
      { property: "og:title", content: "Job Application Tracker — Gudavalli Prabhu Teja" },
      {
        property: "og:description",
        content:
          "A responsive Python, Flask and SQLite application for organizing and tracking job applications.",
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
  {
    title: "Input validation",
    text: "Required company and role fields are checked, and new application dates are validated before insertion.",
  },
  {
    title: "User feedback",
    text: "Flask flash messages confirm successful actions and surface validation problems without hiding the workflow.",
  },
];

const projectSnapshot = [
  {
    label: "Problem",
    text: "Job applications spread across portals, emails and company sites are difficult to track consistently.",
  },
  {
    label: "Solution",
    text: "A central dashboard stores every application and exposes the actions needed to manage its progress.",
  },
  {
    label: "My contribution",
    text: "Designed and implemented the Flask routes, SQLite schema, CRUD logic, filtering, CSV export and responsive interface.",
  },
];

const dataFields = [
  ["id", "Auto-incremented primary key used to identify each application."],
  ["company", "Required company or organisation name."],
  ["role", "Required job title or position being applied for."],
  ["status", "Current stage such as Applied, Interview, Offer, Rejected or On Hold."],
  ["applied_date", "Date the application was submitted, stored in YYYY-MM-DD format."],
  ["link", "Optional URL back to the job listing or application page."],
  ["notes", "Optional context such as recruiter details, follow-up reminders or interview notes."],
];

const backendRoutes = [
  ["GET /", "Loads applications, applies search/status filters and calculates dashboard counts."],
  ["POST /add", "Validates form data and inserts a new application into SQLite."],
  ["POST /edit/<id>", "Updates the selected application record with the latest details and status."],
  ["POST /delete/<id>", "Deletes a selected application using its database ID."],
  ["GET /export", "Reads application records and returns them as a downloadable CSV file."],
];

const technicalDecisions = [
  {
    title: "Flask for the backend",
    text: "Flask keeps the project lightweight while making routing, form handling, templates and HTTP responses easy to understand in one Python codebase.",
  },
  {
    title: "SQLite for storage",
    text: "SQLite requires no separate database server, which makes the tracker easy to run locally while still demonstrating relational tables and SQL queries.",
  },
  {
    title: "Parameterized SQL",
    text: "Search, insert, update and delete operations use query parameters instead of building values directly into SQL statements.",
  },
  {
    title: "Server-rendered workflow",
    text: "Jinja templates keep the browser experience simple: submit a form, let Flask process it, update SQLite and render the latest dashboard state.",
  },
];

const challenges = [
  {
    title: "Combining search and status filters",
    text: "The dashboard builds one SQL query incrementally so keyword search and status filtering can work independently or at the same time.",
  },
  {
    title: "Keeping records useful",
    text: "The schema focuses on the fields needed most during a job search: company, role, stage, date, link and notes.",
  },
  {
    title: "Going beyond basic CRUD",
    text: "Dashboard statistics, status-aware browsing, responsive styling and CSV export make the project more practical than a basic database exercise.",
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
            <div><dt>Tools</dt><dd>Python · Flask · SQLite · Jinja · HTML · CSS</dd></div>
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
              through records and export their application history. It combines a Python backend,
              relational storage and a browser interface in one compact full-stack project.
            </p>
            <h3>Project goal</h3>
            <p>
              Build a practical beginner-friendly Python project that solves a real problem while
              demonstrating full-stack fundamentals, database operations, form handling, query logic
              and clean user-interface design.
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
              The current version is designed as a local single-user tracker. It focuses on the core
              application-management workflow rather than authentication, cloud synchronisation or
              automated job scraping. That keeps the implementation understandable while leaving clear
              paths for future expansion.
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
            <h3>Why this matters</h3>
            <p>
              A job search is a pipeline. Losing track of one application can mean missing an interview,
              sending duplicate applications or failing to follow up at the right time. The tracker turns
              that scattered information into structured records that can be reviewed quickly.
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
            <h3>Core product loop</h3>
            <p>
              Add an application, return to the dashboard, update its status as the hiring process moves
              forward, search or filter when the list grows, and export the data whenever a portable copy
              is needed.
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

            <h3>Primary user tasks</h3>
            <ul>
              <li>Capture a new application immediately after applying.</li>
              <li>See how many applications have reached Applied, Interview and Offer stages.</li>
              <li>Find a company or role quickly without scrolling through every record.</li>
              <li>Update a status when an interview, offer, rejection or hold occurs.</li>
              <li>Keep useful links and notes next to the application they belong to.</li>
              <li>Export the complete history for backup or spreadsheet analysis.</li>
            </ul>
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

            <h3>Database model</h3>
            <div className="study-grid">
              {dataFields.map(([field, description]) => (
                <article className="study-card" key={field}>
                  <h4>{field}</h4>
                  <p>{description}</p>
                </article>
              ))}
            </div>

            <h3>Useful dashboard signals</h3>
            <p>
              Instead of showing only a table of records, the dashboard calculates summary counts for
              all applications plus Applied, Interview and Offer stages. These numbers give a quick view
              of pipeline activity before the user reads individual entries.
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

            <h3>Application lifecycle</h3>
            <ol className="study-flow">
              {[
                ["Capture", "Enter company, role, status, date, job link and any useful notes."],
                ["Validate", "Check required fields and verify the new application date before saving."],
                ["Persist", "Insert the record into the SQLite applications table."],
                ["Review", "Reload the dashboard with the newest record first and updated statistics."],
                ["Progress", "Edit the application as it moves through interview, offer, rejection or hold stages."],
                ["Export", "Create a CSV copy of the tracked application history when needed."],
              ].map(([title, text], index) => (
                <li key={title}>
                  <span>0{index + 1}</span>
                  <div><h4>{title}</h4><p>{text}</p></div>
                </li>
              ))}
            </ol>
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

            <h3>Design priorities</h3>
            <div className="study-grid">
              <article className="study-card">
                <h4>Fast scanning</h4>
                <p>Company, role and status are visually prioritised so the application pipeline can be understood at a glance.</p>
              </article>
              <article className="study-card">
                <h4>Visible actions</h4>
                <p>Add, edit, delete, search, filter and export actions remain close to the records they affect.</p>
              </article>
              <article className="study-card">
                <h4>Responsive structure</h4>
                <p>The layout is designed to stack cleanly on smaller screens without removing important job details.</p>
              </article>
              <article className="study-card">
                <h4>Clear feedback</h4>
                <p>Success and error messages tell the user whether a database action or form validation step completed correctly.</p>
              </article>
            </div>
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

              <div className="project-snapshot mt-6 grid sm:grid-cols-3 gap-3">
                {projectSnapshot.map((item) => (
                  <div key={item.label} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">{item.label}</p>
                    <p className="text-sm text-paper/65 mt-2 text-pretty">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {["Python", "Flask", "SQLite", "SQL", "Jinja", "HTML5", "CSS3", "CSV"].map((tech) => (
                  <span key={tech} className="font-mono text-[11px] ring-1 ring-paper/20 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
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
                  "Flask reads request",
                  "Input is validated",
                  "Parameterized SQL runs",
                  "SQLite commits change",
                  "Dashboard reloads",
                ].map((step, index, steps) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="ring-1 ring-paper/20 px-2 py-1 rounded-md">{step}</span>
                    {index < steps.length - 1 && <span className="text-lime">→</span>}
                  </span>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                Backend routes
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {backendRoutes.map(([route, description]) => (
                  <div key={route} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                    <p className="font-mono text-xs text-lime">{route}</p>
                    <p className="text-sm text-paper/60 mt-2 text-pretty">{description}</p>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                Technical decisions
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {technicalDecisions.map((item) => (
                  <div key={item.title} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                    <p className="font-display font-semibold text-base">{item.title}</p>
                    <p className="text-sm text-paper/60 mt-2 text-pretty">{item.text}</p>
                  </div>
                ))}
              </div>

              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                Development challenges
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {challenges.map((item) => (
                  <div key={item.title} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                    <p className="font-display font-semibold text-base">{item.title}</p>
                    <p className="text-sm text-paper/60 mt-2 text-pretty">{item.text}</p>
                  </div>
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
              This project strengthened my understanding of Flask routing, request handling, HTML forms,
              SQL queries, relational data persistence and CRUD operations. It also showed how backend
              functionality becomes easier to understand when it is presented through a clean, responsive interface.
            </p>

            <h3>Engineering lessons</h3>
            <ul>
              <li>Database schema choices directly affect how simple later queries and UI flows can be.</li>
              <li>Parameterized queries are an important habit even in small learning projects.</li>
              <li>Search and filtering are easier to maintain when one base query is extended with conditions and parameters.</li>
              <li>Validation and visible feedback are part of the product experience, not just backend details.</li>
              <li>Export functionality makes locally stored data more portable and useful outside the application.</li>
            </ul>

            <h3>Current limitations</h3>
            <p>
              The tracker currently runs as a local single-user application. Authentication, cloud storage,
              pagination, reminders and production configuration are outside the current implementation.
              The development secret is also kept in the sample code, so a production deployment should move
              configuration into environment variables and use production-safe server settings.
            </p>

            <h3>What I would improve next</h3>
            <p>
              Add user authentication, consistent server-side validation for create and edit flows,
              interview and follow-up reminders, analytics charts, pagination, a cloud-hosted database and
              deployment so recruiters can use a live demo directly from the portfolio. A later version could
              also add saved job sources, contact tracking and stage-conversion analytics without turning the
              project into an automated scraping tool.
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
