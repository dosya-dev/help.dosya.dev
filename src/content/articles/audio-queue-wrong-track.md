---
{
  "articleId": "hc-audio-queue-wrong-track",
  "locale": "en",
  "revision": 5,
  "title": "Recover an audio queue on the wrong track",
  "summary": "Correct a mismatched web audio queue by checking loaded siblings, active-row bars, direct selection, and the distinct Previous button and shortcut rules.",
  "category": "files",
  "articleSlug": "audio-queue-wrong-track",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/audio-player.tsx, apps/web/src/components/audio/queue-panel.tsx, apps/web/src/components/audio/use-audio-keys.ts, and their focused tests. Production queue playback was not re-tested.",
  "related": [
    "hc-audio-queue",
    "hc-audio-lyrics-troubleshoot"
  ],
  "keywords": [
    "audio queue wrong track",
    "Audio playback troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
The web viewer builds **Up next** from audio siblings already loaded into its file-viewer list. It does not fetch unseen pages or search other folders to complete the queue.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14.webp" alt="Audio queue recovery workflow: inspect the active three-bar row, select the intended loaded sibling, test sequential skips, and verify the player identity matches." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Audio queue recovery workflow: inspect the active three-bar row, select the intended loaded sibling, test sequential skips, and verify the player identity matches. <a class="workflow-map-full" href="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-queue-wrong-track-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Return to the folder and note its active listing, then reopen the intended file.
- Expect the web queue to contain only audio items supplied to the viewer. A file elsewhere in the workspace will not be added automatically.
- Queue operations control playback only; they do not move or duplicate cloud files.

## Steps

1. Open **Up next**. The current row replaces its index number with three bars; they animate while playing and remain static while paused.
2. Compare that row's filename stem and size with the large title. Embedded tags can make the displayed track title differ from its cloud filename.
3. Select the exact desired row. Direct row selection navigates the viewer to that file and resets the prior track's A-B loop.
4. Test **Next track**. Natural playback completion also advances sequentially, and the final row has no next target.
5. Test the visible **Previous track** button: after more than 3 seconds it restarts the current track at zero; at 3 seconds or less it goes to the preceding row.
6. If you use Shift+Left instead, remember that the keyboard shortcut always requests the previous row and does not apply the button's 3-second restart rule.


### If the expected row is missing

Close the viewer, load the correct folder/listing page, and reopen the track so the viewer receives the intended siblings. The browser queue cannot add or remove individual rows and cannot reorder them by dragging. Its visible **Shuffle queue** and **Repeat queue** buttons currently have no click handlers, so they cannot repair order.

For a decoding refusal, Dosya says **This browser can't decode this audio format. Download the file to play it in another app.** That track can remain selected while producing no browser audio; use its filename and error state rather than sound alone to identify it.

## Expected result

The bar-marked row, main player identity, and audible content refer to the same file. Subsequent skips follow the visible sibling order and no cloud object is edited.

## Related guides

- [Manage the audio play queue](/files/audio-queue)
- [Use audio keyboard controls](/files/audio-keyboard-controls)
