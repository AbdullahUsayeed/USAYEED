import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation Services",
  description:
    "AI-powered workflow automation and intelligent engineering tooling. Agentic pipelines, LLM integrations, and automated design generation for engineering and operations teams.",
  alternates: { canonical: "https://usayeed.com/services/ai-automation" },
  openGraph: {
    title: "AI Automation Services | USAYEED",
    description:
      "AI workflow automation and intelligent tooling — agentic pipelines, LLM integrations, and automated design generation.",
    url: "https://usayeed.com/services/ai-automation",
  },
};

export default function AiAutomationPage() {
  return (
    <main className="detail-page">
      <p className="section-label">Service</p>
      <h1>AI Automation</h1>
      <p className="lead">
        We design AI-assisted workflows that reduce repetitive engineering and
        operations tasks while keeping humans in control.
      </p>

      <section className="detail-section">
        <h2>What We Deliver</h2>
        <ul>
          <li>Automation flows for triage, reporting, and workflow routing</li>
          <li>Task-specific AI integrations focused on practical outcomes</li>
          <li>Human-review checkpoints for high-confidence delivery</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Ideal For</h2>
        <p>Teams that want faster execution without adding operational complexity.</p>
      </section>

      <a href="/" className="detail-link">← Back to home</a>
    </main>
  );
}
