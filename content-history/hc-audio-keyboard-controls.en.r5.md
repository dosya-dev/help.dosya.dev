---
{
  "articleId": "hc-audio-keyboard-controls",
  "locale": "en",
  "revision": 5,
  "title": "Use keyboard controls for audio playback",
  "summary": "Control browser audio with Space, K, J, L, M, and arrow shortcuts, including exact seek distances, queue movement, and focused-input exceptions.",
  "category": "files",
  "articleSlug": "audio-keyboard-controls",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/use-audio-keys.ts, apps/web/src/components/audio/audio-player.tsx, and apps/web/src/components/audio/audio-player.test.tsx. Production keyboard behavior was not re-tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "audio keyboard controls",
    "Advanced audio playback",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya's browser audio viewer installs shortcuts while the player is open. It ignores keystrokes originating in text fields, selects, and content-editable controls so typing does not change playback.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14.webp" alt="Audio keyboard workflow: authorize playback, move focus outside editable controls, test supported seek and mute keys, and verify one player response per key." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Audio keyboard workflow: authorize playback, move focus outside editable controls, test supported seek and mute keys, and verify one player response per key. <a class="workflow-map-full" href="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-keyboard-controls-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Shortcut reference

- Space or K toggles play and pause.
- J seeks back 15 seconds; L seeks forward 15 seconds.
- Left Arrow and Right Arrow seek by 5 seconds.
- Shift+Left Arrow selects the previous queue track; Shift+Right Arrow selects the next one.
- M toggles mute.

## Steps

1. Open a playable audio file in the web viewer and select **Play** once so the browser has authorized media playback.
2. Move focus away from any text input, select box, or editable comment field.
3. Press Space or K and confirm the play/pause icon and elapsed time respond together.
4. Press J and L to test 15-second movement. Near either end, the target clamps between 0 and the known duration.
5. Test the bare arrow keys for 5-second adjustment. Dosya prevents those handled arrows from navigating the outer file viewer.
6. If **Up next** contains siblings, use Shift+Left and Shift+Right. The keyboard's Shift+Left action always requests the previous row; unlike the visible **Previous track** button, it does not first restart a track that is more than 3 seconds in.
7. Press M and verify the volume icon reflects muted or restored state.


### When a shortcut does nothing

Meta, Control, or Alt modified keys are ignored. A command is also ignored while focus is inside an input, textarea, select, or editable element. Click the player background and retry. Previous and next queue actions stop at their list boundaries.

If the player reports **This browser can't decode this audio format. Download the file to play it in another app.**, shortcuts cannot make that browser decode the source. Downloading produces a local copy; it does not repair the cloud file.

## Expected result

Elapsed time, playback state, mute state, or active queue row changes exactly once for each supported shortcut. The underlying file and queue order remain unchanged.

## Related guides

- [Manage the audio play queue](/files/audio-queue)
- [Seek through audio with the waveform](/files/audio-waveform-seek)
