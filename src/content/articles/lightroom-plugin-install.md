---
{
  "articleId": "hc-lightroom-plugin-install",
  "locale": "en",
  "revision": 5,
  "title": "Install the Dosya Lightroom Classic plug-in",
  "summary": "Install dosya.lrplugin in Lightroom Classic, approve the browser connection and verify your workspace. Includes requirements, updates and disconnect recovery.",
  "category": "integrations",
  "articleSlug": "lightroom-plugin-install",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14; no production account or native client installation performed. Product claims checked against src/lib/lightroom-integration.ts; src/pages/integration/lightroom.astro; apps/lightroom/scripts/build.sh; apps/lightroom/dosya.lrdevplugin/Info.lua; apps/lightroom/dosya.lrdevplugin/DosyaUI.lua; apps/lightroom/dosya.lrdevplugin/DosyaAccount.lua; apps/lightroom/dosya.lrdevplugin/DosyaErrors.lua; apps/lightroom/tests/account_test.lua; apps/lightroom/tests/errors_test.lua; apps/api/src/lib/lightroom/connect.ts; apps/api/src/pages/api/lightroom/connect/poll.ts; apps/api/src/pages/api/lightroom/connect/decide.ts; apps/api/src/lib/lightroom/repo.ts; apps/api/src/lib/share/create.ts; apps/lightroom/tests/static_test.lua; apps/lightroom/tests/final_fix_test.lua; apps/api/src/pages/api/lightroom/connect/start.ts; apps/api/src/pages/api/lightroom/connection.ts. External client procedure checked against https://helpx.adobe.com/lightroom-classic/desktop/export-photos/export-presets-settings-plug-ins.html. Light/dark process diagrams depict documented controls and outcomes, not captured UI.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-choose-app"
  ],
  "keywords": [
    "install Lightroom Classic plugin",
    "dosya.lrplugin",
    "Plug-in Manager",
    "Lightroom connection expired",
    "Lightroom Classic 10"
  ]
}
---
Install the free **dosya.dev** plug-in in **Lightroom Classic 10 or newer** on macOS or Windows. The downloaded ZIP contains **dosya.lrplugin**; add that folder to Lightroom, then authorize the connection in your browser. Lightroom (the cloud app) is not supported.

## Before installing

