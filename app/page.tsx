import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "./hero-slideshow";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";
import { divisions } from "./teams/divisions";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://usayeed.com/#organization",
      name: "USAYEED",
      url: "https://usayeed.com",
      email: "info@usayeed.com",
      logo: "https://usayeed.com/logo-u.svg",
      slogan: "We build the software that powers hardware.",
      description:
        "USAYEED is a boutique engineering house building complex hardware-software products end to end — hardware, software, and cloud — from concept to physical prototype in two weeks.",
      areaServed: "Global",
      knowsAbout: [
        "Hardware Engineering",
        "Custom Silicon and PCB Design",
        "Industrial Enclosure Design",
        "Firmware Development",
        "Custom UI/UX and Device Interfaces",
        "Cloud and Backend Architecture",
        "Telemetry and IoT Connectivity",
        "Automotive UI Development",
        "IoT Dashboard Engineering",
        "AI Automation",
        "UCAD AI CAD Agent (FreeCAD)",
        "Prototype to Production Engineering",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "USAYEED Engineering Divisions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hardware Engineering",
              description:
                "Custom silicon, schematics, PCB layout, and industrial enclosures.",
              url: "https://usayeed.com/teams/hardware",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Software Engineering",
              description:
                "Firmware, custom UI/UX environments, and device interfaces.",
              url: "https://usayeed.com/teams/software",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud Engineering",
              description:
                "Secure backend architectures, telemetry, and scalable connectivity.",
              url: "https://usayeed.com/teams/cloud",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "UCAD Assistant",
              description:
                "A FreeCAD workbench that designs what you describe in plain English.",
              url: "https://usayeed.com/projects/ucad",
            },
          },
        ],
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "info@usayeed.com",
        contactType: "customer service",
        availableLanguage: "English",
      },
      sameAs: ["https://usayeed.com"],
    },
    {
      "@type": "WebSite",
      "@id": "https://usayeed.com/#website",
      name: "USAYEED",
      url: "https://usayeed.com",
      publisher: { "@id": "https://usayeed.com/#organization" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteNav />

      {/* ── 1. HERO — ROTATING BILLBOARD ──────────────────────── */}
      <header id="hero" className="hero">
        <HeroSlideshow />
      </header>

      <hr />

      {/* ── 2. CORE & SKILL BREAKDOWN ─────────────────────────── */}
      <section id="core" className="core-section">
        <div className="container">
          <p className="section-label">01 — Our Divisions</p>
          <h2>
            Three divisions, one team, one obsession: taking complex products
            all the way to life.
          </h2>
          <p className="section-intro">
            Every division works the same project from day one — so nothing is
            thrown over a wall.
          </p>

          <div className="divisions-grid">
            {divisions.map((division) => (
              <Link
                key={division.slug}
                href={`/teams/${division.slug}`}
                className="division-box"
              >
                {division.image && (
                  <div className="division-media">
                    <Image
                      src={division.image}
                      alt={`${division.name} division`}
                      width={605}
                      height={330}
                      className="division-img"
                    />
                    {division.caption && (
                      <span className="division-caption">
                        {division.caption}
                      </span>
                    )}
                  </div>
                )}
                <span className="division-num">{division.num}</span>
                <h3>{division.name}</h3>
                <p>{division.short}</p>
                <span className="division-arrow">Learn more →</span>
              </Link>
            ))}
          </div>

          <div className="cta-row">
            <a
              href="mailto:info@usayeed.com?subject=Secure%20Your%20Allocation"
              className="btn btn-primary"
            >
              Secure Your Allocation
            </a>
          </div>
        </div>
      </section>

      <hr />

      {/* ── 2. HOW WE WORK ────────────────────────────────────── */}
      <section id="process" className="process-section">
        <div className="container">
          <p className="section-label">02 — How We Work</p>
          <h2>From one idea to a brand-new thing.</h2>
          <p className="section-intro">
            Every project runs the same way. Nothing gets lost between teams,
            and nothing gets built twice.
          </p>

          <div className="process-grid">
            <div className="process-step">
              <span className="process-num">01</span>
              <h3>Board meeting</h3>
              <p>
                Your idea is first presented in a board meeting, where we break
                it down into small, doable chunks.
              </p>
            </div>
            <div className="process-step">
              <span className="process-num">02</span>
              <h3>Three teams</h3>
              <p>
                Each chunk is handed to the Hardware, Software, and Cloud teams
                to own end to end.
              </p>
            </div>
            <div className="process-step">
              <span className="process-num">03</span>
              <h3>Research &amp; customize</h3>
              <p>
                Each team studies what already exists, then customizes the right
                pieces for your product instead of reinventing them.
              </p>
            </div>
            <div className="process-step">
              <span className="process-num">04</span>
              <h3>A new thing is born</h3>
              <p>
                When something is customized across all three layers — hardware,
                software, and cloud — an entirely new thing is born. That is
                your creativity, and we value it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr />

      {/* ── 3. AMBITION & MISSION ─────────────────────────────── */}
      <section id="mission" className="statement-section">
        <div className="container">
          <p className="section-label">03 — The Mission</p>
          <p className="statement">
            Our aim is to be the best boutique engineering house in the world —
            and we will not rest until complex concepts look effortless.
          </p>
          <div className="cta-row">
            <a
              href="mailto:info@usayeed.com?subject=Initiate%20Project"
              className="btn btn-primary"
            >
              Initiate Project
            </a>
          </div>
        </div>
      </section>

      <hr />

      {/* ── 4. RELATIONSHIP & REASSURANCE ─────────────────────── */}
      <section id="relationship" className="relationship-section">
        <div className="container">
          <p className="section-label">04 — The Partnership</p>
          <h2>
            Trusting us with your initial prototype is nothing less than
            building a bridge between us and you.
          </h2>
          <p>
            It is the benchmark of the standard you set for us, and we expect to
            build a long-term enterprise together.
          </p>
          <p>
            You will know you finally found the expertise you can trust —
            someone who can constantly bring your imagination to complete
            reality.
          </p>
          <p className="hero-hook">Good enough?</p>
          <div className="cta-row">
            <a
              href="mailto:info@usayeed.com?subject=Submit%20Your%20Concept"
              className="btn btn-primary"
            >
              Submit Your Concept
            </a>
          </div>
        </div>
      </section>

      <hr />

      {/* ── 5. THE CLOSER ─────────────────────────────────────── */}
      <section id="closer" className="statement-section closer-section">
        <div className="container">
          <p className="section-label">05 — The Commitment</p>
          <p className="statement">
            You give us one shot here and put your trust in our team.
          </p>
          <p className="statement-sub">
            Believe me: the only problem you are gonna have is that your
            imagination wasn&apos;t complex enough.
          </p>
          <div className="cta-row">
            <a
              href="mailto:info@usayeed.com?subject=Let%27s%20Go%20All-In"
              className="btn btn-primary"
            >
              Go All-In
            </a>
          </div>
        </div>
      </section>

      <hr />

      {/* ── 5. CREDENTIALS ────────────────────────────────────── */}
      <section id="credentials" className="credentials-section">
        <div className="container">
          <div className="credentials-grid">
            <div className="credentials-copy">
              <p className="section-label">06 — Credentials</p>
              <h2>Verified corporate foundation.</h2>
              <p>
                Operating as USAYEED Limited Liability Company, registered under
                the Wyoming Secretary of State. We provide clients, partners,
                and enterprise collaborators the security of a fully compliant
                corporate structure.
              </p>
              <p className="credentials-note">
                State of Wyoming · Certificate of Organization · Cheyenne, WY
              </p>
            </div>

            <a
              href="/usayeed-llc-certificate.png"
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-frame"
              aria-label="View the USAYEED LLC Certificate of Organization"
            >
              <Image
                src="/usayeed-llc-certificate.png"
                alt="State of Wyoming Certificate of Organization for USAYEED Limited Liability Company"
                width={546}
                height={690}
                className="certificate-img"
              />
              <span className="certificate-caption">
                Certificate of Organization — view full size
              </span>
            </a>
          </div>
        </div>
      </section>

      <hr />

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" className="sparse">
        <div className="container">
          <p className="section-label">Contact</p>
          <h2>Let&apos;s build something together.</h2>
          <p className="contact-sub">
            Have a concept in mind? Drop us a line and start the conversation.
          </p>
          <a href="mailto:info@usayeed.com" className="contact-email">
            info@usayeed.com
          </a>
        </div>
      </section>

      <hr />

      <SiteFooter />
    </>
  );
}
