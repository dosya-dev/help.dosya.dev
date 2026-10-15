---
{
  "articleId": "hc-archive-save-entry",
  "locale": "en",
  "revision": 3,
  "title": "Save an archive entry to Dosya",
  "summary": "Choose Save to Dosya and select a destination, then verify that a normal Dosya file appears at the destination.",
  "category": "files",
  "articleSlug": "archive-save-entry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current save an archive entry to dosya workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-archive-preview",
    "hc-preview-files"
  ],
  "keywords": [
    "archive save entry",
    "archive tools",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Use this workflow to save an archive entry to Dosya in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Saving an entry to Dosya creates a separate stored item outside the archive. Choose the destination carefully to avoid confusing it with an existing copy.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-save-entry-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/archive-save-entry-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" alt="Four-step interface map for save an archive entry to dosya, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-light-href="/screenshots/archive-save-entry-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/archive-save-entry-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Archive preview in the current released Dosya client.
- Confirm the active account and workspace, then identify one harmless archive entry.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: save an archive entry to Dosya

1. Open Archive preview and confirm the active workspace.
2. Select one harmless archive entry and check its name or identifying details.
3. Choose Save to Dosya and select a destination.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that a normal Dosya file appears at the destination.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/preview-supported-image-2026-10-12.webp"><img src="/screenshots/preview-supported-image-2026-10-12.webp" alt="Dosya preview surface used when inspecting supported file content." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Treat archive entries as untrusted until their names and paths are reviewed. <a href="/screenshots/preview-supported-image-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open the destination, compare the saved item name and size, and leave the source archive intact until verification is complete.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and a normal Dosya file appears at the destination. The result remains visible after a refresh or reconnect.

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
