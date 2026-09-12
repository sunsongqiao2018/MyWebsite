# Songqiao Sun — Personal Portfolio

A React portfolio with an Arknights-inspired industrial interface: a numbered navigation rail, natural-color portrait, condensed typography, signal-yellow accents, and structured project dossiers. Original photographs, projects, skills, and social destinations are retained. No game artwork or logos are included.

## Run locally

```sh
npm install
npm run dev
```

Open the printed `/MyWebsite/` URL. The current local production preview is available at `http://127.0.0.1:5173/MyWebsite/` while the preview process is running.

## Build and preview

```sh
npm run build
npm run preview
```

The output is in `dist/`. The existing GitHub Pages base path `/MyWebsite/` is preserved. Hash routes such as `/MyWebsite/#/projects?project=03` support directly opening and refreshing pages on static hosting, without server rewrites. The existing `npm run deploy` command publishes to GitHub Pages; this redesign is live at [sunsongqiao2018.github.io/MyWebsite](https://sunsongqiao2018.github.io/MyWebsite/).

## Edit content and design

- `src/data.js`: project descriptions, screenshots, categories, technologies, and skills.
- `src/pages/`: Overview, About, Projects, and Contact.
- `src/components/Navbar.jsx`: shared desktop navigation and mobile menu.
- `src/styles/global.css`: design tokens, shared layouts, breakpoints, and reduced-motion styling.
- `src/assets/`: original photographs and project images.
- `public/favicon.svg`: original portfolio monogram.

The typography uses Barlow, Barlow Condensed, and IBM Plex Mono from Google Fonts, with system fallbacks if the font service cannot load. Visual direction reference: [Arknights official website](https://arknights.global/).

The contact form retains the existing EmailJS service and template, with required-field validation, sending/success/error states, and the existing three-messages-per-day local browser limit. This local limit is a convenience only; service-side abuse protection remains the responsibility of the EmailJS configuration. The redesign was verified without sending real email.

## Verification

Production build passes. Browser checks covered desktop presentation, 390px mobile navigation and project layout, all four routes at 320px and 768px without horizontal overflow, project selection, Kinect image switching, gallery previous/next, required-field validation, and refresh of a nested hash route. No browser errors were observed in the final production preview.

See [DEVELOPMENT.md](DEVELOPMENT.md) for the change log and remaining release steps. The repository already tracks dependencies and build outputs; existing tracked dependency files were left unchanged. New local tooling and Vite cache output are ignored.
