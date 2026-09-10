import { createFileRoute } from "@tanstack/react-router";
import smartGriev from "@/assets/smart-griev.jpg";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import sgLanding from "@/assets/sg-landing.png.asset.json";
import sgAdmin from "@/assets/sg-admin.png.asset.json";
import sgSubmit from "@/assets/sg-submit.png.asset.json";
import sgDetail from "@/assets/sg-detail.png.asset.json";

const GITHUB_URL = "https://github.com/teja1101/smartgrieve";
const LINKEDIN_URL = "https://www.linkedin.com/in/gudavalli-prabhuteja-001b75345";

const skills = [
  ["Front-end", "React.js, JavaScript, HTML5, CSS3, responsive interfaces"],
  ["Back-end", "Django, REST APIs, MySQL, JWT authentication"],
  ["AI / Python", "Python, machine learning, NLP, prompt engineering"],
  ["Tools", "Git, GitHub, API integration, deployment workflows"],
];

const screenshots = [
  { src: sgLanding.url, label: "Role-based landing" },
  { src: sgAdmin.url, label: "Admin analytics" },
  { src: sgSubmit.url, label: "Complaint submission" },
  { src: sgDetail.url, label: "AI routing details" },
];

const certifications = [
  "NPTEL — Introduction to Internet of Things",
  "HP LIFE — Data Science and Analytics",
  "IBM SkillsBuild — Web Development Fundamentals",
  "EduSkills — Cloud Virtual Internship",
  "TCS iON IT — 66.8%",
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gudavalli Prabhu Teja — Front-End React Developer" },
      {
        name: "description",
        content:
          "Portfolio of Gudavalli Prabhu Teja, a B.Tech CSE graduate focused on front-end React development with Python and AI experience.",
      },
      { property: "og:title", content: "Gudavalli Prabhu Teja — Front-End React Developer" },
      {
        property: "og:description",
        content: "React, Python and AI portfolio featuring the SMART-GRIEV project, experience, skills and contact details.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Portfolio() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            Prabhu Teja<span className="text-brand">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-ink/60 md:flex">
            <a href="#about" className="transition-colors hover:text-ink">About</a>
            <a href="#work" className="transition-colors hover:text-ink">Work</a>
            <a href="#experience" className="transition-colors hover:text-ink">Experience</a>
            <a href="#contact" className="transition-colors hover:text-ink">Contact</a>
          </nav>
          <a
            href={resumeAsset.url}
            download="Gudavalli-Prabhu-Teja-Resume.pdf"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
          >
            Résumé ↓
          </a>
        </div>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/40 px-3 py-1.5 text-xs font-medium text-ink/65">
            <span className="size-2 rounded-full bg-lime" />
            Available for fresher front-end opportunities
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-ink/45">
            B.Tech CSE · Front-End React Developer
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            Gudavalli<br className="hidden sm:block" /> Prabhu Teja
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/65 sm:text-xl sm:leading-9">
            I create clean, responsive React interfaces and API-connected products. My background in Python,
            machine learning and AI helps me understand the full product—not just the screen.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-5 py-3 text-sm font-medium transition-colors hover:border-ink/40"
            >
              LinkedIn <Arrow />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-5 py-3 text-sm font-medium transition-colors hover:border-ink/40"
            >
              GitHub <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_2fr] lg:py-24">
          <div>
            <p className="text-sm font-medium text-ink/45">01 / About</p>
          </div>
          <div>
            <h2 className="max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              A CSE graduate focused on simple interfaces, useful products and thoughtful front-end development.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-ink/60">
              I enjoy turning ideas into responsive web experiences using React and JavaScript. I also have hands-on
              exposure to Django, MySQL, Python and machine-learning workflows, which helps me work comfortably across
              APIs, data and UI states.
            </p>

            <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {skills.map(([title, text]) => (
                <div key={title} className="border-t border-ink/10 pt-4">
                  <p className="font-display font-semibold">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/55">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-ink/10 bg-white/25">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-sm font-medium text-ink/45">02 / Featured work</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">SMART-GRIEV</h2>
            </div>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
            >
              View source <Arrow />
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ink">
            <img
              src={smartGriev}
              alt="SMART-GRIEV dashboard"
              className="aspect-[16/8.5] w-full object-cover object-top"
              loading="lazy"
            />
            <div className="grid gap-10 p-6 text-paper sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
              <div>
                <p className="max-w-2xl text-lg leading-8 text-paper/75">
                  An AI-assisted grievance platform where citizens submit complaints, the system classifies them by
                  department and priority, officers manage cases, and users follow progress through status updates.
                </p>
                <p className="mt-5 max-w-2xl text-sm leading-6 text-paper/50">
                  My focus was the React front end: authentication flows, dashboards, complaint forms, filterable data,
                  status views and analytics connected to the backend APIs.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5 border-t border-paper/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div>
                  <p className="font-display text-3xl font-semibold">92.4%</p>
                  <p className="mt-1 text-xs text-paper/45">classification accuracy</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold">3</p>
                  <p className="mt-1 text-xs text-paper/45">role-based portals</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold">6</p>
                  <p className="mt-1 text-xs text-paper/45">departments routed</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-semibold">&lt;2s</p>
                  <p className="mt-1 text-xs text-paper/45">routing response</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {screenshots.map((shot) => (
              <figure key={shot.label} className="overflow-hidden rounded-2xl border border-ink/10 bg-paper">
                <img src={shot.src} alt={shot.label} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
                <figcaption className="px-4 py-3 text-xs text-ink/50">{shot.label}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/50">
            <span>React.js</span><span>JavaScript</span><span>Django REST</span><span>MySQL</span>
            <span>scikit-learn</span><span>NLP</span><span>Gemini API</span><span>JWT</span>
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-ink/10">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_2fr] lg:py-24">
          <div>
            <p className="text-sm font-medium text-ink/45">03 / Experience</p>
          </div>
          <div>
            <div className="grid gap-5 border-b border-ink/10 pb-10 sm:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-2xl font-semibold">Python & ML Intern</h2>
                <p className="mt-1 text-ink/55">Techverra Solutions</p>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-ink/60">
                  Worked with Python programming, data preprocessing, machine-learning workflows, AI model interaction,
                  scripting, testing and output validation.
                </p>
              </div>
              <p className="text-sm text-ink/45">Aug — Sep 2025</p>
            </div>

            <div className="grid gap-12 pt-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-ink/45">Education</p>
                <h3 className="mt-4 font-display text-xl font-semibold">B.Tech — Computer Science and Engineering</h3>
                <p className="mt-2 text-sm leading-6 text-ink/55">
                  Usha Rama College of Engineering and Technology<br />2022 — 2026
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-ink/45">Certifications</p>
                <div className="mt-4 space-y-3">
                  {certifications.map((item) => (
                    <p key={item} className="text-sm leading-6 text-ink/60">{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-ink/10 bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <p className="text-sm font-medium text-paper/40">04 / Contact</p>
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Looking for an opportunity to build useful products.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-paper/55">
                I’m open to fresher front-end and React developer opportunities where I can learn quickly and contribute to real products.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <a href="mailto:pteja0960@gmail.com" className="text-lg font-medium hover:text-lime">pteja0960@gmail.com <Arrow /></a>
              <a href="tel:8247475257" className="text-sm text-paper/55 hover:text-paper">8247475257</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-paper/55 hover:text-paper">LinkedIn <Arrow /></a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-paper/55 hover:text-paper">GitHub <Arrow /></a>
            </div>
          </div>
          <div className="mt-16 border-t border-paper/10 pt-6 text-xs text-paper/35">
            © 2026 Gudavalli Prabhu Teja
          </div>
        </div>
      </section>
    </main>
  );
}
