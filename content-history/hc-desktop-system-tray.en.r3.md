---
{
  "articleId": "hc-desktop-system-tray",
  "locale": "en",
  "revision": 3,
  "title": "Use the Dosya system tray",
  "summary": "Open the tray menu, review sync status and reopen the main window, then verify that tray status and the app show the same sync state.",
  "category": "desktop",
  "articleSlug": "desktop-system-tray",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current use the dosya system tray workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-sync-issues"
  ],
  "keywords": [
    "desktop system tray",
    "desktop app lifecycle",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to use the Dosya system tray in the intended account or workspace.

The main checks are the active workspace, local path and desktop sync state. Use a small local test and distinguish the device copy from the cloud copy before approving a broader change.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-system-tray-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" alt="Four-step interface map for use the dosya system tray, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-system-tray-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open the Dosya tray or menu-bar icon in the current released Dosya client.
- Confirm the active account and workspace, then identify an active desktop session.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: use the Dosya system tray

1. Open the Dosya tray or menu-bar icon and confirm the active workspace.
2. Select an active desktop session and check its name or identifying details.
3. Open the tray menu, review sync status and reopen the main window.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that tray status and the app show the same sync state.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Dosya desktop app showing the active workspace and desktop navigation." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Confirm the installed distribution and app version before changing startup or update behavior. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that tray status and the app show the same sync state. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and tray status and the app show the same sync state. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya tray or menu-bar icon, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
