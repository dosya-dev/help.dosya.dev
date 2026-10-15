---
{
  "articleId": "hc-desktop-prepare-safe-problem-report",
  "locale": "en",
  "revision": 5,
  "title": "Prepare a safe desktop problem report",
  "summary": "Prepare a useful Dosya desktop bug ticket while controlling screenshot, diagnostics, recent-log filenames, body length, and sensitive data exposure.",
  "category": "desktop",
  "articleSlug": "desktop-prepare-safe-problem-report",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed using apps/desktop/src/renderer/components/ReportProblemDialog.tsx, apps/desktop/src/renderer/components/ReportProblemDialog.test.tsx, apps/desktop/src/renderer/lib/bug-report.ts, apps/desktop/src/main/bug-report.ts, and apps/desktop/src/main/bug-report.test.ts. The production support endpoint received no ticket.",
  "related": [
    "hc-desktop-sync-issues",
    "hc-desktop-problem-report"
  ],
  "keywords": [
    "desktop prepare safe problem report",
    "Desktop diagnostics and recovery details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The desktop problem form sends an authenticated support ticket. Its screenshot and diagnostics start enabled, while the recent log is opt-in because it can disclose filenames from synced folders.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14.webp" alt="Four panels show opening Report a bug, writing a repeatable description, reviewing enabled Diagnostics, and deciding whether to include the filename-bearing recent log." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Describe the repeatable failure and review each evidence source before sending the account-bound support ticket. <a class="workflow-map-full" href="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-prepare-safe-problem-report-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Sign in first; otherwise the dialog instructs you to sign in and reopen **Help > Report a Problem…**.
- Arrange the window so its visible content is safe before sending because the screenshot is captured at send time and has no preview.

## Steps

1. Open **Help > Report a Problem…** or press `Cmd/Ctrl+Shift+B`. The dialog title is **Report a bug** and it creates a support ticket tied to the account.
2. In **What went wrong? What did you expect instead?**, provide the smallest repeatable sequence, expected behavior, actual behavior, and approximate time. Blank text keeps **Send** disabled.
3. Review **Attach a screenshot of this window**, enabled by default. Hide unrelated names or content before sending; the image is captured only after **Send** is pressed.
4. Inspect the enabled **Diagnostics** rows: **App**, **System**, **Workspace**, **Page**, **Error reference**, **Error**, and **Sync** appear when values exist. Untick **Include** when that context is unnecessary.
5. Leave **Include the recent log (last 200 lines)** off unless support needs it. The reader takes at most 64 KiB from the end of the log, and those lines can contain synced filenames.
6. Select **Send**. The user text plus optional log is limited to 9,500 characters; a screenshot over 4,500,000 bytes or a failed capture is skipped while the ticket still submits.

<figure class="help-screenshot"><a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp"><img src="/screenshots/desktop-sync-activity-verified-2026-10-11.webp" alt="Desktop sync activity view used to gather only the timing and error evidence needed for a safe problem report." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Collect a minimal reproduction and relevant timing before opening the report form; avoid unrelated file details. <a href="/screenshots/desktop-sync-activity-verified-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Success shows **Report sent**, says replies go to the account email, and includes the first eight ticket-ID characters when available. **Screenshot skipped** explains whether capture failed or the image was too large.

On **Could not send report**, keep the dialog open, review the returned description, and retry later. Common home paths are redacted in diagnostics, but that filter does not promise removal of every secret from text, screenshots, or logs.

## Related guides

- [Troubleshoot desktop sync](/desktop/sync-issues)
- [Create a desktop problem report](/desktop/desktop-problem-report)
