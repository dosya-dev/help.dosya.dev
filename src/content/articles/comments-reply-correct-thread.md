---
{
  "articleId": "hc-comments-reply-correct-thread",
  "locale": "en",
  "revision": 5,
  "title": "Reply to the correct file comment",
  "summary": "Reply beneath the right parent comment, confirm the file and discussion context, and understand reply anchors, permissions, and notifications.",
  "category": "files",
  "articleSlug": "comments-reply-correct-thread",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/comments/comments-panel.tsx, apps/web/src/pages/comments.tsx, apps/api/src/pages/api/comments/index.ts, and apps/api/src/lib/notifications/comments.ts on 2026-10-14. Production notifications were not sent.",
  "related": [
    "hc-file-comments",
    "hc-comments-open-file-thread"
  ],
  "keywords": [
    "comments reply correct thread",
    "File comment collaboration details",
    "Dosya help",
    "cloud storage"
  ]
}
---
A reply should stay beneath the message it answers. Verify the parent and file before typing, especially when several files have similar review discussions.

<figure class="help-screenshot"><a href="/screenshots/comments-reply-correct-thread-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-reply-correct-thread-help-workflow-2026-10-14.webp" alt="Four-step map for opening the intended file thread, choosing Reply, writing a focused answer, and checking that it appears under the correct parent." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the parent-selection and placement checks for a file-comment reply. <a href="/screenshots/comments-reply-correct-thread-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before replying.** You need current workspace membership, `access_files`, visibility of the target, and access through its folder boundary. The parent must belong to the same file; the API rejects a mismatched or missing parent with `Parent comment not found`.

## Steps

1. Open the file and select **Comments**. Match the parent by author, timestamp, text, and any `vN`, PDF-page, or media-time context.
2. Choose **Reply** on that specific message. In Preview, confirm **Replying to {name}** appears above the bottom composer. On the standalone Comments page, verify the separate **Replying to** bar above its single bottom composer names and quotes the intended parent.
3. Write a focused answer. The trimmed body must be nonempty and no longer than 5,000 characters. You may mention up to 20 eligible people.
4. Choose **Send** or press Enter; use Shift+Enter for a line break.
5. Confirm Preview nests the message below the intended parent, or that the standalone page shows the correct parent quote on the new message. Refresh and check the relationship again.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Launch review.pdf chronological discussion with file details, providing the context needed to select a reply parent." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The reference thread shows how author, time, surrounding messages, and the file panel identify the correct reply location. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Reply anchors.** Replies inherit their conversational context from the parent and cannot carry a separate page, playback, or version anchor. The API returns `Replies cannot carry an anchor` if a client tries to attach one. To discuss a different page, time, or version, create a new top-level comment from that location.

**Who is notified.** Eligible mentions receive one notice each. The file owner can receive a notice when someone else replies, and existing thread participants can be notified unless already included as owner or mention. A participant who can no longer see the file is not exposed through the mention picker.

**If the answer lands incorrectly.** Delete your own reply and post it under the right parent. Deletion is immediate and has no undo; if the reply itself acquired descendants, deleting it also removes that branch. `Comment body is required`, `Comment too long (max 5000 characters)`, and `Too many mentions (max 20)` describe the corrective action directly.

## Expected result

The new message appears once with the chosen parent relationship: nested in Preview or carrying that parent’s quote on the standalone page. It has no independent content anchor, and only eligible recipients can receive its comment notifications.

## Related guides

- [Compare top-level comments with replies](/files/comments-and-replies)
- [Confirm the file thread before answering](/files/comments-open-file-thread)
