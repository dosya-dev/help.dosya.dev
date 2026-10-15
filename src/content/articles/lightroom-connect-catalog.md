---
{
  "articleId": "hc-lightroom-connect-catalog",
  "locale": "en",
  "revision": 5,
  "title": "Connect a Lightroom catalog to Dosya",
  "summary": "Connect Lightroom Classic through a ten-minute browser approval, verify the eight-character code, choose a workspace, and confirm the stored account.",
  "category": "integrations",
  "articleSlug": "lightroom-connect-catalog",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaUI.lua, apps/lightroom/dosya.lrdevplugin/DosyaAccount.lua, apps/api/src/lib/lightroom/connect.ts, apps/web/src/pages/connect/lightroom.tsx, apps/api/src/pages/api/lightroom/connect/decide.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-api-key",
    "hc-choose-app"
  ],
  "keywords": [
    "lightroom connect catalog",
    "Lightroom Classic setup",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The plug-in uses a device-code flow because Lightroom Classic cannot receive a browser redirect. A request lasts 600 seconds, the plug-in polls every 3 seconds, and the web approval creates a separate full API key for the workspace you select.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Connect a Lightroom catalog to Dosya: Choose Connect in Plug-in Manager, start a ten-minute request. Sign in as the account holder, avoid impersonated or key sessions. Keep Lightroom polling for approval, allow three seconds between checks. Read Connected as and workspace, run Check connection once." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Choose Connect in Plug-in Manager, start a ten-minute request.” and ends with “Read Connected as and workspace, run Check connection once.” <a class="workflow-map-full" href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Lightroom Classic, open **File > Plug-in Manager**, select **dosya.dev**, and choose **Connect...** in the **dosya account** section.
2. Keep the **Connect to dosya** progress dialog open. It changes to `Waiting for approval in your browser, code XXXX-XXXX` after Dosya creates the request.
3. In the opened browser, sign in as the account holder. An impersonated session, API-key authentication, or a folder-confined membership cannot approve this connection.
4. Confirm the eight-character browser code matches Lightroom exactly, choose **Publish galleries to workspace**, and select **Allow**. Choose **Deny** if the request is not yours.
5. Wait while Lightroom polls. Temporary network or server errors keep retrying until the 10-minute deadline; a rate response increases the interval by 2 seconds, up to 30 seconds.
6. Confirm **Connected to dosya**, then read `Connected as <user>, workspace <name>`. Use **Check connection** once if you need a fresh server and storage-status check.

**Required rights.** Approval needs an unrestricted workspace membership with `upload_files`, `create_folders`, and `create_share_links`. The page also refuses approval when the account has reached its API-key cap and directs you to **Settings > API keys**.

**Security receipt.** The first poll after approval receives the plaintext key once, stores it in Lightroom’s password store, and consumes the request. Dosya records the API-key creation and sends the same mandatory integration notice used for other new keys.

## Expected result

Lightroom reports the intended identity and workspace as connected, **Check connection** succeeds, and the browser says to return to Lightroom Classic and close the tab.

## Related guides

- [Create and manage API keys](/developers/api-key)
- [Choose a Dosya app](/account/choose-app)
