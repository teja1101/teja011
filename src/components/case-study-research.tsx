import type { ReactNode } from "react";

type Pair = readonly [string, string];
const research = {
  smart: {
    industry: "Public-service technology", applications: "Citizen, officer and administrator web portals",
    responsibility: "Frontend scope: role-based React journeys, complaint forms, loading and error states, dashboard presentation and API integration. Backend and NLP behaviour are described separately as documented system responsibilities.",
    intent: "Make ownership and progress visible without asking citizens to understand the department structure.",
    tasks: ["Citizen: describe an issue, provide its location and follow its status.", "Officer: review assigned records, assess routing and update progress.", "Administrator: review department workload and manage officer accounts."],
    success: ["A complaint can be submitted with useful context.", "Its department and current status are understandable.", "Role-specific views expose the information each user needs."],
    questions: ["What information do you need before you trust that a complaint has been received?", "How do you currently find the department responsible for an issue?", "When would an officer need to correct an automated routing suggestion?"],
    metrics: [["Submission completion", "Observe whether users can finish the form without assistance."], ["Time to find status", "Measure how quickly citizens locate the latest update."], ["Routing quality", "Compare suggested departments with reviewed labels; inspect mistakes by category."]],
    comparison: [["Manual hand-off", "Flexible human judgement", "Ownership and updates can be difficult to follow."], ["Fixed-category form", "Predictable routing rules", "Citizens must already know the correct category."], ["NLP-assisted triage", "Uses the complaint description", "Requires review when language or confidence is ambiguous."]],
    personas: [["Citizen", "Report a local issue and know who is handling it.", "Unclear categories and missing progress information."], ["Department officer", "Find actionable complaints with enough context.", "Misrouted records and incomplete descriptions."], ["Administrator", "Understand workload across departments.", "Fragmented records and unclear responsibility."]],
    empathy: [["Says", "Needs an acknowledgement and a useful update."], ["Thinks", "Wonders whether the correct department has received the issue."], ["Does", "Describes the problem, checks status and follows up."], ["Feels", "May feel uncertain while waiting; clear ownership can reduce that uncertainty."]],
    sitemap: [["Citizen portal", "Dashboard", "Submit complaint", "Complaint detail", "Profile"], ["Officer portal", "Assigned complaints", "Complaint detail", "Status update", "Profile"], ["Admin portal", "Analytics", "Officer management", "Department overview", "Profile"]],
    information: [["Complaint identity", "ID, title, description and location"], ["Ownership", "User, department and assigned workflow"], ["Progress", "Status, priority and update dates"], ["Analysis context", "Predicted department, confidence, urgency and keywords"]],
    mindmap: [["People", "Citizen · Officer · Administrator"], ["Complaint", "Description · Location · Attachments"], ["Review", "Department · Priority · Confidence"], ["Follow-through", "Status · Dates · Analytics"]],
    flow: [["Submit", "Enter a title, description and location."], ["Check", "Missing information? Correct the form before continuing."], ["Route", "Use the documented NLP suggestion; review questionable routing."], ["Work", "An officer assesses the record and updates its status."], ["Follow up", "The citizen reads the latest state; resolution or rejection closes the relevant path."]],
    findings: "The available app shell and types establish three roles, structured complaint records and explicit status values. They support role-specific navigation, but do not establish interview findings or measured usability improvements.",
    design: "Prioritise readable complaint text, explicit status labels and visible routing context. Do not use colour alone to communicate priority, and keep analysis confidence separate from confirmed department ownership.",
    outcome: "The case study presents the frontend structure, supplied interface screenshots and documented grievance workflow. Independent user-testing results and a verified production rollout are not available here.",
  },
  ddos: {
    industry: "Cybersecurity research", applications: "Offline data preparation, model evaluation and explanation workflow",
    responsibility: "Project scope: labelled traffic preparation, supervised model comparison, evaluation and SHAP interpretation. Individual team ownership and dates have not been supplied, so this case study does not assign additional personal responsibilities.",
    intent: "Make traffic classification inspectable: show what was predicted, how it was evaluated and which features influenced the model.",
    tasks: ["Researcher: prepare labelled records and compare model behaviour.", "Analyst: inspect false alarms, missed attacks and feature contributions.", "Network administrator: understand the limits before considering operational use."],
    success: ["Evaluation keeps held-out data separate from training.", "Metrics expose both false alarms and missed attacks.", "Explanations are tied to a model and prediction, not presented as proof of an attack."],
    questions: ["What evidence is needed before acting on a suspicious traffic classification?", "Which is more costly in this setting: a false alarm or a missed attack?", "What makes a feature-contribution explanation understandable to an analyst?"],
    metrics: [["Precision and recall", "Evaluate false-alarm quality and attack coverage together."], ["F1 and confusion matrix", "Compare performance by class rather than relying on overall accuracy."], ["Runtime and explanation cost", "Measure memory, inference time and SHAP overhead on a stated environment."]],
    comparison: [["Rule-based review", "Explicit decision rules", "Rules need maintenance as patterns change."], ["Classifier alone", "Learns patterns from labelled records", "A predicted class does not explain its reasoning."], ["Classifier with SHAP", "Adds global and per-record contributions", "Explanations describe the model, not causal certainty."]],
    personas: [["Security analyst", "Inspect a flagged record and the evidence behind it.", "Opaque predictions and too many false positives."], ["ML researcher", "Compare models reproducibly on held-out data.", "Leakage, imbalance and inconsistent preprocessing."], ["Network administrator", "Judge whether an offline result transfers to real traffic.", "Dataset drift and untested operational assumptions."]],
    empathy: [["Says", "Needs to understand why a record was flagged."], ["Thinks", "Questions whether the model is reacting to a useful signal or a dataset shortcut."], ["Does", "Reviews predictions, class errors and feature contributions."], ["Feels", "May be cautious about acting on an unexplained alert."]],
    sitemap: [["Data workspace", "ARFF input", "Schema and labels", "Cleaning", "Train/test partitions"], ["Evaluation workspace", "Candidate models", "Predictions", "Metrics", "Confusion matrix"], ["Explanation workspace", "Selected model", "Global summary", "Record explanation", "Limitations"]],
    information: [["Input context", "Feature schema, class labels and preprocessing"], ["Experiment context", "Model, partition strategy and parameters"], ["Evaluation evidence", "Predictions, class metrics and error counts"], ["Interpretation", "Global importance and local feature contributions"]],
    mindmap: [["Data quality", "Missing values · Labels · Imbalance"], ["Learning", "Baselines · Random Forest · XGBoost"], ["Evaluation", "Precision · Recall · F1 · Error analysis"], ["Trust", "SHAP · Limitations · Human review"]],
    flow: [["Inspect data", "Check schema, missing values and label distribution."], ["Prepare", "Split records and fit preprocessing on training data only."], ["Compare", "Evaluate candidate models on held-out records."], ["Review errors", "Inspect false positives and false negatives; revisit training choices without tuning on the final test set."], ["Explain", "Inspect global and local SHAP contributions alongside the prediction."]],
    findings: "The supplied documentation describes an offline ARFF-to-classification-to-SHAP pipeline. It motivates transparent evaluation; it does not establish a deployed analyst interface, user interviews or validated live-network performance.",
    design: "Keep the predicted class, evaluation context and explanation distinct. Pair every plot with a plain-language interpretation and make limitations visible alongside the evidence.",
    outcome: "The documented deliverable is an offline classification and explanation workflow. No unverified benchmark scores, fabricated SHAP plots or claims of live intrusion prevention are included.",
  },
};

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return <section id={id} className="study-section"><header><p className="case-eyebrow">{label}</p><h2>{title}</h2></header>{children}</section>;
}
function Cards({ rows }: { rows: readonly Pair[] }) {
  return <div className="study-grid">{rows.map(([title, text]) => <article className="study-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>;
}

export function CaseStudyMetadata({ project }: { project: "smart" | "ddos" }) {
  const d = research[project];
  return <div className="study-metadata"><dl>
    <div><dt>Industry</dt><dd>{d.industry}</dd></div>
    <div><dt>Applications</dt><dd>{d.applications}</dd></div>
    <div><dt>Timeline</dt><dd>Project dates not supplied.</dd></div>
  </dl><h3>Roles &amp; responsibilities</h3><p>{d.responsibility}</p></div>;
}

export function CaseStudyResearch({ project }: { project: "smart" | "ddos" }) {
  const d = research[project];
  const smart = project === "smart";
  return <div className="study-expansion">
    <Section id="strategy" label="04 / Design strategy" title="Define what matters.">
      <p className="study-lead">{d.intent}</p>
      <div className="study-grid">
        <article className="study-card"><h3>Target audience &amp; general tasks</h3><ul>{d.tasks.map(t => <li key={t}>{t}</li>)}</ul></article>
        <article className="study-card"><h3>Success factors</h3><p className="study-caption">Evaluation goals, not measured results.</p><ul>{d.success.map(t => <li key={t}>{t}</li>)}</ul></article>
      </div>
      <h3>Cross-platform scope</h3><p>{smart ? "A web application with role-specific journeys. Responsive presentation supports smaller screens; a native mobile app is not claimed." : "An offline Python workflow, not a released web or mobile product. The conceptual analysis layout below describes a possible presentation of its outputs."}</p>
      <h3>Design &amp; development process</h3>
      <ol className="study-phases">{[["Discover", "Understand the problem and available evidence."], ["Define", "Identify users, tasks and success criteria."], ["Structure", "Map information, journeys and system boundaries."], ["Present", "Explain interfaces, outputs and technical choices."], ["Validate", "Separate evidence from assumptions and future work."]].map(([a,b],i) => <li key={a}><span>0{i+1}</span><strong>{a}</strong><p>{b}</p></li>)}</ol>
      <p className="study-caption">A case-study framework; not a dated record of completed research activities.</p>
    </Section>
    <Section id="discovery" label="05 / Discovery phase" title="Evidence before assumptions.">
      <p className="study-lead">{d.findings}</p>
      <div className="study-grid">
        <article className="study-card"><h3>Qualitative analysis</h3><p>No interview transcripts or survey responses were supplied. These are proposed interview questions, not reported findings.</p><ol>{d.questions.map(q => <li key={q}>{q}</li>)}</ol></article>
        <article className="study-card"><h3>Quantitative analysis</h3><p>{smart ? "Usability measures to collect in a future evaluation. Previously reported classification figures need a reproducible evaluation record." : "The documentation names evaluation methods, but verified numerical results have not been supplied for this page."}</p><dl>{d.metrics.map(([a,b]) => <div key={a}><dt>{a}</dt><dd>{b}</dd></div>)}</dl></article>
      </div>
      <h3>Overall observations</h3><p>{smart ? "The available material makes status visibility, complete complaint context and role separation useful design priorities. Actual user preferences still need validation." : "Classification quality and explanation quality need separate assessment. A convincing explanation cannot compensate for an incorrectly labelled or poorly evaluated prediction."}</p>
      <h3>Competitive / alternative analysis</h3>
      <p className="study-caption">Conceptual comparison of approaches, not a completed audit of named competitor products.</p>
      <div className="study-table-wrap" role="region" aria-label="Alternative approaches comparison" tabIndex={0}><table><thead><tr><th scope="col">Approach</th><th scope="col">Strength</th><th scope="col">Trade-off</th></tr></thead><tbody>{d.comparison.map(([a,b,c]) => <tr key={a}><th scope="row">{a}</th><td>{b}</td><td>{c}</td></tr>)}</tbody></table></div>
      <h3>User personas</h3><p className="study-caption">Role-based proto-personas inferred from the project scope. They are not interviewed individuals.</p>
      <div className="study-grid study-three">{d.personas.map(([role,goal,pain]) => <article className="study-card" key={role}><p className="case-eyebrow">User profile</p><h4>{role}</h4><dl><dt>Goal</dt><dd>{goal}</dd><dt>Pain point to validate</dt><dd>{pain}</dd></dl></article>)}</div>
      <h3>Empathy map</h3><p className="study-caption">Hypotheses for the primary {smart ? "citizen" : "analyst"} role; not interview quotes.</p>
      <Cards rows={d.empathy as Pair[]} />
    </Section>
    <Section id="ideation" label="06 / Ideation" title="Give the journey a structure.">
      <h3>{smart ? "Role-based site maps" : "Workflow map / proposed workspace structure"}</h3>
      <p>{smart ? "A conceptual navigation map derived from the documented role journeys. Each branch groups the screens relevant to that user." : "The project is an offline pipeline. These workspaces organise its stages for explanation; they are not implemented application routes."}</p>
      <div className="study-map">{d.sitemap.map(([root,...children]) => <div className="study-map-branch" key={root}><h4>{root}</h4><ul>{children.map(child => <li key={child}>{child}</li>)}</ul></div>)}</div>
      <h3>Information architecture</h3><p className="study-caption">What information belongs together, independent of screen styling.</p><Cards rows={d.information as Pair[]} />
      <h3>Mind map</h3><p className="study-caption">Four connected concerns around the project. Expand a branch to inspect its scope.</p>
      <div className="study-mind"><strong>{smart ? "SMART-GRIEV" : "DDoS + XAI"}</strong><div>{d.mindmap.map(([a,b]) => <details key={a}><summary>{a}</summary><p>{b}</p></details>)}</div></div>
      <h3>{smart ? "Citizen-to-officer user flow" : "Researcher-to-analyst workflow"}</h3>
      <ol className="study-flow">{d.flow.map(([a,b],i) => <li key={a}><span>0{i+1}</span><div><h4>{a}</h4><p>{b}</p></div></li>)}</ol>
    </Section>
    <Section id="design" label="07 / Design" title="Make the work understandable.">
      <h3>Brand &amp; presentation guidelines</h3><p>{d.design}</p>
      <p className="study-caption">The following tokens describe this portfolio case study, not an independently documented design system for the original project.</p>
      <div className="study-swatches">{[["Canvas","#0d1222"],["Surface","#172037"],["Accent","#c4b5fd"],["Highlight","#a5f3fc"]].map(([a,b]) => <div key={a}><span style={{background:b}} /><strong>{a}</strong><code>{b}</code></div>)}</div>
      <Cards rows={[["Typography","Display headings establish hierarchy; readable body text explains decisions; monospace labels identify technical metadata."],["Interaction & accessibility","Visible focus, descriptive labels, mobile stacking and reduced-motion support keep diagrams and navigation usable."]]} />
      <h3>Low-fidelity wireframe</h3>
      <p className="study-caption">{smart ? "Retrospective schematic of a complaint detail layout, created for this case study. Not an original design-phase artifact." : "Proposed, non-functional analysis layout. It is not a screenshot, a shipped dashboard or an AI demo."}</p>
      <figure className="study-wireframe">
        <div className="wire-top">{smart ? "SMART-GRIEV / Complaint detail" : "DDoS + XAI / Analysis record"}</div>
        <div className="wire-body"><aside>{smart ? "Dashboard · Complaints · Profile" : "Data · Evaluation · Explanations"}</aside><div className="wire-main"><h4>{smart ? "Issue title & location" : "Record & model context"}</h4><div className="wire-panels"><div>{smart ? "Description and supporting context" : "Prediction and evaluation summary"}</div><div>{smart ? "Department · Priority · Confidence" : "Feature contributions and interpretation"}</div></div><div className="wire-status">{smart ? "Status and latest update" : "Limitations and analyst notes"}</div></div></div>
        <figcaption>Layout schematic only. No sample metrics or live controls.</figcaption>
      </figure>
      <h3>High-fidelity visuals &amp; feature walkthrough</h3>
      <p>{smart ? "The supplied interface screenshots below show role sign-in, the admin dashboard, complaint submission and routing details. They are paired with feature explanations and interactive architecture diagrams." : "The implementation section below explains data preparation, classifier comparison, metrics and SHAP interpretation. No original result-plot images were supplied for this page, so it uses labelled workflow diagrams instead of fabricated output visuals."}</p>
      <a className="study-link" href="#process">Explore implementation &amp; visuals ↓</a>
    </Section>
  </div>;
}

export function CaseStudyReflection({ project }: { project: "smart" | "ddos" }) {
  const d = research[project];
  return <Section id="reflection" label="09 / Reflection" title="What the evidence supports.">
    <p className="study-lead">{d.outcome}</p>
    <Cards rows={project === "smart" ? [
      ["Key takeaway","A useful grievance interface connects a person’s report to clear ownership and understandable progress."],
      ["Next validation","Test the full submission and follow-up journey with citizens and officers; verify backend permissions and document routing errors."]
    ] : [
      ["Key takeaway","Prediction, evaluation and explanation answer different questions; a responsible case study shows all three."],
      ["Next validation","Publish reproducible evaluation outputs, inspect class-specific errors and validate on additional traffic before considering live use."]
    ]} />
    <details className="study-explainer"><summary>How to read this case study</summary><p>Overview describes the purpose. Strategy sets priorities. Discovery separates evidence from open questions. Personas and empathy maps describe hypothesised user needs. Maps and flows explain organisation and sequence. Wireframes show layout; implementation shows the available work. Reflection states what is supported and what still needs validation.</p></details>
  </Section>;
}
