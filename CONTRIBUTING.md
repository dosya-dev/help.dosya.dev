# Contributing to the dosya help center

Thanks for looking. Corrections are the most useful thing you can send: a step that no
longer matches the app, a missing case, a broken link, a typo.

## Reporting a problem with a guide

Open an issue with the guide's URL and what you saw. A screenshot of the app next to the
step that is wrong helps a lot. Please leave out passwords, API keys, recovery keys and
private links.

## Pull requests

This repository is a mirror. Pull requests are welcome, but we do not merge them here:
when we accept one, we apply the change in our main repository and credit you in the
commit. It shows up here with the next sync.

To make that easy:

- Edit the Markdown in `src/content/articles/`. Keep the JSON block at the top valid.
- If you change a guide's title, summary, category or slug, bump its `revision`. The
  build refuses to rewrite a published revision.
- Run `npm run build` and `npm run test` before you open the pull request.
- Write plain sentences. No em dashes, no exclamation marks, no marketing copy.
- Describe what the reader should do and check, not how the product is built.

## What we will not merge

- New guides for features dosya does not have, or that describe planned behavior as
  if it shipped.
- Screenshots that show real people's data, email addresses or file names.
- Links to third-party tools offered as the fix when dosya has its own way to do it.

## Security

Found a vulnerability in dosya itself? Please report it privately via
[GitHub private vulnerability reporting](../../security/advisories/new), not in an issue.
