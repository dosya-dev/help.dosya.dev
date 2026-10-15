---
{
  "articleId": "hc-mobile-save-device",
  "locale": "en",
  "revision": 2,
  "title": "Save a Dosya file to the device",
  "summary": "Choose Save to device and approve the destination prompt, then verify that the file appears in the selected device location.",
  "category": "files",
  "articleSlug": "mobile-save-device",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current save a dosya file to the device workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-browse",
    "hc-mobile-permissions"
  ],
  "keywords": [
    "mobile save device",
    "mobile file actions",
    "Dosya help",
    "cloud storage",
    "file backup"
  ]
}
---
Use this workflow to save a Dosya file to the device in the intended workspace. Start with a harmless test item when the action changes stored data or access.

Saving to the device creates a local copy and leaves the Dosya cloud object in place. The chosen destination may be visible to other device apps.

<figure class="help-screenshot"><a href="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp"><img src="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp" alt="Four-step interface map for save a dosya file to the device, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a href="/screenshots/mobile-save-device-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open Mobile Files in the current released Dosya client.
- Confirm the active account and workspace, then identify one supported file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: save a Dosya file to the device

1. Open Mobile Files and confirm the active workspace.
2. Select one supported file and check its name or identifying details.
3. Choose Save to device and approve the destination prompt.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the file appears in the selected device location.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya app chooser showing the current mobile availability entry points." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current released mobile app and confirm its active workspace before changing files. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open the device copy outside Dosya and compare its filename and content with the cloud item.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The workflow completes for the controlled test and the file appears in the selected device location. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Files, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Mobile permissions](/account/mobile-permissions)
