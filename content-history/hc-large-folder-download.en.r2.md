---
{
  "articleId": "hc-large-folder-download",
  "locale": "en",
  "revision": 2,
  "title": "Handle a large folder download",
  "summary": "Keep the page open until the download starts and monitor browser progress, then verify that the completed archive opens without a partial-download extension.",
  "category": "uploading",
  "articleSlug": "large-folder-download",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current handle a large folder download workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-download-files",
    "hc-slow-transfer"
  ],
  "keywords": [
    "large folder download",
    "browser download archives",
    "Dosya help",
    "file transfer"
  ]
}
---
Use this workflow to handle a large folder download in the intended account or workspace.

The main checks are the active workspace, folder path and target item. Start with one harmless item and compare the source and destination after refreshing the view.

<figure class="help-screenshot"><a href="/screenshots/large-folder-download-workflow-map-2026-10-14.webp"><img src="/screenshots/large-folder-download-workflow-map-2026-10-14.webp" alt="Four-step interface map for handle a large folder download, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/large-folder-download-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Download in the current released Dosya client.
- Confirm the active account and workspace, then identify a folder large enough to require preparation.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: handle a large folder download

1. Open Files → Download and confirm the active workspace.
2. Select a folder large enough to require preparation and check its name or identifying details.
3. Keep the page open until the download starts and monitor browser progress.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the completed archive opens without a partial-download extension.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya multi-selection prepared for a combined browser download." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Keep the browser download visible until archive preparation and transfer complete. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the completed archive opens without a partial-download extension. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the completed archive opens without a partial-download extension. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Download, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Download files](/uploading/download-files)
- [Troubleshoot slow transfers](/troubleshooting/slow-transfer)
