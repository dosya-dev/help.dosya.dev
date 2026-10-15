---
{
  "articleId": "hc-cloud-import-disconnect",
  "locale": "en",
  "revision": 4,
  "title": "Disconnect a cloud import account",
  "summary": "Remove a Google Drive, OneDrive or Dropbox connection safely while keeping already imported Dosya files and checking active jobs first.",
  "category": "integrations",
  "articleSlug": "disconnect-cloud-account",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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
Disconnecting removes Dosya's stored connection to the provider account. Files that already completed import remain in Dosya; future browsing and imports from that account stop.

Disconnecting stops future browsing and imports through that provider account. Files already imported into Dosya remain separate stored copies.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" alt="Four-step interface map for disconnect a cloud import account, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-cloud-account-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Check for active import jobs and let required items finish.
- Verify important imported files in Dosya.
- Identify the exact provider email to remove.
- Understand that deleting a Dosya copy and disconnecting its provider are separate actions.

## Steps: disconnect the account

1. Open **Profile → Integrations**, or open the provider integration's **Connected accounts** section.
2. Find the provider and exact account email.
3. Confirm that no required import is still running from it.
4. Select **Disconnect** on that account row.
5. Wait for **Account disconnected** and confirm the row disappears.
6. Reload the provider integration and verify that browsing now requires a new connection.

<figure class="help-screenshot"><a href="/screenshots/import-google-connect-2026-10-11.webp"><img src="/screenshots/import-google-connect-2026-10-11.webp" alt="Dosya cloud integration connection card used to connect or reconnect a Google Drive account after no active account remains." width="384" height="258" loading="lazy" decoding="async" /></a><figcaption>After disconnection, the provider returns to its connection state. Reconnect only when another import is needed. <a href="/screenshots/import-google-connect-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm no required job is running, disconnect the exact provider email and reload the integration. Verify that new browsing requires authorization again.

## Expected result

The account no longer appears as connected and cannot open the import picker until reauthorized. Completed files remain in their Dosya workspace folders.

## Limits and provider revocation

- Disconnecting does not delete provider originals or completed Dosya copies.
- It may interrupt an active job that still needs provider access.
- Provider-side authorization can also be revoked from the provider account's security settings.
- Reconnecting later creates a new authorization and does not automatically resume every old job.

## Troubleshooting

**Disconnect failed.** Check the connection and retry once from **Profile → Integrations**. Preserve the provider name and visible error for support.

**The account still appears.** Reload the list and confirm you removed the correct row when multiple emails are connected.

**Imported files disappeared.** Check the active Dosya workspace and destination. Disconnection itself does not delete completed files.

**The provider still lists Dosya access.** Revoke it from the provider's connected-app security page as an additional provider-side step.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor an import](/integrations/import-progress)
- [Import from Google Drive](/integrations/google-drive)
- [Review active Dosya sessions](/account/sessions)
