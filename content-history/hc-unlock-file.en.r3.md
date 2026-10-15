---
{
  "articleId": "hc-unlock-file",
  "locale": "en",
  "revision": 3,
  "title": "Unlock a protected file",
  "summary": "Enter the current file password through the unlock prompt, then verify that the file opens only after successful verification.",
  "category": "files",
  "articleSlug": "unlock-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current unlock a protected file workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "unlock file",
    "file and folder protection",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to unlock a protected file in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Unlocking requires the current file password and does not bypass workspace access. Keep the password outside screenshots, filenames and support tickets.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unlock-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/unlock-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/unlock-file-workflow-map-2026-10-14.webp" alt="Four-step interface map for unlock a protected file, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unlock-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files in the current released Dosya client.
- Confirm the active account and workspace, then identify a password-protected test file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: unlock a protected file

1. Open Files and confirm the active workspace.
2. Select a password-protected test file and check its name or identifying details.
3. Enter the current file password through the unlock prompt.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the file opens only after successful verification.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog showing file lock choices and access controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the protection mode and affected roles before saving. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Close and reopen the file to confirm the intended access state. If the password fails, stop repeated guesses and verify the exact item and credential.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the file opens only after successful verification. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
