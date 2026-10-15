---
{"articleId":"hc-pdf-preview","locale":"en","revision":1,"title":"Preview a PDF in Dosya","summary":"Preview a PDF in Dosya. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"pdf-preview","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the preview a pdf in dosya workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-media-preview","hc-preview-files"],"keywords":["pdf preview","media and document previews","Dosya help"]}
---
Preview a PDF in Dosya is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

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

## Related guides

- [Media preview controls](/files/media-preview-controls)
- [Preview files](/files/preview-files)
