---
{
  "articleId": "hc-audio-repeat-shuffle",
  "locale": "en",
  "revision": 5,
  "title": "Choose repeat and shuffle modes",
  "summary": "Understand that web Shuffle queue and Repeat queue are currently inactive, then use working sequential queue and A-B loop controls without assumptions.",
  "category": "files",
  "articleSlug": "audio-repeat-shuffle",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/audio-player.tsx, apps/web/src/components/audio/audio-modes.ts, apps/web/src/components/audio/queue-panel.tsx, and corresponding unit tests. Production playback controls were not re-tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "audio repeat shuffle",
    "Advanced audio playback",
    "Dosya help",
    "cloud storage"
  ]
}
---
The browser player renders **Shuffle queue** and **Repeat queue**, but the current controls have no click handlers and do not change playback. Web queue order remains sequential.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14.webp" alt="Audio mode workflow: observe that web Shuffle queue and Repeat queue are inactive, use sequential selection or A-B loop, and verify the visible row order remains." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Audio mode workflow: observe that web Shuffle queue and Repeat queue are inactive, use sequential selection or A-B loop, and verify the visible row order remains. <a class="workflow-map-full" href="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-repeat-shuffle-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### What works today

**Up next** selects a row directly, **Previous track** and **Next track** move through the list, and a track that reaches its end advances to the next sibling. The last track does not wrap to the first. A-B looping within one file is implemented separately from queue repeat.

## Steps

1. Open an audio file with at least two loaded audio siblings and expand **Up next**.
2. Record the row order. Select a middle row and confirm its three-bar active indicator.
3. Press **Shuffle queue**. Observe that no row order, active state, or mode status changes; do not treat the icon as confirmation of random playback.
4. Press **Repeat queue**. It likewise does not enable track or queue repetition in the web player.
5. To repeat a segment, use **A-B**: press once at the start point, again at the end, and a third time to clear. Dosya enforces a minimum 2-second region and moves the end to at least two seconds after A when necessary.
6. For ordinary listening, use direct row selection or the skip controls and expect sequential progression.


### Mode details

Opening a different track clears the prior A-B boundaries because positions do not carry safely between files. A sleep timer, when set, is separate and can survive a track change. Playback speed cycles through 0.5×, 0.75×, 1×, 1.25×, 1.5×, 1.75×, and 2×; it does not alter queue sequence.

Queue controls do not mutate uploaded objects. There is therefore no cloud-data recovery step after testing them. If your browser session appears to shuffle or repeat, compare the active row with the visible list and reload before reporting it, because the current source contains no web state transition for those icons.

## Expected result

Web playback follows the listed sibling order, the inactive shuffle and repeat icons leave that order unchanged, and A-B repeats only the chosen section of the current track.

## Related guides

- [Manage the audio play queue](/files/audio-queue)
- [Fix a queue playing the wrong track](/files/audio-queue-wrong-track)
