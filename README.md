# Cairn em Português

This repository holds the Portuguese (Brazil) translation of the [Cairn](https://cairnrpg.com) RPG rules. The site is built with [Astro Starlight](https://starlight.astro.build) and published to GitHub Pages:
https://renanstigliani.github.io/cairn-astro/

## Run locally

You need Node.js 24.

```sh
npm install
npm run dev
```

Then open http://localhost:4321/cairn-astro/.

To build the static site into `dist/`, run `npm run build`.

## Edit content

Pages are Markdown files in `src/content/docs/`. The file path sets the page URL. For example, `src/content/docs/regras/core-rules.md` is published at `/regras/core-rules/`.

- Write internal links as site paths, such as `/regras/marketplace/#equipamentos`. The build adds the base path.
- Images and downloads are in `public/`. Link to them the same way, such as `/img/2e/forestcrawl.png`.
- The sidebar is set in `astro.config.mjs`. Add new pages there.

Every push and pull request builds the site and checks all internal links and headings. A broken link fails the build.

## License

The text is licensed under [CC-BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0).
