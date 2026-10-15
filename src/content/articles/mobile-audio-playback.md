---
{
  "articleId": "hc-mobile-audio-playback",
  "locale": "en",
  "revision": 5,
  "title": "Play audio in the mobile viewer",
  "summary": "Play unlocked audio in Dosya mobile, understand the 500-track queue, previous and next behavior, background controls, signed-link retry, and skips.",
  "category": "files",
  "articleSlug": "mobile-audio-playback",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/app/player.tsx, apps/mobile/src/player/controller.ts, apps/mobile/src/player/queue.ts, and apps/mobile/src/player/service.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-media-preview",
    "hc-mobile-download-file"
  ],
  "keywords": [
    "mobile audio playback",
    "Mobile media viewing",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya mobile builds an audio queue from the current folder, filter, and sort order. It streams the current track through a resolved URL and prepares the next track just in time.

<figure class="help-screenshot"><a href="/screenshots/mobile-audio-playback-help-workflow-2026-10-14.webp"><img src="/screenshots/mobile-audio-playback-help-workflow-2026-10-14.webp" alt="Dark four-step workflow showing a mobile audio file, playback controls, progress verification, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The workflow visibly opens a media file in the mobile viewer, starts playback, tests seek and pause, confirms progress, and reopens the view. <a href="/screenshots/mobile-audio-playback-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Queue rules**

The member needs file access, and only audio rows whose lock mode is **none** enter the queue; view-only and password-locked tracks are omitted. Dosya fetches further list pages until it has at most 500 playable tracks. When more exist it reports **Queue capped at 500 tracks.** An empty source reports **No audio files here.**

## Steps

1. In the mobile **Files** view, enter the intended folder, apply any filter or sort order, and open an unlocked audio file.
2. Use the controls labelled **Play**, **Pause**, **Previous**, **Next**, **Shuffle**, and **Repeat**. The seek position updates while the player screen is mounted.
3. Press **Previous** after more than three seconds to restart the current track. At three seconds or earlier it opens the preceding track; on the first track it seeks to the beginning.
4. A deliberate **Next** press wraps from the last track to the first. Automatic playback with repeat off still stops at the end; repeat cycles through off, queue, and track modes.
5. Lock the phone or background the app and test the system play, pause, previous, next, and seek controls. Android removes the playback notification if the app is killed.


**Playback recovery**

On a playback error, Dosya re-resolves the signed URL once for that track, reloads it, restores the saved position, and resumes. If the retry fails, the toast says **Couldn't play "_title_" - skipping.** The error path advances without wrapping at the end, preventing an unplayable last track from looping forever.

Opening a locked or non-audio file as a single playback request returns **This file can't be played.** Playback and local metadata caching do not create a cloud copy or a new file version.

## Expected result

The unlocked track plays in its folder-derived queue, transport controls follow the documented boundaries, and one failed URL refresh either recovers the position or skips safely.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Download on mobile](/files/mobile-download-file)
