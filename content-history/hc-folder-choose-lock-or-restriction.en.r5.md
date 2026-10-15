---
{
  "articleId": "hc-folder-choose-lock-or-restriction",
  "locale": "en",
  "revision": 5,
  "title": "Choose between a lock and a role restriction",
  "summary": "Choose a folder password, view-only lock, workspace role, or assigned root by matching the control to who needs access and what they may do.",
  "category": "files",
  "articleSlug": "folder-choose-lock-or-restriction",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/lock-modal.tsx, apps/web/src/pages/teams.tsx, apps/web/src/pages/role-create.tsx, and apps/api/src/lib/folder-lock-gate.unit.test.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lock-folder",
    "hc-folder-restriction-inheritance"
  ],
  "keywords": [
    "folder choose lock or restriction",
    "Folder protection and access details",
    "Dosya help",
    "cloud storage"
  ]
}
---
A folder lock, a workspace role, and an assigned root solve different access problems. Decide which boundary you need before changing a live folder.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14.webp" data-light-href="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14.webp" alt="Light-theme decision map showing folder identification, access-boundary selection, member testing, and saved-rule confirmation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The decision map separates the folder path, access control, member test, and saved-rule check without hiding instructions in clipped cards. <a class="workflow-map-full" href="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14.webp" data-light-href="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/folder-choose-lock-or-restriction-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Choose the correct boundary**

- **View only** is a folder lock mode. Authorized members may browse and preview the folder tree, but downloads are blocked. It does not ask for a password.
- **Password** fully locks the folder tree. Members cannot browse its contents, add items inside it, or use existing share links until the folder is unlocked. A successful viewer unlock lasts one hour for that user.
- A **workspace role** grants capabilities such as uploading, downloading, moving, hiding, or locking files across the workspace. A role does not itself unlock a password-protected folder.
- An **assigned root folder** confines a member to one subtree. It controls which part of the workspace the member can reach, while locks inside that subtree still apply.

These controls can be combined. For example, a contributor can be confined to Client A, denied download permission by role, and still encounter a password lock on Client A/Legal.

## Steps

1. Identify the people affected and the smallest folder subtree involved. Do not test with a workspace owner because elevated permissions can hide the member experience.
2. If everyone who can reach the folder should preview but not download it, open the folder menu, choose the lock action, select **View only**, and apply it.
3. If the subtree must be closed until a secret is entered, select **Password**, enter at least eight characters after leading and trailing spaces are removed, and save. Internal spaces count toward the minimum.
4. If the rule concerns capabilities or a permanent member boundary, change the member’s workspace role or assigned root in workspace settings instead. Only administrators who can manage members and roles should make that change.
5. Sign in as a representative member. Test listing the folder, previewing a file, downloading it, uploading into the folder, and opening any existing share link that matters.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya file lock example showing Unlocked, View only, and Password choices for Launch review.pdf." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>This file example shows the three lock modes also offered for folders; folder descriptions apply the selected mode to the folder subtree. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Important interactions**

A child marked **Unlocked** does not override a locked ancestor. The effective restriction comes from the nearest protected ancestor in the path. Removing a lock also does not remove hidden-item rules, role permissions, or an assigned-root boundary. Share access does not reuse the one-hour viewer unlock token, and full-lock or view-only subtrees are excluded from sync.

Changing access can expose or block an entire subtree immediately. Record the original setting and test with non-sensitive files before applying the decision to a production folder.

## Expected result

The selected control matches the intended scope: a lock protects one subtree, a role defines workspace actions, and an assigned root limits the member’s reachable subtree. The test member sees the same boundary on refresh and after signing in again.

## Related guides

- [Lock a folder](/files/lock-folder)
- [Understand inherited folder restrictions](/files/folder-restriction-inheritance)
