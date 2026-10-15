---
{
  "articleId": "hc-media-preview",
  "locale": "en",
  "revision": 2,
  "title": "Use image, audio and video preview controls",
  "summary": "Open a supported media file, use viewer controls, and download the original when the browser cannot render the format reliably.",
  "category": "files",
  "articleSlug": "media-preview-controls",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current use image, audio and video preview controls workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-preview-files",
    "hc-download-files"
  ],
  "keywords": [
    "image preview",
    "video preview",
    "audio preview",
    "cloud storage",
    "file management"
  ]
}
---
Media previews help inspect a stored file without changing it. The original remains the authoritative stored object.

A preview is a browser rendering of the stored object. It may use different controls or fidelity than a dedicated local application.

<figure class="help-screenshot"><a href="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp"><img src="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp" alt="Four-step interface map for use image, audio and video preview controls, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/media-preview-controls-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: use image, audio and video preview controls

1. Open the media file in Files.
2. Confirm its name and type.
3. Use available zoom, playback or navigation controls.
4. Avoid treating a preview conversion as an edit.
5. Download the original for unsupported behavior.
6. Compare the local file when fidelity is critical.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file preview displaying a supported image with viewer controls inside the current workspace." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Verify the file name and workspace before using viewer or editing actions. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Check the filename and media type, then test playback or zoom. Download the original when colour, codecs, timing or metadata must be exact.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The use image, audio and video preview controls workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Preview files](/files/preview-files)
- [Download files](/uploading/download-files)
