---
{
  "articleId": "hc-archive-preview-troubleshoot",
  "locale": "en",
  "revision": 2,
  "title": "Troubleshoot an archive that will not preview",
  "summary": "Check format and size, then retry with a small known-good archive, then verify that the comparison separates an archive problem from a preview problem.",
  "category": "files",
  "articleSlug": "archive-preview-troubleshoot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current troubleshoot an archive that will not preview workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-archive-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "archive preview troubleshoot",
    "archive tools",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to troubleshoot an archive that will not preview in the intended account or workspace.

The main checks are the active workspace, folder path and target item. Start with one harmless item and compare the source and destination after refreshing the view.

<figure class="help-screenshot"><a href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp"><img src="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp" alt="Four-step interface map for troubleshoot an archive that will not preview, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/archive-preview-troubleshoot-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Archive preview in the current released Dosya client.
- Confirm the active account and workspace, then identify an archive that shows an error.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: troubleshoot an archive that will not preview

1. Open Archive preview and confirm the active workspace.
2. Select an archive that shows an error and check its name or identifying details.
3. Check format and size, then retry with a small known-good archive.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the comparison separates an archive problem from a preview problem.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview surface used when inspecting supported file content." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Treat archive entries as untrusted until their names and paths are reviewed. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Verify that the comparison separates an archive problem from a preview problem. Refresh or reopen the view once to confirm the result persisted.

Refresh or reopen the relevant page before relying on the result. Compare the visible account, workspace, path, status or count with the state recorded before the task. If they differ, stop before repeating the action and preserve the exact nonsecret message for troubleshooting.

## Expected result

The workflow completes for the controlled test and the comparison separates an archive problem from a preview problem. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Archive preview, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### Why should I test with one item first?

A single controlled item makes the destination, access boundary and result easy to recognize. After it survives a refresh or reopen, repeat the workflow for a larger set only when needed.

### What should I include when asking support for help?

Include the action time, client and version, active account or workspace, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Inspect archives](/files/archive-preview)
- [Preview files](/files/preview-files)
