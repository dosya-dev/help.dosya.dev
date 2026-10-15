---
{
  "articleId": "hc-folder-restriction-inheritance",
  "locale": "en",
  "revision": 6,
  "title": "Understand inherited folder restrictions",
  "summary": "Trace password, view-only, hidden, and folder-scope rules from parent to child so you can explain the effective access without weakening it.",
  "category": "files",
  "articleSlug": "folder-restriction-inheritance",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14 against apps/web/src/lib/lock-mode.ts, apps/web/src/components/lock-modal.tsx, apps/web/src/components/hide-modal.tsx, apps/api/src/lib/download-guard.ts, apps/api/src/lib/hidden/decide.ts, apps/api/src/lib/hidden/rest-gate.ts, apps/api/src/lib/sync/exclusions.ts, apps/api/src/lib/access/scope.ts, apps/api/src/lib/folder-lock-gate.unit.test.ts and apps/api/src/lib/folder-lock-write-gate.unit.test.ts. Verified ancestor password and view-only effects, hidden-rule ancestry, per-viewer unlocks, sync/share behavior and membership folder confinement. Local source/tests only; production identities were not used.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "folder restriction inheritance",
    "file and folder protection",
    "Dosya help",
    "cloud storage"
  ]
}
---
A child's own badge is only part of its effective access. Dosya evaluates the item, every ancestor folder, the requesting member's role and any membership folder boundary. Diagnose access from the top of the path downward instead of changing the child first.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" alt="Restriction inheritance map tracing a child file through hidden rules, view-only or password ancestors, member scope, and final access." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Evaluate the complete folder chain and the viewer's identity before treating a child's own **Unlocked** or **Visible** state as effective access. <a class="workflow-map-full" href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/folder-restriction-inheritance-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Record the affected member, workspace and full folder path. Test with that member's account because unlock tokens and user-targeted hidden rules are identity-specific.
2. Check the membership's assigned root folder. A folder-confined member may use the anchor and its descendants only. A password cannot authorize a path above or beside that subtree.
3. Inspect every folder from the workspace root to the child. The lock dialog exposes **Unlocked**, **View only**, and **Password** for each selected folder.
4. For a **Password** ancestor, open that ancestor and submit its folder password. The correct value grants this member access for one hour. A token held by a colleague does not apply, and a public share never borrows the member token.
5. For **View only**, confirm the child can be browsed and previewed while attachment download is denied. Sync clients exclude view-only and password-locked subtrees, even though the web preview route intentionally allows view-only content.
6. Inspect hidden state with an account holding **Hide files**. An item's own **Visible** choice does not override a hidden parent. Hidden-from-everybody, selected-user and selected-role rules apply down the descendant chain.
7. Retest the actual action: list, preview, download, upload, move, delete, share or sync. Those surfaces intentionally use different gates, so a successful preview does not prove that download or mutation should succeed.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya lock choices used to inspect whether a parent folder is Unlocked, View only, or protected by Password." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The parent folder's mode can be stricter than the child row's own mode, so use the path hierarchy to locate the controlling boundary. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

A password-locked ancestor seals its subtree against new files and subfolders until that viewer unlocks it. It also blocks ordinary metadata actions, download, copy, move and delete for descendants. Share-link creation and access evaluate full locks without honoring personal unlock tokens; a member temporarily inside the vault cannot publish a path around it.

View-only inheritance is narrower. It blocks downloadable bytes but leaves supported previews and browsing available. It does not use a password endpoint. Changing a child to **Unlocked** therefore cannot restore downloads while an ancestor remains **View only**.

Hidden rules are visibility filters, not password challenges. Members without **Hide files** receive not-found behavior when their user, role or everyone-rule applies at the item or an ancestor. A holder of **Hide files** is privileged to see hidden content and configure it, so use a non-privileged test account to verify the audience experience. Each user/role hide configuration accepts up to 200 stored targets.

When a lock is removed or changed, sync snapshot caches are invalidated so subsequent clients can reevaluate the subtree. A client may still need its normal refresh cycle. Removing a hidden rule invalidates workspace visibility state, but a remaining ancestor rule continues to hide the child.

Do not solve an inherited denial by moving sensitive content to the workspace root unless that relocation is itself approved. Remove or change the controlling parent rule, or grant the correct role/scope, then test again with the affected identity.

## Expected result

The child's observed behavior matches the strictest applicable parent and identity rule for the attempted surface. After a deliberate parent change, only that control disappears; unrelated workspace permissions, hidden rules and folder confinement continue to apply.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
