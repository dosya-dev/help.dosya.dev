---
{
  "articleId": "hc-lightroom-choose-workspace",
  "locale": "en",
  "revision": 5,
  "title": "Choose a workspace for Lightroom publishing",
  "summary": "Bind a Lightroom Classic catalog to the correct Dosya workspace, verify the device code, and satisfy upload, folder, and sharing permissions.",
  "category": "integrations",
  "articleSlug": "lightroom-choose-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/connect/lightroom.tsx, apps/api/src/pages/api/lightroom/connect/decide.ts, apps/api/src/lib/lightroom/connect.ts, apps/lightroom/dosya.lrdevplugin/DosyaAccount.lua, apps/lightroom/dosya.lrdevplugin/DosyaPluginInfoProvider.lua. Production behavior for “Choose a workspace for Lightroom publishing” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-api-key",
    "hc-choose-app"
  ],
  "keywords": [
    "lightroom choose workspace",
    "Lightroom Classic setup",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The workspace is chosen on Dosya’s browser approval page, not inside the publish settings after connection. The resulting Lightroom API key is pinned to that whole workspace and cannot be edited; reconnect to choose another workspace.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Choose a workspace for Lightroom publishing: Choose Connect in Lightroom, keep the matching code visible. Sign in normally, compare the browser and Lightroom codes. Choose the exact Publish galleries to workspace value. After Allow, return to Lightroom or close the tab while polling continues." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Choose Connect in Lightroom, keep the matching code visible.” and ends with “After Allow, return to Lightroom or close the tab while polling continues.” <a class="workflow-map-full" href="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-choose-workspace-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In Lightroom Classic choose **Connect**, keep its `XXXX-XXXX` code visible, and let the plug-in open Dosya’s approval page.
2. Sign in as the account holder and compare the browser code with Lightroom; deny the request if somebody else supplied the link.
3. Under **Publish galleries to workspace**, choose the exact workspace; the active Dosya workspace is preselected when it is available, otherwise the first membership is used.
4. Confirm your unconfined role has **upload_files**, **create_folders**, and **create_share_links** permission, then choose **Allow**.
5. Read **Return to Lightroom Classic**. You may return to Lightroom or close the tab after **Allow**; the plug-in polls independently every 3 seconds and stores the approved key and workspace name.
6. In File → Plug-in Manager choose the connection check, then confirm the connected user and workspace names are correct.

The request expires after 600 seconds and uses an 8-character human code; choose **Connect** again for a fresh one. An empty workspace list says **You have no workspace to publish to**. Free accounts can hold 3 API keys and all accounts 20; a cap refusal instructs you to revoke an unused key in **Settings → API keys**. Switching workspaces later requires disconnecting and reconnecting.

## Expected result

The plug-in stores a key named `Lightroom Classic: <device>` and reports the selected workspace. Publishing can create folders, upload files, and create gallery links only within the permissions of that chosen workspace.

## Related guides

- [Create and manage API keys](/developers/api-key)
- [Choose a Dosya app](/account/choose-app)
