# dosya help center

The source of [help.dosya.dev](https://help.dosya.dev), the help center for
[dosya.dev](https://dosya.dev). Every guide on the site is a Markdown file in this
repository, so you can read how an article was written, see when it last changed, and
point at the exact line that is wrong.

## What is in here

- `src/content/articles/` - one Markdown file per guide. The JSON block at the top holds
  the title, summary, category, revision, review date and related guides.
- `content-history/` - every published revision of every guide. History is immutable:
  changing the title, summary, category or slug of a guide requires a new revision.
- `public/screenshots/` - the screenshots used in guides, taken with test data.
- `src/` - the Astro site: layouts, category and search pages, and the sitemap.
- `scripts/` - content tooling. `content.mjs` builds the search index, `llms.txt` and the
  revision registry; `audit-content.mjs` scores guides for completeness.
- `worker/` - the Cloudflare Worker that serves the built site.

## Tech stack

- **Astro 6** - static site generation
- **TypeScript** - site code
- **Vitest** - content and build checks
- **Cloudflare Workers** - hosting

## Development

### Prerequisites

- Node.js >= 22
- npm

### Commands

```bash
npm install        # Install dependencies
npm run dev        # Start the dev server on http://localhost:4324
npm run build      # Rebuild generated content, then build the site
npm run test       # Run the vitest suite
npm run audit:content
```

Search on the live site and the "Was this helpful?" widget talk to the dosya.dev API.
They are not part of this repository.

## How changes reach the site

This repository is a one-way mirror of the help center inside the dosya.dev main
repository. We publish to it from there, so a pull request here is not merged directly.
When we accept a change, we apply it in the main repository, credit you in the commit,
and it appears here with the next sync. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

Source-available under the [Dosya Source Available License 1.0](LICENSE):

- **You can** read and audit the code and the guides, build and run the site, and
  contribute improvements.
- **You can't** redistribute it, republish the guides elsewhere, or offer it as a service.

See [LICENSE](LICENSE) for the exact terms.

## Security

Found a vulnerability? Please report it privately via
[GitHub private vulnerability reporting](../../security/advisories/new) rather than a
public issue.

## The dosya.dev family

| Repository | What it is | License |
|---|---|---|
| [help.dosya.dev](https://github.com/dosya-dev/help.dosya.dev) | Help center - guides and site | Source-available |
| [desktop](https://github.com/dosya-dev/desktop) | Desktop client - sync, upload, manage | Source-available |
| [cli](https://github.com/dosya-dev/cli) | Command-line interface | Source-available |
| [app.dosya.dev](https://github.com/dosya-dev/app.dosya.dev) | Web application | Source-available |
| [shared](https://github.com/dosya-dev/shared) | Shared TypeScript types & utilities | Source-available |
| [wordpress](https://github.com/dosya-dev/wordpress) | WordPress plugin - backup, restore, migrate | GPL-2.0-or-later |
| [browser-extensions](https://github.com/dosya-dev/browser-extensions) | Browser extension - Save to dosya for Chrome, Edge, Firefox | Source-available |
| [dosya-js](https://github.com/dosya-dev/dosya-js) | Official JavaScript SDK | MIT |
| [dosya-java](https://github.com/dosya-dev/dosya-java) | Official Java SDK | MIT |
