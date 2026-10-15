---
{
  "articleId": "hc-mobile-return-preview-folder",
  "locale": "en",
  "revision": 2,
  "title": "Return from a mobile preview to the same folder",
  "summary": "Open the preview, use the in-app back control once, and verify the folder name and list position. Verify that navigation returns to the source folder without switching workspace.",
  "category": "files",
  "articleSlug": "mobile-return-preview-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Return from a mobile preview to the same folder” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-switch-account"
  ],
  "keywords": [
    "mobile return preview folder",
    "Mobile navigation and search details",
    "Dosya help",
    "cloud storage"
  ]
}
---
This guide covers **Return from a mobile preview to the same folder** in Dosya. The main action is to open the preview, use the in-app back control once, and verify the folder name and list position; the decisive check is whether navigation returns to the source folder without switching workspace.

Keep the workspace, folder path, filename, item state, and visible metadata in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp" alt="Four-step workflow map for return from a mobile preview to the same folder, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for return from a mobile preview to the same folder: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/mobile-return-preview-folder-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya mobile file browser and search in the current released client.
- Confirm the active account and workspace, then identify file opened from a known folder list.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: return from a mobile preview to the same folder

1. Open the Dosya mobile file browser and search and confirm the active account and workspace.
2. Locate file opened from a known folder list and verify its name or identifying details.
3. Open the preview, use the in-app back control once, and verify the folder name and list position.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that navigation returns to the source folder without switching workspace.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile app showing workspace navigation and file browsing." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm the workspace and folder breadcrumb before acting on a mobile search result. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Navigation returns to the source folder without switching workspace. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Confirm the item in its final folder and refresh the listing before relying on the change from another device. If the result differs from what you expected, stop before repeating the action. Check the exact path, locks, permissions, and item state before repeating an operation that could create a duplicate or affect the wrong file.

## Expected result

The controlled workflow completes and navigation returns to the source folder without switching workspace. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to the Dosya mobile file browser and search, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Switch mobile accounts](/account/mobile-switch-account)
