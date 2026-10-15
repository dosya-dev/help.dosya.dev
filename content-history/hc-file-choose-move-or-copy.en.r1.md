---
{"articleId":"hc-file-choose-move-or-copy","locale":"en","revision":1,"title":"Choose whether to move or copy a file","summary":"Choose whether to move or copy a file with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"file-choose-move-or-copy","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the choose whether to move or copy a file workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-move-rename","hc-copy-file"],"keywords":["file choose move or copy","File move and copy safeguards","Dosya help"]}
---
Choose whether to move or copy a file is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open the Dosya file list and destination picker in the current released client.
- Confirm the active account and workspace, then identify file that should change location or exist in two places.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: choose whether to move or copy a file

1. Open the Dosya file list and destination picker and confirm the active account and workspace.
2. Locate file that should change location or exist in two places and verify its name or identifying details.
3. Choose Move when one item should change folders, or Copy when an independent second item is required.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the chosen action matches the intended number of resulting files.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/move-file-picker-2026-10-12.webp"><img src="/screenshots/move-file-picker-2026-10-12.webp" alt="Dosya destination picker used to move a file into another folder." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use disposable samples when checking how names, permissions, and destinations behave. <a href="/screenshots/move-file-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the chosen action matches the intended number of resulting files. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the Dosya file list and destination picker, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Move and rename items](/files/move-and-rename)
- [Copy a file](/files/copy-file)
