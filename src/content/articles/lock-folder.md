---
{
  "articleId": "hc-lock-folder",
  "locale": "en",
  "revision": 6,
  "title": "Lock a folder with a password",
  "summary": "Set an eight-character folder password, understand inherited access blocks, and test the one-hour personal unlock without sharing the secret.",
  "category": "files",
  "articleSlug": "lock-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/components/lock-modal.tsx, apps/web/src/lib/lock-mode.ts, apps/web/src/pages/files.tsx, apps/web/src/components/folder-locked-panel.tsx, apps/api/src/pages/api/folders/[id]/lock.ts, apps/api/src/pages/api/folders/[id]/unlock.ts, apps/api/src/lib/rate-limit.ts, apps/api/src/lib/unlock-throttle.ts, apps/api/src/lib/repo/repo-d1/folders.ts, apps/api/src/lib/download-guard.ts, apps/api/src/lib/folder-lock-gate.unit.test.ts and apps/api/src/lib/folder-lock-write-gate.unit.test.ts. Verified labels, trimmed eight-character minimum, lock_files permission, separate per-isolate and persistent throttles, inherited full-lock behavior, one-hour viewer token and share/sync effects. Local source and focused tests only; no production folder was locked.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "lock folder",
    "file and folder protection",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
A folder password protects the folder and its descendants from members who have not unlocked that ancestor. It works alongside workspace membership, role permissions, folder confinement and hidden rules; knowing the password does not create membership or add a missing role capability.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/lock-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lock-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lock-folder-workflow-map-2026-10-14.webp" alt="Folder password workflow showing the Lock menu, Password mode, eight-character minimum, and a one-hour member unlock in Dosya." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Apply **Password** to a known folder, then test both the blocked state and a member-specific one-hour unlock before relying on the boundary. <a class="workflow-map-full" href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/lock-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/lock-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In **Files**, right-click the target folder and choose **Lock**. The menu is available only when the listing reports that your role can lock items; the API requires **Lock files** and otherwise returns `You don't have permission to lock folders`.
2. Check the folder chip in **Lock folder**. It identifies the name, file count and known total size. If a lock already exists, the status can show **Currently password-locked** or the member and relative time that set it.
3. Select **Password**. The description states that the folder opens only with a password, nothing can be added while locked, share links to contents stop working, and an unlock lasts an hour.
4. Enter a password whose length is at least eight characters after leading and trailing spaces are trimmed. Internal spaces count toward the minimum. The client says **Use at least 8 characters.** and the server rejects a shorter trimmed value with `Password must be at least 8 characters`.
5. Store the secret in an approved password manager, then choose **Lock with password**. Success appears as **Locked with a password** and says the folder now needs a password to open.
6. Leave the folder and open it again. The page displays **“_Folder_” is locked** or **This folder is locked**, a **Folder password** field, **Unlock**, and **Go back**.
7. Enter the correct password. That member receives a personal access token lasting 3,600 seconds. Test a second member separately: another person's token does not open the folder for them.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya Lock folder dialog showing Unlocked, View only, and Password choices with password-entry controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The same dialog also offers **View only**, which permits browsing and preview while blocking downloads, and **Unlocked**, which removes the lock. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

A full folder lock propagates through every nested subfolder. Until the viewer unlocks the locked ancestor, ordinary file reads, metadata operations, moves, deletion and new content inside the subtree are gated. Current sync snapshots omit both password-locked and view-only subtrees. Public share creation and existing share access do not borrow a member's personal unlock token, so links to protected descendants stay blocked while the ancestor remains password-locked.

The password is not required for a member who already has **Lock files** to change the folder's protection in the lock dialog. Re-selecting **Password** on an existing password lock requires **New password** and **Update password**; the new value replaces the old one. **Remove lock** changes the stored mode to **Unlocked**, which is different from entering the password for temporary access.

The unlock endpoint first applies a per-isolate limit of five requests for the same folder and IP over 900 seconds. That inexpensive layer can answer `Too many requests` with HTTP 429 and a `Retry-After` header; because its counters are not shared across Worker isolates, it is separate from the persistent lock below.

Each wrong password also increments the folder's stored failure count, regardless of the time between guesses or the IP address. The fifth wrong password sets a 900-second lock, but that fifth response is still `Incorrect password`; later requests that reach the stored check return `Too many attempts, try again later.` A correct password, password replacement, or lock removal resets this persistent count. `Folder not found` can instead mean the folder is outside your assigned subtree or hidden from you.

## Expected result

The folder retains **Password** mode, unverified members cannot enter its tree, and one correct credential opens that tree only for the requesting member for one hour. Removing or replacing the lock remains an explicit separate action.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
