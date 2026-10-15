---
{"articleId":"hc-archive-inspect-folder-tree","locale":"en","revision":1,"title":"Inspect an archive folder tree","summary":"Inspect an archive folder tree with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"archive-inspect-folder-tree","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the inspect an archive folder tree workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-archive-preview","hc-archive-save-entry"],"keywords":["archive inspect folder tree","Archive inspection and extraction details","Dosya help"]}
---
Inspect an archive folder tree is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya archive viewer in the current released client.
- Confirm the active account and workspace, then identify known archive with nested folders.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: inspect an archive folder tree

1. Open the Dosya archive viewer and confirm the active account and workspace.
2. Locate known archive with nested folders and verify its name or identifying details.
3. Open the archive viewer, expand one level at a time, and compare entry names and paths with the expected package.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the archive structure is understood before any entry is opened or saved.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-unsupported-file-2026-10-12.webp"><img src="/screenshots/preview-unsupported-file-2026-10-12.webp" alt="Dosya file viewer used to inspect stored files when inline support varies." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Inspect archive entry names and paths before previewing, saving, or downloading content. <a href="/screenshots/preview-unsupported-file-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the archive structure is understood before any entry is opened or saved. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya archive viewer, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Preview an archive](/files/archive-preview)
- [Save an archive entry](/files/archive-save-entry)
