---
{"articleId":"hc-wordpress-connect-workspace","locale":"en","revision":1,"title":"Connect a WordPress site to a Dosya workspace","summary":"Connect a WordPress site to a Dosya workspace with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"wordpress-connect-workspace","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the connect a wordpress site to a dosya workspace workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-wordpress-connect","hc-wordpress-backups"],"keywords":["wordpress connect workspace","WordPress backup operations","Dosya help"]}
---
Connect a WordPress site to a Dosya workspace is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify Connect to dosya control in wp-admin.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: connect a WordPress site to a Dosya workspace

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate Connect to dosya control in wp-admin and verify its name or identifying details.
3. Open the approval page, sign in, choose a workspace, and allow the site.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the site appears in Your WordPress sites.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress backup integration overview for connecting sites and reviewing stored backups." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Install the plug-in only from the official Dosya download and connect it through wp-admin. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the site appears in Your WordPress sites. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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
- [Manage WordPress backups](/integrations/wordpress-backups)
