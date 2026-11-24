# Songqiao Sun — Personal Portfolio

A React portfolio inspired by the visual direction of [Hypergryph Careers](https://career.hypergryph.com/): a dark-by-default monochrome canvas, electric lime accents, oversized condensed type, construction grids, and original faceted S artwork. A horizontal navigation bar connects Overview, About, Projects, and Contact. The simplified homepage focuses on the introduction, four projects, and a contact invitation. The portrait stays in natural color, and the gallery, social links, and EmailJS integration are retained.

## Local development

```sh
npm install
npm run dev
```

Open the printed `/MyWebsite/` URL. Use `npm run build` for a production build and `npm run preview` to inspect it. The existing GitHub Pages base path and hash routes are preserved, including direct project links such as `/MyWebsite/#/projects?project=04`. `npm run deploy` is the separate GitHub Pages publication command.

## Editing

- `src/styles/global.css`: colors, typography, page layouts, responsive breakpoints, and reduced-motion preferences.
- `src/pages/Home.jsx`: homepage hero, expertise, project cards, and contact invitation.
- `src/components/GeometricMark.jsx`: original faceted SVG sculpture.
- `src/components/Navbar.jsx`: desktop links and accessible mobile navigation.
- `src/components/ThemeToggle.jsx`: dark default with explicitly saved light/dark choices. `index.html` applies the choice before first paint. The new `portfolio-theme-preference` key replaces the old automatically saved default.
- `src/components/HeroArtwork.jsx`: spring-smoothed pointer tilt, scroll depth, and offscreen-paused sculpture motion.
- `src/components/ConnectedPage.jsx`: route exits and staggered viewport reveals that also reveal on keyboard focus.
- `src/data.js`: project content, images, technology stacks, and skills.
- `src/pages/`: About, Projects, and Contact pages.
- `src/assets/`: original photographs and project screenshots.

Motion includes masked headline and portrait entrances, staggered section reveals, project/image transitions, and hover feedback. Reduced-motion preferences disable decorative animation and parallax.

Typography uses Barlow, Barlow Condensed, and IBM Plex Mono through Google Fonts, with system fallbacks. The design uses original vector artwork rather than the reference site's branding or assets.

The contact form retains required-field validation, EmailJS delivery, sending/success/error feedback, and its existing three-message local daily limit. Real email delivery requires the existing service configuration and is not exercised during visual QA.

See `DEVELOPMENT.md` for the implementation log and verification details. GitHub Pages is published separately from the source branch.
