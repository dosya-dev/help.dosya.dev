---
{
  "articleId": "hc-carplay-search",
  "locale": "en",
  "revision": 6,
  "title": "Search Dosya audio from the car display",
  "summary": "Use Dosya’s Siri-only in-car audio lookup, learn its exact-match decision rules, and diagnose silent ambiguous, empty, or signed-out results.",
  "category": "files",
  "articleSlug": "carplay-search",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/mobile/src/incar/search.ts, voice.ts, apps/mobile/src/player/queue.ts, controller.ts, apps/mobile/src/files/api.ts, and apps/api/src/pages/api/search.ts on 2026-10-14; production Siri and CarPlay were not invoked.",
  "related": [
    "hc-media-preview",
    "hc-mobile-browse"
  ],
  "keywords": [
    "carplay search",
    "in-car audio",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Dosya has no typed **Search** control or CarPlay search template. In-car lookup is a Siri intent that searches the active workspace and plays only one unambiguous audio result.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/carplay-search-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-search-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-search-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/carplay-search-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/carplay-search-workflow-map-2026-10-14.webp" alt="Siri audio lookup with active-workspace search, audio filtering, unique playback, and silent ambiguous results." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use a distinctive query so workspace search returns exactly one audio file and no matching folder before playback starts. <a class="workflow-map-full" href="/screenshots/carplay-search-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-search-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-search-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Search rules

The native Siri bridge accepts a query while running or cold-launched. Dosya hydrates the saved session before reading active workspace.

Workspace search requires the role's `access_files` permission and returns at most 50 file hits and 50 folder hits on its default first page. Dosya retains matching folders but filters files to recognised audio. The voice resolver attempts playback only for exactly one audio file and zero folder matches, making a one-track queue labelled **Search results**.

Multiple audio results, one audio plus a folder, or folders without audio are ambiguous. Zero folders and audio is no match. The listener provides no fallback list or announcement, so both outcomes leave playback unchanged. This Siri path requests no second page, so matches beyond the first 50 file hits or first 50 folder hits cannot affect that decision.

The sole audio hit must also be unlocked. Search can return a file whose own `lock_mode` is set, and the current voice resolver still reports that case internally as `played`; the player then drops the locked track, leaves playback unchanged, and shows **This file can't be played.** on the phone.

## Steps

1. Sign in on iPhone, choose the intended workspace, and use a role with `access_files` permission.
2. Pick a distinctive fragment of one unlocked audio filename that is not also a folder name.
3. While parked, invoke the Dosya Siri audio intent and speak it.
4. Wait for the unique match to begin.
5. Compare Now Playing with the expected filename.
6. If silent, refine the phrase later or browse folders instead of interacting while driving.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Phone file preview used to confirm an exact audio filename before a unique Siri query." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Verify filename and folder on the phone so spoken terms do not collide with another cloud result. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

One unlocked audio result without a folder collision starts as a solo queue. Search does not alter any item.

A signed-out launch, empty query, absent workspace, API failure, ambiguity, or no match leaves playback unchanged. Errors are logged on the phone rather than shown as a CarPlay alert.

## Troubleshooting

- **No Search button exists.** Use Siri; typed in-car search is absent.
- **A precise title does nothing.** Look for a matching folder, a second audio filename, or a result outside the first 50 hits.
- **The phone says This file can't be played.** The sole matching audio file is locked; unlock it in Files before trying the Siri query again.
- **Search returns nothing for this role.** Ask a workspace administrator for `access_files`, or switch to a role that already has it.
- **Wrong workspace is searched.** Change the phone's active workspace first.
- **Cold launch stays silent.** Restore sign-in and retry while parked.
- **A PDF matches the words.** Non-audio files are filtered out.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Browse files on mobile](/files/mobile-browse-files)
