// CSS-perspective diagrams for the documented SMART-GRIEV design.
// Native text and ordered lists keep the diagrams readable at every screen size.

export function ArchitectureDiagram() {
  return (
    <figure className="sg-diagram">
      <figcaption>Architecture / documented system design</figcaption>
      <div className="sg-plane">
        <strong>React interface</strong>
        <p>Role-specific views for submitting, reviewing and managing complaints.</p>
        <div className="sg-roles">
          <span>Citizen</span><span>Officer</span><span>Admin</span>
        </div>
      </div>
      <div className="sg-connector">
        <span>API requests &amp; responses</span><b aria-hidden="true">↕</b>
      </div>
      <div className="sg-plane sg-plane-cyan">
        <strong>Backend API</strong>
        <p>Authentication, role checks, complaint operations and analytics.</p>
      </div>
      <div className="sg-connector">
        <span>Classification calls &amp; record access</span><b aria-hidden="true">↕</b>
      </div>
      <div className="sg-branches">
        <div>
          <div className="sg-plane">
            <strong>NLP service</strong>
            <p>Department prediction, urgency and confidence information.</p>
          </div>
        </div>
        <div>
          <div className="sg-plane sg-plane-cyan">
            <strong>Data storage</strong>
            <p>Users, departments, complaints and status history.</p>
          </div>
        </div>
      </div>
      <p className="sg-diagram-note">
        The API connects the interface to analysis and stored records.
        This is a conceptual view of the documented design, not a live infrastructure monitor.
      </p>
    </figure>
  );
}

export function PipelineDiagram() {
  const steps = [
    { title: "Complaint text", detail: "A citizen describes the issue and provides its location." },
    { title: "Text preparation", detail: "Prepare the description for NLP analysis." },
    { title: "Classification", detail: "Predict a relevant department and produce urgency and confidence information." },
    { title: "Routing", detail: "Direct the complaint to the appropriate department for officer attention." },
    { title: "Review & status updates", detail: "Officers review the issue and update its record as work progresses." },
  ];
  return (
    <figure className="sg-diagram">
      <figcaption>Complaint / analysis and routing flow</figcaption>
      <ol className="sg-pipeline">
        {steps.map((step, index) => (
          <li key={step.title}>
            <div className={index === 2 ? "sg-plane sg-plane-cyan" : "sg-plane"}>
              <span className="sg-step-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <p>{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="sg-diagram-note">
        AI assists routing; officers handle the complaint.
        This flow illustrates the process, not the outcome of a live submission.
      </p>
    </figure>
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
