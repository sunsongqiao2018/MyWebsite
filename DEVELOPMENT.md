# Development

## Current state

The four-page React portfolio now uses an original industrial terminal layout inspired by Arknights. Source and production build are included in the redesign commit on `main`, with GitHub delivery authorized by the user. Website deployment has not been run. The GitHub Pages base remains `/MyWebsite/`; client routes now use hashes for static-host refresh support.

## Next steps

- Review the updated repository and deploy the website when ready.
- Confirm real EmailJS delivery on the deployment domain; no email was sent during verification.

## Log

### 2026-09-12 — GitHub delivery

The user requested pushing the finished redesign to `sunsongqiao2018/MyWebsite`. Prepared the source, rebuilt production output, and documentation for a commit on `main`; fetched the remote before pushing to check for concurrent changes. Dependency files and temporary tooling are excluded from the commit. This GitHub delivery does not run the separate GitHub Pages deployment command.

### 2026-09-12 — Portfolio layout redesign

Rebuilt Overview, About, Projects, Contact, and the shared navigation to fulfill the request for an Arknights-inspired frontend upgrade. Added monochrome portrait treatment, condensed display typography, signal-yellow accents, numbered panels, responsive navigation, and consistent desktop/mobile layouts. Preserved the existing personal content and three projects; centralized project/skill data in [src/data.js](src/data.js), exposed both Kinect images, and kept the personal gallery and social links. Replaced wheel-capturing project navigation with explicit accessible buttons and shareable project selection. Contact labels, submission feedback, and local daily-limit rollover were corrected while retaining the existing EmailJS integration. Added static-host-safe hash routing, page titles, metadata, a portfolio favicon, and [run/edit instructions](README.md).

Validation: production build passed; checked desktop layouts, 390px mobile menu and project browsing, all four pages at 320px and 768px with no horizontal overflow, nested-route refresh, all project selections, Kinect image switching, gallery controls, and empty-form validation. Final production browser error log was empty. Email delivery was not exercised. No game assets were added; all photos/screenshots remain from the original repository. Changes and build output are local only.
