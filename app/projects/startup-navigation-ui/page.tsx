import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Navigation UI — Case Study",
  description:
    "Custom automotive cockpit UI on Raspberry Pi with hybrid map provider architecture, Spotify integration, and Max Touch Mode for a mobility startup.",
  alternates: { canonical: "https://usayeed.com/projects/startup-navigation-ui" },
  openGraph: {
    title: "Startup Navigation UI Case Study | USAYEED",
    description:
      "Automotive cockpit UI on Raspberry Pi — hybrid map architecture, Spotify integration, touch-optimized HMI for a mobility startup.",
    url: "https://usayeed.com/projects/startup-navigation-ui",
    images: [{ url: "/mainui.jpg", width: 1200, height: 630 }],
  },
};

export default function StartupNavigationUIPage() {
  return (
    <main className="detail-page">
      <p className="section-label">Case Study</p>
      <h1>Startup Navigation UI</h1>
      <p className="lead">
        Custom Automotive Interface | Raspberry Pi + Konstag Prototype
      </p>

      <section className="detail-section">
        <h2>Overview</h2>
        <p>
          Designed and developed a fully functional automotive cockpit UI for an
          early-stage mobility startup, combining open-source mapping with Google
          Maps integration. The system was prototyped on constrained hardware
          (Raspberry Pi + Konstag) to simulate real in-vehicle conditions while
          staying cost-efficient and production-aware.
        </p>
        <p>
          The objective was to deliver a fast, testable product that could
          validate both usability and business direction in front of
          stakeholders and investors.
        </p>
      </section>

      <section className="detail-section">
        <h2>The Challenge</h2>
        <ul>
          <li>
            Restricted access to Google Maps APIs for small teams, with rising
            costs and non-enterprise limitations
          </li>
          <li>
            Limited hardware performance, requiring smooth UI behavior on
            low-power devices
          </li>
          <li>
            Fragmented user experience across navigation, media, and system
            controls
          </li>
          <li>
            Tight timelines and pressure to deliver a working prototype, not
            just design concepts
          </li>
        </ul>
        <p>
          The prototype also needed to feel close to production quality so it
          could support investor conversations and early user validation.
        </p>
      </section>

      <section className="detail-section">
        <h2>Approach and Problem Solving</h2>
        <p>
          Instead of depending on a single map provider, I designed a hybrid
          navigation architecture that could switch between map sources based on
          availability, cost, and performance.
        </p>
        <h3>Map Abstraction Layer</h3>
        <p>
          Built a flexible layer integrating open-source maps and Google Maps,
          enabling provider switching without breaking the UI flow. This
          reduced vendor lock-in and long-term API cost risk.
        </p>
        <h3>Performance-First UI Design</h3>
        <p>
          Optimized rendering for Raspberry Pi by simplifying animations,
          minimizing redraw cycles, and prioritizing essential interactions.
          The interface remained responsive under constrained hardware.
        </p>
        <h3>Unified Interaction Model</h3>
        <p>
          Combined navigation, media controls (including Spotify integration),
          and system actions into a single flow to reduce context switching and
          driver distraction.
        </p>
        <h3>Max Touch Mode</h3>
        <p>
          Introduced an in-car interaction mode with larger touch targets and
          simplified gestures for safer and quicker operation.
        </p>
        <h3>Prototype-to-Production Thinking</h3>
        <p>
          Structured the architecture so engineering teams could scale and
          extend it, rather than treating it as a throwaway prototype.
        </p>
      </section>

      <section className="detail-section">
        <h2>Solution</h2>
        <ul>
          <li>A fully interactive automotive UI prototype running on Raspberry Pi</li>
          <li>Seamless map switching between providers with minimal latency</li>
          <li>Integrated Spotify media controls within the navigation flow</li>
          <li>A driver-friendly touch interface optimized for real conditions</li>
          <li>A modular architecture ready for production extension</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Outcome</h2>
        <ul>
          <li>Delivered a testable end-to-end product, not just a concept</li>
          <li>Enabled real usability validation through live interaction</li>
          <li>
            Strengthened investor presentations with a working prototype and
            higher product credibility
          </li>
          <li>
            Reduced long-term platform risk by avoiding full dependency on a
            costly single-map ecosystem
          </li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Key Takeaways</h2>
        <ul>
          <li>Build production-minded prototypes under tight constraints</li>
          <li>Navigate API limits and platform restrictions creatively</li>
          <li>Design complete systems, not isolated screens</li>
          <li>Deliver solutions that are technically viable and business-aware</li>
        </ul>
      </section>

      <a href="/" className="detail-link">← Back to home</a>
    </main>
  );
}
