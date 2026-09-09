// Hand-built SVG diagrams for the SMART-GRIEV case study.
// Colours use currentColor / theme tokens so they work on the dark card.

export function ArchitectureDiagram() {
  const box = "fill-none stroke-current";
  return (
    <svg
      viewBox="0 0 860 360"
      role="img"
      aria-label="SMART-GRIEV architecture: React front end talking to a Django REST API, which uses an NLP classification service, MySQL database and the Gemini API."
      className="w-full h-auto text-paper/70"
    >
      <defs>
        <marker id="arw" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" className="fill-lime" />
        </marker>
      </defs>

      {/* Client column */}
      <text x="20" y="26" className="fill-current font-mono" fontSize="12" opacity="0.6">CLIENT</text>
      <rect x="20" y="40" width="200" height="120" rx="12" className={box} strokeWidth="1.5" opacity="0.35" />
      <rect x="36" y="58" width="168" height="38" rx="8" className="fill-lime/15 stroke-lime" strokeWidth="1.5" />
      <text x="120" y="82" textAnchor="middle" className="fill-current font-mono" fontSize="12">React 18 SPA</text>
      <rect x="36" y="104" width="80" height="38" rx="8" className={box} strokeWidth="1.2" opacity="0.6" />
      <text x="76" y="128" textAnchor="middle" className="fill-current font-mono" fontSize="10">Router</text>
      <rect x="124" y="104" width="80" height="38" rx="8" className={box} strokeWidth="1.2" opacity="0.6" />
      <text x="164" y="128" textAnchor="middle" className="fill-current font-mono" fontSize="10">Axios</text>

      {/* API column */}
      <text x="330" y="26" className="fill-current font-mono" fontSize="12" opacity="0.6">API LAYER</text>
      <rect x="330" y="40" width="200" height="120" rx="12" className={box} strokeWidth="1.5" opacity="0.35" />
      <rect x="346" y="58" width="168" height="38" rx="8" className="fill-lime/15 stroke-lime" strokeWidth="1.5" />
      <text x="430" y="82" textAnchor="middle" className="fill-current font-mono" fontSize="12">Django REST</text>
      <rect x="346" y="104" width="168" height="38" rx="8" className={box} strokeWidth="1.2" opacity="0.6" />
      <text x="430" y="128" textAnchor="middle" className="fill-current font-mono" fontSize="10">JWT · role guard</text>

      {/* Services column */}
      <text x="640" y="26" className="fill-current font-mono" fontSize="12" opacity="0.6">SERVICES</text>
      <rect x="640" y="40" width="200" height="120" rx="12" className={box} strokeWidth="1.5" opacity="0.35" />
      <rect x="656" y="58" width="168" height="38" rx="8" className={box} strokeWidth="1.2" opacity="0.6" />
      <text x="740" y="82" textAnchor="middle" className="fill-current font-mono" fontSize="10">NLP classifier</text>
      <rect x="656" y="104" width="168" height="38" rx="8" className={box} strokeWidth="1.2" opacity="0.6" />
      <text x="740" y="128" textAnchor="middle" className="fill-current font-mono" fontSize="10">Gemini API</text>

      {/* Data */}
      <rect x="330" y="230" width="200" height="60" rx="12" className={box} strokeWidth="1.5" opacity="0.6" />
      <text x="430" y="258" textAnchor="middle" className="fill-current font-mono" fontSize="12">MySQL</text>
      <text x="430" y="276" textAnchor="middle" className="fill-current font-mono" fontSize="10" opacity="0.6">
        complaints · users · logs
      </text>

      <rect x="20" y="230" width="200" height="60" rx="12" className={box} strokeWidth="1.5" opacity="0.6" />
      <text x="120" y="258" textAnchor="middle" className="fill-current font-mono" fontSize="12">Dashboards</text>
      <text x="120" y="276" textAnchor="middle" className="fill-current font-mono" fontSize="10" opacity="0.6">
        citizen · officer · admin
      </text>

      <rect x="640" y="230" width="200" height="60" rx="12" className={box} strokeWidth="1.5" opacity="0.6" />
      <text x="740" y="258" textAnchor="middle" className="fill-current font-mono" fontSize="12">Notifications</text>
      <text x="740" y="276" textAnchor="middle" className="fill-current font-mono" fontSize="10" opacity="0.6">
        status e-mail / in-app
      </text>

      {/* Arrows */}
      <line x1="222" y1="100" x2="326" y2="100" className="stroke-lime" strokeWidth="1.5" markerEnd="url(#arw)" />
      <line x1="532" y1="100" x2="636" y2="100" className="stroke-lime" strokeWidth="1.5" markerEnd="url(#arw)" />
      <line x1="430" y1="162" x2="430" y2="226" className="stroke-lime" strokeWidth="1.5" markerEnd="url(#arw)" />
      <line x1="326" y1="260" x2="224" y2="260" className="stroke-lime" strokeWidth="1.5" markerEnd="url(#arw)" />
      <line x1="534" y1="260" x2="636" y2="260" className="stroke-lime" strokeWidth="1.5" markerEnd="url(#arw)" />
      <text x="252" y="92" className="fill-current font-mono" fontSize="9" opacity="0.5">JSON</text>
      <text x="556" y="92" className="fill-current font-mono" fontSize="9" opacity="0.5">infer</text>
    </svg>
  );
}

