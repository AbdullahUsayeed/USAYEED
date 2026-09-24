// ── DIVISION CONTENT ────────────────────────────────────────────
// This is the single source of truth for the three engineering
// divisions. Update the copy here and the home page boxes plus the
// /teams/[slug] pages all stay in sync. Images can be dropped in
// /public and referenced with an `image` field later.

// ── UCAD DOWNLOAD LINK ──────────────────────────────────────────
// The Software division page download button points to the USAYEED
// GitHub repository, where UCAD and the full package live.
const UCAD_DOWNLOAD_URL = "https://github.com/AbdullahUsayeed/USAYEED";

export type Flagship = {
  name: string;
  kicker: string;
  intro: string;
  summary: string;
  features: string[];
  downloadUrl: string;
  downloadLabel: string;
  demoEmbedUrl?: string;
};

export type Division = {
  slug: string;
  num: string;
  name: string;
  short: string;
  image?: string;
  caption?: string;
  headline: string;
  tagline: string;
  intro: string[];
  focus: { title: string; body: string }[];
  capabilities: string[];
  stack: string[];
  flagship?: Flagship;
  experience?: { name: string; kind: string; body: string }[];
  callout?: {
    kicker: string;
    title: string;
    body: string;
  };
  openSourceNote?: string;
};

