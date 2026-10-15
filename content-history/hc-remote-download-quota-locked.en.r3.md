---
{
  "articleId": "hc-remote-download-quota-locked",
  "locale": "en",
  "revision": 3,
  "title": "Fix remote-download quota or locked-destination errors",
  "summary": "Free or add storage, or select an unlocked destination folder, then retry. Verify that the new job reserves storage and can write to its destination.",
  "category": "integrations",
  "articleSlug": "remote-download-quota-locked",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp"><img src="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp" alt="Four-step workflow map for fix remote-download quota or locked-destination errors, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for fix remote-download quota or locked-destination errors: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/remote-download-quota-locked-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Integrations > Remote Downloads in the current released client.
- Confirm the active account and workspace, then identify job reporting Not enough storage or Destination is a locked backup.

## Steps: fix remote-download quota or locked-destination errors

1. Open Integrations > Remote Downloads and confirm the active account and workspace.
2. Locate job reporting Not enough storage or Destination is a locked backup and verify its name or identifying details.
3. Free or add storage, or select an unlocked destination folder, then retry.
4. Confirm that the new job reserves storage and can write to its destination.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Dosya Remote Downloads overview for diagnosing direct-link and source failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Only fetch content you are authorized to store, from a direct HTTPS file address. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The new job reserves storage and can write to its destination.

## Expected result

The controlled workflow completes and the new job reserves storage and can write to its destination.

## Troubleshooting

**The expected control is missing.** Return to Integrations > Remote Downloads, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
