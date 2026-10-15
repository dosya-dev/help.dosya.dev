---
{
  "articleId": "hc-carplay-now-playing",
  "locale": "en",
  "revision": 3,
  "title": "Use Now Playing controls in the car",
  "summary": "Pause, resume and skip using the vehicle controls, then verify that the app and vehicle display remain in sync.",
  "category": "files",
  "articleSlug": "carplay-now-playing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current use now playing controls in the car workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-media-preview",
    "hc-mobile-browse"
  ],
  "keywords": [
    "carplay now playing",
    "in-car audio",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to use Now Playing controls in the car in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Vehicle controls send playback commands to the active Dosya audio session. Available buttons depend on the car system and current track.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/carplay-now-playing-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" alt="Four-step interface map for use now playing controls in the car, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-light-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/carplay-now-playing-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Dosya Now Playing in the current released Dosya client.
- Confirm the active account and workspace, then identify an active test track.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: use Now Playing controls in the car

1. Open Dosya Now Playing and confirm the active workspace.
2. Select an active test track and check its name or identifying details.
3. Pause, resume and skip using the vehicle controls.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the app and vehicle display remain in sync.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview surface representing a supported library item before in-car playback." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Park safely before browsing or typing; use vehicle controls while driving. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

While parked, pause and resume once, then confirm the phone and vehicle show the same track and playback state.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the app and vehicle display remain in sync. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Dosya Now Playing, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Browse files on mobile](/files/mobile-browse-files)
