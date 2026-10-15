---
{
  "articleId": "hc-lightroom-resume-archive-upload",
  "locale": "en",
  "revision": 3,
  "title": "Resume an interrupted Lightroom archive upload",
  "summary": "Leave the source files unchanged and run the archive export again. Verify that completed files are skipped and an incomplete large file resumes or restarts safely.",
  "category": "integrations",
  "articleSlug": "lightroom-resume-archive-upload",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-lightroom-configure-publish-service",
    "hc-upload-states"
  ],
  "keywords": [
    "lightroom resume archive upload",
    "Lightroom export and archive",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Resume an interrupted Lightroom archive upload** in Dosya. The main action is to leave the source files unchanged and run the archive export again; the decisive check is whether completed files are skipped and an incomplete large file resumes or restarts safely.

<figure class="help-screenshot"><a href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp" alt="Four-step workflow map for resume an interrupted lightroom archive upload, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for resume an interrupted lightroom archive upload: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/lightroom-resume-archive-upload-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Lightroom Classic Export in the current released client.
- Confirm the active account and workspace, then identify archive export that stopped after a connection or app interruption.

## Steps: resume an interrupted Lightroom archive upload

1. Open Lightroom Classic Export and confirm the active account and workspace.
2. Locate archive export that stopped after a connection or app interruption and verify its name or identifying details.
3. Leave the source files unchanged and run the archive export again.
4. Confirm that completed files are skipped and an incomplete large file resumes or restarts safely.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic export and original-file archive workflows." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a small catalog sample and keep originals backed up independently while testing. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Completed files are skipped and an incomplete large file resumes or restarts safely.

## Expected result

The controlled workflow completes and completed files are skipped and an incomplete large file resumes or restarts safely.

## Troubleshooting

**The expected control is missing.** Return to Lightroom Classic Export, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Configure Lightroom publishing](/integrations/lightroom-configure-publish-service)
- [Resume an interrupted upload](/uploading/progress-and-states)
