---
{
  "articleId": "hc-wordpress-connect",
  "locale": "en",
  "revision": 4,
  "title": "Connect a WordPress site",
  "summary": "Authorize the supported WordPress connection, verify the site identity and begin a controlled backup without sharing administrator credentials.",
  "category": "integrations",
  "articleSlug": "wordpress-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-cloud-import-connect",
    "hc-contact-support"
  ],
  "keywords": [
    "WordPress backup",
    "connect WordPress",
    "WordPress integration",
    "file upload"
  ]
}
---
Connect WordPress through the supported site flow and verify the exact site before enabling backup activity.

Use the supported authorization flow instead of sharing a WordPress administrator password. Confirm the site identity and destination before the first backup.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" alt="Four-step interface map for connect a wordpress site, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/wordpress-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/wordpress-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: connect a wordpress site

1. Open Integrations → WordPress.
2. Start Connect site and follow the supported authorization.
3. Verify the site URL and displayed status.
4. Review backup choices and destination.
5. Run one controlled initial backup.
6. Confirm the resulting files before scheduling more work.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run one controlled backup and open representative output files in the intended Dosya workspace before enabling a recurring schedule.

## Expected result

The connect a wordpress site workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Contact support](/troubleshooting/contact-support)