export function PipelineDiagram() {
  const steps = [
    { t: "Raw text", s: "citizen complaint" },
    { t: "Clean", s: "stopwords · lemma" },
    { t: "Vectorise", s: "TF-IDF" },
    { t: "Classify", s: "scikit-learn" },
    { t: "Route", s: "dept + priority" },
  ];
  return (
    <svg
      viewBox="0 0 860 130"
      role="img"
      aria-label="Machine learning pipeline: raw complaint text is cleaned, vectorised with TF-IDF, classified with scikit-learn, then routed to a department with a priority."
      className="w-full h-auto text-paper/70"
    >
      <defs>
        <marker id="arw2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 z" className="fill-lime" />
        </marker>
      </defs>
      {steps.map((st, i) => {
        const x = i * 172 + 6;
        return (
          <g key={st.t}>
            <rect
              x={x}
              y="30"
              width="150"
              height="62"
              rx="12"
              className={i === 3 ? "fill-lime/15 stroke-lime" : "fill-none stroke-current"}
              strokeWidth="1.4"
              opacity={i === 3 ? 1 : 0.6}
            />
            <text x={x + 75} y="58" textAnchor="middle" className="fill-current font-mono" fontSize="12">
              {st.t}
            </text>
            <text x={x + 75} y="76" textAnchor="middle" className="fill-current font-mono" fontSize="10" opacity="0.6">
              {st.s}
            </text>
            {i < steps.length - 1 && (
              <line
                x1={x + 152}
                y1="61"
                x2={x + 170}
                y2="61"
                className="stroke-lime"
                strokeWidth="1.5"
                markerEnd="url(#arw2)"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function ComponentTreeDiagram() {
  const rows: Array<[number, string, string]> = [
    [0, "<App />", "router shell"],
    [1, "<AuthProvider />", "JWT context"],
    [2, "<DashboardLayout />", "sidebar + topbar"],
    [3, "<ComplaintForm />", "validated inputs"],
    [3, "<ComplaintTable />", "sort · filter · paginate"],
    [3, "<AnalyticsCharts />", "bar + donut"],
    [3, "<StatusTimeline />", "live progress"],
  ];
  return (
    <div className="font-mono text-[12px] leading-relaxed">
      {rows.map(([depth, name, note]) => (
        <div key={name} className="flex items-center gap-2 py-1" style={{ paddingLeft: depth * 16 }}>
          <span className="text-paper/30">{depth === 0 ? "" : "└─"}</span>
          <span className="text-lime">{name}</span>
          <span className="text-paper/40">— {note}</span>
        </div>
      ))}
    </div>
  );
}
