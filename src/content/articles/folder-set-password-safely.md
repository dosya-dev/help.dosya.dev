---
{
  "articleId": "hc-folder-set-password-safely",
  "locale": "en",
  "revision": 5,
  "title": "Set a folder password safely",
  "summary": "Set a folder password with the exact eight-character rule, understand the one-hour viewer unlock, and test descendant, share, sync, and retry behavior.",
  "category": "files",
  "articleSlug": "folder-set-password-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/lock-modal.tsx, apps/api/src/pages/api/folders/[id]/lock.ts, apps/api/src/pages/api/folders/[id]/unlock.ts, and apps/api/src/lib/folder-lock-gate.unit.test.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lock-folder",
    "hc-folder-restriction-inheritance"
  ],
  "keywords": [
    "folder set password safely",
    "Folder protection and access details",
    "Dosya help",
    "cloud storage"
  ]
}
---
A password lock closes a folder and its descendants until an authorized viewer enters the secret. Treat the password as a shared access credential and distribute it outside Dosya.

<figure class="help-screenshot"><a href="/screenshots/folder-set-password-safely-help-workflow-2026-10-14.webp"><img src="/screenshots/folder-set-password-safely-help-workflow-2026-10-14.webp" alt="Four-step map showing a safe folder-password workflow: open settings, choose a strong password, test it, and refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The image shows the visible sequence for choosing an approved password, saving it, testing from another account, and reopening the folder. <a href="/screenshots/folder-set-password-safely-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Rules to know**

You need the **Lock files** workspace capability to set or replace a folder password. The password must contain at least eight characters after leading and trailing whitespace is removed; spaces inside the password count. The web form says **Use at least 8 characters.** and the API can return **Password must be at least 8 characters**.

## Steps

1. Open the intended folder and verify its full path. Check that no upload, move, share delivery, or sync job currently depends on the subtree.
2. Open the lock dialog, select **Password**, and enter a unique secret of eight or more trimmed characters. Store it in the approved password manager rather than a comment, filename, screenshot, or share message.
3. Apply the lock. A new lock reports **Locked with a password**; replacing an existing password reports **Password updated**. The new password controls future unlock attempts immediately.
4. Refresh and open the folder as a normal member. Enter the new password and confirm the folder opens. That successful viewer unlock is tied to the user and lasts 3,600 seconds.
5. Test one descendant file, one write action, and any important share or sync workflow. Full locking blocks browsing and writes inside the subtree; existing share links stop working, and locked subtrees are excluded from sync.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya file lock example showing Password beside Unlocked and View only for Launch review.pdf." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The pictured file dialog distinguishes Password from the other modes; the folder dialog uses the same choice to protect its entire subtree. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Failed-password limits**

Five wrong passwords persistently lock further attempts for 15 minutes. The fifth wrong entry still returns **Incorrect password**; later attempts return **Too many attempts, try again later.** A separate per-isolate limit also allows five requests for the same folder and IP during 900 seconds, then responds **Too many requests** with a `Retry-After` header. Wait for the stated interval rather than repeatedly testing.

Changing the password does not delete files, but it can interrupt every route into the subtree. Keep a recovery owner available. A permitted manager can select **Unlocked** without knowing the old password, so role assignment remains part of the security boundary.

## Expected result

The folder and descendants require the new password, a correct entry grants that viewer one hour of browser access, and unauthorized shares, writes, downloads, and sync traversal remain blocked.

## Related guides

- [Lock a folder](/files/lock-folder)
- [Understand inherited folder restrictions](/files/folder-restriction-inheritance)
