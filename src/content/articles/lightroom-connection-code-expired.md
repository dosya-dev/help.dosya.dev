---
{
  "articleId": "hc-lightroom-connection-code-expired",
  "locale": "en",
  "revision": 5,
  "title": "Fix an expired Lightroom connection code",
  "summary": "Replace an expired Lightroom approval request with a fresh ten-minute code, approve it once, and verify the newly issued workspace connection.",
  "category": "integrations",
  "articleSlug": "lightroom-connection-code-expired",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaAccount.lua, apps/lightroom/dosya.lrdevplugin/DosyaUI.lua, apps/api/src/lib/lightroom/connect.ts, apps/api/src/pages/api/lightroom/connect/poll.ts, apps/web/src/pages/connect/lightroom.tsx on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom connection code expired",
    "Lightroom connection and publish troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Each Lightroom connection request expires after 600 seconds. An expired, denied, or already-consumed request is terminal: the plug-in cannot extend it and the browser tells you to start again.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Fix an expired Lightroom connection code: Close the expired request, note that its old code is terminal. Match the new browser code, ignore any earlier approval tab. Wait for Connected to dosya, do not reuse a consumed request. Run Check connection after approval, confirm the new workspace credential." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Close the expired request, note that its old code is terminal.” and ends with “Run Check connection after approval, confirm the new workspace credential.” <a class="workflow-map-full" href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-connection-code-expired-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Close the failed progress dialog after Lightroom reports `The connection request expired. Start again.` An old browser tab may instead say **This request has expired**.
2. Return to **File > Plug-in Manager > dosya.dev** and choose **Connect...** to create a different request token and eight-character code.
3. Wait for the fresh browser tab and confirm its code matches the new Lightroom dialog. Do not approve the earlier tab even if it is still open.
4. Select the intended **Publish galleries to workspace** value and choose **Allow** before the new 10-minute window ends.
5. Let Lightroom keep polling until **Connected to dosya** appears. `This connection request was already used. Start again.` means another poll already consumed that request.
6. Run **Check connection** and confirm the user and workspace. If approval fails because of an API-key cap, revoke an unused key in **Settings > API keys**, then create another request.

**Other terminal messages.** `The connection was declined in the browser.` follows **Deny**. `Canceled.` means the Lightroom progress dialog was canceled. None of these outcomes stores a usable key.

**Transient failures.** A network or server error during polling does not immediately discard the request; polling continues to its deadline. Repeatedly clicking **Connect...** creates more live requests and makes it easier to approve the wrong code.

## Expected result

Only the new request is approved and consumed, Lightroom stores its issued key, and **Check connection** reports the chosen workspace without an expiry error.

## Related guides

- [Connect Lightroom](/integrations/lightroom-connect-catalog)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
