---
{"articleId":"hc-desktop-read-activity-row","locale":"en","revision":1,"title":"Read a desktop sync activity row","summary":"Read a desktop sync activity row with a controlled test, clear verification, limits, and recovery steps.","category":"desktop","articleSlug":"desktop-read-activity-row","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the read a desktop sync activity row workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-sync-issues","hc-desktop-problem-report"],"keywords":["desktop read activity row","Desktop diagnostics and recovery details","Dosya help"]}
---
Read a desktop sync activity row is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Dosya desktop Activity, Issues, and Help views in the current released client.
- Confirm the active account and workspace, then identify recent transfer row in desktop Activity.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: read a desktop sync activity row

1. Open Dosya desktop Activity, Issues, and Help views and confirm the active account and workspace.
2. Locate recent transfer row in desktop Activity and verify its name or identifying details.
3. Compare direction, file name, folder, progress, time, and final state before taking action.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the row is tied to the intended transfer and its current state is known.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop sync activity showing transfer states." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Capture timestamps, paths, and nonsecret errors before restarting or retrying work. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the row is tied to the intended transfer and its current state is known. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Dosya desktop Activity, Issues, and Help views, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Troubleshoot desktop sync](/desktop/sync-issues)
- [Create a desktop problem report](/desktop/desktop-problem-report)
