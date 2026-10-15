---
{
  "articleId": "hc-cloud-import-connect",
  "locale": "en",
  "revision": 6,
  "title": "Connect a cloud account for imports",
  "summary": "Connect Google Drive, OneDrive, or Dropbox through the released OAuth flow, verify the returned identity, and recover from exact callback errors.",
  "category": "integrations",
  "articleSlug": "connect-cloud-account",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/profile/integrations.tsx, apps/web/src/components/cloud-import/cloud-connect-notice.tsx, apps/api/src/pages/api/cloud/connect/[provider].ts, apps/api/src/pages/api/cloud/callback/[provider].ts, apps/api/src/pages/api/cloud/providers.ts. Production behavior for “Connect a cloud account for imports” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-import-google-drive",
    "hc-import-onedrive",
    "hc-import-dropbox",
    "hc-cloud-import-disconnect"
  ],
  "keywords": [
    "connect cloud account",
    "Google Drive connection",
    "OneDrive connection",
    "Dropbox connection",
    "OAuth import",
    "connected accounts",
    "file transfer"
  ]
}
---
Connect from Dosya’s integration page so the server can create a signed, session-bound OAuth request. The provider grants read access for import; Dosya never asks you to paste a provider password or access token.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/connect-cloud-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/connect-cloud-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/connect-cloud-account-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/connect-cloud-account-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/connect-cloud-account-workflow-map-2026-10-14.webp" alt="Four-step workflow map for Connect a cloud account for imports: Choose Connect account for the intended cloud provider. Verify the provider email and requested read access before approval. Find the same email under Connected accounts as the saved receipt. Open Import for that account, prove the picker lists a known item." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Choose Connect account for the intended cloud provider.” and ends with “Open Import for that account, prove the picker lists a known item.” <a class="workflow-map-full" href="/screenshots/connect-cloud-account-workflow-map-2026-10-14.webp" data-light-href="/screenshots/connect-cloud-account-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/connect-cloud-account-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in to Dosya in the browser, open **Integrations**, and choose a configured provider’s **Connect account** control.
2. On the Google Drive, OneDrive, or Dropbox consent screen, verify the signed-in email and requested read access before approving Dosya.
3. Return to the provider setup page and find that email under **Connected accounts**; the account row is the success receipt.
4. If the page says **Connection cancelled**, **sign-in attempt expired**, **provider did not accept the sign-in**, or **failed while saving**, start a fresh connection from Dosya.
5. Choose **Import** beside the new account, browse a harmless file or folder, and verify the picker can list it.
6. Close the picker without importing if this was only a connection test, or select reviewed content and continue with the import guide.

Only providers configured in the deployed API are listed; the registered set is Google Drive, OneDrive, and Dropbox. The OAuth state is single-use and tied to the signed-in session. A connection belongs to the Dosya user, so it can later be used to import into a workspace where that user has `upload_files` permission.

## Expected result

The provider page contains a **Connected accounts** row with the approved email and connection age, and its **Import** action opens the remote root. Query parameters from the callback are removed after the page consumes them, so refreshing does not replay a stale notice.

## Related guides

- [Import from Google Drive](/integrations/google-drive)
- [Import from OneDrive](/integrations/onedrive)
- [Import from Dropbox](/integrations/dropbox)
- [Disconnect a cloud import account](/integrations/disconnect-cloud-account)