export const divisions: Division[] = [
  {
    slug: "hardware",
    num: "01",
    name: "Hardware",
    short:
      "Custom silicon, schematics, PCB layout, and industrial enclosures.",
    image: "/hardware-team.jpg",
    caption:
      "KiCad on one screen. FreeCAD on the other. The finished board on the bench.",
    headline: "Hardware Division",
    tagline:
      "We take complex concepts off the whiteboard and into machined, manufacturable reality.",
    intro: [
      "The Hardware Division owns everything physical: from the first schematic to a machined, test-ready prototype. We design for the real world — tolerances, thermal budgets, EMI, and the constraints that separate a render from a product.",
      "Working alongside our Software and Cloud teams from day one, every board and enclosure is built to be instrumented, connected, and observable from the moment it powers on.",
    ],
    focus: [
      {
        title: "Electronics & PCB",
        body: "Custom silicon selection, schematic capture, multi-layer PCB layout, power architecture, and signal integrity reviews.",
      },
      {
        title: "Industrial Enclosure",
        body: "Machined aluminium and carbon-fibre enclosures, mechanical packaging, connector placement, and finish specification.",
      },
      {
        title: "Prototype to Production",
        body: "Bring-up, validation, and design-for-manufacture handoff so your first prototype becomes a shippable product.",
      },
    ],
    capabilities: [
      "Custom PCB design from concept to gerbers",
      "Embedded controller and sensor integration",
      "Mechanical CAD and industrial enclosure design",
      "Power, thermal, and EMI validation",
      "Rapid prototype bring-up and test fixtures",
      "Design-for-manufacture and assembly documentation",
    ],
    stack: ["KiCad", "Altium", "FreeCAD", "STM32", "ESP32", "Raspberry Pi", "CNC"],
  },
  {
    slug: "software",
    num: "02",
    name: "Software",
    short: "Firmware, custom UI/UX environments, and device interfaces.",
    image: "/settings.jpg",
    caption: "Interfaces engineered for the metal they run on.",
    headline: "Software Division",
    tagline:
      "Interfaces that make complex hardware feel effortless — and firmware that never lets it down.",
    intro: [
      "The Software Division builds the intelligence and the experience: firmware on the metal, and the interfaces people actually touch. We treat embedded constraints and product-grade polish as one problem, not two.",
      "From automotive cockpit UIs to device control surfaces, we design and ship custom environments that feel native to the hardware they run on.",
    ],
    focus: [
      {
        title: "Firmware",
        body: "Real-time firmware, drivers, and communication stacks tuned for constrained embedded targets.",
      },
      {
        title: "Device Interfaces",
        body: "Custom HMI, cockpit UIs, and control surfaces designed around the hardware's real capabilities.",
      },
      {
        title: "UI/UX Systems",
        body: "Design systems, motion, and interaction patterns that scale across a product family.",
      },
    ],
    capabilities: [
      "Embedded C/C++ firmware and RTOS integration",
      "Custom automotive and device HMI development",
      "Cross-platform UI engineering and design systems",
      "Computer vision and on-device inference",
      "Hardware-in-the-loop testing and instrumentation",
      "OTA update and device lifecycle tooling",
    ],
    stack: ["C/C++", "Rust", "TypeScript", "React", "Qt", "FreeRTOS", "Linux"],
    flagship: {
      name: "UCAD Assistant",
      kicker: "Flagship Product — Free & Open Source",
      intro:
        "We built UCAD to support our own Hardware team. It started as a single-purpose tool — turn a PCB board into a machined enclosure without manual CAD work. It did that so well that we kept going, adding gears, airfoils, thread profiles, and more, until it became a full-fledged AI CAD agent for FreeCAD.",
      summary:
        "UCAD is our AI CAD agent for FreeCAD. Describe the part you need in plain English — a gear, a bracket, an enclosure — and get editable parametric geometry back. No CAD commands, no steep learning curve, no cloud dependency. We built it for AI-assisted engineering in FreeCAD, and released it for everyone.",
      features: [
        "Natural language to parametric 3D models",
        "Gears, brackets, enclosures, airfoils, and thread profiles",
        "DXF / SVG import with automatic 3D extrusion",
        "Optional vision pipeline: a photo of a PCB becomes an enclosure",
        "Runs on a local LLM — no cloud dependency",
        "Every result stays fully editable in FreeCAD's model tree",
      ],
      downloadUrl: UCAD_DOWNLOAD_URL,
      downloadLabel: "Download UCAD",
      demoEmbedUrl: "https://www.youtube.com/embed/-gEuExxmy0Y",
    },
    experience: [
      {
        name: "Festabu",
        kind: "Marketplace Platform",
        body: "We built a whole new kind of marketplace. Festabu gives every vendor their own customizable tent — a themed storefront with a product catalogue, orders, and a conversational AI sales assistant — plus a seller dashboard for visits, chats, and revenue. Designed, built, and shipped end to end by our Software division.",
      },
      {
        name: "Automotive Cockpit UI",
        kind: "Embedded Interface",
        body: "A custom in-vehicle navigation and media interface prototyped on Raspberry Pi — hybrid map providers, touch-optimised interaction, and a production-ready architecture for a mobility startup.",
      },
    ],
    openSourceNote:
      "Our Software division maintains and contributes to the open-source tools our hardware engineers rely on every day. UCAD started as an internal answer to a real problem — turning mechanical and PCB intent into CAD without the manual grind — and we build it in the open so any hardware team can engineer with AI-assisted FreeCAD.",
  },
  {
    slug: "cloud",
    num: "03",
    name: "Cloud",
    short: "Secure backend architectures, telemetry, and scalable connectivity.",
    image: "/IOTDASHBOARDSAMPLE.png",
    caption: "We host the infrastructure — this site runs on Amazon EC2.",
    headline: "Cloud Division",
    tagline:
      "Designers design the software. Our Cloud division is where it actually makes it into the world — deployed, secured, and running at scale.",
    intro: [
      "The Cloud Division connects hardware to the world safely. We build the backend architectures, telemetry pipelines, and connectivity layers that let products scale from a single prototype to a fleet.",
      "Designing software is one craft; putting it out into the world is another — and that is where things become complex. Deployment, uptime, security, and observability are the hard part, and it is the part we own.",
      "Security and observability are not add-ons — they are designed into the first deployment and carried through to production.",
    ],
    callout: {
      kicker: "Deployed in the real world",
      title: "You're on our infrastructure right now.",
      body: "This website — the one you are reading — is designed, deployed, and hosted by our Cloud division on Amazon EC2: provisioned, secured, and monitored in-house. We run our own systems this way. Imagine what we will do for yours.",
    },
    focus: [
      {
        title: "Backend Architecture",
        body: "Secure APIs, identity, storage, and event-driven services built to scale with device count.",
      },
      {
        title: "Telemetry & Data",
        body: "Real-time ingestion, time-series storage, and monitoring dashboards for field deployments.",
      },
      {
        title: "Connectivity",
        body: "MQTT, LoRaWAN, cellular, and BLE pipelines with provisioning and fleet management.",
      },
    ],
    capabilities: [
      "Secure backend and API architecture",
      "Real-time telemetry ingestion and dashboards",
      "MQTT, LoRaWAN, and cellular connectivity",
      "Device provisioning, auth, and fleet management",
      "Time-series storage and analytics",
      "Observability, alerting, and anomaly detection",
    ],
    stack: ["MQTT", "LoRaWAN", "PostgreSQL", "TimescaleDB", "Node.js", "Python", "Docker"],
  },
];

export function getDivision(slug: string): Division | undefined {
  return divisions.find((d) => d.slug === slug);
}
