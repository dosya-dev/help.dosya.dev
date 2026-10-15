---
{"articleId":"hc-desktop-sync-workspace-quota","locale":"en","revision":1,"title":"Recover desktop sync when workspace storage is full","summary":"Recover desktop sync when workspace storage is full with a controlled test, clear verification, limits, and recovery steps.","category":"desktop","articleSlug":"desktop-sync-workspace-quota","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the recover desktop sync when workspace storage is full workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-sync-issues","hc-desktop-sync-conflicts"],"keywords":["desktop sync workspace quota","Desktop sync failure details","Dosya help"]}
---
Recover desktop sync when workspace storage is full is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Issues and Activity in the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify upload paused for workspace quota.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: recover desktop sync when workspace storage is full

1. Open Issues and Activity in the Dosya desktop app and confirm the active account and workspace.
2. Locate upload paused for workspace quota and verify its name or identifying details.
3. Review the correct workspace usage, permanently remove disposable data or add capacity, and retry.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the queued upload proceeds after capacity is available.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-issues-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-issues-verified-2026-10-11.webp" alt="Dosya desktop Issues view listing files that need attention." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Fix one representative issue and confirm it clears before changing many files. <a href="/screenshots/desktop-sync-issues-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the queued upload proceeds after capacity is available. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Issues and Activity in the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Diagnose sync issues](/desktop/sync-issues)
- [Resolve conflicts](/desktop/sync-conflicts)
