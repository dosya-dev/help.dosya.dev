---
{
  "articleId": "hc-folder-name-conflict",
  "locale": "en",
  "revision": 3,
  "title": "Resolve a folder name conflict",
  "summary": "Review the conflict message and choose a unique destination name, then verify that both folder trees remain distinguishable.",
  "category": "files",
  "articleSlug": "folder-name-conflict",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current resolve a folder name conflict workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-organize-files",
    "hc-move-rename"
  ],
  "keywords": [
    "folder name conflict",
    "folder management",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to resolve a folder name conflict in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Two folders with the same name can be hard to distinguish and may be rejected in the same destination. A unique name preserves both trees clearly.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-name-conflict-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" alt="Four-step interface map for resolve a folder name conflict, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-name-conflict-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Move or Rename in the current released Dosya client.
- Confirm the active account and workspace, then identify two test folders with matching names.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: resolve a folder name conflict

1. Open Files → Move or Rename and confirm the active workspace.
2. Select two test folders with matching names and check its name or identifying details.
3. Review the conflict message and choose a unique destination name.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that both folder trees remain distinguishable.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya destination picker showing workspace folders before a move operation." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Use the destination picker to confirm the parent folder before saving. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open each folder after resolving the conflict and compare its child items so that no tree was overwritten or merged unexpectedly.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and both folder trees remain distinguishable. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Move or Rename, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Organize files](/files/organize-files)
- [Move and rename files](/files/move-and-rename)
