---
{
  "articleId": "hc-audio-queue",
  "locale": "en",
  "revision": 6,
  "title": "Manage the audio play queue",
  "summary": "Use Dosya's web and mobile audio queues, understand their ordering and 500-track mobile cap, and recover when a track cannot be decoded or loaded.",
  "category": "files",
  "articleSlug": "audio-queue",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/audio-player.tsx, apps/web/src/components/audio/queue-panel.tsx, apps/mobile/src/player/queue.ts and apps/mobile/src/player/controller.ts. Production playback was not tested and no production action was performed.",
  "related": [
    "hc-media-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "audio queue",
    "media and document previews",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
The web viewer builds **Up next** from audio files already present in its loaded file list. Mobile can fetch the remaining pages in the same folder, filter, and sort order, but stops at 500 playable tracks.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-queue-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-queue-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-queue-workflow-map-2026-10-14.webp" alt="Audio queue workflow showing Up next order, active-track indicator, direct row selection, skip controls, and the mobile queue cap." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read the visible order first, then select a row or use Previous track and Next track to test queue movement. <a class="workflow-map-full" href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-queue-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an unrestricted audio file from the intended folder. Mobile excludes files whose lock mode is not **none** from its queue; locked audio can have a separate inline playback path after unlock.
- Check the current Files sort and filter on mobile because the queue preserves that listing order while fetching later pages.
- Web does not fetch unseen listing pages for **Up next**. A track absent from the current viewer file set will not appear merely because it exists elsewhere in the folder.

## Steps

1. Start an audio preview and locate **Up next**. The count is the number of audio siblings available to the current viewer.
2. Find the active row. Its numbered position changes to three bars; the bars pulse while playing and remain still while paused.
3. Select another row to navigate directly to that track. The player source, tags, waveform, loop state, and active index update for the selected file.
4. Use **Next track** to move one row forward. At natural track end, web also advances to the next row; the control is disabled on the last entry.
5. Use **Previous track**. When playback is more than 3 seconds into the current track, it restarts at 0; at 3 seconds or less, it selects the preceding row and is disabled at the queue start.
6. On mobile, **Shuffle** randomizes only the tracks after the one currently playing and can restore the original order. **Repeat** cycles off, queue, then track. A folder over 500 eligible tracks reports **Queue capped at 500 tracks.**

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya media viewer shell representing the file list from which the web audio queue derives its sibling tracks." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The web queue follows the audio siblings held by the open viewer rather than moving or duplicating their cloud objects. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Current web limits and recovery

The web **Up next** list is read-only: selecting a row changes playback, but there is no drag-to-reorder or remove command. The visible **Shuffle queue** and **Repeat queue** buttons currently have no mutation handlers in the web player, so verify order through the rows and skip controls rather than assuming those two buttons changed it.

If web reports **This browser can't decode this audio format. Download the file to play it in another app.**, the queue stays intact but that track cannot play in the browser. Downloading creates a separate local copy. Queue operations themselves do not move, copy, rename, or delete cloud files, and the web queue is reconstructed rather than persisted as a playlist.

## Expected result

The highlighted row matches the audible track, direct selection and skip controls follow the visible order, and mobile queues stop cleanly at 500 items. Cloud files remain in their original folders.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Preview files](/files/preview-files)
