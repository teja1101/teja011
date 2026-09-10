import { createFileRoute } from "@tanstack/react-router";
import smartGriev from "@/assets/smart-griev.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import sgLanding from "@/assets/sg-landing.png.asset.json";
import sgAdmin from "@/assets/sg-admin.png.asset.json";
import sgSubmit from "@/assets/sg-submit.png.asset.json";
import sgDetail from "@/assets/sg-detail.png.asset.json";
import { ArchitectureDiagram, PipelineDiagram, ComponentTreeDiagram } from "@/components/diagrams";

const GITHUB_URL = "https://github.com/teja1101/smartgrieve";
const DDOS_GITHUB_URL = "https://github.com/teja1101/ddos-attacks-classification-and-xai";

const shots = [
  { src: sgLanding.url, alt: "Smart Griev landing page with role-based sign in portal", cap: "Landing + role sign-in" },
  { src: sgAdmin.url, alt: "Admin dashboard with complaint counts, department distribution and weekly trends", cap: "Admin analytics dashboard" },
  { src: sgSubmit.url, alt: "Citizen complaint submission form with AI analysis enabled", cap: "Citizen complaint form" },
  { src: sgDetail.url, alt: "Complaint detail view showing status, department routing and AI confidence score", cap: "AI routing + confidence" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gudavalli Prabhu Teja — Front-End React & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Gudavalli Prabhu Teja — front-end developer building React interfaces, plus Python, machine learning and prompt engineering. Projects, diagrams, skills and contact.",
      },
      { property: "og:title", content: "Gudavalli Prabhu Teja — Front-End React & AI Developer" },
      {
        property: "og:description",
        content:
          "React front-end work, the SMART-GRIEV case study with architecture diagrams, Techverra internship, skills and certifications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skillGroups = [
  {
    title: "Front-End",
    sub: "react · ui engineering",
    tags: [
      { label: "React.js", accent: true },
      { label: "JavaScript ES6+", accent: false },
      { label: "HTML5 / CSS3", accent: false },
      { label: "Responsive UI", accent: false },
      { label: "REST APIs", accent: false },
    ],
  },
  {
    title: "Python",
    sub: "core · scripting",
    tags: [
      { label: "Python", accent: false },
      { label: "Machine Learning", accent: false },
      { label: "Data Preprocessing", accent: false },
    ],
  },
  {
    title: "Back-End & Data",
    sub: "django · sql",
    tags: [
      { label: "Django", accent: false },
      { label: "MySQL", accent: false },
      { label: "JWT Auth", accent: false },
    ],
  },
  {
    title: "AI & Tooling",
    sub: "prompt · office",
    tags: [
      { label: "Prompt Eng.", accent: true },
      { label: "Gemini API", accent: false },
      { label: "Git / GitHub", accent: false },
    ],
  },
];

const frontendBars = [
  { label: "React components & hooks", pct: 88 },
  { label: "Responsive CSS / layout", pct: 85 },
  { label: "State & data fetching", pct: 78 },
  { label: "UI accessibility basics", pct: 72 },
  { label: "Charts & data visualisation", pct: 75 },
];

const buildPrinciples = [
  { n: "01", t: "Component-first", d: "Small, reusable pieces with clear props instead of one giant page file." },
  { n: "02", t: "Mobile-first CSS", d: "Layouts start at 360px and scale up with fluid grid and clamp-based type." },
  { n: "03", t: "Real API state", d: "Loading, empty and error states designed alongside the happy path." },
  { n: "04", t: "Fast by default", d: "Lazy images, code-split routes and no blocking work on first paint." },
];

const projectFeatures = [
  { icon: "◆", t: "Role-based portals", d: "Separate citizen, officer and admin dashboards behind one auth layer." },
  { icon: "▲", t: "AI complaint triage", d: "Text is classified into a department with a confidence score before a human sees it." },
  { icon: "●", t: "Priority scoring", d: "Urgency inferred from wording and category, so critical issues surface first." },
  { icon: "■", t: "Live status timeline", d: "Every state change is logged and shown back to the citizen who filed it." },
  { icon: "◇", t: "Analytics dashboard", d: "Counts, department distribution and weekly trend charts for administrators." },
  { icon: "✦", t: "Secure by design", d: "JWT sessions, guarded routes and server-side permission checks per role." },
];

const projectStats = [
  { k: "92.4%", v: "classification accuracy" },
  { k: "6", v: "departments routed" },
  { k: "3", v: "user roles" },
  { k: "<2s", v: "complaint to routing" },
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

const education = [
  { years: "2022–26", title: "B.Tech — Computer Science and Engineering (CSE)", note: "Usha Rama College of Engineering and Technology" },
  { years: "2020–22", title: "Intermediate — Board of Intermediate Education AP", note: "Sri Chaitanya Junior College, Vijayawada · 60%" },
  { years: "2019–20", title: "Secondary — Board of Secondary Education AP", note: "V.S St John's HR. Sec. School · 78%" },
];

const certifications = [
  "NPTEL — Introduction to Internet of Things",
  "HP LIFE — Data Science and Analytics",
  "IBM SkillsBuild — Web Development Fundamentals",
  "EduSkills — Cloud Virtual Internship",
  "TCS iON IT — 66.8%",
];

function Index() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      {/* AVAILABILITY BANNER */}
      <div className="bg-lime text-ink">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-2 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-ink/50 animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-ink" />
          </span>
          Available for work — front-end / React developer &amp; AI / Python roles
        </div>
      </div>

      {/* NAV */}
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-4 flex items-center justify-between">
          <span className="font-display text-lg font-semibold tracking-tight">
            GPT<span className="text-brand">.</span>
          </span>
          <nav className="font-mono text-[11px] uppercase tracking-[0.18em] hidden md:flex gap-6">
            <a href="#work" className="hover:text-brand transition-colors">Work</a>
            <a href="#frontend" className="hover:text-brand transition-colors">Front-end</a>
            <a href="#skills" className="hover:text-brand transition-colors">Skills</a>
            <a href="#exp" className="hover:text-brand transition-colors">Experience</a>
            <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
          </nav>
          <a
            href="mailto:pteja0960@gmail.com"
            className="font-mono text-[11px] uppercase tracking-[0.18em] bg-ink text-paper px-3 py-2 rounded-[min(1vw,12px)] hover:bg-brand transition-colors"
          >
            Hire me
          </a>
        </div>
      </div>

      {/* HERO */}
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50 mb-5">
              B.Tech CSE · Front-End React Developer · AI &amp; Python
            </p>
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl font-semibold leading-none tracking-tight text-balance max-w-[20ch]">
              Gudavalli Prabhu Teja
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink/70 text-pretty max-w-[52ch]">
              I build front-ends in React — component-driven interfaces, responsive layouts and
              dashboards wired to real APIs — backed by Python, machine learning and prompt
              engineering on the server side.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
              {["React", "JavaScript", "HTML/CSS", "REST", "Django", "Python", "MySQL"].map((t) => (
                <span key={t} className="ring-1 ring-ink/15 bg-paper-dim px-2 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 items-center">
              <a
                href="mailto:pteja0960@gmail.com"
                className="inline-flex items-center gap-2 bg-brand text-paper py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium hover:bg-ink transition-colors"
              >
                <span className="font-mono text-xs">✉</span> pteja0960@gmail.com
              </a>
              <a
                href="tel:8247475257"
                className="inline-flex items-center gap-2 py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium ring-1 ring-ink/20 hover:ring-ink transition-colors"
              >
                <span className="font-mono text-xs">✆</span> 8247475257
              </a>
              <a
                href={resumeAsset.url}
                download="Gudavalli-Prabhu-Teja-Resume.pdf"
                className="inline-flex items-center gap-2 py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium bg-ink text-paper hover:bg-brand transition-colors"
              >
                <span className="font-mono text-xs">↓</span> Download résumé
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium ring-1 ring-ink/20 hover:ring-ink transition-colors"
              >
                <span className="font-mono text-xs">{"</>"}</span> GitHub
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-ink text-paper rounded-[min(1.2vw,16px)] ring-1 ring-black/5 overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-paper/10">
                <span className="size-2.5 rounded-full bg-lime/80" />
                <span className="size-2.5 rounded-full bg-paper/40" />
                <span className="size-2.5 rounded-full bg-paper/40" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40 ml-3">
                  prabhu@dev:~
                </span>
              </div>
              <div className="font-mono text-[13px] leading-relaxed px-4 py-5">
                <p className="text-paper/50">$ whoami</p>
                <p>Gudavalli Prabhu Teja</p>
                <p className="text-paper/50 mt-3">$ cat focus.txt</p>
                <p>Python · Machine Learning · Prompt Engineering</p>
                <p className="text-paper/50 mt-3">$ python --version</p>
                <p className="text-lime">3.12.4</p>
                <p className="text-paper/50 mt-3">$ status</p>
                <p>Intern @ Techverra Solutions · Aug–Sep 2025</p>
                <p className="text-paper/50 mt-3">$ ./load project</p>
                <p>
                  SMART-GRIEV <span className="text-paper/40">▲ online</span>
                </p>
                <p className="text-paper/50 mt-3">
                  $ <span className="inline-block size-3.5 bg-lime align-middle" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OBJECTIVE */}
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">01 — Objective</p>
          </div>
          <div className="lg:col-span-9">
            <p className="font-display text-2xl sm:text-3xl font-medium leading-tight tracking-tight text-balance max-w-[40ch]">
              Looking for a front-end developer role — building React interfaces people can actually
              use, with AI and Python behind them.
            </p>
            <p className="mt-4 text-base text-ink/70 text-pretty max-w-[60ch]">
              B.Tech Computer Science and Engineering (CSE) student. I write component-driven React, responsive CSS
              and API-connected dashboards, and I understand the back end I'm consuming: Django REST,
              MySQL and machine-learning services I've built myself.
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {projectStats.map((s) => (
                <div key={s.k} className="bg-paper-dim rounded-[min(1vw,12px)] ring-1 ring-black/5 p-4">
                  <p className="font-display text-2xl font-semibold tracking-tight">{s.k}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink/50 mt-1">
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div id="skills" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
          <div className="flex items-baseline justify-between mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">02 — Skills</p>
            <span className="font-mono text-[11px] text-ink/40">grouped by domain</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((g) => (
              <div key={g.title} className="bg-paper-dim rounded-[min(1vw,12px)] ring-1 ring-black/5 p-5">
                <p className="font-display font-semibold text-lg">{g.title}</p>
                <p className="font-mono text-[11px] text-ink/50 mt-1">{g.sub}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {g.tags.map((t) => (
                    <span
                      key={t.label}
                      className={`font-mono text-[11px] text-paper px-2 py-1 rounded-md ${t.accent ? "bg-brand" : "bg-ink"}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FRONT-END CRAFT */}
      <div id="frontend" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
          <div className="flex items-baseline justify-between mb-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
              02b — Front-end craft
            </p>
            <span className="font-mono text-[11px] text-ink/40">how I build UI</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {frontendBars.map((b) => (
                  <div key={b.label}>
                    <div className="flex items-baseline justify-between font-mono text-[11px] text-ink/60">
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="mt-1.5 h-2 rounded-full bg-ink/10 overflow-hidden">
                      <div className="h-full rounded-full bg-brand" style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {buildPrinciples.map((p) => (
                <div key={p.n} className="bg-paper-dim rounded-[min(1vw,12px)] ring-1 ring-black/5 p-5">
                  <p className="font-mono text-[11px] text-brand">{p.n}</p>
                  <p className="font-display font-semibold text-base mt-1">{p.t}</p>
                  <p className="text-sm text-ink/65 mt-2 text-pretty">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-ink text-paper rounded-[min(1.2vw,16px)] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-4">
              Component tree — SMART-GRIEV front end
            </p>
            <ComponentTreeDiagram />
          </div>
        </div>
      </div>

      {/* EXPERIENCE + PROJECT */}
      <div id="exp" className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50 mb-6">
              03 — Experience
            </p>
            <div className="border-l-2 border-ink pl-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand">Aug – Sep 2025</p>
              <p className="font-display font-semibold text-lg mt-1">Techverra Solutions</p>
              <p className="font-mono text-[12px] text-ink/50 mt-1">Python &amp; ML Intern</p>
              <p className="mt-3 text-base text-ink/70 text-pretty">
                Hands-on internship in Python programming and machine learning: data preprocessing,
                AI model interaction, scripting, diffusion models, testing and AI output validation.
              </p>
            </div>
          </div>

          <div id="work" className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50 mb-6">
              04 — Featured Project
            </p>
            <div className="bg-ink text-paper rounded-[min(1.2vw,16px)] ring-1 ring-black/5 overflow-hidden">
              <img
                src={smartGriev}
                alt="SMART-GRIEV dashboard interface showing grievance records"
                width={1024}
                height={576}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover"
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
          </div>
        </div>
      </div>

      {/* SECOND PROJECT */}
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50">
              05 — More Work
            </p>
          </div>

          <div className="lg:col-span-9">
            <article className="bg-paper-dim rounded-[min(1.2vw,16px)] ring-1 ring-black/5 overflow-hidden">
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-4 bg-ink text-paper p-6 flex flex-col justify-between min-h-64">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-lime">
                      Cybersecurity · Machine Learning
                    </p>
                    <div className="mt-8 font-mono text-sm leading-7 text-paper/70" aria-hidden="true">
                      <p>network_traffic.arff</p>
                      <p className="text-lime">→ preprocess()</p>
                      <p>→ classify_attack()</p>
                      <p className="text-lime">→ explain_with_shap()</p>
                    </div>
                  </div>
                  <p className="font-mono text-[11px] text-paper/40 mt-8">
                    Detection you can explain.
                  </p>
                </div>

                <div className="md:col-span-8 p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
                      DDoS Attack Classification &amp; Explainable AI
                    </h2>
                    <span className="font-mono text-[11px] bg-lime text-ink px-2 py-1 rounded-md">
                      ML + XAI
                    </span>
                  </div>

                  <p className="mt-4 text-base text-ink/70 text-pretty max-w-[62ch]">
                    A machine-learning pipeline that classifies normal and malicious network traffic,
                    evaluates DDoS detection performance, and uses SHAP explanations to show which
                    traffic features influenced each prediction. The project combines accurate
                    intrusion detection with transparent, analyst-friendly results.
                  </p>

                  <div className="mt-6 grid sm:grid-cols-3 gap-3">
                    {[
                      { k: "01", v: "Preprocess ARFF network-flow data" },
                      { k: "02", v: "Compare classification models" },
                      { k: "03", v: "Explain predictions with SHAP" },
                    ].map((item) => (
                      <div key={item.k} className="rounded-[min(1vw,10px)] bg-paper ring-1 ring-ink/10 p-4">
                        <p className="font-mono text-[11px] text-brand">{item.k}</p>
                        <p className="text-sm text-ink/70 mt-1">{item.v}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-6">
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
                    ].map((tool) => (
                      <span key={tool} className="font-mono text-[11px] ring-1 ring-ink/15 px-2 py-1 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href={DDOS_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View DDoS Attack Classification and Explainable AI on GitHub"
                    className="mt-6 inline-flex items-center gap-2 bg-ink text-paper py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium hover:bg-brand transition-colors"
                  >
                    <span className="font-mono text-xs">{"</>"}</span> View project on GitHub
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* EDUCATION + CERTS */}
      <div className="border-b border-ink/10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50 mb-6">
              06 — Education
            </p>
            <div className="space-y-1">
              {education.map((e, i) => (
                <div
                  key={e.title}
                  className={`flex items-start gap-4 py-3 ${i < education.length - 1 ? "border-b border-ink/10" : ""}`}
                >
                  <span
                    className={`font-mono text-[12px] w-24 shrink-0 ${i === 0 ? "text-brand" : "text-ink/60"}`}
                  >
                    {e.years}
                  </span>
                  <div>
                    <p className="font-display font-medium text-base">{e.title}</p>
                    <p className="font-mono text-[11px] text-ink/50">{e.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/50 mb-6">
              07 — Certifications
            </p>
            <ul className="space-y-2">
              {certifications.map((c, i) => (
                <li
                  key={c}
                  className="flex items-center gap-3 bg-paper-dim rounded-[min(1vw,10px)] ring-1 ring-black/5 px-4 py-3"
                >
                  <span className="font-mono text-[11px] text-brand shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact" className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-5">
            08 — Contact
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-balance max-w-[24ch] mx-auto">
            Let's build something that runs.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:pteja0960@gmail.com"
              className="inline-flex items-center gap-2 bg-lime text-ink py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium hover:bg-paper transition-colors"
            >
              <span className="font-mono text-xs">✉</span> pteja0960@gmail.com
            </a>
            <a
              href="tel:8247475257"
              className="inline-flex items-center gap-2 py-2 pr-4 pl-3 rounded-[min(1vw,12px)] text-sm font-medium ring-1 ring-paper/25 hover:ring-paper transition-colors"
            >
              <span className="font-mono text-xs">✆</span> 8247475257
            </a>
          </div>
          <p className="font-mono text-[11px] text-paper/40 mt-14">
            © 2026 Gudavalli Prabhu Teja
          </p>
        </div>
      </div>
    </div>
  );
}