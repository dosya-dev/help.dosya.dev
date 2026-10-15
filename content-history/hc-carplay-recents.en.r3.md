---
{
  "articleId": "hc-carplay-recents",
  "locale": "en",
  "revision": 3,
  "title": "Open recently played Dosya audio",
  "summary": "Open Recents and select the track, then verify that playback resumes from the chosen recent item.",
  "category": "files",
  "articleSlug": "carplay-recents",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current open recently played dosya audio workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-media-preview",
    "hc-mobile-browse"
  ],
  "keywords": [
    "carplay recents",
    "in-car audio",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to open recently played Dosya audio in the intended account or workspace.

The main checks are the mobile account, workspace and device permission. Use a non-confidential mobile test and confirm the cloud result from Files before removing device data.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-recents-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/carplay-recents-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" alt="Four-step interface map for open recently played dosya audio, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-recents-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-recents-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Dosya in the car display in the current released Dosya client.
- Confirm the active account and workspace, then identify a track played recently on the account.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: open recently played Dosya audio

1. Open Dosya in the car display and confirm the active workspace.
2. Select a track played recently on the account and check its name or identifying details.
3. Open Recents and select the track.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that playback resumes from the chosen recent item.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview surface representing a supported library item before in-car playback." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Park safely before browsing or typing; use vehicle controls while driving. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that playback resumes from the chosen recent item. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and playback resumes from the chosen recent item. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Dosya in the car display, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Browse files on mobile](/files/mobile-browse-files)
