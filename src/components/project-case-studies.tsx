import smartGriev from "@/assets/smart-griev.jpg";
import sgLanding from "@/assets/sg-landing.png.asset.json";
import sgAdmin from "@/assets/sg-admin.png.asset.json";
import sgSubmit from "@/assets/sg-submit.png.asset.json";
import sgDetail from "@/assets/sg-detail.png.asset.json";
import { ArchitectureDiagram, PipelineDiagram } from "@/components/diagrams";

const GITHUB_URL = "https://github.com/teja1101/smartgrieve";
const DDOS_GITHUB_URL = "https://github.com/teja1101/ddos-attacks-classification-and-xai";


const shots = [
  { src: sgLanding.url, alt: "Smart Griev landing page with role-based sign in portal", cap: "Landing + role sign-in" },
  { src: sgAdmin.url, alt: "Admin dashboard with complaint counts, department distribution and weekly trends", cap: "Admin analytics dashboard" },
  { src: sgSubmit.url, alt: "Citizen complaint submission form with AI analysis enabled", cap: "Citizen complaint form" },
  { src: sgDetail.url, alt: "Complaint detail view showing status, department routing and AI confidence score", cap: "AI routing + confidence" },
];

const projectFeatures = [
  { icon: "◆", t: "Role-based portals", d: "Separate citizen, officer and admin dashboards behind one auth layer." },
  { icon: "▲", t: "AI complaint triage", d: "Text is classified into a department with a confidence score before a human sees it." },
  { icon: "●", t: "Priority scoring", d: "Urgency inferred from wording and category, so critical issues surface first." },
  { icon: "■", t: "Live status timeline", d: "Every state change is logged and shown back to the citizen who filed it." },
  { icon: "◇", t: "Analytics dashboard", d: "Counts, department distribution and weekly trend charts for administrators." },
  { icon: "✦", t: "Secure by design", d: "JWT sessions, guarded routes and server-side permission checks per role." },
];

const challenges = [
  {
    t: "Messy, informal complaint text",
    d: "Citizens write in mixed language and slang. Cleaning, lemmatising and TF-IDF vectorising the text lifted classification accuracy well above the first naive model.",
  },
  {
    t: "Keeping the UI honest about AI",
    d: "Instead of hiding the model, the interface shows the predicted department with its confidence, and lets an officer override it in one click.",
  },
  {
    t: "Dashboards that stay fast",
    d: "Tables are paginated and filtered server-side, charts render from pre-aggregated counts, so the admin view stays responsive as complaints grow.",
  },
];

const cases = {
  smart: {
    title: "SMART-GRIEV",
    subtitle: "A clearer path from public complaint to responsible department.",
    category: "Public services / Web application",
    role: "React frontend development",
    audience: "Citizens, officers & administrators",
    tools: "React · TypeScript · Python · REST APIs",
    github: GITHUB_URL,
    overview: "A public-grievance platform that brings complaint submission, AI-assisted department routing and status tracking into a role-based experience.",
    goal: "Help citizens report issues and follow their progress, while giving officers and administrators the context needed to review and manage complaints.",
    problem: "Manual triage makes ownership unclear. Citizens need useful updates, officers need the right context, and administrators need a view across departments.",
    solution: "Organise each complaint into a structured record, use NLP to assist department and urgency selection, and connect citizen, officer and administrator workflows.",
    next: "/ddos-xai",
    nextTitle: "DDoS Classification & XAI",
  },
  ddos: {
    title: "DDoS Classification & XAI",
    subtitle: "Understanding network threats—not just predicting them.",
    category: "Cybersecurity / Machine learning",
    role: "Machine-learning project",
    audience: "Security analysts & network administrators",
    tools: "Python · Scikit-learn · XGBoost · SHAP",
    github: DDOS_GITHUB_URL,
    overview: "An offline machine-learning pipeline for labelled network traffic, connecting data preparation and model evaluation with explanations of individual predictions.",
    goal: "Distinguish legitimate traffic from attacks and make the reasoning behind a classification easier for an analyst to inspect.",
    problem: "A model can flag suspicious traffic without explaining why. Class imbalance, false alarms and missed attacks also make accuracy alone an incomplete measure.",
    solution: "Prepare labelled ARFF records, compare supervised classifiers with multiple evaluation metrics, and use SHAP to examine global and individual feature contributions.",
    next: "/smart-griev",
    nextTitle: "SMART-GRIEV",
  },
};

