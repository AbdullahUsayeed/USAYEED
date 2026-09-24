import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT Dashboard Development",
  description:
    "Industrial IoT command centers and real-time sensor dashboards. Long-range LoRa/4G networks, edge processing, and cloud visualization for field deployments.",
  alternates: { canonical: "https://usayeed.com/services/iot-dashboard" },
  openGraph: {
    title: "IoT Dashboard Development | USAYEED",
    description:
      "Industrial IoT command centers: sensor acquisition, edge processing, and real-time monitoring dashboards.",
    url: "https://usayeed.com/services/iot-dashboard",
    images: [{ url: "/IOTDASHBOARDSAMPLE.png", width: 1200, height: 630 }],
  },
};

export default function IotDashboardPage() {
  return (
    <main className="detail-page">
      <p className="section-label">Service</p>
      <h1>IoT Dashboard Development</h1>
      <p className="lead">
        We build operational dashboards that turn sensor streams into fast,
        clear decisions for industrial and connected systems.
      </p>

      <section className="detail-section">
        <h2>What We Deliver</h2>
        <ul>
          <li>Live KPI panels for risk, machine health, and alert status</li>
          <li>Clear visualization models for non-technical operations teams</li>
          <li>Scalable dashboard architecture for evolving telemetry sources</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Ideal For</h2>
        <p>Manufacturing, energy, or asset-heavy teams that need real-time visibility.</p>
      </section>

      <a href="/" className="detail-link">← Back to home</a>
    </main>
  );
}
