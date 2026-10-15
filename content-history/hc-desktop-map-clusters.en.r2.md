---
{
  "articleId": "hc-desktop-map-clusters",
  "locale": "en",
  "revision": 2,
  "title": "Expand a photo cluster on desktop",
  "summary": "Select or zoom the cluster until its locations separate, then Confirm that individual markers can be opened.",
  "category": "desktop",
  "articleSlug": "desktop-map-clusters",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current expand a photo cluster on desktop workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-file-map",
    "hc-review-duplicates"
  ],
  "keywords": [
    "desktop map clusters",
    "Desktop map, duplicates, and media",
    "Dosya help",
    "cloud storage"
  ]
}
---
Expand a photo cluster on desktop is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide covers how to expand a photo cluster on desktop and verify the resulting state.

The main checks are the active workspace, local path and desktop sync state. Use a small local test and distinguish the device copy from the cloud copy before approving a broader change.

<figure class="help-screenshot"><a href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp"><img src="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp" alt="Four-step interface map for expand a photo cluster on desktop, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/desktop-map-clusters-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify cluster containing multiple files.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: expand a photo cluster on desktop

1. Open the Dosya desktop app and confirm the active account and workspace.
2. Locate cluster containing multiple files and verify its name or identifying details.
3. Select or zoom the cluster until its locations separate.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that individual markers can be opened.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop app overview for map, duplicate, and media tools." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm the active workspace and test destructive duplicate cleanup with disposable copies. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm that individual markers can be opened. Refresh or reopen the relevant view once to verify the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The controlled workflow completes and individual markers can be opened. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Explore the map](/files/file-map)
- [Review duplicates](/files/review-duplicates)
