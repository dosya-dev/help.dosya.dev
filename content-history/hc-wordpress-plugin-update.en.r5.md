---
{
  "articleId": "hc-wordpress-plugin-update",
  "locale": "en",
  "revision": 5,
  "title": "Update the Dosya WordPress plug-in",
  "summary": "Update the Dosya WordPress plug-in safely, confirm its database upgrade completed, and test the preserved schedule and workspace connection.",
  "category": "integrations",
  "articleSlug": "wordpress-plugin-update",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/wordpress/dosya-backup.php, apps/wordpress/src/Wp/Plugin.php, apps/wordpress/src/Wp/SettingsSchema.php, apps/wordpress/readme.txt, apps/web/src/pages/integrations/wordpress.tsx. Production behavior for “Update the Dosya WordPress plug-in” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-wordpress-connect",
    "hc-wordpress-backups"
  ],
  "keywords": [
    "wordpress plugin update",
    "WordPress backup troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The current repository release identifies itself as dosya Backup 0.3.0. On version change, the plug-in installs or upgrades its job table and retains existing settings; a site that never saved settings is left with automatic scheduling off rather than unexpectedly gaining daily backups.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14.webp" alt="Four panels show recording settings and connection facts, installing the official package, checking the preserved schedule and workspace, and completing a database test backup." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show recording settings and connection facts, installing the official package, checking the preserved schedule and workspace, and completing a database test backup. <a class="workflow-map-full" href="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14.webp" data-light-href="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/wordpress-plugin-update-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Before updating, open **dosya Backup → Schedule** and record schedule, time, local keep count, exclusions, safety-copy choice, and email choices. Record the connected workspace and folder from the **dosya** tab.
2. Confirm the server still meets WordPress 6.0+, PHP 7.4+, 64-bit PHP, and MySQL or MariaDB requirements. Make a usable site backup before changing plug-in code.
3. Use **Plugins → Add New → Upload Plugin** with the official `dosya-backup.zip`, or use the normal WordPress update control when the same package is offered. Do not delete plug-in data to perform an update.
4. Distinguish activation from a later version migration. Activation failures—including non-64-bit PHP where `PHP_INT_SIZE < 8`, unsupported database support, or job-table installation—deactivate the plug-in and stop with `wp_die`. During ordinary `plugins_loaded` initialization, a version-migration table failure instead records an init error and leaves the plug-in idle for that request.
5. Reopen **dosya Backup** and verify the saved schedule and connection facts. If **Connection to dosya lost** appears, reconnect rather than pasting or copying the site key.
6. Run one manual database backup, then inspect its final badge and log. This test exercises job-table access, archive creation, and the existing remote credential with limited data.

Deactivation removes scheduled and queued Action Scheduler hooks, so do not leave the plug-in inactive when automatic backups are expected. The update itself does not verify that an old backup can restore; keep the pre-update copy.

<figure class="help-screenshot"><a href="/screenshots/wordpress-integration-overview-2026-10-13.webp"><img src="/screenshots/wordpress-integration-overview-2026-10-13.webp" alt="Reference for “Update the Dosya WordPress plug-in”: Dosya WordPress plug-in overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Update the Dosya WordPress plug-in”: Dosya WordPress plug-in overview page. <a href="/screenshots/wordpress-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The updated plug-in loads, retains the intended saved configuration, and completes a controlled backup. A version migration records the new plug-in database version only after job-table installation succeeds.

## Related guides

- [Connect WordPress](/integrations/wordpress-connect)
- [Manage backups](/integrations/wordpress-backups)
