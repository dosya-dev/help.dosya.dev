---
{
  "articleId": "hc-mobile-browse",
  "locale": "en",
  "revision": 3,
  "title": "Browse backed-up files on mobile",
  "summary": "Choose the correct workspace, search or open folders, preview a backed-up item and distinguish its cloud copy from the device original.",
  "category": "files",
  "articleSlug": "mobile-browse-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current browse backed-up files on mobile workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-search-files",
    "hc-preview-files",
    "hc-switch-workspaces"
  ],
  "keywords": [
    "browse mobile files",
    "mobile file preview",
    "backed up photos",
    "cloud storage",
    "file backup"
  ]
}
---
Mobile browsing shows files available to the account and role. Confirm workspace context when a backed-up item seems missing.

The Files view reflects the active workspace, your role and the current folder. A file that remains on the phone is separate from the backed-up cloud copy.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-browse-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" alt="Four-step interface map for browse backed-up files on mobile, from opening the correct view through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: follow the task in the intended workspace, then verify the saved or displayed result. <a class="workflow-map-full" href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-browse-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: browse backed-up files on mobile

1. Open the Dosya mobile app.
2. Confirm the active workspace.
3. Open Files and browse the backup destination.
4. Search by a known file name when needed.
5. Preview one supported item.
6. Use file details to confirm the cloud copy.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel showing the supported mobile download choices reviewed before installation." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current official store listing for the device platform. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open one recent item from Files after refreshing. Check its name, type and destination before treating the backup as complete.

Refresh or reopen the relevant view before relying on the result. This separates a saved cloud-storage change from a temporary selection, preview or local-device state. If the refreshed state differs, stop before repeating the action and use the exact message shown in **Troubleshooting**.

## Expected result

The browse backed-up files on mobile workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I know the action used the correct workspace?

Check the workspace name before the action and again when you verify the result. A similarly named item in another workspace is a separate cloud-storage object.

### What should I send to support if the result is different?

Include the action time, client and version, active workspace, item type and the exact nonsecret error text. Do not send passwords, private links, recovery keys or confidential file contents.

## Related guides

- [Search files](/files/search-files)
- [Preview files](/files/preview-files)
- [Switch workspaces](/account/switch-workspaces)
