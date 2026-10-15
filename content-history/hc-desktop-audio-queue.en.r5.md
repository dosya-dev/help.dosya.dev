---
{
  "articleId": "hc-desktop-audio-queue",
  "locale": "en",
  "revision": 5,
  "title": "Use the audio queue in the desktop app",
  "summary": "Play audio siblings in existing folder order, choose another track, and learn how previous, next, and automatic advancement behave at queue boundaries.",
  "category": "desktop",
  "articleSlug": "desktop-audio-queue",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/desktop/src/renderer/components/files/audio/AudioPlayer.tsx, apps/desktop/src/renderer/components/files/audio/QueuePanel.tsx, apps/desktop/src/renderer/components/files/audio/useAudioKeys.ts, apps/desktop/src/renderer/lib/file-type.ts and apps/desktop/tests/e2e/audio-viewer.spec.ts. Verified sibling filtering, fixed queue order, navigation boundaries, the three-second restart rule and automatic next-track behavior. Production behavior was not re-tested.",
  "related": [
    "hc-media-preview",
    "hc-audio-queue"
  ],
  "keywords": [
    "desktop audio queue",
    "Desktop media playback",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop queue is built automatically from audio siblings already loaded in the current file viewer. It follows their existing order; the queue panel has no reorder or add control.

<figure class="help-screenshot"><a href="/screenshots/desktop-audio-queue-help-workflow-2026-10-14.webp"><img src="/screenshots/desktop-audio-queue-help-workflow-2026-10-14.webp" alt="Audio player Up next panel with sibling tracks in fixed viewer order and the active row highlighted." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Up next is assembled from audio siblings already present in the viewer and cannot be manually reordered. <a href="/screenshots/desktop-audio-queue-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open an audio file from a folder containing at least one other recognized audio file. The **Up next** tab appears only when the queue contains more than one track. Access is the same as file access; there is no separate queue plan or role setting.

## Steps

1. Open the first track, then select **Up next**. Its badge reports the number of audio files in the viewer's sibling list.
2. Check the highlighted row. Each row shows a sequence number, track name and file size; the active row uses a playing indicator.
3. Select a different row to open that file. This navigates the viewer to the selected cloud file without copying or moving it.
4. Use **Next** to advance unless the current track is last. Select the **Previous** button within the first three seconds to open the prior item; after three seconds that button restarts the current track at 00:00.
5. Let a track finish to test automatic advancement. Ended playback opens the following queue item when one exists and stops at the final item.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop library context whose loaded audio siblings determine the Up next sequence." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The queue inherits this viewer context, so confirm the folder and visible sibling set before testing order. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

The keyboard actions differ slightly: **Shift+Right Arrow** opens the next track, while **Shift+Left Arrow** always opens the previous track regardless of elapsed playback time. The player ignores these keys while typing into an input, select or editable control.

## Expected result

Selecting a queue row opens that exact audio file, and completion advances once through the existing order. Queue use does not rename, reorder or otherwise change any stored item.

## Troubleshooting

If **Up next** is absent, return to the folder and open a track while multiple supported audio siblings are present. A filtered or incomplete file list can produce a one-item queue.

If next or previous does nothing, check whether you are already at the corresponding end. When playback itself fails, the player displays **“This app can't decode this audio format. Download the file to play it in another app.”**

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
