---
{
  "articleId": "hc-cloud-import-disconnect-after-verify",
  "locale": "en",
  "revision": 5,
  "title": "Disconnect a cloud account after verification",
  "summary": "Verify the imported result before removing provider access, then disconnect safely while preserving complete Dosya copies and their storage use.",
  "category": "integrations",
  "articleSlug": "cloud-import-disconnect-after-verify",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/profile/integrations.tsx, apps/web/src/components/cloud-import/connected-accounts-card.tsx, apps/api/src/pages/api/cloud/accounts/[id].ts, apps/api/migrations/0148_control_plane_fks_to_object_tables.sql. Production behavior for “Disconnect a cloud account after verification” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-progress",
    "hc-cloud-import-verify-folders"
  ],
  "keywords": [
    "cloud import disconnect after verify",
    "Cloud-import result verification",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Disconnect only after the job has reached a terminal toast and you have opened representative results. Deleting a connected account also cascades its cloud-import job records, so you lose the server-side receipt and any unfinished work.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Disconnect a cloud account after verification: Wait for a terminal import result, never disconnect an active transfer. Verify folder names, item counts and one file before disconnecting. Open Settings and match the exact provider account email. Open the verified Dosya copy again after account removal." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Wait for a terminal import result, never disconnect an active transfer.” and ends with “Open the verified Dosya copy again after account removal.” <a class="workflow-map-full" href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-disconnect-after-verify-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Wait for **Import complete**, **Import failed**, or **Import cancelled**; do not disconnect while a progress card still says **Preparing import** or **Importing**.
2. Open the cloud-import workspace root; compare expected top-level folders, filenames, and one file’s contents with the provider source.
3. Resolve cloud-import omissions, duplicate-name failures, and policy refusals before removing the provider account needed to browse them again.
4. Open **Settings → Integrations**, locate the provider group, and match the exact account email used by the import.
5. Choose **Disconnect** on that row and wait for **Account disconnected — The account has been removed.**
6. Return to Files and open the verified sample again, confirming the Dosya copy remains independent of the provider connection.

A user-initiated disconnect deletes Dosya’s stored account and tokens without sending an involuntary-disconnect notification. It does not delete completed files, refund their storage, or remove the provider application grant from the provider’s own security dashboard. Reconnect later if another import is needed.

## Expected result

The chosen email disappears from **Connected accounts**, future browsing from that row is unavailable, and previously completed Dosya files still open. The old import job history is no longer available after the account row is deleted.

## Related guides

- [Monitor import progress](/integrations/import-progress)
- [Verify folder structure](/integrations/cloud-import-verify-folders)
