---
{"articleId":"hc-version-vs-copy","locale":"en","revision":1,"title":"Distinguish a file version from a copied file","summary":"Distinguish a file version from a copied file with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"version-vs-copy","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the distinguish a file version from a copied file workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-version-history","hc-file-details"],"keywords":["version vs copy","Version history operations","Dosya help"]}
---
Distinguish a file version from a copied file is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Version history for a Dosya file in the current released client.
- Confirm the active account and workspace, then identify file with history and a separate copied item.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: distinguish a file version from a copied file

1. Open Version history for a Dosya file and confirm the active account and workspace.
2. Locate file with history and a separate copied item and verify its name or identifying details.
3. Compare file IDs, locations, and version timelines rather than relying only on matching names.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the continuing file and independent copy are correctly identified.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/file-versions-2026-10-10.webp"><img src="/screenshots/file-versions-2026-10-10.webp" alt="Dosya version history showing previous revisions of a file." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Review the file identity and version details before replacing or restoring content. <a href="/screenshots/file-versions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the continuing file and independent copy are correctly identified. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Version history for a Dosya file, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Use version history](/files/version-history)
- [View file details](/files/file-details)
