---
{
  "articleId": "hc-lightroom-gallery-expiry",
  "locale": "en",
  "revision": 5,
  "title": "Set an expiry date for a Lightroom gallery link",
  "summary": "Set a Lightroom gallery link to expire from zero through 365 days, account for workspace caps, and verify the effective server date after saving.",
  "category": "integrations",
  "articleSlug": "lightroom-gallery-expiry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/api/src/lib/share/expiry.ts, apps/api/src/lib/share/settings.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-password-link"
  ],
  "keywords": [
    "lightroom gallery expiry",
    "Lightroom gallery options",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
**Link expires after** accepts a whole number from 0 through 365. Zero requests a link that never expires, but a workspace or plan ceiling can replace that request with an earlier server date.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Set an expiry date for a Lightroom gallery link: Open the collection Edit Gallery dialog, record the current share URL before changes. Save the selected expiry value in Lightroom, update only when the setting changed. Record a policy-shortened date, treat it as the real deadline. Verify the effective expiry in Dosya, replace any relinked URL." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open the collection Edit Gallery dialog, record the current share URL before changes.” and ends with “Verify the effective expiry in Dosya, replace any relinked URL.” <a class="workflow-map-full" href="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-expiry-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Edit Gallery** for the intended Dosya collection and note the current link before changing its lifetime.
2. Enter a whole number from 1 to 365 for that many days, or enter 0 to request **never**. Lightroom clamps its collection value to this range.
3. Save the dialog. For an existing gallery, the plug-in sends the new relative-day value only when it differs from the last applied setting.
4. Read any warning: `dosya set the link to expire on YYYY-MM-DD instead of never (your plan's limit).` means the server overrode a zero-day request.
5. For a shortened finite request, record the reported `YYYY-MM-DD` from `sooner than the N days asked for (your plan's limit)` as the effective deadline.
6. Open or inspect the link in Dosya and verify that effective date. After expiry, expect the old URL to stop working; a later publish may create and report a new link.

**Timing.** The server calculates a relative expiry from the time the update is accepted. Saving the same already-applied number does not continually extend the link on every unrelated collection edit.

**Relinking changes the address.** When a share is missing, revoked, or expired, publish can create a replacement and says `The gallery's old link was revoked or had expired, so it has a new link: <url>`; update recipient messages accordingly.

## Expected result

The gallery reports the effective expiry allowed by policy, the current link works until that deadline, and any server-shortened date is captured from Lightroom’s warning.

## Related guides

- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
- [Protect a share with a password](/sharing/password-link)
