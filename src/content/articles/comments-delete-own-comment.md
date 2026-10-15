---
{
  "articleId": "hc-comments-delete-own-comment",
  "locale": "en",
  "revision": 5,
  "title": "Delete your own file comment",
  "summary": "Delete a comment you wrote, confirm the author-only control and reply impact, and verify that the file and unrelated discussion remain intact.",
  "category": "files",
  "articleSlug": "comments-delete-own-comment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/comments/comments-panel.tsx, apps/web/src/pages/comments.tsx, and apps/api/src/pages/api/comments/[id].ts on 2026-10-14. No production delete was run.",
  "related": [
    "hc-file-comments",
    "hc-preview-files"
  ],
  "keywords": [
    "comments delete own comment",
    "File comments and replies",
    "Dosya help",
    "cloud storage"
  ]
}
---
You can remove a comment you authored while it is still accessible in the workspace. The action affects the discussion record, not the underlying file.

<figure class="help-screenshot"><a href="/screenshots/comments-delete-own-comment-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-delete-own-comment-help-workflow-2026-10-14.webp" alt="Four-step map showing Comments, the author controls, Delete, and a check that the file remains after the comment is removed." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map focuses on the ownership check and the separate outcomes for the comment and its file. <a href="/screenshots/comments-delete-own-comment-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before deleting.** Make sure you are signed into the account that wrote the message. The interface hides **Delete** on other authors’ comments. Current membership, `access_files`, the confinement boundary, and an unlocked enclosing full-lock folder still govern access to the thread.

## Steps

1. Preview the file and choose **Comments**, or open its standalone Comments page from the Files context action **Comments**.
2. Find your message by author and timestamp. If it has replies, read them before continuing: deleting a root comment cascades to those replies.
3. Open the message menu and choose **Delete**. The released web app does not ask you to confirm.
4. Confirm the entry vanishes. Reopen the file preview and verify the file still loads and unrelated messages remain.
5. Refresh once. If the deleted text returns, the request did not complete; do not repeatedly delete neighboring entries.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Comments page for Launch review.pdf with dated discussion, file properties, View file, and Download." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The image shows the file-linked thread where the signed-in author can distinguish their own comment from neighboring messages. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Failure and recovery.** The viewer uses **Could not delete** for an unsuccessful request; the standalone page uses **Delete failed — Your comment could not be deleted.** Loss of membership or file visibility can cause the operation to fail even though you originally wrote the text. A successful deletion cannot be undone. Posting the wording again creates a different comment with a new timestamp and does not restore deleted replies.

**Administrative scope.** Owners and administrators are accepted by the delete API for other people’s comments, but that capability is not surfaced on those messages in the current web UI. This guide covers the author control that users can see.

## Expected result

Your chosen comment is absent after reload. Its reply descendants are also absent when it was a thread root, while the file, versions, shares, and separate comment branches remain available.

## Related guides

- [Learn which file comments can be removed](/files/comments-and-replies)
- [Verify the file itself in Preview](/files/preview-files)
