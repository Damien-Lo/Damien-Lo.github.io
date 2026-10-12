# damien-lo.github.io

Personal academic website of Damien Lo, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Updating content

Most changes are one-line edits in `src/data/`:

- `profile.ts`: role, intro, links (add the Google Scholar URL here), "last updated" dates
- `publications.ts`: papers and thesis. Change a paper's `status` and `venue` when a decision comes in, and add `links.paper` / `links.code` once they are public. Buttons only appear for links that are set.
- `news.ts`: dated news items on the home page
- `timeline.ts`: the timeline on the About page

To replace the CV, overwrite `public/cv.pdf` and update `cvUpdated` in `profile.ts`.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Pushing to `main` builds and deploys the site through `.github/workflows/deploy.yml`.
