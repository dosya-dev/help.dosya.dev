---
{
  "articleId": "hc-pdf-preview",
  "locale": "en",
  "revision": 3,
  "title": "Preview a PDF in Dosya",
  "summary": "Open the preview and move between several pages, then verify that page count and visible content match the file.",
  "category": "files",
  "articleSlug": "pdf-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current preview a pdf in dosya workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-media-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "pdf preview",
    "media and document previews",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to preview a PDF in Dosya in the intended workspace. Start with a harmless test item when the action changes stored data or access.

PDF preview is useful for inspection but does not guarantee that every embedded font, form or script behaves like a desktop reader.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/pdf-preview-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/pdf-preview-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" alt="Four-step interface map for preview a pdf in dosya, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/pdf-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/pdf-preview-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Files → Preview in the current released Dosya client.
- Confirm the active account and workspace, then identify a non-confidential PDF.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: preview a PDF in Dosya

1. Open Files → Preview and confirm the active workspace.
2. Select a non-confidential PDF and check its name or identifying details.
3. Open the preview and move between several pages.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that page count and visible content match the file.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview displaying supported content without a separate download." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use non-confidential test media and confirm the selected filename before playback. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Check the page count and inspect an early and later page. Download the original when forms, signatures or print fidelity matter.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and page count and visible content match the file. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Files → Preview, confirm the active workspace and check that your role permits the action.

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
