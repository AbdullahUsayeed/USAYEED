import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteNav from "../../components/SiteNav";
import SiteFooter from "../../components/SiteFooter";
import { divisions, getDivision } from "../divisions";

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const division = getDivision(params.slug);
  if (!division) return { title: "Division not found" };
  return {
    title: `${division.headline} — Hardware, Software & Cloud Team`,
    description: division.tagline,
    alternates: { canonical: `https://usayeed.com/teams/${division.slug}` },
  };
}

export default function DivisionPage({
  params,
}: {
  params: { slug: string };
}) {
  const division = getDivision(params.slug);
  if (!division) notFound();

  return (
    <>
      <SiteNav />
      <main className="detail-page">
        <p className="section-label">Division {division.num}</p>
        <h1>{division.headline}</h1>
        <p className="lead">{division.tagline}</p>

        {division.flagship && (
          <section className="detail-section flagship">
            <p className="section-label">{division.flagship.kicker}</p>
            <h2 className="flagship-title">{division.flagship.name}</h2>

            <div className="flagship-teaser">
              <div className="flagship-intro">
                <p>{division.flagship.intro}</p>

                <details className="flagship-explorer">
                  <summary className="btn btn-primary flagship-explore">
                    Explore UCAD
                  </summary>
                  <div className="flagship-details">
                    <p className="flagship-summary">
                      {division.flagship.summary}
                    </p>

                    <h3>What it does</h3>
                    <ul className="flagship-features">
                      {division.flagship.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>

                    <div className="cta-row">
                      <a
                        href={division.flagship.downloadUrl}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {division.flagship.downloadLabel}
                      </a>
                    </div>
                  </div>
                </details>
              </div>

              {division.flagship.demoEmbedUrl && (
                <div className="demo-frame">
                  <iframe
                    src={division.flagship.demoEmbedUrl}
                    title={`${division.flagship.name} demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {division.callout && (
          <section className="detail-section callout">
            <p className="section-label">{division.callout.kicker}</p>
            <h2 className="callout-title">{division.callout.title}</h2>
            <p className="callout-body">{division.callout.body}</p>
          </section>
        )}

        <section className="detail-section">
          <h2>Who we are</h2>
          {division.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="detail-section">
          <h2>What we own</h2>
          <div className="focus-grid">
            {division.focus.map((item) => (
              <div className="focus-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {division.experience && division.experience.length > 0 && (
          <section className="detail-section">
            <h2>Selected experience</h2>
            <div className="experience-grid">
              {division.experience.map((item) => (
                <article className="experience-card" key={item.name}>
                  <span className="product-kind">{item.kind}</span>
                  <h3>{item.name}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="detail-section">
          <h2>Capabilities</h2>
          <ul>
            {division.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>Tooling &amp; stack</h2>
          <div className="stack-tags">
            {division.stack.map((tool) => (
              <span className="tag" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </section>

        {division.openSourceNote && (
          <section className="detail-section open-source-note">
            <h2>Open source, by default</h2>
            <p>{division.openSourceNote}</p>
          </section>
        )}

        <div className="cta-row">
          <Link href="/#contact" className="btn btn-primary">
            Work With This Team
          </Link>
        </div>

        <p className="detail-back">
          <Link href="/teams" className="detail-link">
            ← All divisions
          </Link>
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