export function ProjectCaseStudy({ project }: { project: "smart" | "ddos" }) {
  const item = cases[project];
  return (
    <main className="case-page">
      <header className="case-topbar">
        <a href="/#work">← All projects</a>
        <a href="mailto:pteja0960@gmail.com">Let’s connect ↗</a>
      </header>
      <div className="case-container">
        <header className="case-heading">
          <p className="case-eyebrow">{item.category}</p>
          <h1>{item.title}</h1>
          <p className="case-subtitle">{item.subtitle}</p>
          <dl className="case-facts">
            <div><dt>Focus</dt><dd>{item.role}</dd></div>
            <div><dt>Audience</dt><dd>{item.audience}</dd></div>
            <div><dt>Tools</dt><dd>{item.tools}</dd></div>
            <div><dt>Source</dt><dd><a href={item.github} target="_blank" rel="noopener noreferrer">View GitHub ↗</a></dd></div>
          </dl>
        </header>
        {project === "smart" ? (
          <figure className="case-cover"><img src={smartGriev} alt="SMART-GRIEV interface overview" width={1024} height={576} /></figure>
        ) : (
          <figure className="case-cover case-flow-cover">
            <figcaption>Explainable network-traffic classification</figcaption>
            <ol><li><span>01 / INPUT</span><strong>Traffic records</strong></li><li><span>02 / ANALYSIS</span><strong>Classification</strong></li><li><span>03 / INSIGHT</span><strong>SHAP explanations</strong></li></ol>
          </figure>
        )}
        <nav className="case-jump" aria-label="Case study sections">
          <a href="#overview">Overview</a><a href="#problem">Problem</a><a href="#solution">Solution</a><a href="#process">Process &amp; details</a>
        </nav>
        <section className="case-chapter" id="overview">
          <p className="case-eyebrow">01 / Overview</p>
          <div><h2>About the project</h2><p>{item.overview}</p><h3>Project goal</h3><p>{item.goal}</p></div>
        </section>
        <section className="case-chapter" id="problem">
          <p className="case-eyebrow">02 / Problem</p>
          <div><h2>The challenge</h2><p>{item.problem}</p></div>
        </section>
        <section className="case-chapter" id="solution">
          <p className="case-eyebrow">03 / Solution</p>
          <div><h2>The approach</h2><p>{item.solution}</p></div>
        </section>
        <section className="case-process" id="process">
          <p className="case-eyebrow">04 / Process &amp; implementation</p>
          <h2>Explore the work</h2>
          <p className="case-process-intro">Workflow, technical decisions and project details.</p>
          <div className="case-legacy">
            {project === "smart" ? <SmartDetails /> : <DdosDetails />}
          </div>
        </section>
        <footer className="case-next">
          <span className="case-eyebrow">Next project</span>
          <a href={item.next}>{item.nextTitle} <span aria-hidden="true">↗</span></a>
          <a className="case-back" href="/#work">Back to all projects</a>
        </footer>
      </div>
    </main>
  );
}

