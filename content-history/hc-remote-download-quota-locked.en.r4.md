---
{
  "articleId": "hc-remote-download-quota-locked",
  "locale": "en",
  "revision": 4,
  "title": "Fix remote-download quota or locked-destination errors",
  "summary": "Free or add storage, or select an unlocked destination folder, then retry. Verify that the new job reserves storage and can write to its destination.",
  "category": "integrations",
  "articleSlug": "remote-download-quota-locked",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download quota locked",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Fix remote-download quota or locked-destination errors** in Dosya. The main action is to free or add storage, or select an unlocked destination folder, then retry; the decisive check is whether the new job reserves storage and can write to its destination.

<figure class="help-screenshot"><a href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp"><img src="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp" alt="Workflow for “Fix remote-download quota or locked-destination errors”: free or add storage, or select an unlocked destination folder, then retry; the new job reserves storage and can write to its destination." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Fix remote-download quota or locked-destination errors”: free or add storage, or select an unlocked destination folder, then retry; the new job reserves storage and can write to its destination. <a href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Remote Downloads and locate the job reporting Not enough storage or Destination is a locked backup.
- Confirm the active account and workspace, then identify job reporting Not enough storage or Destination is a locked backup.

## Steps: fix remote-download quota or locked-destination errors

1. Confirm the account and workspace in Integrations > Remote Downloads when reviewing the job reporting Not enough storage or Destination is a locked backup.
2. Locate job reporting Not enough storage or Destination is a locked backup and verify its name or identifying details.
3. Free or add storage, or select an unlocked destination folder, then retry.
4. Confirm that the new job reserves storage and can write to its destination.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Fix remote-download quota or locked-destination errors”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fix remote-download quota or locked-destination errors”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Only fetch content you are authorized to store, from a direct HTTPS file address.

## Verify the result

After completing the steps, check the expected result: The new job reserves storage and can write to its destination.

## Expected result

The controlled workflow completes and the new job reserves storage and can write to its destination.

## Troubleshooting

**The expected control is missing.** If the required control is missing for the job reporting Not enough storage or Destination is a locked backup, check the active workspace, your role and the client version.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
