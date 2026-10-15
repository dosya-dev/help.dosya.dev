---
{
  "articleId": "hc-desktop-problem-report",
  "locale": "en",
  "revision": 6,
  "title": "Send a desktop problem report",
  "summary": "Send a signed-in desktop bug report with optional diagnostics, screenshot, and log tail while controlling exactly which private data is included.",
  "category": "desktop",
  "articleSlug": "desktop-problem-report",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally against apps/desktop/src/renderer/components/ReportProblemDialog.tsx, apps/desktop/src/renderer/lib/bug-report.ts, apps/desktop/src/main/bug-report.ts and apps/api/src/pages/api/support/tickets/index.ts. Production submission was not tested and no support ticket was created.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-sync-issues"
  ],
  "keywords": [
    "desktop problem report",
    "desktop app lifecycle",
    "Dosya help",
    "cloud storage"
  ]
}
---
The desktop reporter creates a private support ticket on the signed-in account. You control three distinct payloads: your description, an optional screenshot of the current window, and optional diagnostics or recent application log.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-problem-report-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-problem-report-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-problem-report-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-problem-report-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-problem-report-workflow-map-2026-10-14.webp" alt="Desktop Report a bug dialog showing description, screenshot, recent log, diagnostics, and Send report controls." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Review every selected attachment and diagnostics row before creating the support ticket. <a class="workflow-map-full" href="/screenshots/desktop-problem-report-workflow-map-2026-10-14.webp" data-light-href="/screenshots/desktop-problem-report-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/desktop-problem-report-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Reproduce the problem once and record the expected behavior, actual behavior, and the shortest sequence that triggers it.
- Sign in first. When signed out, the dialog says **Sign in first, then open Help > Report a problem again. Your report is sent as a support ticket on your account.**
- Remove passwords, recovery keys, API tokens, and personal file contents from the visible window and your written description.
- Any signed-in plan can create a report. The API allows 5 new tickets per account per hour and at most 10 tickets that are not closed.

## Steps

1. Open **Help > Report a problem**. The dialog title is **Report a bug** and explains that it creates a support ticket you can follow on the web.
2. In **What went wrong? What did you expect instead?**, provide exact steps and the time the failure occurred. The desktop app caps the submitted body at 9,500 characters, leaving room below the server’s 10,000-character limit.
3. Review **Attach a screenshot of this window**. It is on by default and captures the window only when you press **Send report**. Untick it if any visible content is private.
4. Leave **Include the recent log (last 200 lines)** off unless support needs it. The reader takes at most 64 KiB from the end of the desktop log, then keeps the newest 200 lines; logs can contain names from synced folders.
5. Inspect **Diagnostics** and untick **Include** if needed. The card may include app version, distribution and CPU architecture, operating-system release, locale, workspace ID, page path, error reference, error message, and a count-only sync summary.
6. Select **Send report**. Keep the dialog open while it reads optional data and uploads the ticket.

<figure class="help-screenshot"><a href="/screenshots/desktop-workspace-2026-10-10.webp"><img src="/screenshots/desktop-workspace-2026-10-10.webp" alt="Dosya desktop workspace used to verify the active account and workspace before opening Report a bug." width="1100" height="800" loading="lazy" decoding="async" /></a><figcaption>Confirm the active workspace first so the report is attached to the correct context. <a href="/screenshots/desktop-workspace-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Privacy and size behavior

Diagnostics redact file URLs and common macOS, Linux, and Windows user paths to **<path>**, strip query strings from the page, and clamp every diagnostics string to 300 characters. The diagnostics panel states **Nothing from your files is included.** That promise covers the structured diagnostics; a screenshot can display visible file content, and the optional log can name files.

The screenshot is sent as one JPEG named **window.jpg**. If capture fails or exceeds 4,500,000 bytes, the report still sends and Dosya shows **Screenshot skipped** with the reason. The support endpoint accepts up to three images under 5 MB each, but this desktop form supplies only the single window capture.

## Submission and recovery

Success closes the dialog and shows **Report sent**. The message includes the first eight characters of the ticket ID when available and says that support replies at the account email. The report is stored as an open support ticket; use the web support area to follow or close it.

On failure, the dialog remains open and shows **Could not send report** with the returned reason. Copy your description before restarting if you need to preserve it. A report cannot be recalled from this dialog after submission; close the ticket or add a correction through the web ticket instead.

## Expected result

One bug ticket is created with the description and only the optional data left enabled. The active workspace ID is attached only when the signed-in user still belongs to it. You receive a confirmation reference, and subsequent support replies go to the account email.

## Related guides

- [Install the desktop app](/desktop/install-and-sign-in)
- [Diagnose desktop sync](/desktop/sync-issues)