function SmartDetails() {
  return (
            <div className="bg-ink text-paper rounded-[min(1.2vw,16px)] ring-1 ring-black/5 overflow-hidden">
              <img
                src={smartGriev}
                alt="SMART-GRIEV dashboard interface showing grievance records"
                width={1024}
                height={576}
                loading="lazy"
                className="project-cover w-full aspect-[16/9] object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="font-display font-semibold text-xl">SMART-GRIEV</p>
                  <span className="font-mono text-[11px] bg-lime text-ink px-2 py-1 rounded-md">FLAGSHIP</span>
                </div>
                <p className="mt-3 text-base text-paper/70 text-pretty max-w-[52ch]">
                  A smart public-grievance platform. Citizens file a complaint in plain language, an
                  NLP model reads it, picks the right department and a priority, and the complaint is
                  routed to an officer — while the citizen watches the status move in real time.
                  I built the full React front end: routing, auth-guarded dashboards, forms with
                  validation, filterable tables and the analytics charts.
                </p>

                <div className="project-snapshot mt-6 grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      label: "Problem",
                      text: "Manual complaint handling is slow, inconsistent and difficult for citizens to track.",
                    },
                    {
                      label: "Solution",
                      text: "An AI-assisted workflow classifies, prioritises and routes each grievance automatically.",
                    },
                    {
                      label: "My contribution",
                      text: "Responsive React screens, role-based journeys, API states, validation, tables and charts.",
                    },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">{item.label}</p>
                      <p className="text-sm text-paper/65 mt-2 text-pretty">{item.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {["React.js", "JavaScript", "CSS", "Django REST", "MySQL", "scikit-learn", "NLP", "Gemini API", "JWT"].map((t) => (
                    <span key={t} className="font-mono text-[11px] ring-1 ring-paper/20 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 bg-lime text-ink py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium hover:bg-paper transition-colors"
                >
                  <span className="font-mono text-xs">{"</>"}</span> View on GitHub
                </a>

                {/* FLOW */}
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                  How it flows
                </p>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                  {[
                    "Citizen files complaint",
                    "NLP classifier",
                    "Department + priority",
                    "Officer assigned",
                    "Status tracked",
                    "Resolved",
                  ].map((step, i, arr) => (
                    <span key={step} className="flex items-center gap-2">
                      <span className="ring-1 ring-paper/20 px-2 py-1 rounded-md">{step}</span>
                      {i < arr.length - 1 && <span className="text-lime">→</span>}
                    </span>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[11px] text-paper/50">
                  92.4% classification accuracy · multi-department routing · JWT + role-based access
                </p>

                {/* SCREENS */}
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                  Screens
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {shots.map((s) => (
                    <figure key={s.src} className="rounded-[min(1vw,12px)] overflow-hidden ring-1 ring-paper/15">
                      <img
                        src={s.src}
                        alt={s.alt}
                        loading="lazy"
                        className="w-full aspect-[16/9] object-cover object-top bg-paper"
                      />
                      <figcaption className="font-mono text-[11px] text-paper/60 px-3 py-2">
                        {s.cap}
                      </figcaption>
                    </figure>
                  ))}
                </div>

                {/* FEATURES */}
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                  What it does
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {projectFeatures.map((f) => (
                    <div key={f.t} className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4">
                      <p className="text-lime font-mono text-sm">{f.icon}</p>
                      <p className="font-display font-semibold text-base mt-1">{f.t}</p>
                      <p className="text-sm text-paper/60 mt-1 text-pretty">{f.d}</p>
                    </div>
                  ))}
                </div>

                {/* ARCHITECTURE */}
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                  System architecture
                </p>
                <div className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4 overflow-x-auto">
                  <ArchitectureDiagram />
                </div>

                {/* PIPELINE */}
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                  AI classification pipeline
                </p>
                <div className="rounded-[min(1vw,12px)] ring-1 ring-paper/15 p-4 overflow-x-auto">
                  <PipelineDiagram />
                </div>


                <section className="ddos-deep-dive" aria-labelledby="smartgriev-details-heading">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">Inside SMART-GRIEV</p>
                  <h3 id="smartgriev-details-heading" className="font-display text-2xl font-semibold mt-2">
                    One complaint. Clear ownership at every step.
                  </h3>
                  <p className="mt-4 text-base text-paper/70 leading-relaxed">
                    SMART-GRIEV connects citizens reporting public-service issues with the officers
                    responsible for resolving them. Its central idea is to combine structured complaint
                    records with AI-assisted routing, so users can see both where an issue belongs
                    and how it is progressing.
                  </p>
                  <div className="ddos-detail-grid">
                    {[
                      {
                        title: "Citizen experience",
                        text: "Citizens describe an issue with a title, description and location. The complaint record includes its department, priority, submission date and latest update, making follow-up more informative than a simple acknowledgement.",
                      },
                      {
                        title: "Officer & admin experience",
                        text: "The React app selects a dashboard according to the signed-in user’s role. The documented workflow gives officers responsibility for assigned complaints, while administrators manage officer accounts and review system-level analytics.",
                      },
                      {
                        title: "Complaint lifecycle",
                        text: "The data model defines Submitted, Assigned, In Progress, Resolved, Closed and Rejected. These statuses distinguish receipt, ownership, active work and final disposition; they are available states, not a rule that every complaint must pass through all six.",
                      },
                      {
                        title: "AI analysis fields",
                        text: "The NLP analysis model carries a predicted department, confidence score, urgency, keywords and sentiment, with optional suggested steps. This gives the interface more context than a category label alone. Confidence indicates model certainty, not proof that routing is correct.",
                      },
                      {
                        title: "Department coverage",
                        text: "The source defines eleven categories: Public Works, Water Supply, Electricity, Transportation, Health, Education, Police, Revenue, Environment, Consumer Affairs and Others. Multi-department routing is also described in the project documentation for issues spanning multiple services.",
                      },
                      {
                        title: "Frontend structure",
                        text: "React and TypeScript separate the landing page and citizen, officer and admin dashboards. The app restores saved user context at startup, shows a loading state, provides dashboard and profile navigation, and clears the saved session when the user signs out.",
                      },
                    ].map((detail) => (
                      <div key={detail.title} className="ddos-detail-panel">
                        <h4>{detail.title}</h4>
                        <p>{detail.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="ddos-detail-panel mt-6">
                    <h4>Example journey: a broken street light</h4>
                    <ol className="list-decimal pl-5 space-y-3 text-base text-paper/70 leading-relaxed">
                      <li>A citizen reports the location and explains the safety concern.</li>
                      <li>The documented NLP workflow identifies the relevant department and returns urgency and confidence information.</li>
                      <li>The complaint is assigned for officer attention and its status can be updated as work progresses.</li>
                      <li>The citizen follows the record, while administrators review complaint volumes and resolution statistics.</li>
                    </ol>
                    <p className="mt-3">Illustrative workflow, not a live complaint or measured result.</p>
                  </div>

                  <div className="ddos-detail-grid">
                    <div className="ddos-detail-panel">
                      <h4>Documented API responsibilities</h4>
                      <ul>
                        <li>Authentication: registration and sign-in.</li>
                        <li>Complaints: submission, role-filtered lists and status updates.</li>
                        <li>Administration: officer creation and department lookup.</li>
                        <li>Analytics: totals, pending and resolved counts, and resolution-time summaries.</li>
                      </ul>
                      <p className="mt-3">
                        The README describes a Django REST backend alongside older backend references.
                        These are documented responsibilities, not an independently verified production deployment.
                      </p>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>My frontend contribution</h4>
                      <p>
                        The frontend work highlighted in this case study covers role-based journeys,
                        responsive dashboard layouts, complaint forms, API-connected tables and
                        analytics views. The app shell demonstrates conditional dashboard rendering,
                        loading-state handling, profile presentation and sign-out behaviour.
                      </p>
                      <p className="mt-3">
                        These responsibilities connect component design with practical state management
                        and the data needed by different users.
                      </p>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>Reliability &amp; security considerations</h4>
                      <p>
                        The documentation describes input validation, password hashing, rate limiting,
                        standard API errors and retry handling. These complement the user-facing flow,
                        but hiding a dashboard is not an access-control boundary: authorization must
                        also be enforced by the backend.
                      </p>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>Future development</h4>
                      <p>
                        The documented roadmap includes multilingual and voice-based complaint entry,
                        email or SMS notifications, live WebSocket updates, PDF reports and geographic
                        heat maps. These remain future enhancements rather than claims of completed features.
                      </p>
                    </div>
                  </div>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center min-h-11 mt-6 text-brand underline underline-offset-4">
                    Explore the SMART-GRIEV source and documentation ↗
                  </a>
                </section>

                {/* CHALLENGES */}
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mt-8 mb-3">
                  Problems I had to solve
                </p>
                <div className="space-y-3">
                  {challenges.map((c) => (
                    <div key={c.t} className="border-l-2 border-lime pl-4">
                      <p className="font-display font-semibold text-base">{c.t}</p>
                      <p className="text-sm text-paper/60 mt-1 text-pretty">{c.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
  );
}

function DdosDetails() {
  return (
      {/* SECOND PROJECT */}
      <div id="ddos-project" className="ddos-section border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 lg:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">05 — Cybersecurity Project</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mt-3 text-balance">
                Detection with an explanation.
              </h2>
            </div>
            <span className="font-mono text-xs text-ink/50">Machine Learning · Network Security · XAI</span>
          </div>

          <article className="ddos-card bg-paper-dim rounded-[min(1.2vw,18px)] ring-1 ring-black/5 overflow-hidden">
            <div className="grid lg:grid-cols-12">
              <div className="ddos-visual lg:col-span-4 bg-ink text-paper p-6 sm:p-8 flex flex-col justify-between min-h-[22rem]">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-lime">
                      Traffic analysis
                    </p>
                    <span className="live-dot" aria-label="Analysis active" />
                  </div>

                  <div className="network-visual mt-9" aria-hidden="true">
                    <span className="network-line line-one" />
                    <span className="network-line line-two" />
                    <span className="network-line line-three" />
                    <span className="network-node node-one" />
                    <span className="network-node node-two" />
                    <span className="network-node node-three" />
                    <span className="network-node node-four" />
                    <span className="network-core">ML</span>
                  </div>

                  <div className="pipeline-code mt-8 font-mono text-sm leading-7 text-paper/65" aria-hidden="true">
                    <p><span className="text-paper/40">01</span> load(network_traffic.arff)</p>
                    <p><span className="text-paper/40">02</span> preprocess + select_features</p>
                    <p className="text-lime"><span className="text-paper/40">03</span> classify_attack()</p>
                    <p><span className="text-paper/40">04</span> evaluate_models()</p>
                    <p className="text-lime"><span className="text-paper/40">05</span> explain_with_shap()</p>
                  </div>
                </div>
                <p className="font-mono text-xs text-paper/40 mt-8">
                  From network flow → trustworthy decision
                </p>
              </div>

              <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-[42rem]">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">Featured ML case study</p>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mt-2 text-balance">
                      DDoS Attack Classification &amp; Explainable AI
                    </h3>
                  </div>
                  <span className="font-mono text-xs bg-lime text-ink px-2.5 py-1.5 rounded-md">
                    ML + SHAP
                  </span>
                </div>

                <p className="mt-5 text-base sm:text-lg text-ink/70 text-pretty max-w-[66ch]">
                  A supervised machine-learning system for distinguishing legitimate traffic from
                  Distributed Denial of Service attacks. It processes a labelled ARFF network-flow
                  dataset, compares classification models and uses SHAP to reveal why traffic was
                  marked normal or malicious—giving security analysts evidence they can act on.
                </p>

                <div className="mt-7 grid sm:grid-cols-2 gap-3">
                  {[
                    {
                      n: "01",
                      title: "Prepare the data",
                      text: "Clean missing values, encode categorical fields, scale numerical features and inspect class balance.",
                    },
                    {
                      n: "02",
                      title: "Train & compare",
                      text: "Evaluate Random Forest, XGBoost, Decision Tree and Logistic Regression on unseen traffic.",
                    },
                    {
                      n: "03",
                      title: "Measure reliability",
                      text: "Compare accuracy, precision, recall, F1-score, ROC-AUC and the confusion matrix—not accuracy alone.",
                    },
                    {
                      n: "04",
                      title: "Explain predictions",
                      text: "Use SHAP global and local views to show which flow features push each decision toward an attack class.",
                    },
                  ].map((step) => (
                    <div key={step.n} className="process-card rounded-[min(1vw,12px)] bg-paper ring-1 ring-ink/10 p-4 sm:p-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-brand">{step.n}</span>
                        <p className="font-display font-semibold">{step.title}</p>
                      </div>
                      <p className="text-sm text-ink/65 mt-2 text-pretty">{step.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/50">Project pipeline</p>
                  <div className="ddos-pipeline mt-3 flex flex-wrap items-center gap-2 font-mono text-xs">
                    {[
                      "ARFF dataset",
                      "EDA + cleaning",
                      "Feature engineering",
                      "Model comparison",
                      "Performance metrics",
                      "SHAP insights",
                    ].map((step, index, items) => (
                      <span key={step} className="flex items-center gap-2">
                        <span className="pipeline-pill ring-1 ring-ink/15 px-2.5 py-1.5 rounded-md">{step}</span>
                        {index < items.length - 1 && <span className="text-brand" aria-hidden="true">→</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-3 gap-3">
                  {[
                    { title: "Transparent", text: "Feature-level reasoning instead of unexplained alerts." },
                    { title: "Actionable", text: "Insights help analysts investigate suspicious traffic faster." },
                    { title: "Scalable", text: "A reusable pipeline for large labelled network datasets." },
                  ].map((outcome) => (
                    <div key={outcome.title} className="outcome-card border-l-2 border-brand pl-4 py-1">
                      <p className="font-display font-semibold">{outcome.title}</p>
                      <p className="text-sm text-ink/60 mt-1">{outcome.text}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-8">
                  {[
                    "Python",
                    "Pandas",
                    "NumPy",
                    "Scikit-learn",
                    "Random Forest",
                    "XGBoost",
                    "SHAP",
                    "Matplotlib",
                    "Seaborn",
                    "ARFF",
                  ].map((tool) => (
                    <span key={tool} className="tech-chip font-mono text-xs ring-1 ring-ink/15 px-2.5 py-1 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>


                <section className="ddos-deep-dive" aria-labelledby="ddos-deep-heading">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand">Technical deep dive</p>
                  <h3 id="ddos-deep-heading" className="font-display text-2xl font-semibold mt-2">
                    From raw traffic to an explainable decision
                  </h3>
                  <div className="ddos-depth-layout">
                    <div className="ddos-detail-panel">
                      <h4>The challenge</h4>
                      <p>
                        DDoS attacks overwhelm services with traffic, but an alert alone does not
                        explain what made a flow suspicious. This project brings classification
                        and interpretation together: identify potentially malicious traffic, then
                        expose the features behind the model decision for analyst review.
                      </p>
                      <p className="mt-3">
                        The documented workflow uses labelled ARFF records and an offline learning
                        pipeline. It is a detection and analysis project, not an automatic traffic-blocking service.
                      </p>
                    </div>
                    <figure>
                      <figcaption className="font-mono text-xs uppercase tracking-[0.15em] text-brand mb-3">
                        Three processing layers
                      </figcaption>
                      <ol className="ddos-depth-stack">
                        <li><strong>01 / Data layer</strong><span>ARFF records, cleaning, encoding and feature preparation</span></li>
                        <li><strong>02 / Learning layer</strong><span>Train classifiers and compare held-out predictions</span></li>
                        <li><strong>03 / Explanation layer</strong><span>Inspect SHAP feature contributions and review results</span></li>
                      </ol>
                    </figure>
                  </div>
                  <div className="ddos-detail-grid">
                    <div className="ddos-detail-panel">
                      <h4>Data preparation</h4>
                      <ul>
                        <li>Inspect the distribution of normal and attack labels and look for missing or inconsistent values.</li>
                        <li>Encode categorical fields and scale numerical inputs where the model requires it.</li>
                        <li>Examine network-flow attributes such as duration, packet length and byte rate.</li>
                        <li>Separate training and evaluation data; fit preprocessing on the training partition to avoid leaking test information.</li>
                      </ul>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>Why compare models?</h4>
                      <p>
                        Random Forest combines multiple decision trees, while XGBoost builds a sequence
                        of trees that correct earlier errors. The documentation also considers
                        Decision Tree and Logistic Regression as baselines.
                      </p>
                      <p className="mt-3">
                        Comparison should account for missed attacks, false alarms and computational
                        cost—not just the highest overall accuracy.
                      </p>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>How evaluation is interpreted</h4>
                      <dl className="ddos-metrics">
                        <div><dt>Precision</dt><dd>How many flagged flows are actually attacks?</dd></div>
                        <div><dt>Recall</dt><dd>How many labelled attacks does the classifier detect?</dd></div>
                        <div><dt>F1-score</dt><dd>A combined view of precision and recall.</dd></div>
                        <div><dt>Confusion matrix</dt><dd>Shows correct predictions, false alarms and missed attacks by class.</dd></div>
                      </dl>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>What SHAP adds</h4>
                      <p>
                        Global explanations summarise which features most influence the model across
                        the dataset. Local explanations break down an individual prediction into
                        feature contributions, showing what pushed it toward or away from a class.
                      </p>
                      <p className="mt-3">
                        Summary and force plots make those contributions easier to inspect.
                        These explanations describe model behaviour; they do not prove that a feature
                        caused an attack or that every alert is correct.
                      </p>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>Engineering considerations</h4>
                      <ul>
                        <li>Class imbalance can hide weak attack detection behind strong overall accuracy.</li>
                        <li>Large ARFF files require attention to memory use during loading and preprocessing.</li>
                        <li>SHAP analysis adds computation, so explanation cost matters alongside prediction speed.</li>
                      </ul>
                    </div>
                    <div className="ddos-detail-panel">
                      <h4>Limitations &amp; future scope</h4>
                      <p>
                        Performance on a labelled dataset does not guarantee the same results on a
                        live network or unseen attack patterns.
                      </p>
                      <p className="mt-3">
                        Potential next steps include live-flow ingestion, drift monitoring,
                        an analyst dashboard and validation on additional datasets.
                        These are future extensions, not claims of deployed functionality.
                      </p>
                    </div>
                  </div>
                </section>

                <a
                  href={DDOS_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View DDoS Attack Classification and Explainable AI on GitHub"
                  className="shine-button mt-7 inline-flex items-center justify-center gap-2 bg-brand text-ink py-3 px-5 rounded-[min(1vw,12px)] text-sm font-semibold hover:bg-ink transition-colors"
                >
                  <span className="font-mono text-xs">{"</>"}</span> View complete project on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>


  );
}
