---
{
  "articleId": "hc-comments-delete-accidental-comment",
  "locale": "en",
  "revision": 5,
  "title": "Delete an accidental comment",
  "summary": "Remove an accidental comment after verifying its file, author, and replies; understand the immediate cascade and the lack of comment recovery.",
  "category": "files",
  "articleSlug": "comments-delete-accidental-comment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/comments/comments-panel.tsx and apps/api/src/pages/api/comments/[id].ts on 2026-10-14. The deletion flow has not been retested on production.",
  "related": [
    "hc-file-comments",
    "hc-comments-open-file-thread"
  ],
  "keywords": [
    "comments delete accidental comment",
    "File comment collaboration details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Delete an accidental post only after matching the file and message. The current web control deletes immediately: there is no confirmation dialog or comment trash.

**Understand the effect first.** Deleting a top-level comment also deletes every reply beneath it. This is irreversible through Dosya’s interface and API. The file, its versions, and unrelated comments remain.

## Steps

1. Open the file named in the accidental message and select **Comments**. Match the text, your author identity, timestamp, and any page or playback anchor.
2. Check whether replies sit beneath the message. Copy any context the team still needs into a new comment before removal, because deleting the root removes the reply chain too.
3. Open your comment’s menu and choose **Delete** once. Do not expect an extra confirmation step.
4. Wait for the entry to leave the thread. Refresh and confirm the same message remains absent while the surrounding discussion and file are still present.
5. If the click appears to fail, refresh before trying again. A delayed deletion followed by a second click can make it harder to tell which message you targeted.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Launch review.pdf comment thread with message timestamps and file details used to verify an accidental post before deletion." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The reference view provides the file name, chronological discussion, and author context needed to distinguish the accidental comment. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Permissions.** The web app exposes deletion on your own messages. The API also permits a workspace owner or administrator to remove another author’s comment, but the current comment menu does not expose that administrative action. An author who is no longer a current member cannot delete the old message through this flow.

**If removal fails.** The standalone page reports **Delete failed — Your comment could not be deleted.** The viewer can show **Could not delete**. Recheck the active workspace, file visibility, and authorship. There is no restore button after a successful deletion; reconstructing the message requires posting it again, and it receives a new time and identity record.

## Expected result

Only the selected comment disappears, unless it was a thread root with replies, in which case that entire reply branch disappears. File bytes, versions, and other discussion branches do not change.

## Related guides

- [Check reply structure before removing a comment](/files/comments-and-replies)
- [Locate the file-bound thread for cleanup](/files/comments-open-file-thread)
