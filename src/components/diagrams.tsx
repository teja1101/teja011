import { useId, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type DiagramPart = { title: string; summary: string; detail: string };
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function InteractiveDiagram({ title, parts, architecture = false }: {
  title: string;
  parts: DiagramPart[];
  architecture?: boolean;
}) {
  const id = useId();
  const [view, setView] = useState({ x: 0, y: 0, zoom: 1 });
  const [selected, setSelected] = useState(0);
  const [touchRotate, setTouchRotate] = useState(false);
  const drag = useRef<{ pointer: number; x: number; y: number; rx: number; ry: number } | null>(null);
  const moved = useRef(false);

  function rotate(x: number, y: number) {
    setView(v => ({ ...v, x: clamp(v.x + x, -30, 30), y: clamp(v.y + y, -55, 55) }));
  }
  function start(event: ReactPointerEvent<HTMLDivElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    moved.current = false;
    if (event.pointerType === "touch" && !touchRotate) return;
    drag.current = { pointer: event.pointerId, x: event.clientX, y: event.clientY, rx: view.x, ry: view.y };
  }
  function move(event: ReactPointerEvent<HTMLDivElement>) {
    const origin = drag.current;
    if (!origin || origin.pointer !== event.pointerId) return;
    const dx = event.clientX - origin.x;
    const dy = event.clientY - origin.y;
    if (!moved.current && Math.hypot(dx, dy) < 6) return;
    moved.current = true;
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.setPointerCapture(event.pointerId);
    setView(v => ({ ...v, x: clamp(origin.rx - dy * 0.16, -30, 30), y: clamp(origin.ry + dx * 0.2, -55, 55) }));
  }
  function stop(event: ReactPointerEvent<HTMLDivElement>) {
    drag.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  }
  function node(index: number) {
    const part = parts[index];
    return (
      <button type="button"
        className={"sg-plane sg-model-node" + (index % 2 ? " sg-plane-cyan" : "")}
        aria-pressed={selected === index} aria-controls={id + "-detail"}
        onClick={() => setSelected(index)}>
        <span className="sg-step-number">{String(index + 1).padStart(2, "0")}</span>
        <strong>{part.title}</strong>
        <span className="sg-model-summary">{part.summary}</span>
      </button>
    );
  }
  return (
    <figure className="sg-diagram sg-interactive">
      <figcaption id={id + "-title"}>{title}</figcaption>
      <p id={id + "-help"} className="sg-interactive-help">
        Drag to rotate. Select a block to read its details. Use the buttons or focus the diagram
        and use arrow keys to rotate, +/− to zoom, and Home to reset.
      </p>
      <div className="sg-model-controls" role="group" aria-label="3D view controls">
        <button type="button" onClick={() => rotate(0, -10)} aria-label="Rotate left">↶ Left</button>
        <button type="button" onClick={() => rotate(0, 10)} aria-label="Rotate right">Right ↷</button>
        <button type="button" onClick={() => rotate(10, 0)}>Tilt up</button>
        <button type="button" onClick={() => rotate(-10, 0)}>Tilt down</button>
        <button type="button" disabled={view.zoom <= 0.65} onClick={() => setView(v => ({ ...v, zoom: clamp(v.zoom - 0.1, 0.65, 1.15) }))} aria-label="Zoom out">−</button>
        <output aria-label="Zoom level">{Math.round(view.zoom * 100)}%</output>
        <button type="button" disabled={view.zoom >= 1.15} onClick={() => setView(v => ({ ...v, zoom: clamp(v.zoom + 0.1, 0.65, 1.15) }))} aria-label="Zoom in">+</button>
        <button type="button" onClick={() => { setView({ x: 0, y: 0, zoom: 1 }); setSelected(0); }}>Reset</button>
        <button type="button" aria-pressed={touchRotate} onClick={() => setTouchRotate(v => !v)}>
          Touch rotate: {touchRotate ? "on" : "off"}
        </button>
      </div>
      <div className="sg-model-viewport" tabIndex={0} role="group"
        aria-labelledby={id + "-title"} aria-describedby={id + "-help"}
        style={{ touchAction: touchRotate ? "none" : "pan-y" }}
        onPointerDown={start} onPointerMove={move} onPointerUp={stop} onPointerCancel={stop}
        onLostPointerCapture={() => { drag.current = null; }}
        onPointerLeave={() => { if (!moved.current) drag.current = null; }}
        onClickCapture={event => { if (moved.current && event.detail !== 0) { event.preventDefault(); event.stopPropagation(); } }}
        onKeyDown={event => {
          if (event.target !== event.currentTarget) return;
          switch (event.key) {
            case "ArrowLeft": rotate(0, -10); break;
            case "ArrowRight": rotate(0, 10); break;
            case "ArrowUp": rotate(10, 0); break;
            case "ArrowDown": rotate(-10, 0); break;
            case "+": case "=": setView(v => ({ ...v, zoom: clamp(v.zoom + 0.1, 0.65, 1.15) })); break;
            case "-": setView(v => ({ ...v, zoom: clamp(v.zoom - 0.1, 0.65, 1.15) })); break;
            case "Home": setView({ x: 0, y: 0, zoom: 1 }); break;
            default: return;
          }
          event.preventDefault();
        }}>
        <div className="sg-model-scene" style={{ transform: "rotateX(" + view.x + "deg) rotateY(" + view.y + "deg) scale(" + view.zoom + ")" }}>
          {architecture ? (
            <>
              {node(0)}
              <div className="sg-connector"><span>Requests / responses</span><b aria-hidden="true">↕</b></div>
              {node(1)}
              <div className="sg-connector"><span>Analysis / stored records</span><b aria-hidden="true">↕</b></div>
              <div className="sg-branches"><div>{node(2)}</div><div>{node(3)}</div></div>
            </>
          ) : (
            <ol className="sg-pipeline">{parts.map((part, index) => <li key={part.title}>{node(index)}</li>)}</ol>
          )}
        </div>
      </div>
      <div className="sg-model-detail" id={id + "-detail"} aria-live="polite" aria-atomic="true">
        <strong>{parts[selected].title}</strong>
        <p>{parts[selected].detail}</p>
      </div>
      <p className="sg-diagram-note">Interactive view of the documented design. No AI inference or live project data is used.</p>
    </figure>
  );
}

export function ArchitectureDiagram() {
  return <InteractiveDiagram title="Explore / SMART-GRIEV architecture" architecture parts={[
    { title: "React interface", summary: "Citizen · Officer · Admin", detail: "Role-specific screens support complaint submission, review and administration. The interface sends requests to the backend and displays returned records." },
    { title: "Backend API", summary: "Authentication · complaint operations", detail: "The documented API handles authentication, role checks, complaint operations and analytics. It connects the interface with classification and storage services." },
    { title: "NLP service", summary: "Department · urgency · confidence", detail: "The documented analysis workflow returns department predictions, urgency and confidence information to assist routing. Officers remain responsible for reviewing complaints." },
    { title: "Data storage", summary: "Users · complaints · status history", detail: "Stored records connect users and departments with complaints and their status history. This conceptual block does not claim a specific live database deployment." },
  ]} />;
}

export function PipelineDiagram() {
  return <InteractiveDiagram title="Explore / complaint routing" parts={[
    { title: "Complaint text", summary: "Issue description and location", detail: "A citizen describes a public-service issue and gives its location. This is the input to the documented analysis and routing workflow." },
    { title: "Text preparation", summary: "Prepare input for analysis", detail: "The description is prepared for NLP processing before classification. This interactive diagram only explains that stage; it does not process submitted text." },
    { title: "Classification", summary: "Predict department and urgency", detail: "The documented classifier provides department, urgency and confidence information. A confidence score is not a guarantee that a prediction is correct." },
    { title: "Routing", summary: "Direct the issue for officer attention", detail: "The complaint is directed to a relevant department so an officer can review it. Multi-department routing is described in the project documentation." },
    { title: "Review & status", summary: "Track officer progress", detail: "Officers review the complaint and update the record as work progresses. Citizens can follow its status; this diagram does not represent a live submission." },
  ]} />;
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
