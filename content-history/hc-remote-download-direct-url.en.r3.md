---
{
  "articleId": "hc-remote-download-direct-url",
  "locale": "en",
  "revision": 3,
  "title": "Tell a direct file URL from a share page",
  "summary": "Open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page. Verify that the URL is suitable for server-side fetching.",
  "category": "integrations",
  "articleSlug": "remote-download-direct-url",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp"><img src="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp" alt="Four-step workflow map for tell a direct file url from a share page, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for tell a direct file url from a share page: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Remote Downloads in the current released client.
- Confirm the active account and workspace, then identify candidate HTTPS source address.

## Steps: tell a direct file URL from a share page

1. Open Integrations > Remote Downloads and confirm the active account and workspace.
2. Locate candidate HTTPS source address and verify its name or identifying details.
3. Open it in a private browser context and confirm it returns the file itself instead of an HTML sign-in or sharing page.
4. Confirm that the URL is suitable for server-side fetching.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Dosya Remote Downloads overview for diagnosing direct-link and source failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Only fetch content you are authorized to store, from a direct HTTPS file address. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The URL is suitable for server-side fetching.

## Expected result

The controlled workflow completes and the URL is suitable for server-side fetching.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Remote Downloads, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
