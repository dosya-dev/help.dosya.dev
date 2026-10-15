---
{"articleId":"hc-cloud-import-connect","locale":"en","revision":1,"title":"Connect a cloud account for imports","summary":"Connect Google Drive, OneDrive or Dropbox to Dosya, verify the provider account, and begin an import without exposing provider credentials.","category":"integrations","articleSlug":"connect-cloud-account","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current Google Drive, OneDrive and Dropbox connection entry points and account listing against the local web app and cloud-import API on 2026-10-12. The screenshot uses an isolated provider account.","related":["hc-import-google-drive","hc-import-onedrive","hc-import-dropbox","hc-cloud-import-disconnect"],"keywords":["connect cloud account","Google Drive connection","OneDrive connection","Dropbox connection","OAuth import","connected accounts"]}
---
Connect a supported provider when you want Dosya to browse and import files without downloading them through your device first. The provider sign-in happens on the provider's authorization page; never enter that password into a Dosya form.

## Before you start

- Select the Dosya workspace that should receive imported files.
- Know which Google Drive, OneDrive or Dropbox account contains the source.
- Check that pop-ups and redirects are allowed for the authorization step.
- Use an account you are authorized to connect and review the permissions shown by the provider.

## Steps: connect the provider account

1. Open **Integrations** and choose **Google Drive**, **OneDrive** or **Dropbox**.
2. Select **Connect account**.
3. On the provider page, verify the provider domain and choose the intended account.
4. Review the requested permission, approve it, and wait to return to Dosya.
5. Under **Connected accounts**, confirm the expected email and provider.
6. Select **Import** only after checking the active Dosya workspace.

<figure class="help-screenshot"><a href="/screenshots/import-google-setup-2026-10-11.webp"><img src="/screenshots/import-google-setup-2026-10-11.webp" alt="Dosya Google Drive integration page showing the connection action and setup guidance before importing files into a workspace." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Open the provider integration, connect the intended account, then verify its email before beginning an import. <a href="/screenshots/import-google-setup-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The account appears under **Connected accounts** and can open the provider picker. Connecting an account does not import everything automatically; you still choose source items and a Dosya destination.

## Limits and security boundaries

- Supported providers use their own authorization flow; provider passwords are not Dosya API credentials.
- Provider policies or an organization administrator can block authorization.
- A connection grants the permissions described on the provider screen until it is disconnected or revoked.
- Vault is a separate encrypted workflow. Cloud imports enter ordinary workspace storage.

## Troubleshooting

**The provider page does not open.** Allow pop-ups and redirects, then start again from the integration page.

**The wrong provider account was selected.** Return without importing, disconnect the mistaken account, and connect the correct one.

**Authorization is refused by an organization.** Ask the provider administrator whether third-party application access is permitted.

**Dosya returns without listing the account.** Reload the integration page once. If it remains absent, reconnect and record the visible provider error for private support.

## Related guides

- [Import from Google Drive](/integrations/google-drive)
- [Import from OneDrive](/integrations/onedrive)
- [Import from Dropbox](/integrations/dropbox)
- [Disconnect a cloud import account](/integrations/disconnect-cloud-account)
