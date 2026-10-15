---
{
  "articleId": "hc-download-selection-archive",
  "locale": "en",
  "revision": 2,
  "title": "Download selected files as one archive",
  "summary": "Review the selection and start the combined download, then verify that the archive contains each selected file once.",
  "category": "uploading",
  "articleSlug": "download-selection-archive",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current download selected files as one archive workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-download-files",
    "hc-slow-transfer"
  ],
  "keywords": [
    "download selection archive",
    "browser download archives",
    "Dosya help",
    "file download"
  ]
}
---
Use this workflow to download selected files as one archive in the intended account or workspace.

A combined archive should contain only the selected files and can expose their names when shared locally. Use a small selection first.

<figure class="help-screenshot"><a href="/screenshots/download-selection-archive-workflow-map-2026-10-14.webp"><img src="/screenshots/download-selection-archive-workflow-map-2026-10-14.webp" alt="Four-step interface map for download selected files as one archive, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/download-selection-archive-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Download in the current released Dosya client.
- Confirm the active account and workspace, then identify several selected files.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: download selected files as one archive

1. Open Files → Download and confirm the active workspace.
2. Select several selected files and check its name or identifying details.
3. Review the selection and start the combined download.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the archive contains each selected file once.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/download-multi-select-2026-10-12.webp"><img src="/screenshots/download-multi-select-2026-10-12.webp" alt="Dosya multi-selection prepared for a combined browser download." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Keep the browser download visible until archive preparation and transfer complete. <a href="/screenshots/download-multi-select-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open the downloaded archive in a trusted tool and compare the entry names and count with the original selection.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the archive contains each selected file once. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Download, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Download files](/uploading/download-files)
- [Troubleshoot slow transfers](/troubleshooting/slow-transfer)
