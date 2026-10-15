---
{
  "articleId": "hc-map-filter-files",
  "locale": "en",
  "revision": 3,
  "title": "Filter files on the map",
  "summary": "Choose date, file type, or folder filters on the map, then confirm that the visible markers match the files you expect to review.",
  "category": "files",
  "articleSlug": "map-filter-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current filter files on the map workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-file-map",
    "hc-preview-files"
  ],
  "keywords": [
    "map filter files",
    "Photo map workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Map filters narrow location-aware files without changing or moving them. Start from a map view where you recognize at least one marker, apply one filter at a time, and compare the visible markers with the files shown in the accompanying results list.

The main checks are the active workspace, selected date range, file type, and folder scope. A file can appear only when it matches every active filter and contains usable location metadata, so clear old filters before investigating a missing marker.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/map-filter-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/map-filter-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" alt="Four-step interface map for filter files on the map, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/map-filter-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/map-filter-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Map in the current released client.
- Confirm the active account and workspace, then identify map filter panel.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: filter files on the map

1. Open Map and confirm the active account and workspace.
2. Locate map filter panel and verify its name or identifying details.
3. Choose the supported date, type, or folder filters needed for the review.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that markers update to the matching mapped files.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile and cross-platform file experience including location-aware photo browsing." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Only media with usable embedded location metadata can appear on the map. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm that markers update to the matching mapped files. Refresh or reopen the relevant view once to verify the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The controlled workflow completes and markers update to the matching mapped files. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Map, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Explore files on the map](/files/file-map)
- [Preview files](/files/preview-files)
