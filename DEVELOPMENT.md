# Development

## Current state

The portfolio now uses a profile-first layout with element-anchored navigation-to-heading-to-panel transitions and persistent light/dark themes. The piano archive has been removed. The live site remains https://sunsongqiao2018.github.io/MyWebsite/.

## Next steps

- Review the live site and collect feedback.
- Confirm real EmailJS delivery on the deployment domain; no email was sent during verification.

## Log

### 2026-09-12 — Connect geometry to page content

Replaced the arbitrary viewport sweep with measured SVG connectors from active navigation to the heading and first content panel. Content enters in sequence as the lines arrive; settled lines become subtle structural edges. Endpoints follow entrance movement, scroll, resize and font loading; mobile starts from the menu control. Reduced-motion preferences disable the effects. Fixed measurement timing after container mounting. Production build, desktop navigation and endpoint alignment, mobile layout and overflow checks passed with no browser errors. See [ElementConnections](src/components/ElementConnections.jsx) and [ConnectedPage](src/components/ConnectedPage.jsx).

### 2026-09-12 — Make page transitions clearly visible

User feedback was that the prior transition was barely noticeable. Replaced the small top-edge trace with a full content-area geometric sweep and three staggered connector lines that fade out after 1.15 seconds. Increased incoming page movement to 28px with a 0.55-second eased entrance, retained a short outgoing fade, and staggered page panels vertically. Overlay is decorative and pointer-transparent; reduced-motion preferences still bypass movement. Verified browser reduced-motion is off, route navigation and settled layouts work, and production build passes. Removed the obsolete top-edge animation styles.

### 2026-09-12 — Remove piano archive; connect pages with geometry

The user rejected the piano design and requested more natural page changes using geometric line segments. Removed LabArchive and its obsolete 3D/file styles, restored the profile-first homepage, and added short sequential fade/translate transitions using the existing Framer Motion dependency. A thin SVG polyline draws across the shared page edge, while the sidebar marker moves to the current destination. Scroll resets after the outgoing page exits. Reduced-motion preferences disable the animated effects. Light/dark themes and the natural-color portrait remain. Production build, sequential navigation, browser Back, single-page rendering, and mobile menu/navigation were verified; no browser errors or mobile horizontal overflow were observed. Source commit: 0b8f802; published to the existing GitHub Pages branch.

### 2026-09-12 — One key, one project file

The user clarified that every key should represent an individual file and link directly to a relevant project. Replaced the thirty decorative bars and selection/readout workflow in [LabArchive](src/components/LabArchive.jsx) with three independent extruded project links. Each shows its own screenshot, title, and technology stack, pulls out alone on hover/focus, and opens its corresponding project in one click. Mobile presents the same files as readable independent cards. Kept light/dark themes, flat-view option, and the natural-color portrait. Production build and desktop/mobile visual checks passed; all three direct links and mobile Enter activation were verified, with no horizontal overflow at 320px.

### 2026-09-12 — Spatial laboratory archive

Upgraded the portfolio based on the user's three UI references: a new [LabArchive](src/components/LabArchive.jsx) presents the three real projects as thirty extruded CSS piano keys grouped into selectable banks. Hover/focus and selection lift the geometry; the project readout and Open Project link track selection. An untransformed file dock supports touch and keyboard selection, with a 3D/flat view switch. Added original SVG construction lines, circles, registration marks, and connected panel rules. [ThemeToggle](src/components/ThemeToggle.jsx) provides persistent light laboratory and dark industrial themes across all four pages. Kept the portrait in natural color and all existing content and contact functionality.

Validation: production build passed; visually checked light/dark desktop archive, 390px mobile archive, and light contact layout. Tested project selection through both physical keys and the dock, project detail navigation, flat-view toggle, and theme persistence after reload. All four routes at 320px and 768px had no horizontal overflow; browser error log was empty. Uses CSS/SVG geometry without a new rendering dependency or copied game assets. Prepared for the existing GitHub Pages deployment.

### 2026-09-12 — Natural-color portrait

Responding to feedback that the monochrome portrait felt too somber, removed the grayscale filter and restored full image opacity. Moved the dark gradient toward the bottom so the face stays bright while caption text remains readable. Production build and visual preview passed; this update is prepared for the existing GitHub Pages site.

### 2026-09-12 — Deployed to GitHub Pages

At the user's explicit request, published the validated build from source commit `6eb8e55` to the existing `gh-pages` branch, retaining the established `/MyWebsite/` URL and adding `.nojekyll`. Verified the public site serves the new `index-dc333fd8.js` build and inspected the rendered homepage: navigation, typography, and portrait load correctly. Live URL: https://sunsongqiao2018.github.io/MyWebsite/. The contact service was preserved; real email delivery remains untested.

### 2026-09-12 — GitHub delivery

The user requested pushing the finished redesign to `sunsongqiao2018/MyWebsite`. Prepared the source, rebuilt production output, and documentation for a commit on `main`; fetched the remote before pushing to check for concurrent changes. Dependency files and temporary tooling are excluded from the commit. This GitHub delivery does not run the separate GitHub Pages deployment command.

### 2026-09-12 — Portfolio layout redesign

Rebuilt Overview, About, Projects, Contact, and the shared navigation to fulfill the request for an Arknights-inspired frontend upgrade. Added monochrome portrait treatment, condensed display typography, signal-yellow accents, numbered panels, responsive navigation, and consistent desktop/mobile layouts. Preserved the existing personal content and three projects; centralized project/skill data in [src/data.js](src/data.js), exposed both Kinect images, and kept the personal gallery and social links. Replaced wheel-capturing project navigation with explicit accessible buttons and shareable project selection. Contact labels, submission feedback, and local daily-limit rollover were corrected while retaining the existing EmailJS integration. Added static-host-safe hash routing, page titles, metadata, a portfolio favicon, and [run/edit instructions](README.md).

Validation: production build passed; checked desktop layouts, 390px mobile menu and project browsing, all four pages at 320px and 768px with no horizontal overflow, nested-route refresh, all project selections, Kinect image switching, gallery controls, and empty-form validation. Final production browser error log was empty. Email delivery was not exercised. No game assets were added; all photos/screenshots remain from the original repository. Changes and build output are local only.
