---
{
  "articleId": "hc-workspace-role-file-access",
  "locale": "en",
  "revision": 5,
  "title": "Grant file access in a custom role",
  "summary": "Configure file, folder and page permissions in a custom role, then test browsing, upload, download, rename and deletion without granting excess access.",
  "category": "workspaces",
  "articleSlug": "workspace-role-file-access",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/role-create.tsx, apps/api/src/lib/permissions.ts, apps/web/src/hooks/use-files-listing.ts, packages/test-harness/tests/files.int.test.ts, and packages/test-harness/tests/folders-crud.int.test.ts. No production role was changed.",
  "related": [
    "hc-workspace-roles",
    "hc-workspace-change-role"
  ],
  "keywords": [
    "workspace role file access",
    "Workspace custom roles",
    "Dosya help",
    "team cloud storage"
  ]
}
---
File access is a combination of page entry and action permissions. **Access Files** opens the browser; it does not automatically permit upload, download, rename, folder creation, or deletion.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-role-file-access-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp" alt="Four-step file-access role map showing page access, separate file and folder operations, own-versus-any deletion, and a withheld-action test." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Grant the browsing page and each needed operation explicitly, then test destructive boundaries using disposable content. <a class="workflow-map-full" href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-role-file-access-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- The editor needs **Manage roles** and can enable only permissions they already hold.
- Use a test member and disposable file tree. Folder anchors, hidden items, locks, and role conditions continue to apply.
- Separate **Delete own files** from **Delete any file** deliberately.

## Steps

1. Open the custom role in **Edit custom role** and scroll to **Files**, **Folders**, and **Page access**.
2. Enable **Access Files** when the member must browse the file page.
3. Choose among **Upload files**, **Download files**, **Rename files**, **Create folders**, and **Rename folders** based on the job.
4. Enable **Delete own files** only for self-created content, or **Delete any file** only for trusted cleanup responsibility.
5. Select **Save changes**, wait for **Role updated**, then reload a test member’s session after cache convergence.
6. Test browsing plus each intended operation, and attempt one withheld action on disposable content to verify refusal.

<figure class="help-screenshot"><a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp"><img src="/screenshots/workspace-custom-role-editor-2026-10-12.webp" alt="Reference for “Grant file access in a custom role”: Dosya custom role editor showing workspace permissions before assignment." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Grant file access in a custom role”: Dosya custom role editor showing workspace permissions before assignment. <a href="/screenshots/workspace-custom-role-editor-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Independent controls

**Access Upload** governs the upload page separately. **Lock files & folders** and **Hide files & folders** are administrative capabilities, not implied by file browsing. Protocol access also needs **Use WebDAV**, **Use the S3 gateway**, or **SFTP access**.

Editing the shared role changes every current holder. Removing a permission does not reverse files already uploaded, renamed, shared, or moved to Trash.

## Expected result

The member can enter only intended pages and perform exactly the selected file and folder operations, while destructive or administrative controls remain absent or refused.

## Troubleshooting

**Files is unavailable.** Enable **Access Files** in addition to the needed action permissions.

**Upload is refused despite Upload files.** Check **Access Upload** for the web page, workspace quota, file policy, role limits, and folder scope.

**Delete works only on some items.** **Delete own files** is uploader-specific; use **Delete any file** only when broader deletion is required.

## Related guides

- [Understand roles](/workspaces/roles)
- [Change a member role](/workspaces/workspace-change-role)
