# LearnCad landing page

Static landing page for LearnCad. No build step, no framework, no external CDNs.

## Preview on localhost

From the repository root:

```powershell
python -m http.server 8000 --directory site
```

Open <http://127.0.0.1:8000/>.

The download buttons point at `site/downloads/`, which currently contains the
0.6.1 installer and portable zip.

## Pages

- `index.html` - landing page and the "how to learn CAD" roadmap.
- `learn-freecad.html` - long-form beginner guide targeting FreeCAD searches.
- `freecad-look-like-solidworks.html` - visual quality guide targeting "FreeCAD looks worse than SolidWorks" and "make FreeCAD look better" searches.
- `styles.css` - shared design.
- `script.js` - mobile nav, copy-hash buttons, current year.
- `robots.txt`, `sitemap.xml` - SEO files.
- `assets/` - logo, favicon, social image.
- `downloads/` - local installer artifacts.

## Before deploying

Replace the placeholder domain in every file. Search for:

```text
learncad.example.com
```

Update these files:

- `index.html` canonical, Open Graph, Twitter, and JSON-LD URLs.
- `learn-freecad.html` canonical, Open Graph, Twitter, and JSON-LD URLs.
- `robots.txt` sitemap URL.
- `sitemap.xml` loc entries.

Also update the GitHub and demo-video placeholders. The current download buttons
use local files; for production, either upload `site/downloads/` or point the
buttons at GitHub Releases.

## SEO checklist

Technical:

- Submit `sitemap.xml` in Google Search Console after deployment.
- Confirm the canonical URLs match the live domain.
- Keep the pages static and fast. No external fonts or trackers.
- Make sure the site is mobile-friendly (it is responsive).
- Add the site to Bing Webmaster Tools as well.

Content:

- The pages target "how to learn CAD", "learn CAD for beginners",
  "why FreeCAD looks worse than SolidWorks", "make FreeCAD look better",
  "how to learn FreeCAD", and "FreeCAD tutorial for beginners".
- The long-form guide is the main ranking asset. Keep updating it.
- Add real screenshots and a 60-90 second demo video. Engagement and time on
  page matter.
- Publish follow-up guides for high-intent searches:
  - "FreeCAD sketch won't close"
  - "FreeCAD pad failed"
  - "FreeCAD for 3D printing"
  - "FreeCAD constraints explained"
  - "FreeCAD vs Fusion 360 for beginners"

Authority:

- Share genuinely useful answers on the FreeCAD forum, r/FreeCAD,
  r/3Dprinting, Hacker News, and YouTube. Link the guide only when it answers
  the question.
- Ask FreeCAD YouTubers to review the addon.
- Keep the GitHub repository active and link it from the site.

No page can guarantee a first-place ranking. Search results depend on content
quality, backlinks, competition, and time. The goal here is to be the most
useful result for a beginner, not to stuff keywords.

## Demo video

Record a 60-90 second screen capture:

1. 0-10s: a beginner is stuck on a red or under-constrained sketch.
2. 10-30s: LearnCad explains the exact missing constraint and preselects the
   endpoints.
3. 30-50s: Guide Me opens the Pad or Hole dialog.
4. 50-70s: a valid solid, export, and the result.

Save it as `site/assets/demo.mp4` and a poster as
`site/assets/demo-poster.png`. Replace the `.demo` placeholder in `index.html`
with a native `<video>` element.

## Blender renders

The LearnCad panel can render a photorealistic still by exporting the active solid to Blender. Blender is optional and is not required for the site or the normal viewport. The render bridge includes aluminum, plastic, and rubber material presets and uses Cycles for reflective metal.

## Rebuilding downloads

After a new installer build:

```powershell
powershell -ExecutionPolicy Bypass -File .\installer\build_installer.ps1
powershell -ExecutionPolicy Bypass -File .\tools\build_portable.ps1
```

Then copy the new files into `site/downloads/` and update the version, size,
and SHA256 values in `index.html` and `learn-freecad.html`.

## Deployment

Any static host works:

- Cloudflare Pages
- Netlify
- Vercel
- GitHub Pages
- A plain nginx/Apache folder

Set the site root to `site/`. No server-side code is required.
