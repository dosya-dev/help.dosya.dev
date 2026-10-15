---
{
  "articleId": "hc-share-recipient-open-link",
  "locale": "en",
  "revision": 5,
  "title": "Open a Dosya sharing link for the first time",
  "summary": "Open the complete dosya.dev share URL, distinguish recipient and password gates from terminal link errors, and confirm the revealed item before acting.",
  "category": "sharing",
  "articleSlug": "share-recipient-open-link",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against current source behavior on 2026-10-14; production deployment was not verified. Sources: src/pages/s/[token].astro, src/components/share/ShareShell.astro, apps/api/src/pages/api/share/[token].ts, apps/api/src/pages/api/share/[token]/meta.ts.",
  "related": [
    "hc-unavailable-link",
    "hc-share-recipient-verification"
  ],
  "keywords": [
    "share recipient open link",
    "Sharing-link recipient access",
    "Dosya help",
    "file sharing"
  ]
}
---
A Dosya public share uses `/s/<token>` and needs no account. Treat the full URL as sensitive, then follow the gate or terminal status the page actually displays.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/share-recipient-open-link-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-open-link-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-open-link-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/share-recipient-open-link-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/share-recipient-open-link-help-workflow-2026-10-14.webp" alt="Four-step map for validating the complete Dosya share URL, completing email and password gates in order, and checking the revealed item before use." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Open the exact bearer URL without an account, complete only the gates it presents, and verify the revealed share before preview or download. <a class="workflow-map-full" href="/screenshots/share-recipient-open-link-help-workflow-2026-10-14.webp" data-light-href="/screenshots/share-recipient-open-link-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/share-recipient-open-link-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Check that the address uses the expected `dosya.dev/s/` route and includes the complete long token. Links broken across email lines commonly produce **Invalid share link** or **Link unavailable**.
2. Open the URL in a current browser. You do not need a Dosya account; the page is intentionally excluded from search indexing.
3. If the page says **This file was shared privately**, enter the invited email and verify its code. For a link that is both restricted and password-protected, email verification appears first.
4. If the page asks for **Password**, obtain it from the sender through the agreed separate channel and choose **Unlock**. Full-lock mode hides filename, size, counts, and sender until this succeeds.
5. If you see **Link expired**, **Link revoked**, **File deleted**, or **Region restricted**, stop retrying and send that exact title to the owner; only they can provide another usable link or content.
6. After access, verify the top-bar name, size, type, expiry, and sender line before previewing or downloading. Use **Copy link** only when the sender permits forwarding.

<figure class="help-screenshot"><a href="/screenshots/password-recipient-2026-10-10.webp"><img src="/screenshots/password-recipient-2026-10-10.webp" alt="Recipient page asking for the password or verification required before protected share details appear." width="660" height="600" loading="lazy" decoding="async" /></a><figcaption>Use the gate shown for the current link; restricted access is verified before the password when both controls are enabled. <a href="/screenshots/password-recipient-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The browser either reveals the intended share with its current controls or gives a specific terminal state that tells the sender what must change.

**A generic **Something went wrong** with **Could not load the shared file.** Try refreshing the page.** indicates a network or service failure.
**Public bearer links can be opened by anyone holding the URL.**

## Related guides

- [Open an unavailable link](/sharing/unavailable-link)
- [Use recipient verification](/sharing/share-recipient-verification)