Download [dosya-lightroom.zip](https://dosya.dev/downloads/lightroom/dosya-lightroom.zip) from Dosya. The packaged release is **0.1.0**. Unzip it and move `dosya.lrplugin` to a permanent, readable local directory, such as a Lightroom plug-ins folder in your user directory. Lightroom runs the plug-in from that location: moving or deleting it later breaks the installed entry. Select the extracted folder, not the ZIP or a Lua file. The repository's development folder is named `.lrdevplugin`; the release installer uses `.lrplugin`.

You need a Dosya account and a workspace where your membership permits **upload files**, **create folders** and **create share links**. A membership confined to a folder cannot authorize this workspace-wide connection. The plug-in uses your existing storage plan; it does not add Adobe storage. On Free, at most **5 active share links** are allowed and a gallery link can last at most **7 days**. Paid plans lift those share-link limits. Storage and workspace upload policies still govern photos and originals.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-plugin-install-process-2026-10-14.webp" data-light-href="/screenshots/lightroom-plugin-install-process-2026-10-14.webp" data-dark-href="/screenshots/lightroom-plugin-install-process-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-plugin-install-process-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-plugin-install-process-2026-10-14.webp" alt="Lightroom installation process: extract dosya.lrplugin, add it in Plug-in Manager, approve the browser code and check the workspace." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Add the released folder before using Connect...; Check connection then confirms the account and destination workspace. <a class="workflow-map-full" href="/screenshots/lightroom-plugin-install-process-2026-10-14.webp" data-light-href="/screenshots/lightroom-plugin-install-process-2026-10-14.webp" data-dark-href="/screenshots/lightroom-plugin-install-process-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: add the plug-in and connect

1. In Lightroom Classic choose **File → Plug-in Manager**, click **Add**, browse to `dosya.lrplugin` and select it.
2. Select **dosya.dev** in the manager's installed plug-in list. Check its Status area and enable it if Lightroom has disabled it. The Dosya panel should show **dosya account**, initially **Not connected**, with **Connect...**, **Check connection** and **Disconnect** controls.
3. Click **Connect...**. Lightroom displays **Connect to dosya** and **Waiting for approval in your browser, code …**. A browser opens the Dosya approval page. Sign in there, check that the request is the one you just started, compare the code and choose the workspace for galleries. Approve only that request. Your Dosya password is entered in the browser, never into the plug-in.
4. Leave Lightroom open while it waits. The request expires after **10 minutes**; normal polling occurs every **3 seconds**. Cancellation or denial stops that attempt. On success the dialog reads **Connected to dosya**, with **Connected as …, workspace …**.
5. Click **Check connection**. A successful check says **dosya connection works** and refreshes the displayed account, workspace and storage use. Resolve a wrong workspace before publishing.

Approval creates a dedicated, Full access, API-enabled key pinned to the approved workspace. It counts toward your account's API-key cap and has no configured expiry. Lightroom stores the secret through its password service; non-secret connection details remain in plug-in preferences. The key cannot enlarge your role's permissions. Do not manually paste another API key into this connection flow.

## Verify the result

Close and reopen Plug-in Manager, select **dosya.dev**, and run **Check connection** again. The account and workspace should still be correct. Installation and authorization create no photo gallery by themselves.

To verify publishing separately, configure a **dosya.dev** service in **Publish Services**, create a test published collection, add one non-confidential photo and click **Publish**. Confirm the resulting file/gallery in that workspace. The second service, **dosya Archive (originals)**, archives originals and XMP sidecars; it does not back up the Lightroom catalog or edit history. Keep your normal catalog backup.

## Fix installation or connection failures

| What you see | What to do |
| --- | --- |
| Dosya is absent from Plug-in Manager | Confirm you are using Classic, unpack the ZIP and add the actual `dosya.lrplugin` directory. If it moved, add its new permanent location. |
| **The connection request expired. Start again.** | Click Connect... for a fresh code and complete approval within ten minutes. Do not reuse the expired browser tab. |
| **The connection was declined in the browser.** | Start again only if you intended to grant this workspace connection. |
| **This connection request was already used. Start again.** | Return to Lightroom and initiate a new request. The authorization is single-use. |
| API-key limit denial | Revoke an unused key from **Profile → API keys**, or review the plan's cap, then retry connecting. The browser and plug-in return the cap explanation. |
| **dosya connection expired or was revoked. Reconnect in File &gt; Plug-in Manager.** | Reconnect after checking that revocation was intentional. A failed authenticated check clears the obsolete local secret. |
| **Could not reach dosya securely (…)** | Check the system clock, certificate trust, URL/network filtering and HTTPS connectivity. Do not bypass certificate checks. |
| **Network problem talking to dosya (…)** | Restore connectivity and retry. Temporary poll errors are retried until the request expires; certificate failures need correction. |

Under **dosya troubleshooting**, **Write a debug log (keys and passwords are never written)** enables diagnostic logging. Include the exact failure and plug-in/Classic versions when reporting it; do not share an API-key secret.

## Update, disable or remove

There is no in-plug-in updater. Download a fresh official ZIP, finish any active publish/archive job, quit Classic and replace the installed folder at the same location with the new extracted package. Reopen Lightroom and verify the listed version and Check connection. The toolkit identifier remains the same, so reinstalling code is not a request to revoke a connection or remove online files. Keep a copy of the prior package until the new version works.

Disabling or removing the entry stops Lightroom running the plug-in; it does not revoke the server key. For a complete disconnect, click **Disconnect** first. The confirmation says **The key Lightroom uses is deleted in dosya. Galleries and files stay online.** If offline, the plug-in forgets its local key even when server deletion fails; revoke the dedicated key in Dosya once connectivity returns. Existing galleries and their links must be managed separately if you want them taken offline. Removing the local plug-in folder cannot delete those files.

## Expected result

Classic loads the released plug-in and its Check connection identifies the intended Dosya workspace. Publishing and originals archiving remain separate actions that you start after this installation check.

## Related guides

- [Configure a Lightroom publish service](/integrations/lightroom-configure-publish-service)
- [Choose a Dosya app](/account/choose-app)
