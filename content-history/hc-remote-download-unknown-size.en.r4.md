---
{
  "articleId": "hc-remote-download-unknown-size",
  "locale": "en",
  "revision": 4,
  "title": "Fix an unknown-size remote download",
  "summary": "Use a source that provides a reliable file length or download locally and upload through Dosya. Verify that the next transfer has a known size before storage reservation.",
  "category": "integrations",
  "articleSlug": "remote-download-unknown-size",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download unknown size",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Fix an unknown-size remote download** in Dosya. The main action is to use a source that provides a reliable file length or download locally and upload through Dosya; the decisive check is whether the next transfer has a known size before storage reservation.

<figure class="help-screenshot"><a href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp"><img src="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp" alt="Workflow for “Fix an unknown-size remote download”: use a source that provides a reliable file length or download locally and upload through Dosya; the next transfer has a known size before storage reservation." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Fix an unknown-size remote download”: use a source that provides a reliable file length or download locally and upload through Dosya; the next transfer has a known size before storage reservation. <a href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Remote Downloads and locate the job reporting Unknown file size.
- Confirm the active account and workspace, then identify job reporting Unknown file size.

## Steps: fix an unknown-size remote download

1. Confirm the account and workspace in Integrations > Remote Downloads when reviewing the job reporting Unknown file size.
2. Locate job reporting Unknown file size and verify its name or identifying details.
3. Use a source that provides a reliable file length or download locally and upload through Dosya.
4. Confirm that the next transfer has a known size before storage reservation.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Fix an unknown-size remote download”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fix an unknown-size remote download”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Only fetch content you are authorized to store, from a direct HTTPS file address.

## Verify the result

After completing the steps, check the expected result: The next transfer has a known size before storage reservation.

## Expected result

The controlled workflow completes and the next transfer has a known size before storage reservation.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the job reporting Unknown file size, check the active workspace, your role and the client version.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
