import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";
import { divisions } from "./divisions";

export const metadata: Metadata = {
  title: "Our Team — Hardware, Software & Cloud Divisions",
  description:
    "Meet the USAYEED engineering team. One boutique house, three disciplines: hardware, software, and cloud — building complex products end to end.",
  alternates: { canonical: "https://usayeed.com/teams" },
};

export default function TeamsPage() {
  return (
    <>
      <SiteNav />
      <main className="detail-page">
        <p className="section-label">The Team</p>
        <h1>One team. Three disciplines. Zero handoffs.</h1>
        <p className="lead">
          We are a specialized team who only believe in one thing: bringing
          products to life. Hardware, software, and cloud work as a single unit
          from the first sketch to the final ship.
        </p>

        <section className="detail-section">
          <h2>Explore our engineering divisions</h2>
          <div className="divisions-grid">
            {divisions.map((d) => (
              <Link
                key={d.slug}
                href={`/teams/${d.slug}`}
                className="division-box"
              >
                <span className="division-num">{d.num}</span>
                <h3>{d.name}</h3>
                <p>{d.short}</p>
                <span className="division-arrow">Learn more →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h2>How we work</h2>
          <p>
            Every engagement is led by a small senior team. The people who scope
            your product are the people who build it — no layers, no account
            managers, no diluted ownership.
          </p>
          <p>
            We prototype fast, validate against real constraints, and ship
            interfaces and systems that hold up in production.
          </p>
        </section>

        <div className="cta-row">
          <Link href="/#contact" className="btn btn-primary">
            Submit Your Concept
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
