---
{
  "articleId": "hc-file-list-grid",
  "locale": "en",
  "revision": 3,
  "title": "Switch between grid and list views",
  "summary": "Switch views and compare names and actions, then verify that the file set stays the same while only presentation changes.",
  "category": "files",
  "articleSlug": "file-list-grid",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current switch between grid and list views workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-search-files",
    "hc-organize-files"
  ],
  "keywords": [
    "file list grid",
    "search, sort and views",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to switch between grid and list views in the intended account or workspace.

Grid and list modes change presentation without changing the underlying folder contents. Each view may emphasize different metadata and actions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-list-grid-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/file-list-grid-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" alt="Four-step interface map for switch between grid and list views, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-light-href="/screenshots/file-list-grid-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/file-list-grid-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files in the current released Dosya client.
- Confirm the active account and workspace, then identify the same folder in both layouts.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: switch between grid and list views

1. Open Files and confirm the active workspace.
2. Select the same folder in both layouts and check its name or identifying details.
3. Switch views and compare names and actions.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the file set stays the same while only presentation changes.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/search-files-results-2026-10-12.webp"><img src="/screenshots/search-files-results-2026-10-12.webp" alt="Dosya search results with file names, locations and view controls." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Confirm the workspace, folder scope and active filters before acting on a result. <a href="/screenshots/search-files-results-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Compare the item count and several names in both views, then refresh and confirm the preferred presentation persists when supported.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the file set stays the same while only presentation changes. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files, confirm the active workspace and check that your role permits the action.

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
