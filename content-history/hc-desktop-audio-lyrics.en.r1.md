---
{"articleId":"hc-desktop-audio-lyrics","locale":"en","revision":1,"title":"Show lyrics in the desktop audio player","summary":"Show lyrics in the desktop audio player with a controlled test, clear verification, limits, and recovery steps.","category":"desktop","articleSlug":"desktop-audio-lyrics","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the show lyrics in the desktop audio player workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-media-preview","hc-audio-queue"],"keywords":["desktop audio lyrics","Desktop media playback","Dosya help"]}
---
Show lyrics in the desktop audio player is easier to verify when you use one controlled item and confirm the account, workspace, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open a media preview in the Dosya desktop app in the current released client.
- Confirm the active account and workspace, then identify track with supported lyric metadata.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: show lyrics in the desktop audio player

1. Open a media preview in the Dosya desktop app and confirm the active account and workspace.
2. Locate track with supported lyric metadata and verify its name or identifying details.
3. Open the Lyrics panel and start playback.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that available lyrics appear and follow the track when synchronized.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop app overview for audio and video preview workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Lower volume before playback and use non-sensitive test media. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and available lyrics appear and follow the track when synchronized. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to a media preview in the Dosya desktop app, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Use media previews](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
