---
{"articleId":"hc-media-verify-video-duration","locale":"en","revision":1,"title":"Verify video duration and file details","summary":"Verify video duration and file details with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"media-verify-video-duration","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the verify video duration and file details workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-preview-files","hc-file-details"],"keywords":["media verify video duration","Media metadata inspection details","Dosya help"]}
---
Verify video duration and file details is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya media viewer and File details in the current released client.
- Confirm the active account and workspace, then identify known video file with an expected running time.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: verify video duration and file details

1. Open the Dosya media viewer and File details and confirm the active account and workspace.
2. Locate known video file with an expected running time and verify its name or identifying details.
3. Open the viewer, compare duration, size, format, and modified time, and play a short controlled section.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the video metadata and playable content match the expected file.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya image preview showing a supported media file and its details." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Compare the preview with File details before relying on media metadata. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the video metadata and playable content match the expected file. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya media viewer and File details, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Preview files](/files/preview-files)
- [View file details](/files/file-details)
