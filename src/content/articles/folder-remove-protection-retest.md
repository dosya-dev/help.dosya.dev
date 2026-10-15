---
{
  "articleId": "hc-folder-remove-protection-retest",
  "locale": "en",
  "revision": 5,
  "title": "Remove folder protection and retest access",
  "summary": "Remove only the intended folder lock, then retest inherited access, hidden rules, role permissions, assigned-root scope, shares, and sync behavior.",
  "category": "files",
  "articleSlug": "folder-remove-protection-retest",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/lock-modal.tsx, apps/api/src/pages/api/folders/[id]/lock.ts, and apps/api/src/lib/folder-lock-gate.unit.test.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lock-folder",
    "hc-folder-restriction-inheritance"
  ],
  "keywords": [
    "folder remove protection retest",
    "Folder protection and access details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Selecting **Unlocked** removes the folder’s lock. It does not clear unrelated access controls, so verify each path that the affected person actually uses.

<figure class="help-screenshot"><a href="/screenshots/folder-remove-protection-retest-help-workflow-2026-10-14.webp"><img src="/screenshots/folder-remove-protection-retest-help-workflow-2026-10-14.webp" alt="Four-step map showing a folder protection removal workflow with record, remove, retest, and refresh actions." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The workflow image visibly directs the reader to record current access, remove one control, retest an affected member, and reopen the view. <a href="/screenshots/folder-remove-protection-retest-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**What changes**

Removing **View only** restores downloads for members whose roles otherwise allow downloading. Removing **Password** restores normal browsing and writes for members with the required role capabilities. Descendants stop inheriting that lock unless another protected ancestor still applies. Existing hidden rules, assigned-root confinement, file-level locks, and workspace role permissions remain in force.

## Steps

1. Record the current folder path, lock mode, hidden state, and the role and assigned root of a representative member.
2. Open the folder’s lock dialog. Choose **Unlocked**, then apply the change. The success state says **Lock removed** and identifies the folder as open to everyone in the workspace, subject to their other access rules.
3. Refresh **Files** and reopen the folder. Test preview, download, upload, and move with the representative member rather than an owner account.
4. If the folder was password protected, open an existing share link separately. Share access never inherited the viewer’s one-hour unlock token; after removal, the link should follow its own expiry, revocation, recipient, and download settings.
5. If a sync client depends on this subtree, start a controlled sync and verify one harmless test file. Locked subtrees are omitted from sync, so removal can make previously absent content eligible.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya file lock example displaying Unlocked, View only, and Password for Launch review.pdf." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The file example shows the same lock-mode choices used for folders; select Unlocked in the actual folder dialog to remove that folder lock. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**If access is still blocked**

Look upward in the path for another **Password** or **View only** ancestor. Then check whether the item itself is locked, hidden from the member, outside the member’s assigned root, or disallowed by the member’s workspace role. A hidden target may appear as **Folder not found**, which deliberately avoids revealing that it exists.

Removing protection expands access immediately and is not a Trash operation. There is no restore entry for the old setting, but a permitted manager can apply a new lock again. Reapplying a password creates a new access decision; do not assume an earlier secret or browser unlock remains appropriate.

## Expected result

The removed lock no longer blocks the tested action, while every unrelated role, hidden-item, assigned-root, share, and ancestor restriction continues to apply.

## Related guides

- [Lock a folder](/files/lock-folder)
- [Understand inherited folder restrictions](/files/folder-restriction-inheritance)
