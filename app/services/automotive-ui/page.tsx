import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive UI Development",
  description:
    "Custom automotive cockpit interfaces and in-vehicle HMI systems. Production-ready UI for embedded platforms — from Raspberry Pi prototypes to automotive-grade SoCs.",
  alternates: { canonical: "https://usayeed.com/services/automotive-ui" },
  openGraph: {
    title: "Automotive UI Development | USAYEED",
    description:
      "Custom automotive cockpit interfaces and in-vehicle HMI systems optimized for embedded hardware.",
    url: "https://usayeed.com/services/automotive-ui",
    images: [{ url: "/AutomotiveDisplaySample.jpeg", width: 1200, height: 630 }],
  },
};

export default function AutomotiveUIPage() {
  return (
    <main className="detail-page">
      <p className="section-label">Service</p>
      <h1>Automotive UI Development</h1>
      <p className="lead">
        We design and implement in-vehicle interfaces that stay usable under
        strict hardware, safety, and performance constraints.
      </p>

      <section className="detail-section">
        <h2>What We Deliver</h2>
        <ul>
          <li>Cockpit UI workflows for navigation, media, and controls</li>
          <li>Raspberry Pi and embedded-friendly prototype interfaces</li>
          <li>Production-oriented frontend architecture for HMI systems</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Ideal For</h2>
        <p>Startups and teams building in-car products or connected vehicle experiences.</p>
      </section>

      <a href="/" className="detail-link">← Back to home</a>
    </main>
  );
}
