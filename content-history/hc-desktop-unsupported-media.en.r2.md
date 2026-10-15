---
{
  "articleId": "hc-desktop-unsupported-media",
  "locale": "en",
  "revision": 2,
  "title": "Handle unsupported media in the desktop app",
  "summary": "Verify the file name and type, then download or open it with a trusted compatible application. Verify that the original file remains available even without an inline preview.",
  "category": "desktop",
  "articleSlug": "desktop-unsupported-media",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Handle unsupported media in the desktop app” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "desktop unsupported media",
    "Desktop media playback",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
This guide covers **Handle unsupported media in the desktop app** in Dosya. The main action is to verify the file name and type, then download or open it with a trusted compatible application; the decisive check is whether the original file remains available even without an inline preview.

Keep the signed-in account, workspace, local path, sync pair, connection, and activity state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp" alt="Four-step workflow map for handle unsupported media in the desktop app, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for handle unsupported media in the desktop app: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/desktop-unsupported-media-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a media preview in the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify file the viewer cannot decode.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: handle unsupported media in the desktop app

1. Open a media preview in the Dosya desktop app and confirm the active account and workspace.
2. Locate file the viewer cannot decode and verify its name or identifying details.
3. Verify the file name and type, then download or open it with a trusted compatible application.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the original file remains available even without an inline preview.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop app overview for audio and video preview workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Lower volume before playback and use non-sensitive test media. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The original file remains available even without an inline preview. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Let current activity settle, then confirm the same state after reopening the desktop app or reconnecting the network. If the result differs from what you expected, stop before repeating the action. Check connectivity, local permissions, disk space, workspace access, and the first failed activity entry before retrying.

## Expected result

The controlled workflow completes and the original file remains available even without an inline preview. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to a media preview in the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
