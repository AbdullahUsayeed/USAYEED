import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UCAD Assistant — AI CAD Agent for FreeCAD",
  description:
    "A FreeCAD workbench that designs what you describe in plain English. Gears, enclosures, DXF to 3D — no CAD commands needed.",
  alternates: { canonical: "https://usayeed.com/projects/ucad" },
  openGraph: {
    title: "UCAD Assistant — AI CAD Agent for FreeCAD | USAYEED",
    description:
      "A FreeCAD workbench turning natural language into parametric 3D models. Gears, enclosures, brackets — describe what you need, get working geometry.",
    url: "https://usayeed.com/projects/ucad",
    images: [{ url: "/mainui.jpg", width: 1200, height: 630 }],
  },
};

export default function UcadPage() {
  return (
    <main className="detail-page">
      <p className="section-label">Product</p>
      <h1>UCAD Assistant</h1>
      <p className="lead">
        Describe what you need. Get working geometry. No CAD commands to memorize.
      </p>

      <section className="detail-section">
        <h2>Overview</h2>
        <p>
          CAD software is powerful but comes with a steep learning curve.
          UCAD Assistant changes that — it is a FreeCAD workbench that
          interprets natural language and generates parametric 3D models.
          Type what you need in plain English, get working geometry.
        </p>
        <p>
          Built with FreeCAD&apos;s Python API and a local LLM backend
          (DeepSeek V4, no cloud dependency), UCAD handles a wide range
          of CAD tasks: gears, brackets, enclosures, airfoils, thread
          profiles, and DXF-to-3D extrusion. Every output remains fully
          editable in FreeCAD&apos;s model tree.
        </p>
        <p>
          The workflow is simple: describe what you need → AI interprets
          intent → parametric geometry appears. No menus, no commands,
          no CAD experience required.
        </p>
      </section>

      <section className="detail-section">
        <h2>Capabilities</h2>
        <p>UCAD currently handles:</p>
        <ul>
          <li>Parametric gear and pulley generation with customizable tooth profiles</li>
          <li>Bracket, enclosure, and housing design from natural language</li>
          <li>DXF and SVG import with automatic 3D extrusion</li>
          <li>Airfoil and aerodynamic surface generation</li>
        </ul>
        <p>
          The vision pipeline (optional) can read photographs of PCBs or
          hand-drawn sketches and extract dimensions for enclosure
          generation. No KiCad import required for basic cases.
        </p>
      </section>

      <section className="detail-section">
        <h2>How It Works</h2>
        <h3>Natural Language to Parametric CAD</h3>
        <p>
          A local LLM (DeepSeek V4 Flash) parses your description and
          outputs structured commands that FreeCAD executes. The model
          tree preserves full editability — every dimension stays parametric.
        </p>
        <h3>Open Source and Extensible</h3>
        <p>
          UCAD is open source on GitHub. New generators can be added as
          Python modules. The architecture separates intent parsing from
          geometry generation, making it easy to extend and customize.
        </p>
        <h3>Vision Pipeline (Optional)</h3>
        <p>
          An optional vision mode uses a camera or uploaded photo to detect
          board outlines, mounting holes, and connector locations. When
          combined with KiCad CLI, it produces production-ready enclosures.
        </p>
      </section>

      <section className="detail-section">
        <h2>Current Status</h2>
        <ul>
          <li>Generate any parametric part from natural language</li>
          <li>Import 2D drawings (DXF/SVG) and extrude to 3D</li>
          <li>Photo-to-enclosure via optional vision pipeline</li>
        </ul>
      </section>

      <section className="detail-section">
        <h2>Roadmap</h2>
        <ul>
          <li>Assembly-level generation from multi-step descriptions</li>
          <li>STEP/IGES export for manufacturing</li>
          <li>Web UI companion for non-FreeCAD users</li>
          <li>Expanded material and tolerance guidance</li>
        </ul>
        <p>
          CAD should work the way people think — in intent, not in commands.
          UCAD makes that possible. Open source on GitHub, community-driven,
          and free.
        </p>
      </section>

      <a href="/" className="detail-link">← Back to home</a>
    </main>
  );
}
