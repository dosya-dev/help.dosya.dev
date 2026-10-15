---
{"articleId":"hc-audio-keyboard-controls","locale":"en","revision":1,"title":"Use keyboard controls for audio playback","summary":"Use keyboard controls for audio playback with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"audio-keyboard-controls","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the use keyboard controls for audio playback workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-media-preview","hc-audio-queue"],"keywords":["audio keyboard controls","Advanced audio playback","Dosya help"]}
---
Use keyboard controls for audio playback is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open an audio file in the Dosya player in the current released client.
- Confirm the active account and workspace, then identify focused Dosya audio player.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: use keyboard controls for audio playback

1. Open an audio file in the Dosya player and confirm the active account and workspace.
2. Locate focused Dosya audio player and verify its name or identifying details.
3. Use the supported play, pause, seek, or volume keys and watch the player state.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the player responds once per key without triggering page actions.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya media preview surface used for audio playback and related controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use non-sensitive media and lower device volume before testing playback controls. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the player responds once per key without triggering page actions. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to an audio file in the Dosya player, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Use media preview controls](/files/media-preview-controls)
- [Manage the audio queue](/files/audio-queue)
