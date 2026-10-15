---
{
  "articleId": "hc-hide-folder",
  "locale": "en",
  "revision": 6,
  "title": "Hide a folder from selected roles",
  "summary": "Hide a folder from everyone, selected users, or selected roles; understand inherited visibility, permission checks, target limits, and recovery.",
  "category": "files",
  "articleSlug": "hide-folder",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/hide-modal.tsx, apps/api/src/pages/api/folders/[id]/hide.ts, apps/api/src/lib/hidden/decide.ts, and apps/api/src/lib/hidden/rest-gate.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lock-hide",
    "hc-workspace-policies"
  ],
  "keywords": [
    "hide folder",
    "file and folder protection",
    "Dosya help",
    "cloud storage"
  ]
}
---
Hiding changes who can discover a folder and its descendants. It is separate from locking: no password is created, and the folder remains usable by viewers who are not hidden from it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/hide-folder-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/hide-folder-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/hide-folder-workflow-map-2026-10-14.webp" alt="Light-theme four-step map showing Hide folder, a role selector, member verification, and refresh actions." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow map visibly shows the Hide folder action, role selection, a permitted-member test, and reopening the view after the change. <a class="workflow-map-full" href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-light-href="/screenshots/hide-folder-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/hide-folder-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Available modes**

The **Hide folder** dialog offers **Visible**, **Hidden from everybody**, **Hidden from specific users**, and **Hidden from specific roles**. Targeted modes accept up to 200 users or roles. Your own user or role is disabled so you cannot deliberately hide the folder from your current identity. You need the **Hide files** capability; the API otherwise returns **You don't have permission to hide folders**.

## Steps

1. In **Files**, confirm the exact folder path and list the people or roles that must lose visibility. Remember that the rule is inherited by descendants.
2. Open the folder menu and choose the hide action. Select the narrowest mode that matches the requirement.
3. For a targeted mode, select at least one user or role. The web form shows **Select at least one user.** or **Select at least one role.** when empty; the API may answer **You must select at least one user** or **You must select at least one role**.
4. Choose **Apply**. The current success toast uses **File hidden** and **This file is now hidden.** even when the target is a folder.
5. Sign in as one affected member and one unaffected member. Refresh **Files**, search, map results, and direct folder navigation to verify both outcomes.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya lock dialog displaying Unlocked, View only, and Password, separate from hiding." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>This pictured lock dialog illustrates a different protection control; hiding changes discovery, while these visible lock choices govern use of accessible content. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Visibility and recovery**

Affected members may see **Folder not found** rather than an explanation, preventing the interface from disclosing a hidden name. People with the privileged hidden-item capability can still see protected content. Lock modes, assigned roots, and workspace roles continue to apply independently to anyone who remains able to see it.

Hiding is reversible. To restore discovery, reopen the dialog as a permitted manager, choose **Visible**, apply, and have the member refresh. The action does not move content to Trash or erase bytes, but an overly broad rule can immediately remove an entire subtree from eligible members’ lists and navigation.

## Expected result

The folder and descendants disappear only for the selected audience, remain visible to permitted viewers, and return after the mode is changed to Visible and clients refresh.

## Related guides

- [Lock and hide files](/files/lock-and-hide)
- [Workspace policies](/workspaces/policies)
