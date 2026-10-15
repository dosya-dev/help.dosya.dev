---
{
  "articleId": "hc-comments-add-file-comment",
  "locale": "en",
  "revision": 5,
  "title": "Add a comment to a Dosya file",
  "summary": "Add a file comment with a page or playback anchor, mentions, and clear review context; then confirm its author, timestamp, and recipient delivery state.",
  "category": "files",
  "articleSlug": "comments-add-file-comment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/comments/comments-panel.tsx, apps/web/src/components/comments/mention-composer.tsx, and apps/api/src/pages/api/comments/index.ts on 2026-10-14. These source-backed instructions are not a production smoke test.",
  "related": [
    "hc-file-comments",
    "hc-preview-files"
  ],
  "keywords": [
    "comments add file comment",
    "File comments and replies",
    "Dosya help",
    "cloud storage"
  ]
}
---
Comments keep review decisions beside the file they concern. In the web viewer, a comment can also capture the PDF page or media playback position that was active when you focused the composer.

<figure class="help-screenshot"><a href="/screenshots/comments-add-file-comment-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-add-file-comment-help-workflow-2026-10-14.webp" alt="Four-step map for adding a file comment: open Comments, write a concise test, confirm author and timestamp, then refresh the thread." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the review sequence for posting one file comment and checking that it remains in the thread. <a href="/screenshots/comments-add-file-comment-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start.** Sign in to the workspace that owns the file. You need workspace membership, file access, and the `access_files` permission. A full-lock folder must be unlocked first; the file’s own download lock does not block its discussion.

## Steps

1. Open **Files**, select the item, and open its preview. Choose **Comments** in the inspector. The count beside the tab is the number of messages already attached to this file.
2. For a PDF, display the page you mean before focusing the composer. For audio or video, seek to the relevant moment first. Dosya records a PDF page from 1 upward or a whole-millisecond media position from 0 upward.
3. In **Write a comment… Use @ to mention**, enter the decision, requested change, and enough location detail to recognize it later. The body is trimmed and must contain text. The maximum is 5,000 characters; a counter appears after 4,500.
4. Type `@` to choose a colleague who can see this file. The picker waits 150 ms after typing, searches at most 50 eligible members, and shows up to 10 choices. One comment may mention at most 20 people.
5. Choose **Send**, or press Enter. Use Shift+Enter for a new line. Enter during an input-method composition does not submit.
6. Confirm the new entry shows your name and timestamp. If you attached a page or playback point, use its anchor to return to the same context.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Dosya Comments page for Launch review.pdf with dated messages, a file-details sidebar, and the message composer." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The reference image shows the Launch review.pdf discussion beside file properties, View file, Download, and the composer. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**What other people receive.** Each eligible mentioned member gets one comment notice. If you are not the file owner, the owner is notified too; other thread participants can receive a notice unless they were already covered as owner or mention. Folder-comment notifications are different and are not used by this file workflow.

**If posting fails.** `Comment body is required` means trimming left no text. Shorten a body that triggers `Comment too long (max 5000 characters)`. `Too many mentions (max 20)` requires removing recipients. The viewer otherwise reports **Could not post comment**; the standalone page reports **Comment failed — Your comment could not be posted.** Refresh before retrying so a delayed success is not duplicated.

## Expected result

The comment appears once in oldest-to-newest order with your identity and time. Its optional page, playback point, and version association stay attached to that message; inaccessible mention candidates are omitted without exposing them.

## Related guides

- [Review the complete file-comment workflow](/files/comments-and-replies)
- [Open a file in the preview viewer](/files/preview-files)
