---
{
  "articleId": "hc-search-current-folder",
  "locale": "en",
  "revision": 2,
  "title": "Search inside the correct folder",
  "summary": "Set the search scope to the current location and run the query, then verify that results stay inside the intended folder boundary.",
  "category": "files",
  "articleSlug": "search-current-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current search inside the correct folder workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "search current folder",
    "search, sort and views",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to search inside the correct folder in the intended account or workspace.

Current-folder search narrows results to one location within the active workspace. A matching item elsewhere should remain outside the result set.

<figure class="help-screenshot"><a href="/screenshots/search-current-folder-workflow-map-2026-10-14.webp"><img src="/screenshots/search-current-folder-workflow-map-2026-10-14.webp" alt="Four-step interface map for search inside the correct folder, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/search-current-folder-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Search in the current released Dosya client.
- Confirm the active account and workspace, then identify a filename inside a nested folder.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: search inside the correct folder

1. Open Files → Search and confirm the active workspace.
2. Select a filename inside a nested folder and check its name or identifying details.
3. Set the search scope to the current location and run the query.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that results stay inside the intended folder boundary.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya search results with file names, locations and view controls." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Confirm the workspace, folder scope and active filters before acting on a result. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open a known nested folder, search a distinctive name and compare every result path with the current breadcrumb.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and results stay inside the intended folder boundary. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Search, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Search files](/files/search-files)
- [Organize files](/files/organize-files)
