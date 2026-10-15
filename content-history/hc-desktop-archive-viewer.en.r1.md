---
{"articleId":"hc-desktop-archive-viewer","locale":"en","revision":1,"title":"Browse an archive in the desktop app","summary":"Browse an archive in the desktop app with a controlled test, clear verification, limits, and recovery steps.","category":"desktop","articleSlug":"desktop-archive-viewer","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the browse an archive in the desktop app workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-install","hc-preview-files"],"keywords":["desktop archive viewer","Desktop file viewer","Dosya help"]}
---
Browse an archive in the desktop app is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify supported archive file.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: browse an archive in the desktop app

1. Open the Dosya desktop app and confirm the active account and workspace.
2. Locate supported archive file and verify its name or identifying details.
3. Open its archive viewer and expand the required folders.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that entries can be inspected without extracting the whole archive.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop app overview for local-style file browsing and preview workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Open untrusted archives or documents only after checking their source and filename. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and entries can be inspected without extracting the whole archive. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Preview files](/files/preview-files)
