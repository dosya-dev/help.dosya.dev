---
{
  "articleId": "hc-unlock-file",
  "locale": "en",
  "revision": 6,
  "title": "Unlock a protected file",
  "summary": "Open a password-locked cloud file with its current secret, handle the five-attempt lockout, and understand the personal one-hour access grant.",
  "category": "files",
  "articleSlug": "unlock-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/components/file-detail-panel.tsx, apps/api/src/pages/api/files/[id]/unlock.ts, apps/api/src/lib/rate-limit.ts, apps/api/src/lib/unlock-throttle.ts, apps/api/src/lib/repo/repo-d1/files.ts, apps/api/src/lib/download-guard.ts and apps/api/src/pages/api/files/[id]/lock.ts. Verified exact prompt and errors, the per-isolate five-request/900-second limiter, persistent fifth-failure 900-second lock, 3,600-second per-user token, replacement of prior tokens, hidden and folder-scope gates, and the distinction between temporary access and removing a lock. Local source review only; no production credential was entered.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "unlock file",
    "file and folder protection",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Opening a password-protected file creates temporary access for your account; it does not remove or weaken the file's saved lock. The file must also be visible, inside your assigned folder scope and allowed by your workspace membership.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unlock-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/unlock-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/unlock-file-workflow-map-2026-10-14.webp" alt="File unlock workflow showing the locked-row open action, password prompt, error states, and a one-hour personal access token." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Open the intended file, submit its current password once, and confirm the viewer or details panel appears under your temporary grant. <a class="workflow-map-full" href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unlock-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unlock-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Find the file in **Files** and click its row, name or viewer action. A file with **Password** protection opens the dialog titled **File is locked** instead of exposing the preview or details.
2. Confirm the filename in **Enter the password to access _filename_**. This prevents submitting a valid secret to a similarly named file in another folder.
3. Type the current credential into **Enter password**, then choose **Unlock**. A blank or whitespace-only API request is rejected as `Password is required`.
4. After success, continue to the view you originally requested. Dosya issues a per-user, per-file token valid for 3,600 seconds and replaces any older token for that same account and file.
5. Recheck sensitive operations before performing them. Temporary unlock satisfies the password gate, but download, edit, share, move and delete still apply their own role, lock-mode and ancestor-folder rules.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection dialog distinguishing Password access from Unlocked and View only file modes." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Temporary password access leaves the file in **Password** mode; only the separate lock settings action can select **Unlocked** and remove protection. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

The web client remembers the issued token in the current Files-page session. A reload or a new browser session can show the prompt again even before the server-side hour ends because the client no longer has the token string. Expiry also causes the next protected request to require the password again. Another member never receives your grant.

An incorrect entry returns `Incorrect password` and clears the input. Before checking the stored file state, one Worker isolate admits at most five requests for the same file and IP over 900 seconds. That local limiter answers `Too many requests` with HTTP 429 and a `Retry-After` header, but its counter is not shared with other isolates.

Wrong passwords separately increment a persistent per-file counter across IP addresses and elapsed time. The fifth wrong password sets a 900-second lock while still returning `Incorrect password`; later requests that reach this check receive `Too many attempts, try again later.` A correct password, password replacement, or lock removal resets the stored counter.

`This file is not locked with a password` means its current mode changed before submission. `File not found` can also protect a hidden file or an item outside a folder-confined membership. `Access denied` indicates workspace membership is missing. A connectivity failure is shown as **Can't reach the server. Check your connection and try again.** and keeps the typed value so you can retry after connectivity returns.

Do not confuse the row-menu label **Unlock** with this access prompt. For someone holding **Lock files**, that menu opens lock settings and can choose **Remove lock** without asking for the existing password. Removing the mode affects every member and causes share and sync gates to reevaluate; entering the password affects only the requesting member's temporary session.

## Expected result

The requested file view opens for your account, the underlying mode remains **Password**, and other members continue to see a lock. Access closes after one hour or when the client loses the token, whichever makes the protected request unauthenticated first.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
