---
{
  "articleId": "hc-audio-troubleshoot-no-playback",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot audio that will not start",
  "summary": "Diagnose browser audio that will not start by separating autoplay, access, transfer, decode, queue, and source-file problems with exact recovery checks.",
  "category": "files",
  "articleSlug": "audio-troubleshoot-no-playback",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/web/src/components/audio/audio-player.tsx, apps/web/src/components/audio/use-audio-keys.ts, apps/mobile/src/player/controller.ts, and focused player tests. Production playback and network delivery were not re-tested.",
  "related": [
    "hc-audio-queue",
    "hc-audio-lyrics-troubleshoot"
  ],
  "keywords": [
    "audio troubleshoot no playback",
    "Audio playback troubleshooting details",
    "Dosya help",
    "cloud storage"
  ]
}
---
A browser can refuse audio before playback permission, while fetching bytes, or while decoding the media. Dosya exposes a specific decode message but does not classify every rejected browser `play()` promise.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14.webp" alt="Audio playback diagnosis workflow: press Play, check mute and elapsed time, read the browser decode error, compare a known-good MP3, and verify the active queue row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Audio playback diagnosis workflow: press Play, check mute and elapsed time, read the browser decode error, compare a known-good MP3, and verify the active queue row. <a class="workflow-map-full" href="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14.webp" data-light-href="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/audio-troubleshoot-no-playback-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

### Before you start

- Lower device volume and use a non-sensitive test track.
- Confirm you can open the file and every ancestor folder in the intended workspace.
- Keep a small known-good MP3 available in the same location for comparison.

## Steps

1. Open the affected audio in the web viewer and press the visible **Play** control once. Browsers can require a direct user gesture before sound starts.
2. Verify that elapsed time changes and that **Mute** is off with volume above zero. Press M once only if the icon indicates muted state.
3. Read the stage for **This browser can't decode this audio format. Download the file to play it in another app.** That message means the browser rejected the supplied media format or bytes.
4. Open the known-good MP3 through the same account and folder. If it plays, download the affected source and inspect it locally; if both fail, retry the browser session and network path.
5. If **Up next** highlights a different row, select the intended track directly. Filename, embedded title, and audible content can disagree when tags were copied from another file.
6. Compare in a supported mobile client when useful, remembering that platform decoders and queue construction differ.


### Recovery and file effects

For a decode refusal, use **Download** and play the local copy in a compatible application or transcode a separate copy to a browser-supported format. Uploading a replacement changes cloud content; preserve the original until verification is complete. Testing player controls never repairs or rewrites media.

If a download also fails, investigate file access or delivery rather than codec metadata. The web error surface has no dedicated timeout string for every network failure, so a known-good file and refreshed session provide the clean comparison.

## Expected result

The failure is narrowed to user playback authorization, mute/volume, wrong queue row, access or transfer, browser decoding, or source bytes. Any successful repair is verified against a separate test copy first.

## Related guides

- [Preview media files](/files/media-preview-controls)
- [Fix an audio queue playing the wrong track](/files/audio-queue-wrong-track)
