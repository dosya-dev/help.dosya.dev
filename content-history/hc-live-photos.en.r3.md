---
{
  "articleId": "hc-live-photos",
  "locale": "en",
  "revision": 3,
  "title": "Work with Live Photos and paired media",
  "summary": "Identify paired photo and motion components, preview supported content, and keep the pair together when downloading or moving it.",
  "category": "files",
  "articleSlug": "live-photos",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current work with live photos and paired media workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-preview-files",
    "hc-download-files",
    "hc-move-rename"
  ],
  "keywords": [
    "Live Photos",
    "paired media",
    "HEIC video",
    "cloud storage",
    "file management"
  ]
}
---
A Live Photo can contain related still and motion assets. Verify both parts before cleanup or transfer.

A Live Photo can use a still image and a paired motion asset. Moving or downloading only one part can leave an incomplete result.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-light-href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/live-photos-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/live-photos-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/live-photos-workflow-map-2026-10-14.webp" alt="Four-step interface map for work with live photos and paired media, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-light-href="/screenshots/live-photos-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/live-photos-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: work with live photos and paired media

1. Open the item in Files.
2. Check whether paired media is indicated.
3. Preview the still and motion content when supported.
4. Move or organize the pair together.
5. Download both components for a complete local copy.
6. Verify playback on the destination device.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya file preview displaying a supported image with viewer controls inside the current workspace." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Verify the file name and workspace before using viewer or editing actions. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify both components at the destination and test playback in an application that supports the paired format.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The work with live photos and paired media workflow completes for the test item and its result remains visible after a refresh or reconnect.

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
- [Move files](/files/move-and-rename)
