---
{
  "articleId": "hc-search-file-type",
  "locale": "en",
  "revision": 3,
  "title": "Filter search results by file type",
  "summary": "Apply one supported type filter and review the result count, then verify that every visible result matches the chosen type.",
  "category": "files",
  "articleSlug": "search-file-type",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current filter search results by file type workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "search file type",
    "search, sort and views",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to filter search results by file type in the intended workspace. Start with a harmless test item when the action changes stored data or access.

A type filter narrows the current search scope; it does not convert files or inspect document contents. Other active filters can narrow it further.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-light-href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/search-file-type-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/search-file-type-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/search-file-type-workflow-map-2026-10-14.webp" alt="Four-step interface map for filter search results by file type, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-light-href="/screenshots/search-file-type-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/search-file-type-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Search in the current released Dosya client.
- Confirm the active account and workspace, then identify a query with several file types.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: filter search results by file type

1. Open Search and confirm the active workspace.
2. Select a query with several file types and check its name or identifying details.
3. Apply one supported type filter and review the result count.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that every visible result matches the chosen type.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya search results with file names, locations and view controls." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Confirm the workspace, folder scope and active filters before acting on a result. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Review several visible extensions or type labels and compare the result count before and after clearing the filter.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and every visible result matches the chosen type. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Search, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Search files](/files/search-files)
- [Organize files](/files/organize-files)
