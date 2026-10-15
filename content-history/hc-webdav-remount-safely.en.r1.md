---
{"articleId":"hc-webdav-remount-safely","locale":"en","revision":1,"title":"Unmount and reconnect WebDAV safely","summary":"Unmount and reconnect WebDAV safely with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"webdav-remount-safely","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the unmount and reconnect webdav safely workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-webdav-connect","hc-webdav-lock-permission-errors"],"keywords":["webdav remount safely","WebDAV connection reliability details","Dosya help"]}
---
Unmount and reconnect WebDAV safely is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a WebDAV client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify WebDAV mount with completed transfers.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: unmount and reconnect WebDAV safely

1. Open a WebDAV client connected to Dosya and confirm the active account and workspace.
2. Locate WebDAV mount with completed transfers and verify its name or identifying details.
3. Close open files, wait for writes to finish, unmount through the operating system, and reconnect with verified settings.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the remounted folder opens without incomplete writes or duplicate mounts.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV integration overview for mounting and transferring files." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Confirm endpoint, account, and write access with a disposable folder before regular use. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the remounted folder opens without incomplete writes or duplicate mounts. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a WebDAV client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Resolve WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
