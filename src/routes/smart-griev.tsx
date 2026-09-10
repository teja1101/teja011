import { createFileRoute } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/project-case-studies";

export const Route = createFileRoute("/smart-griev")({
  head: () => ({ meta: [
    { title: "SMART-GRIEV — Gudavalli Prabhu Teja" },
    { name: "description", content: "SMART-GRIEV: project overview, problem, solution, implementation and technical details." },
    { property: "og:title", content: "SMART-GRIEV — Gudavalli Prabhu Teja" },
    { property: "og:description", content: "SMART-GRIEV: project overview, approach and implementation." },
  ] }),
  component: () => <ProjectCaseStudy project="smart" />,
});
