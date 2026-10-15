---
{
  "articleId": "hc-desktop-collect-system-context",
  "locale": "en",
  "revision": 5,
  "title": "Collect desktop version and system context",
  "summary": "Collect Dosya version, channel, system, workspace, sync summary, error reference, and event time without attaching unnecessary private data.",
  "category": "desktop",
  "articleSlug": "desktop-collect-system-context",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally using apps/desktop/src/renderer/pages/AboutPage.tsx, apps/desktop/src/renderer/lib/about-info.ts, apps/desktop/src/main/ipc.ts, apps/desktop/src/main/bug-report.ts, and apps/desktop/src/renderer/lib/bug-report.ts. No report was transmitted to the production support service.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-problem-report"
  ],
  "keywords": [
    "desktop collect system context",
    "Desktop diagnostics and recovery details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
A useful desktop incident record identifies the build and machine without copying file contents. **About dosya** provides a reusable client summary; the Report Problem diagnostics add the exact system release, workspace ID, page, and captured error.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp" alt="Four panels show recording About dosya details, using Copy Details, inspecting incident Diagnostics, and removing unnecessary context before sharing." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Combine the stable About block with incident diagnostics, then remove account details or secrets the automatic path replacement cannot guarantee. <a class="workflow-map-full" href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-collect-system-context-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Leave the affected account signed in and keep the relevant workspace selected.
- Reproduce the problem once if doing so cannot overwrite data, then note the local clock time immediately.

## Steps

1. Open **About dosya** and record `Version`, **Channel**, **System**, and **Engine**. **System** is the Electron platform name plus architecture; it is not the full OS release.
2. Choose **Copy Details** and wait for the button to read **Copied**. The confirmation lasts 1.5 seconds, and the copied block also includes account and sync context when available.
3. Open **Help > Report a Problem…** or press `Cmd/Ctrl+Shift+B`. Do not send yet; inspect the Diagnostics card first.
4. Record **App**, **System**, **Workspace**, **Page**, **Error reference**, **Error**, and **Sync** rows that appear. This **System** value includes the recognizable OS name and kernel release.
5. Add the occurrence time and the exact action that preceded the fault. Diagnostics store `captured_at` in Unix seconds, but the card does not replace the user’s incident timeline.
6. Copy only the needed context into the support conversation. Common home-directory paths are replaced with `<path>` and each diagnostic string is limited to 300 characters, but arbitrary secrets are not guaranteed to be removed.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Desktop sync activity view used to note the event time and current sync context around a reported problem." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Use the visible sync state and local occurrence time to anchor the copied About and diagnostics details. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The record now separates build facts from incident facts: About supplies the installed client/channel, while Diagnostics supplies the system release, active workspace ID, route, sync summary, and captured error.

If a row is missing, do not invent it. **Workspace** requires an active workspace, and error fields appear only when the dialog was opened with matching error context.

## Related guides

- [Troubleshoot desktop sync](/desktop/sync-issues)
- [Create a desktop problem report](/desktop/desktop-problem-report)
