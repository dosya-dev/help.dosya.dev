---
{
  "articleId": "hc-lightroom-gallery-password",
  "locale": "en",
  "revision": 5,
  "title": "Protect a Lightroom gallery with a password",
  "summary": "Set a trimmed password of at least eight characters on a Lightroom gallery, verify immediate application, and understand workspace enforcement.",
  "category": "integrations",
  "articleSlug": "lightroom-gallery-password",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaUI.lua, apps/lightroom/dosya.lrdevplugin/DosyaPublishServiceProvider.lua, apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/api/src/lib/share/update.ts on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-publish-gallery",
    "hc-password-link"
  ],
  "keywords": [
    "lightroom gallery password",
    "Lightroom gallery options",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A gallery password protects the existing client link. Lightroom trims leading and trailing whitespace before comparing the two entries and checking the minimum length; the stored password must contain at least eight characters after trimming.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Protect a Lightroom gallery with a password: Open the collection Edit Gallery dialog, locate the collection password controls. Correct short or mismatched entries, keep eight trimmed characters. Test the password in a private browser, avoid a cached session. Share the secret separately, verify removal in a fresh session." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open the collection Edit Gallery dialog, locate the collection password controls.” and ends with “Share the secret separately, verify removal in a fresh session.” <a class="workflow-map-full" href="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-gallery-password-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Right-click the target Dosya published collection, choose **Edit Gallery**, and locate the **Password** row in **dosya gallery**.
2. Choose **Set password...**. Enter the same value in **Password:** and **Confirm:**; use at least eight characters excluding leading and trailing spaces.
3. Correct `The password needs at least 8 characters.` or `The two passwords do not match.` before returning to the collection dialog.
4. Confirm the status reads `Password set. Applied right away when you save (or on the first publish).`, then save **Edit Gallery**.
5. Open the gallery in a private browser and enter the trimmed password. Existing authenticated sessions can hide the prompt, so a clean session is the decisive test.
6. Share the password through a separate channel. To remove it later, choose **Remove password**, save, and verify the status and a new private session.

**Secret handling.** The pending plaintext lives in Lightroom’s password store, while collection settings keep a non-secret reference and serial. After Dosya accepts the change, the plug-in marks that serial applied and clears the pending password value.

**Workspace policy.** A workspace with forced share passwords refuses password removal with `This workspace requires a password on all share links`. A failed update appears as `Gallery settings were not updated: ...`; the previous protection remains authoritative.

## Expected result

A new private session cannot open the gallery without the accepted password, the same link opens after successful entry, and Lightroom no longer holds a pending value after application.

## Related guides

- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
- [Protect a share with a password](/sharing/password-link)
