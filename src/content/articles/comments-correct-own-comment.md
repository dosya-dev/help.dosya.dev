---
{
  "articleId": "hc-comments-correct-own-comment",
  "locale": "en",
  "revision": 5,
  "title": "Correct your own file comment",
  "summary": "Edit a comment you authored, preserve its original file anchor, update mentions safely, and verify the corrected text without duplicating the thread.",
  "category": "files",
  "articleSlug": "comments-correct-own-comment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/comments/comments-panel.tsx, apps/api/src/pages/api/comments/[id].ts, and apps/api/src/lib/notifications/comments.ts on 2026-10-14. Production behavior was not exercised.",
  "related": [
    "hc-file-comments",
    "hc-comments-open-file-thread"
  ],
  "keywords": [
    "comments correct own comment",
    "File comment collaboration details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Edit an existing message when its meaning needs a small correction. Editing keeps the comment in place and preserves the page, playback position, and file-version anchor captured when it was first posted.

<figure class="help-screenshot"><a href="/screenshots/comments-correct-own-comment-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-correct-own-comment-help-workflow-2026-10-14.webp" alt="Four-step correction map: open the file thread, edit a small mistake, save, and reread the corrected comment after refresh." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map identifies the controls and checks for correcting one comment without creating a replacement message. <a href="/screenshots/comments-correct-own-comment-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Who can edit.** The current web interface shows **Edit** only on comments you authored. You must still be a member who can access the target file; the API rejects another author’s message with `You can only edit your own comments`.

## Steps

1. Open the affected file, select **Comments**, and locate your message by its text, author, and time. On the standalone Comments page, edited entries are marked `edited`.
2. Open the comment menu and choose **Edit**. The composer changes to **Save** and offers **Cancel**.
3. Correct the smallest necessary portion. A saved body must contain text after trimming and must be no longer than 5,000 characters.
4. Review any `@mentions`. Up to 20 eligible members can remain. A person must still be able to see the file to be accepted as a mention.
5. Choose **Save**. Confirm the message itself changes and no second top-level comment appears.
6. Reopen the page or media anchor. Editing cannot move the original anchor to a different PDF page, playback time, or version; post a new comment when the review context changed.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Launch review.pdf discussion with chronological messages and the file details panel used to identify the comment being edited." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the file-bound thread where an author can match the correct message before using its edit control. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Notification behavior.** A text-only correction does not repeat the normal owner and thread-participant notices. Newly added eligible mentions are notified, which is useful when the correction assigns a new reviewer.

**If saving fails.** `Comment body is required` indicates an empty edit. `Comment too long (max 5000 characters)` requires shortening it. `Too many mentions (max 20)` means the recipient list must be reduced. If access or membership changed, reopen the correct workspace and verify the file is visible before retrying. Choose **Cancel** if you cannot confirm the intended change; the stored comment remains as it was.

## Expected result

Your existing message displays the corrected body and retains its original thread position and context anchor. Only newly introduced valid mentions can create fresh mention notifications.

## Related guides

- [Understand file-comment authorship and replies](/files/comments-and-replies)
- [Find the exact discussion before editing](/files/comments-open-file-thread)
