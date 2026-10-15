---
{
  "articleId": "hc-comments-edit-own-comment",
  "locale": "en",
  "revision": 5,
  "title": "Edit your own file comment",
  "summary": "Edit a comment you authored, keep or change its mentions, and understand save limits, access checks, failure behavior, and the lack of undo.",
  "category": "files",
  "articleSlug": "comments-edit-own-comment",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/components/comments/comments-panel.tsx, mention-composer.tsx, apps/web/src/pages/comments.tsx, apps/mobile/app/comments.tsx, apps/mobile/src/comments/thread.ts, apps/api/src/pages/api/comments/[id].ts, apps/api/src/lib/comments/gate.ts, and route unit tests. No production comment was edited.",
  "related": [
    "hc-file-comments",
    "hc-preview-files"
  ],
  "keywords": [
    "comments edit own comment",
    "File comments and replies",
    "Dosya help",
    "cloud storage"
  ]
}
---
Editing replaces the stored body of a comment you authored. It does not create a visible revision history, change the comment's parent, or move its time or PDF-page anchor. The available editor depends on where you opened the conversation.

<figure class="help-screenshot"><a href="/screenshots/comments-edit-own-comment-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-edit-own-comment-help-workflow-2026-10-14.webp" alt="Own-comment editing flow from the Edit control to the prefilled composer, Save button, and refreshed corrected text." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Open only your own comment, correct the prefilled body, and verify the refreshed thread after Save succeeds. <a href="/screenshots/comments-edit-own-comment-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the correct file conversation and find a comment posted by the signed-in account.
- Only the author sees **Edit**. Workspace owners and admins may delete another person's comment, but they cannot edit it; an author must also remain a member of that workspace.
- Copy important original wording elsewhere first. The product stores the replacement text and offers no comment revision viewer.

## Steps

1. Choose the editing surface that is already showing the conversation:
   - On the dedicated browser **Comments** page, hover your bubble and select **Edit**. Its plain textarea changes the body only; use **Save** or **Cancel**.
   - In the browser file-preview comments panel, select **Edit** beneath your comment. This opens the mention-aware composer with the existing body and current mention identities.
   - On mobile, select the inline **Edit** action below your own bubble. The replacement field, **Cancel**, and **Save** stay inside that bubble.
2. Correct the prefilled text. The trimmed saved body must contain 1 to 5,000 characters on every surface.
3. In the file-preview panel only, review @mentions. Its counter appears above 4,500 characters, Escape cancels when the mention picker is closed, and Save sends the active mention list. At most 20 distinct recipients are accepted, and newly mentioned people must be able to see the target.
4. On the dedicated Comments page or mobile, save the body-only edit. Because those clients omit `mention_user_ids`, the API preserves the comment's stored mentions instead of clearing or revalidating them.
5. Wait for the thread to reload and compare the displayed body with the intended correction. The dedicated browser Comments page and mobile show an **edited** marker; the file-preview panel refreshes the text without rendering that marker.

The API returns “You can only edit your own comments” for a non-author, “Comment not found” for a missing ID, “Comment body is required” for empty text, and “Comment too long (max 5000 characters)” above the limit. Every edit requires the author and current workspace membership. Only the file-preview panel's mention-aware request also rechecks Files access, confinement, hidden state, and enclosing folder locks.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="File comment thread used to compare the corrected body with the author and surrounding replies after reload." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reloading preserves the comment's place in the discussion while showing the newly stored body. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The same comment ID and thread position now show the trimmed replacement body. Its creation time, parent relationship, and anchor remain intact; the update time and edited state change.

There is no one-click undo. To recover an earlier version, edit again and paste wording you saved separately.

## Troubleshooting

**Edit is absent.** Verify that the comment's author is your current account. Administrators do not receive an override for rewriting somebody else's words.

**Save failed after access changed.** First confirm you are still a workspace member. A file-preview edit that includes mentions must also pass the file visibility gates; restore legitimate access or remove the mention change before retrying from a body-only surface.

**Your correction remains in the field.** That means the request did not succeed. The browser keeps edit mode and mobile retains its edit text on failure, so resolve the shown error before trying again.

## Related guides

- [Comment on a file](/files/comments-and-replies)
- [Preview files](/files/preview-files)
