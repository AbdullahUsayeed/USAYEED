import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Future",
  description:
    "The USAYEED mission: to become the top boutique engineering house in the world and make complex concepts look effortless.",
  alternates: { canonical: "https://usayeed.com/future" },
};

export default function FuturePage() {
  return (
    <>
      <SiteNav />
      <main className="detail-page">
        <p className="section-label">Future</p>
        <h1>
          Our aim is to be the top boutique engineering house in the entire
          world.
        </h1>
        <p className="lead">
          And we are not going to rest until we make complex concepts look
          effortless.
        </p>

        <section className="detail-section">
          <h2>Where we are going</h2>
          <p>
            Complexity is not a badge of honour. The best engineering
            disappears into the product — the user never sees the constraints,
            the trade-offs, or the battles fought to make it feel simple.
          </p>
          <p>
            We are building a house where hardware, software, and cloud are one
            craft. A place that can take the most ambitious concept a founder
            has and return it as a physical, working prototype in two weeks.
          </p>
        </section>

        <section className="detail-section">
          <h2>What we refuse</h2>
          <ul>
            <li>Generalist filler and bloated teams</li>
            <li>Interfaces that hide hardware limitations instead of solving them</li>
            <li>Shipping demos that cannot survive production</li>
            <li>Treating a prototype as the finish line</li>
          </ul>
        </section>

        <div className="cta-row">
          <Link href="/#contact" className="btn btn-primary">
            Initiate Project
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
