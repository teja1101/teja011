import { createFileRoute } from "@tanstack/react-router";
import { ProjectCaseStudy } from "@/components/project-case-studies";

export const Route = createFileRoute("/ddos-xai")({
  head: () => ({ meta: [
    { title: "DDoS Classification and XAI — Gudavalli Prabhu Teja" },
    { name: "description", content: "DDoS Classification and XAI: project overview, problem, solution, implementation and technical details." },
    { property: "og:title", content: "DDoS Classification and XAI — Gudavalli Prabhu Teja" },
    { property: "og:description", content: "DDoS Classification and XAI: project overview, approach and implementation." },
  ] }),
  component: () => <ProjectCaseStudy project="ddos" />,
});
