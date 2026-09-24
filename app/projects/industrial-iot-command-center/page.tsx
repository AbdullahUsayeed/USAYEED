import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial IoT Command Center — Case Study",
  description:
    "Long-range industrial sensor network with LoRa and 4G backhaul, solar-powered edge nodes, and a real-time remote monitoring dashboard.",
  alternates: { canonical: "https://usayeed.com/projects/industrial-iot-command-center" },
  openGraph: {
    title: "Industrial IoT Command Center Case Study | USAYEED",
    description:
      "Long-range wireless sensor network with solar-powered edge nodes, LoRa/4G backhaul, and real-time monitoring dashboard.",
    url: "https://usayeed.com/projects/industrial-iot-command-center",
    images: [{ url: "/HVAC-SENSOR.jpg", width: 1200, height: 630 }],
  },
};

export default function IndustrialIotCommandCenterPage() {
  return (
    <main className="detail-page">
      <p className="section-label">Case Study</p>
      <h1>HVAC IoT Command Center</h1>
      <p className="lead">
        Predictive Maintenance Platform for Distributed HVAC Systems
      </p>

      <section className="detail-section">
        <h2>Overview</h2>
        <p>
          Designed and built a low-cost, long-range IoT platform for HVAC
          predictive maintenance that enables real-time monitoring of critical
          thermodynamic metrics such as superheat and subcooling.
        </p>
        <p>
          The system combines edge hardware, resilient wireless communication,
          and a centralized dashboard to help service teams detect faults
          earlier, reduce site visits, and shift from reactive to proactive
          maintenance.
        </p>
      </section>

      <section className="detail-section">
        <h2>The Challenge</h2>
        <ul>
          <li>
            Delayed fault detection where minor inefficiencies can escalate into
            costly failures
          </li>
          <li>
            High operational overhead from frequent on-site diagnostics and
            technician dispatch
          </li>
          <li>
            Connectivity limits in large facilities where Wi-Fi is degraded by
            RF noise, thick walls, and interference
          </li>
          <li>
            Expensive enterprise monitoring systems that are difficult to deploy
            at scale
          </li>
        </ul>
        <p>
          The target was an architecture that is affordable, reliable in harsh
          RF environments, and power-efficient enough for long-term field use.
        </p>
      </section>

      <section className="detail-section">
        <h2>Approach and Engineering Decisions</h2>
        <p>
          Instead of forcing a traditional IoT stack, I designed a hybrid
          edge-to-cloud architecture optimized for real HVAC operating
          conditions.
        </p>
        <h3>1. Edge Data Acquisition (Low Power and High Reliability)</h3>
        <ul>
          <li>
            Used a low-power STM32 to read analog HVAC sensor signals such as
            temperature and pressure
          </li>
          <li>Converted raw signals into calibrated digital telemetry at the edge</li>
          <li>
            Implemented on-device superheat and subcooling calculations to
            reduce payload size and improve responsiveness
          </li>
        </ul>
        <p>
          This ensures meaningful data is transmitted, not just raw readings,
          while reducing bandwidth pressure.
        </p>
        <h3>2. Long-Range Communication Layer</h3>
        <ul>
          <li>
            Integrated SX1278 LoRa Ra-02 AI-Thinker modules for field
            communication
          </li>
          <li>Applied LoRaWAN-style design for long range and resilience</li>
          <li>
            Achieved up to ~10 km line-of-sight range with strong RF
            interference tolerance and very low power use
          </li>
        </ul>
        <p>
          This made deployments viable where Wi-Fi or cellular would be too
          unreliable or expensive.
        </p>
        <h3>3. Gateway and Backhaul Strategy</h3>
        <ul>
          <li>Built an ESP32 gateway to receive LoRa telemetry from field nodes</li>
          <li>Forwarded processed data over Wi-Fi to the cloud dashboard</li>
        </ul>
        <p>
          This dual communication stack separates field reliability (LoRa) from
          internet backhaul (Wi-Fi), optimizing both cost and performance.
        </p>
        <h3>4. Power Optimization for Field Deployment</h3>
        <ul>
          <li>Implemented aggressive deep-sleep cycles on STM32 edge nodes</li>
          <li>Optimized sensor polling and transmission intervals</li>
          <li>Targeted up to 2 years of battery life</li>
        </ul>
        <h3>5. Remote Monitoring Dashboard</h3>
        <ul>
          <li>Real-time monitoring of superheat and subcooling</li>
          <li>Early identification of inefficiency and fault patterns</li>
          <li>Historical trend access for diagnostics</li>
        </ul>
        <p>
          The dashboard translates telemetry into actionable maintenance
          decisions.
        </p>
      </section>

      <section className="detail-section">
        <h2>Solution</h2>
        <ul>
          <li>Distributed battery-powered sensor nodes using STM32 plus LoRa modules</li>
          <li>A LoRa-to-Wi-Fi gateway built on ESP32</li>
          <li>Real-time edge computation of core HVAC performance metrics</li>
          <li>A remote command center dashboard for monitoring and diagnostics</li>
          <li>A scalable architecture ready for multi-site rollout</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Outcome</h2>
        <ul>
          <li>Delivered a fully functional prototype ready for production planning</li>
          <li>Reduced dependency on costly proprietary HVAC monitoring systems</li>
          <li>Enabled earlier fault detection to help prevent major failures</li>
          <li>Lowered operational costs by reducing unnecessary technician visits</li>
          <li>Created a clear path to deployment across multiple facilities</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Business Impact</h2>
        <ul>
          <li>Shifts teams from reactive maintenance to predictive maintenance</li>
          <li>Cuts service and labor cost through remote diagnostics</li>
          <li>Improves system efficiency and equipment lifespan</li>
          <li>Enables lower-cost IoT adoption compared to legacy alternatives</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Why This Matters</h2>
        <p>
          Many HVAC IoT initiatives fail because they underweight real-world RF
          constraints, field power limits, and deployment economics.
        </p>
        <p>This project demonstrates the ability to:</p>
        <ul>
          <li>Design end-to-end hardware and software systems</li>
          <li>
            Make practical engineering trade-offs that reduce cost while
            preserving reliability
          </li>
          <li>Build solutions that are deployable, not just conceptual</li>
        </ul>
      </section>

      <a href="/" className="detail-link">← Back to home</a>
    </main>
  );
}
