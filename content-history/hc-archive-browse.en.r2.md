---
{
  "articleId": "hc-archive-browse",
  "locale": "en",
  "revision": 2,
  "title": "Browse folders inside an archive",
  "summary": "Expand archive folders without extracting the full archive, then verify that the entry tree shows the expected internal paths.",
  "category": "files",
  "articleSlug": "archive-browse",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current browse folders inside an archive workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-archive-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "archive browse",
    "archive tools",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to browse folders inside an archive in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Archive folders are a view into the compressed file, not ordinary Dosya folders. Browsing them does not extract or relocate entries.

<figure class="help-screenshot"><a href="/screenshots/archive-browse-workflow-map-2026-10-14.webp"><img src="/screenshots/archive-browse-workflow-map-2026-10-14.webp" alt="Four-step interface map for browse folders inside an archive, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/archive-browse-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
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

## Verify the result

Use the breadcrumb to return to the archive root and confirm the expected nested paths before choosing an entry action.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

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

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Inspect archives](/files/archive-preview)
- [Preview files](/files/preview-files)
