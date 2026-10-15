---
{
  "articleId": "hc-carplay-voice",
  "locale": "en",
  "revision": 6,
  "title": "Use voice control with Dosya audio",
  "summary": "Use Siri media search for one uniquely matched Dosya audio file, with active-workspace, ambiguity, no-result, cold-launch, and safety limits explained.",
  "category": "files",
  "articleSlug": "carplay-voice",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/incar/voice.ts, apps/mobile/src/incar/search.ts, apps/mobile/modules/dosya-siri-search/ios/SiriSearchModule.swift, apps/mobile/modules/dosya-siri-search/ios/DosyaPlayMediaIntentHandler.swift, apps/mobile/src/incar/carplayNative.ts, and apps/mobile/app.config.ts. Production Siri recognition was not road-tested.",
  "related": [
    "hc-media-preview",
    "hc-mobile-browse"
  ],
  "keywords": [
    "carplay voice",
    "in-car audio",
    "Dosya help",
    "cloud storage"
  ]
}
---
The Siri media-intent code path is included only in a Dosya iOS build produced with `DOSYA_CARPLAY=1`. Standard production builds omit it while Apple’s restricted CarPlay Audio entitlement remains unavailable. In an entitlement-enabled build, the bridge passes the spoken media, artist, or album text to active-workspace search.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/carplay-voice-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-voice-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-voice-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/carplay-voice-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/carplay-voice-workflow-map-2026-10-14.webp" alt="Entitlement-enabled Siri workflow: confirm Dosya media intents are available, request one unique unlocked audio file, and verify the title in native Now Playing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Entitlement-enabled Siri workflow: confirm Dosya media intents are available, request one unique unlocked audio file, and verify the title in native Now Playing. <a class="workflow-map-full" href="/screenshots/carplay-voice-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-voice-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-voice-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Confirm the installed Dosya build exposes its Siri media integration, then sign in on the iPhone and select the correct workspace before connecting to the vehicle.
- Choose a uniquely searchable audio filename or path phrase. Search is based on Dosya results; it does not semantically match the browser's parsed artist or album tags.
- Practice while parked. The integration has no on-screen ambiguity picker or spoken recovery implemented by the JavaScript handler.

## Steps

1. Verify the intended audio object in phone **Files** and note a distinctive part of its stored name.
2. In an entitlement-enabled build, invoke Siri's media playback for Dosya using that unique phrase. Exact wording can vary with the device's Siri language and available app vocabulary.
3. Dosya restores the mobile session and reads the last active workspace. A cold-launch request is retained until the JavaScript handler is ready; a request while running arrives as an event.
4. Search filters file results by audio kind, but it does not filter locked results. With exactly one audio file and zero folders, Dosya asks the player for a one-track **Search results** queue. A playable unlocked file starts; a locked or otherwise ineligible result is removed by queue construction, does not start, and can show **This file can't be played.**
5. Check native Now Playing for the intended title. If nothing starts, first inspect the file on the phone for a lock or playback refusal; then confirm the active workspace and make the search phrase more distinctive if the result was ambiguous.


### No result, ambiguity, and errors

Zero matching files and folders produces no playback and no user-visible explanation. A unique locked or otherwise unplayable audio result can show **This file can't be played.**, although the voice resolver internally returns `played` after asking the player to start it. Search errors are written only to the app log. More than one file, or even one folder alongside one file, is treated as ambiguous and also does not play. An empty query, missing active workspace, or signed-out session ends without action.

The voice action does not rename, move, delete, or edit the audio. Renaming a cloud file to improve uniqueness is a separate persistent operation and can affect links or collaborators, so prefer a distinctive test item before changing production names.

## Expected result

In an entitlement-enabled build, one unique playable and unlocked audio result begins in a single-item queue. Ambiguous, empty, signed-out, failed, locked, or otherwise unplayable results require phone-side verification.

## Related guides

- [Browse the CarPlay audio library](/files/carplay-browse-library)
- [Browse backed-up files on mobile](/files/mobile-browse-files)
