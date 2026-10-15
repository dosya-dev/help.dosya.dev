---
{"articleId":"hc-archive-browse","locale":"en","revision":1,"title":"Browse folders inside an archive","summary":"Browse folders inside an archive. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"archive-browse","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the browse folders inside an archive workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-archive-preview","hc-preview-files"],"keywords":["archive browse","archive tools","Dosya help"]}
---
Browse folders inside an archive is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Archive preview in the current released Dosya client.
- Confirm the active account and workspace, then identify a supported test archive.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: browse folders inside an archive

1. Open Archive preview and confirm the active workspace.
2. Select a supported test archive and check its name or identifying details.
3. Expand archive folders without extracting the full archive.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the entry tree shows the expected internal paths.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview surface used when inspecting supported file content." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Treat archive entries as untrusted until their names and paths are reviewed. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the entry tree shows the expected internal paths. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Archive preview, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Inspect archives](/files/archive-preview)
- [Preview files](/files/preview-files)
