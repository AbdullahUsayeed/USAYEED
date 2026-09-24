"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

// ── BILLBOARD CONCEPTS ──────────────────────────────────────────
// The opening billboard cycles through things this lab can imagine
// and build. Swap imagery by dropping files in /public and editing
// the list below.
type Concept = {
  src: string;
  title: string;
};

const CONCEPTS: Concept[] = [
  {
    src: "/aircraft-warning-alarm.png",
    title:
      "Designing a titanium alarm clock replicating an aircraft warning system in FREECAD",
  },
  {
    src: "/solarcharger.png",
    title:
      "Custom MPPT solar charger for a yacht — TI BQ24650, fully analogue, zero software, engineered for absolute reliability",
  },
  {
    src: "/festabu1.png",
    title:
      "Festabu — a new kind of marketplace built to host festivals. Claim your custom tent.",
  },
  {
    src: "/festabu2.png",
    title: "Customize your tent to your music taste, to your theme.",
  },
  {
    src: "/festabu3.png",
    title: "Then run it all from your seller dashboard.",
  },
  { src: "/mainui.jpg", title: "A cockpit that knows you before you touch it." },
];

const INTERVAL_MS = 6000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  const go = useCallback((dir: number) => {
    setActive((i) => (i + dir + CONCEPTS.length) % CONCEPTS.length);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || CONCEPTS.length < 2) return;

    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % CONCEPTS.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [active]);

  const concept = CONCEPTS[active];

  return (
    <div className="container billboard-grid">
      {/* Left — the writing */}
      <div className="billboard-main">
        <span className="eyebrow">Hardware · Software · Cloud</span>
        <h1>
          You had the idea.
          <br />
          You just didn&apos;t have the tools to build it.
        </h1>
        <p className="hero-promise">
          Bring us the concept. We turn it into a working physical prototype in
          two weeks.
        </p>
        <div className="hero-cta-row">
          <a
            href="mailto:info@usayeed.com?subject=Start%20My%20Build"
            className="btn btn-primary"
          >
            Start Your Build
          </a>
        </div>
      </div>

      {/* Right — the slide */}
      <div className="billboard-media">
        <div className="hero-slideshow" aria-hidden="true">
          {CONCEPTS.map((slide, i) => (
            <div
              key={slide.src}
              className={`hero-slide${i === active ? " is-active" : ""}`}
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="hero-slide-img"
              />
            </div>
          ))}
          <div className="hero-scrim" />
        </div>

        <div className="billboard-caption">
          <div className="strip-copy" key={active}>
            <span className="strip-index">
              {String(active + 1).padStart(2, "0")}
            </span>
            <span className="strip-title">{concept.title}</span>
          </div>
          <div className="strip-controls">
            <button
              type="button"
              className="strip-arrow"
              onClick={() => go(-1)}
              aria-label="Previous concept"
            >
              ←
            </button>
            <div className="strip-progress">
              {CONCEPTS.map((slide, i) => (
                <button
                  key={slide.src}
                  type="button"
                  className={`strip-seg${i === active ? " is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Show concept ${i + 1}: ${slide.title}`}
                  aria-current={i === active}
                />
              ))}
            </div>
            <button
              type="button"
              className="strip-arrow"
              onClick={() => go(1)}
              aria-label="Next concept"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
