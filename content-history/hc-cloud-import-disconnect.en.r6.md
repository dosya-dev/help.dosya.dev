---
{
  "articleId": "hc-cloud-import-disconnect",
  "locale": "en",
  "revision": 6,
  "title": "Disconnect a cloud import account",
  "summary": "Remove a linked cloud account without mistaking token removal for rollback, and protect active transfer jobs by completing or cancelling them first.",
  "category": "integrations",
  "articleSlug": "disconnect-cloud-account",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/profile/integrations.tsx, apps/web/src/components/cloud-import/connected-accounts-card.tsx, apps/api/src/pages/api/cloud/accounts/[id].ts, apps/api/migrations/0148_control_plane_fks_to_object_tables.sql. Production behavior for “Disconnect a cloud import account” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress",
    "hc-import-google-drive",
    "hc-sessions"
  ],
  "keywords": [
    "disconnect Google Drive",
    "disconnect OneDrive",
    "disconnect Dropbox",
    "remove cloud account",
    "revoke import access",
    "connected accounts",
    "cloud storage"
  ]
}
---
The **Disconnect** action removes one linked provider identity immediately and has no confirmation dialog. Because import jobs reference that account with cascade deletion, finish or cancel active work before using it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" alt="Four-step workflow map for Disconnect a cloud import account: Check for an active import tied to the account email. Finish or cancel that job, wait for its terminal toast. Choose Disconnect once, wait while the control is disabled. Require Account disconnected and confirm the account row disappears." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Check for an active import tied to the account email.” and ends with “Require Account disconnected and confirm the account row disappears.” <a class="workflow-map-full" href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Check **Files** and the provider page for an active import card associated with the account email you plan to remove.
2. Let the job finish, or choose its progress-card **Cancel** and wait for the **Import cancelled** toast.
3. Open **Settings → Integrations**, find the Google Drive, OneDrive, or Dropbox group, and verify the complete email.
4. Choose the row’s **Disconnect** once; while the request runs the control shows a spinner and is disabled.
5. Require the success toast **Account disconnected** with **The account has been removed.** and confirm the row disappears.
6. Open an already imported file, then visit the provider’s security settings separately if you also want to revoke Dosya’s app grant there.

If deletion fails, Dosya shows **Disconnect failed** and either the API message or **The account could not be disconnected.** The server returns **Account not found** for a stale or non-owned ID. Completed files are normal Dosya objects and remain; the linked account, its import job rows, and unfinished item records do not.

## Expected result

The selected provider email is absent from Settings and its provider page. Existing copies remain readable, and the next import attempt requires reconnecting an account.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
- [Import from Google Drive](/integrations/google-drive)
- [Review active Dosya sessions](/account/sessions)
