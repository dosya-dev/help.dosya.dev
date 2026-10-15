---
{
  "articleId": "hc-lightroom-connection-browser-not-open",
  "locale": "en",
  "revision": 5,
  "title": "Fix a Lightroom connection page that does not open",
  "summary": "Recover when Lightroom cannot launch the approval browser by constructing the official code URL, completing approval, and leaving the poll dialog open.",
  "category": "integrations",
  "articleSlug": "lightroom-connection-browser-not-open",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaUI.lua, apps/lightroom/dosya.lrdevplugin/DosyaAccount.lua, apps/lightroom/dosya.lrdevplugin/DosyaHttp.lua, apps/api/src/lib/lightroom/connect.ts, apps/web/src/pages/connect/lightroom.tsx on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom connection browser not open",
    "Lightroom connection and publish troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Lightroom asks the operating system to open the approval URL, but the plug-in does not show that URL or offer a copy button when the launch fails. The dialog does show the user code, so you can reconstruct the official route without canceling the live request.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Fix a Lightroom connection page that does not open: Keep the connect dialog open, copy its XXXX-XXXX code by hand. Sign in on the official route, preserve the code query value. Return to the polling dialog, wait for Connected to dosya. Replace a ten-minute expired request, never reuse its old code." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Keep the connect dialog open, copy its XXXX-XXXX code by hand.” and ends with “Replace a ten-minute expired request, never reuse its old code.” <a class="workflow-map-full" href="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-connection-browser-not-open-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Leave **Connect to dosya** open and copy the displayed `XXXX-XXXX` code by hand. Canceling ends the local poll even though the server request may remain pending.
2. Open a current browser yourself and enter `https://app.dosya.dev/connect/lightroom?code=XXXX-XXXX`, replacing the placeholder with the exact code from Lightroom.
3. Sign in with a normal account-holder session. If the page says the request is incomplete, check the `code=` query value and preserve the dash or enter the same eight characters.
4. Compare the large browser code with Lightroom, choose the required workspace, and select **Allow** only when the device name is your Lightroom Classic computer.
5. Return to Lightroom without closing its progress dialog. It polls every 3 seconds and should show **Connected to dosya** after receiving the one-time key.
6. If the request reaches 10 minutes, start a fresh **Connect...** flow; an expired URL cannot be revived, and its code must not be reused.

**Why the browser may stay closed.** The plug-in delegates directly to Lightroom’s `LrHttp.openUrlInBrowser`. There is no in-plug-in browser and no callback into Lightroom, so browser-default and OS URL-handler problems sit outside the approval service.

**Do not share the URL.** The page warns that anyone sent the link should choose **Deny**. Matching the code on both surfaces binds your deliberate local action to the browser approval.

## Expected result

The manually entered approval page accepts the still-live code, Lightroom receives approval before expiry, and its account section names the chosen workspace.

## Related guides

- [Connect Lightroom](/integrations/lightroom-connect-catalog)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
