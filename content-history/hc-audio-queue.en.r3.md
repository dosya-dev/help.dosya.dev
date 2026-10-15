---
{
  "articleId": "hc-audio-queue",
  "locale": "en",
  "revision": 3,
  "title": "Manage the audio play queue",
  "summary": "Add tracks, reorder one item and advance playback, then verify that the next track follows the visible queue order.",
  "category": "files",
  "articleSlug": "audio-queue",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current manage the audio play queue workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
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
Use this workflow to manage the audio play queue in the intended workspace. Start with a harmless test item when the action changes stored data or access.

The play queue controls listening order and does not move or duplicate stored audio files. Queue state can be temporary across sessions.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-queue-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/audio-queue-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/audio-queue-workflow-map-2026-10-14.webp" alt="Four-step interface map for manage the audio play queue, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-light-href="/screenshots/audio-queue-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/audio-queue-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Audio preview in the current released Dosya client.
- Confirm the active account and workspace, then identify several audio files.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: manage the audio play queue

1. Open Files → Audio preview and confirm the active workspace.
2. Select several audio files and check its name or identifying details.
3. Add tracks, reorder one item and advance playback.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the next track follows the visible queue order.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview displaying supported content without a separate download." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use non-confidential test media and confirm the selected filename before playback. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Check the next two tracks and their order, then use skip once to confirm the queue advances as expected.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the next track follows the visible queue order. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Audio preview, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Preview files](/files/preview-files)
