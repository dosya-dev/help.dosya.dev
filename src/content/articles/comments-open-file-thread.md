---
{
  "articleId": "hc-comments-open-file-thread",
  "locale": "en",
  "revision": 5,
  "title": "Open the comment thread for a file",
  "summary": "Open the discussion for the intended file from Preview or Files, verify workspace and filename context, and resolve loading or access failures.",
  "category": "files",
  "articleSlug": "comments-open-file-thread",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/file-viewer.tsx, apps/web/src/pages/files.tsx, apps/web/src/pages/comments.tsx, and apps/api/src/pages/api/comments/index.ts on 2026-10-14. Production routing was not invoked.",
  "related": [
    "hc-file-comments",
    "hc-preview-files"
  ],
  "keywords": [
    "comments open file thread",
    "File comments and replies",
    "Dosya help",
    "cloud storage"
  ]
}
---
Dosya exposes the same file discussion in the preview inspector and on a standalone Comments page. Use the file name and workspace context to avoid responding in a similarly named item’s thread.

<figure class="help-screenshot"><a href="/screenshots/comments-open-file-thread-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-open-file-thread-help-workflow-2026-10-14.webp" alt="Four-step map for opening a file preview, choosing Comments, confirming the selected file, and rechecking the thread after refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows how to reach the discussion and verify that it belongs to the intended file. <a href="/screenshots/comments-open-file-thread-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Access rules.** You must be a workspace member with `access_files`. Folder confinement and hidden-item visibility apply, and a still-locked enclosing full-lock folder blocks access. A lock placed directly on the file does not by itself hide its comments.

## Steps

1. In **Files**, identify the item by name and parent folder. Open its preview, then choose the inspector tab **Comments**; the tab also displays the current message count.
2. Alternatively, open the file’s context menu and choose **Comments**. Dosya routes to `/comments` with the file ID, workspace ID, and display name in the query.
3. On the standalone page, confirm the title and the right-side **FILE DETAILS** values before reading or replying. Messages are displayed chronologically and grouped under **Today**, **Yesterday**, or a calendar date.
4. If someone sent a direct comment URL, switch to the workspace named in the link before assuming the thread is empty.
5. Refresh and verify that the same discussion returns for the same file ID. A filename alone is not a unique identifier because different folders can contain files with the same name.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Standalone Comments page for Launch review.pdf, showing dated messages and a right-side FILE DETAILS panel." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the file name, chronological thread, View file, Download, and properties that establish which file the discussion belongs to. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**If the thread does not load.** Return to Files and confirm the item is visible. A membership, `access_files`, confinement, hidden-file, or parent full-lock restriction can make the target unavailable. Unlock the enclosing protected folder through its normal flow when authorized. If the file moved, opening it from its new folder produces the same thread because comments follow the file ID.

**Composer differences.** The viewer says **Write a comment… Use @ to mention** and the standalone page says **Write a message...**. Both attach the resulting text to the selected file. Do not use an empty thread as proof that the similarly named file is correct; check its details first.

## Expected result

The page or inspector shows the messages attached to the intended file, oldest first, with the correct workspace and file metadata. Refreshing preserves that association.

## Related guides

- [Use the controls inside a file discussion](/files/comments-and-replies)
- [Inspect the selected file before commenting](/files/preview-files)
