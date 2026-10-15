---
{"articleId":"hc-file-map","locale":"en","revision":1,"title":"Explore files on the map","summary":"Open the map view, filter geotagged items by workspace and area, and verify a file before using location metadata.","category":"files","articleSlug":"file-map","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current explore files on the map workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-search-files","hc-preview-files"],"keywords":["file map","geotagged photos","location metadata"]}
---
The map shows files with available location metadata. It does not infer a location for files that lack it.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: explore files on the map

1. Open the Map view in the intended workspace.
2. Allow the map to load available geotagged items.
3. Pan, zoom or use supported filters.
4. Select a marker or cluster.
5. Open the file details and verify the item.
6. Treat location metadata as file information that may be missing or inaccurate.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file preview displaying a supported image with viewer controls inside the current workspace." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Verify the file name and workspace before using viewer or editing actions. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The explore files on the map workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Search files](/files/search-files)
- [Preview files](/files/preview-files)
