---
{
  "articleId": "hc-unhide-item",
  "locale": "en",
  "revision": 6,
  "title": "Make a hidden item visible again",
  "summary": "Choose Visible for a hidden file or folder, preserve other access controls, and test whether an ancestor rule still hides the item from members.",
  "category": "files",
  "articleSlug": "unhide-item",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/pages/files.tsx, apps/web/src/components/hide-modal.tsx, apps/api/src/pages/api/files/[id]/hide.ts, apps/api/src/pages/api/folders/[id]/hide.ts, apps/api/src/lib/hidden/decide.ts, apps/api/src/lib/hidden/rest-gate.ts and apps/api/src/lib/repo/types.ts. Verified Unhide/Visible/Apply labels, hide_files permission, exact errors and toasts, atomic rule clearing, 200-target cap, privileged visibility and ancestor-hidden behavior. Local source and focused tests only; no production visibility rule was changed.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "unhide item",
    "file and folder protection",
    "Dosya help",
    "cloud storage",
    "file management"
  ]
}
---
Unhiding clears the selected item's own hidden mode and audience rules. It does not grant workspace membership, expand a folder-confined member's subtree, remove a lock, or override a hidden ancestor.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unhide-item-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/unhide-item-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/unhide-item-workflow-map-2026-10-14.webp" alt="Unhide workflow showing the item menu, Visible choice, Apply button, and a separate affected-member visibility check." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Clear the item's own hidden rule with **Visible**, then verify its effective result using an account that was actually excluded. <a class="workflow-map-full" href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-light-href="/screenshots/unhide-item-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/unhide-item-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in with a role that includes **Hide files**. This permission is also the privileged visibility flag: its holder can see hidden items that ordinary members cannot.
2. In **Files**, right-click the hidden file or folder and choose **Unhide**. The dialog title remains **Hide file** or **Hide folder** because the same visibility editor handles both directions.
3. Review the active choice before changing it: **Hidden from everybody**, **Hidden from specific users**, or **Hidden from specific roles**. The user and role variants show their current targets.
4. Select **Visible**, whose description is **Everyone can see this**, then choose **Apply**. The server writes `hidden_mode: none`, clears the hidden flag, clears who and when set it, and removes that item's stored target rules in the same operation.
5. Wait for the success toast. The current web copy says **File unhidden** and **This file is now visible to everyone.** even when the target was a folder; treat that as confirmation of the visibility update, not a change of item type.
6. Refresh the containing folder as the previously affected member. Confirm the row appears only if that member also has ordinary workspace, role and folder access.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya protection reference used to distinguish visibility rules from separate Unlocked, View only, and Password controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Visibility and lock modes are independent; unhiding an item leaves any **View only** or **Password** protection unchanged. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

If the row remains absent, inspect each parent folder. A hidden rule on any ancestor still filters the child, even after the child's own mode becomes **Visible**. Also confirm that the test membership is not confined to a different root folder and that its role includes **Access files**.

The API returns `You don't have permission to hide files` for a file or `You don't have permission to hide folders` for a folder when **Hide files** is missing. A target hidden from the requester is deliberately reported as `File not found` or `Folder not found` before permission is disclosed. `Access denied` means the account is not a member of the workspace.

When editing a targeted rule instead of clearing it, the interface requires at least one user or role and disables hiding from yourself or your own role. The API messages are `You must select at least one user` and `You must select at least one role`; the repository retains at most 200 targets. These limits matter when you decide to narrow a rule rather than make the item fully visible.

Unhiding is reversible by applying a new hidden mode, but the visibility increase takes effect for every otherwise authorized member that the removed rule had excluded. Confirm the intended audience before selecting **Apply**, especially on a folder whose descendants inherit its visibility.

## Expected result

The chosen item has no direct hidden rule, the old audience targets are gone, and eligible members can list it after refresh. Any parent hidden rule, lock, membership boundary or role restriction continues to control access.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
