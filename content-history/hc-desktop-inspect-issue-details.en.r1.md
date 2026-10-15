---
{"articleId":"hc-desktop-inspect-issue-details","locale":"en","revision":1,"title":"Inspect a desktop sync issue safely","summary":"Inspect a desktop sync issue safely with a controlled test, clear verification, limits, and recovery steps.","category":"desktop","articleSlug":"desktop-inspect-issue-details","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the inspect a desktop sync issue safely workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-desktop-sync-issues","hc-desktop-problem-report"],"keywords":["desktop inspect issue details","Desktop diagnostics and recovery details","Dosya help"]}
---
Inspect a desktop sync issue safely is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Dosya desktop Activity, Issues, and Help views in the current released client.
- Confirm the active account and workspace, then identify issue entry for a controlled file.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: inspect a desktop sync issue safely

1. Open Dosya desktop Activity, Issues, and Help views and confirm the active account and workspace.
2. Locate issue entry for a controlled file and verify its name or identifying details.
3. Open details, record the nonsecret message and time, and check permissions, naming, storage, and local availability.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the likely cause is identified without exposing file contents or credentials.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Verified Dosya desktop sync activity showing transfer states." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Capture timestamps, paths, and nonsecret errors before restarting or retrying work. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the likely cause is identified without exposing file contents or credentials. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
