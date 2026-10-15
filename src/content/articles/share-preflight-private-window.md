---
{
  "articleId": "hc-share-preflight-private-window",
  "locale": "en",
  "revision": 5,
  "title": "Preflight a sharing link in a private window",
  "summary": "Test a share without account or grant cookies, complete gates in server order, and verify expiry, identity, preview, and download behavior before delivery.",
  "category": "sharing",
  "articleSlug": "share-preflight-private-window",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/components/share/ShareShell.astro, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/verify-code.ts, apps/api/src/lib/auth.ts.",
  "related": [
    "hc-create-link",
    "hc-share-delivery-audit"
  ],
  "keywords": [
    "share preflight private window",
    "Sharing-link delivery lifecycle",
    "Dosya help",
    "file sharing"
  ]
}
---
A private window reproduces a new recipient session without your Dosya login or earlier share cookies. Test the exact final URL after setting every access control.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-preflight-private-window-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp" alt="Four-step map for copying the active URL, completing email then password gates, checking View only or download actions, and repeating in a clean session." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Test the exact recipient path in a clean browser, including gate order and download policy, before sending the existing URL. <a class="workflow-map-full" href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Copy the exact link from its creation result or **Shared** page. Confirm its current status is active; a revoked token can never be reused.
2. Open a private or incognito window and paste the entire `/s/<token>` URL. Do not sign in: public share access needs no Dosya account.
3. Complete gates in the server’s order. Restricted links request the invited email and six-digit code first; password-protected links then show **Unlock**. A full-lock password gate withholds file metadata.
4. Check the top bar after access: filename or bundle/folder title, size where available, kind, expiry chip, and view counter must match the intended share.
5. Open representative items and navigate folders or the bundle grid. View-only links show **View only** and provide no download action; downloadable items show **Download · size** or **Download all · size**.
6. Close the private window, reopen another clean session, and repeat the critical gate. Then send the same tested URL and communicate any password through a separate channel.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Share creation confirmation with the final link copied for private-window testing." width="454" height="331" loading="lazy" decoding="async" /></a><figcaption>Test the exact URL shown after creation; a newly created duplicate link has independent controls and analytics. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The exact final URL works from a clean browser, exposes only the intended content, and enforces recipient, password, expiry, and download settings.

**The recipient grant and password-unlock cookies last 30 minutes; a fresh private session avoids reusing them.**
**Anything visible on screen can still be captured even when downloads are disabled.**

## Related guides

- [Create a link](/sharing/create-link)
- [Audit delivery](/sharing/audit-delivery)
