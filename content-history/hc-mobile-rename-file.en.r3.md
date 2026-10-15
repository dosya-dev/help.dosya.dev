---
{
  "articleId": "hc-mobile-rename-file",
  "locale": "en",
  "revision": 3,
  "title": "Rename a file on mobile",
  "summary": "Open file actions, enter a unique name and save, then verify that the new name remains after refresh.",
  "category": "files",
  "articleSlug": "mobile-rename-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current rename a file on mobile workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "mobile rename file",
    "mobile file actions",
    "Dosya help",
    "cloud storage",
    "file backup"
  ]
}
---
Use this workflow to rename a file on mobile in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Renaming changes the stored display name without creating a new file. Keep the extension unchanged unless you understand the format.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-rename-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" alt="Four-step interface map for rename a file on mobile, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-rename-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Files in the current released Dosya client.
- Confirm the active account and workspace, then identify one test file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: rename a file on mobile

1. Open Mobile Files and confirm the active workspace.
2. Select one test file and check its name or identifying details.
3. Open file actions, enter a unique name and save.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the new name remains after refresh.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya app chooser showing the current mobile availability entry points." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current released mobile app and confirm its active workspace before changing files. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Refresh the folder, search the new name and open the file to confirm its content is unchanged.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the new name remains after refresh. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Files, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Mobile permissions](/account/mobile-permissions)
