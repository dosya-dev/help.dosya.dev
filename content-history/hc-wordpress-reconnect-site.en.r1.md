---
{"articleId":"hc-wordpress-reconnect-site","locale":"en","revision":1,"title":"Reconnect a disconnected WordPress site","summary":"Reconnect a disconnected WordPress site with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"wordpress-reconnect-site","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the reconnect a disconnected wordpress site workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-wordpress-connect","hc-wordpress-backups"],"keywords":["wordpress reconnect site","WordPress backup troubleshooting","Dosya help"]}
---
Reconnect a disconnected WordPress site is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify site that no longer shows an active connection.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: reconnect a disconnected WordPress site

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate site that no longer shows an active connection and verify its name or identifying details.
3. Open the Dosya plug-in in wp-admin and repeat Connect to dosya for the intended workspace.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the site returns to the connected-sites table.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress integration overview used to review site connection and backup failures." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Record the site URL, backup time, state, and nonsecret error before changing the connection. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the site returns to the connected-sites table. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to WordPress wp-admin and Integrations > WordPress, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
