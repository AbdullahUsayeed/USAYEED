import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import CareerForm from "./CareerForm";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Build the boutique engineering house of the future with USAYEED — open roles for an Embedded Engineer and a Mechanical Engineer with deep FreeCAD expertise.",
  alternates: { canonical: "https://usayeed.com/career" },
};

const principles = [
  {
    title: "Own the whole problem",
    body: "You scope it, you build it, you stand behind it. No tossing work over a wall.",
  },
  {
    title: "Craft over volume",
    body: "We would rather ship three exceptional things than thirty forgettable ones.",
  },
  {
    title: "Hardware is truth",
    body: "If it does not run on the real board, in the real enclosure, it does not count.",
  },
];

const roles = [
  {
    title: "Embedded Engineer",
    kind: "Hardware + Software · Full-time",
    summary:
      "Own firmware and embedded systems end to end — from MCU selection and bring-up to hardware-in-the-loop validation — working shoulder to shoulder with our Hardware and Cloud divisions.",
    requirements: [
      "Strong C/C++ for constrained targets (STM32, ESP32, ARM Cortex-M)",
      "RTOS, drivers, and comms stacks (I2C, SPI, UART, BLE, MQTT)",
      "Comfortable reading schematics and debugging with scope / logic analyser",
      "Bonus: PCB bring-up, power architecture, OTA and device lifecycle tooling",
    ],
  },
  {
    title: "Mechanical Engineer — FreeCAD",
    kind: "Hardware · Full-time",
    summary:
      "Own mechanical design end to end — enclosures, mechanisms, and manufacturable parts — with profound FreeCAD expertise, and help push our AI CAD agent UCAD further while you work.",
    requirements: [
      "Profound FreeCAD skills: Part Design, parametric modelling, assemblies, tech drawings",
      "Enclosure and mechanical packaging design for CNC, sheet metal, and 3D printing",
      "Working knowledge of tolerances, DFM, and thermal / EMI constraints",
      "Bonus: FreeCAD Python API, KiCad familiarity, automotive-grade finishing",
    ],
  },
];

export default function CareerPage() {
  return (
    <>
      <SiteNav />
      <main className="detail-page">
        <p className="section-label">Career</p>
        <h1>Work where the prototype is the point.</h1>
        <p className="lead">
          We are assembling a small, senior team of engineers who want to build
          the boutique house of the future — one shipped product at a time.
        </p>

        <section className="detail-section">
          <h2>Who we look for</h2>
          <div className="focus-grid">
            {principles.map((item) => (
              <div className="focus-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2>Open roles</h2>
          <div className="role-grid">
            {roles.map((role) => (
              <article className="role-card" key={role.title}>
                <span className="product-kind">{role.kind}</span>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
                <h4>What we are looking for</h4>
                <ul>
                  {role.requirements.map((req) => (
                    <li key={req}>{req}</li>
                  ))}
                </ul>
                <a href="#apply" className="detail-link">
                  Apply for this role →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="detail-section" id="apply">
          <h2>Apply</h2>
          <p>
            Fill in the form and attach your CV. It goes straight to our team —
            no portals, no black holes.
          </p>
          <CareerForm />
        </section>

        <p className="detail-back">
          <a href="/" className="detail-link">
            ← Back to home
          </a>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
