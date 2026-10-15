---
{"articleId":"hc-wordpress-copy-detected-warning","locale":"en","revision":1,"title":"Respond to a WordPress copy-detected warning","summary":"Respond to a WordPress copy-detected warning with a controlled test, clear verification, limits, and recovery steps.","category":"integrations","articleSlug":"wordpress-copy-detected-warning","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the respond to a wordpress copy-detected warning workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-wordpress-backups","hc-wordpress-review-backup-status"],"keywords":["wordpress copy detected warning","WordPress backup details","Dosya help"]}
---
Respond to a WordPress copy-detected warning is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open WordPress wp-admin and Integrations > WordPress in the current released client.
- Confirm the active account and workspace, then identify site row marked Copy detected, check the site.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: respond to a WordPress copy-detected warning

1. Open WordPress wp-admin and Integrations > WordPress and confirm the active account and workspace.
2. Locate site row marked Copy detected, check the site and verify its name or identifying details.
3. Confirm whether the WordPress site was cloned or migrated and reconnect the intended installation.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the legitimate site has its own recognized connection.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Dosya WordPress backup integration overview showing site and backup status." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a staging site or verified restore plan before changing production backup behavior. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the legitimate site has its own recognized connection. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to WordPress wp-admin and Integrations > WordPress, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Manage WordPress backups](/integrations/wordpress-backups)
- [Review backup status](/integrations/wordpress-review-backup-status)
