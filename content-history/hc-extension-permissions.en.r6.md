---
{
  "articleId": "hc-extension-permissions",
  "locale": "en",
  "revision": 6,
  "title": "Understand Save to dosya browser permissions",
  "summary": "Review the extension's account access, built-in browser permissions, and per-site image prompt before deciding what access to allow.",
  "category": "extension",
  "articleSlug": "extension-permissions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/extension/wxt.config.ts, src/lib/manifest-hooks.ts, permissions.ts, popup/components/PermissionBanner.tsx and apps/web/src/pages/connect/extension.tsx: install permissions, optional per-origin access and consent boundaries. Local repository evidence only; no production request was made.",
  "related": [
    "hc-extension-connect",
    "hc-extension-page-permission-denied",
    "hc-sessions"
  ],
  "keywords": [
    "Save to dosya permissions",
    "browser extension site access",
    "activeTab permission",
    "optional host permission",
    "extension privacy"
  ]
}
---
Save to dosya uses three distinct kinds of access: browser capabilities needed by the extension, account consent granted on Dosya, and optional access to an image host when that site blocks a save. Review them separately because one approval does not silently grant the other two.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-permissions-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-permissions-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-permissions-workflow-map-2026-10-14.webp" alt="Permission review separating browser features, Dosya account consent, and an optional image-host request for one blocked site." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Check the browser's installed-extension details, read the Dosya connection card, and approve a site origin only when a blocked image requires it. <a class="workflow-map-full" href="/screenshots/extension-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-permissions-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Browser capabilities in the released extension

The manifest requests these capabilities for specific product functions:

| Browser permission | Why Save to dosya uses it |
| --- | --- |
| **activeTab** and **scripting** | Read a selected passage or capture the visible area after you invoke the extension on the active tab. |
| **contextMenus** | Add commands for saving an image, selected text or the visible screenshot. |
| **storage** and **unlimitedStorage** | Keep authorization, destination preferences, captured bytes and the retry queue in the browser. |
| **identity** | Complete the protected Dosya authorization handoff where the browser supports that API. |
| **notifications** | Report completed saves and failures on platforms that expose extension notifications. |
| **alarms** | Check queued uploads every minute and perform hourly cleanup work. |
| **offscreen** | Let Chromium uploads continue away from the popup; Firefox uploads directly in the background, and Safari uses its supported fallback. |

The required network origins are `https://api.dosya.dev/*` and `https://app.dosya.dev/*`. The store package removes blanket website access from install-time host permissions. Access to other `http` or `https` origins is optional and requested only for the affected host when an image cannot otherwise be fetched.

Firefox builds require Firefox 140 or later. Firefox's store disclosure identifies authentication information and website content because the extension keeps its session token and uploads only the page content you choose to save.

## What account consent permits

Selecting **Sign in with dosya** opens an account page titled **Connect Save to dosya for [browser]**. Its **Allow** button issues a browser-extension session that can:

- save files into folders you can access;
- create folders when your workspace role permits that action;
- create a share link for a file the extension saved.

That scoped connection cannot delete, rename or move files. It also cannot change account settings, manage team membership or control billing. Revoke the browser session later from **Profile → Sessions** if the installation should no longer connect.

## When a site-specific prompt appears

Saving selected text and taking a visible screenshot rely on the active-tab grant created by your click or shortcut. They do not need standing access to every website.

An image can be hosted on a different origin from the page displaying it. If both the background request and the current-page fallback are blocked, the failed row is retained and the popup shows:

> A site blocked saving an image. Allow dosya to read images from [host]?

Choose **Allow** to request that host pattern and automatically retry matching blocked rows. Choose **Not now** to dismiss the stored request; the failed capture remains available for a deliberate retry. Granting one host does not authorize unrelated domains.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Connected extension popup whose screenshot and selection buttons use active-tab access while image saving starts from the right-click hint." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>The two popup actions work on the tab you deliberately activate; the image command is separate and can trigger a narrowly scoped host request. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: review current access

1. Open the browser's extension-management page and select **Save to dosya**.
2. Inspect its permissions or site-access section. Browser wording differs, but every manually granted website should correspond to an image host you recognize.
3. Compare the two required Dosya service origins with any optional website origins.
4. Open **Profile → Sessions** in Dosya and confirm that the extension session belongs to this browser installation.

Remove an optional site's access when it is no longer needed. A later image from that host may fail again and present a fresh **Allow** choice. Removing the two Dosya service origins prevents sign-in and uploads; reconnecting cannot work until the browser grants them again.

## Expected result

The browser retains access to Dosya's app and API origins, and any other granted origin has a known image-saving purpose. The account session remains limited to saving, folder creation and single-file sharing.

## Troubleshooting permission failures

**The popup says dosya needs permission to reach api.dosya.dev to save files.** Accept the browser prompt for both official Dosya origins, then press **Sign in with dosya** again.

**A capture reports This page cannot be captured.** Use an ordinary website tab. Browser settings, extension-store pages, internal URLs and some protected documents do not allow injected extension scripts or visible-tab capture.

**The image banner returns after Allow.** Confirm that the named host is still serving the image and that the browser recorded its site permission. A page can load an image from another CDN host, so a changed source may require a separate decision.

**A file reaches Dosya but folder creation fails.** Browser access is working; the workspace role lacks **Create folders**. Ask an administrator to create the folder or adjust the role.

## Related guides

- [Installing and connecting Save to dosya](/extension/install-and-connect)
- [Resolving a denied page permission](/extension/extension-page-permission-denied)
- [Reviewing active sessions](/account/sessions)
