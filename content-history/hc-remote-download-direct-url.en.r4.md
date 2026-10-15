---
{
  "articleId": "hc-remote-download-direct-url",
  "locale": "en",
  "revision": 4,
  "title": "Tell a direct file URL from a share page",
  "summary": "Open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page. Verify that the URL is suitable for server-side fetching.",
  "category": "integrations",
  "articleSlug": "remote-download-direct-url",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download direct url",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Tell a direct file URL from a share page** in Dosya. The main action is to open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page; the decisive check is whether the URL is suitable for server-side fetching.

<figure class="help-screenshot"><a href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp"><img src="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp" alt="Workflow for “Tell a direct file URL from a share page”: open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page; the URL is suitable for server-side fetching." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Tell a direct file URL from a share page”: open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page; the URL is suitable for server-side fetching. <a href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Remote Downloads and locate the candidate HTTPS source address.
- Confirm the active account and workspace, then identify candidate HTTPS source address.

## Steps: tell a direct file URL from a share page

1. Confirm the account and workspace in Integrations > Remote Downloads when reviewing the candidate HTTPS source address.
2. Locate candidate HTTPS source address and verify its name or identifying details.
3. Open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page.
4. Confirm that the URL is suitable for server-side fetching.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Tell a direct file URL from a share page”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Tell a direct file URL from a share page”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Only fetch content you are authorized to store, from a direct HTTPS file address.

## Verify the result

After completing the steps, check the expected result: The URL is suitable for server-side fetching.

## Expected result

The controlled workflow completes and the URL is suitable for server-side fetching.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the candidate HTTPS source address, check the active workspace, your role and the client version.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
