---
{
  "articleId": "hc-copy-file",
  "locale": "en",
  "revision": 2,
  "title": "Copy a file to another folder",
  "summary": "Choose Copy, select a destination and confirm the new copy, then verify that both the original and copied item appear in their expected folders.",
  "category": "files",
  "articleSlug": "copy-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current copy a file to another folder workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-preview-files",
    "hc-organize-files"
  ],
  "keywords": [
    "copy file",
    "file details and copy",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to copy a file to another folder in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Copying creates a second stored item and can increase used storage. The original remains in its source folder.

<figure class="help-screenshot"><a href="/screenshots/copy-file-workflow-map-2026-10-14.webp"><img src="/screenshots/copy-file-workflow-map-2026-10-14.webp" alt="Four-step interface map for copy a file to another folder, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/copy-file-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Copy in the current released Dosya client.
- Confirm the active account and workspace, then identify one non-confidential file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: copy a file to another folder

1. Open Files → Copy and confirm the active workspace.
2. Select one non-confidential file and check its name or identifying details.
3. Choose Copy, select a destination and confirm the new copy.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that both the original and copied item appear in their expected folders.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file preview and detail surface used to confirm the selected file before an action." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the selected file and workspace before changing or copying it. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open both locations, compare names and sizes, and confirm that deleting a disposable copy would not affect the original.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and both the original and copied item appear in their expected folders. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Copy, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Preview files](/files/preview-files)
- [Organize files](/files/organize-files)
