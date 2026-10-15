---
{"articleId":"hc-rclone-schedule-copy-job","locale":"en","revision":1,"title":"Schedule an rclone copy job","summary":"Schedule an rclone copy job with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"rclone-schedule-copy-job","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the schedule an rclone copy job workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-rclone-copy","hc-rclone-sync-dry-run"],"keywords":["rclone schedule copy job","rclone automation details","Dosya help"]}
---
Schedule an rclone copy job is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a terminal with an rclone remote for Dosya in the current released client.
- Confirm the active account and workspace, then identify tested copy command and protected runtime environment.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: schedule an rclone copy job

1. Open a terminal with an rclone remote for Dosya and confirm the active account and workspace.
2. Locate tested copy command and protected runtime environment and verify its name or identifying details.
3. Use absolute executable and config paths, set a controlled working directory, capture exit status, and run the schedule once.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the scheduled job produces the same verified result as the manual test.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/developer-rclone-overview-2026-10-13.webp"><img src="/screenshots/developer-rclone-overview-2026-10-13.webp" alt="Dosya rclone integration overview for scripted file transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a dedicated restricted remote, a dry run, and durable logs for scheduled jobs. <a href="/screenshots/developer-rclone-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the scheduled job produces the same verified result as the manual test. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a terminal with an rclone remote for Dosya, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Use rclone with Dosya](/integrations/rclone)
- [Run an rclone sync dry run](/integrations/rclone-sync-dry-run)
