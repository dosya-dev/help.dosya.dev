---
{
  "articleId": "hc-comments-reply-to-thread",
  "locale": "en",
  "revision": 5,
  "title": "Reply to a file comment",
  "summary": "Reply beneath a top-level file comment, use mentions within current limits, and recover safely when access changes or the post request fails.",
  "category": "files",
  "articleSlug": "comments-reply-to-thread",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 with apps/web/src/components/comments/comments-panel.tsx, mention-composer.tsx, api.ts, apps/mobile/app/comments.tsx, apps/mobile/src/comments/api.ts, apps/api/src/pages/api/comments/index.ts, apps/api/src/lib/comments/gate.ts, and comment route tests. Production comments were not posted.",
  "related": [
    "hc-file-comments",
    "hc-preview-files"
  ],
  "keywords": [
    "comments reply to thread",
    "File comments and replies",
    "Dosya help",
    "cloud storage"
  ]
}
---
A reply belongs to the same file thread as its parent. The browser nests replies under a top-level comment; mobile keeps a flat chat layout and shows a quote from the parent.

You need current workspace membership, Files page access, and visibility of the target file. Folder confinement, hidden rules, and an unopened full-lock ancestor can refuse the thread.

<figure class="help-screenshot"><a href="/screenshots/comments-reply-to-thread-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-reply-to-thread-help-workflow-2026-10-14.webp" alt="File comment reply flow from the Reply control through the Replying to strip to the nested browser result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Bind the draft to the intended parent, submit once, and verify its nested or quoted context. <a href="/screenshots/comments-reply-to-thread-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the file preview and select **Comments**, or open **Comments** from the file's action menu on mobile.
- Confirm the filename and parent author's name before composing.
- A comment body is limited to 5,000 characters. The counter appears after 4,500 characters; the send control is disabled for blank or over-limit text.

## Steps

1. In the browser, choose **Reply** below the top-level comment. Replies themselves do not expose another Reply button there.
2. On mobile, press the reply action on the desired bubble; mobile permits selecting any visible comment as the parent.
3. Confirm the composer says **Replying to NAME**. Use **cancel** in the browser or **Cancel reply** on mobile if it names the wrong person.
4. Enter the response. In the browser, typing @ searches eligible people after a 150 ms debounce; at most 20 distinct other users can be submitted.
5. Browser users select **Send** or press Enter; Shift+Enter inserts a line break. Mobile users tap **Send comment**.
6. Wait for success before leaving the file. Browser adds the returned comment to the current thread; mobile clears the composer and reloads only after the server accepts it.

Replies cannot carry a time or PDF-page anchor. The server trims surrounding whitespace, checks that the parent still exists on the same file, and answers “Parent comment not found” with 404 if it was deleted or belongs elsewhere. Mention recipients who cannot see the file are silently omitted to avoid exposing restricted membership.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="File Comments panel showing a response indented beneath its selected top-level parent." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The browser's indentation identifies the parent; mobile instead places a quoted excerpt inside the response bubble. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The accepted response appears once with the signed-in author and its parent relationship. A browser reply sits under the root comment; the mobile row quotes the parent author and excerpt.

Posting is reversible by deleting your reply. Be careful when deleting a top-level parent: the confirmation warns that its replies are deleted too, and the server removes that subtree.

## Troubleshooting

**The conversation will not load.** Browser shows “Couldn't load comments”; mobile shows “Could not load this conversation.” Retry after confirming workspace, Files access, target visibility, and folder unlock state.

**Send stayed disabled.** Remove whitespace-only content or reduce the trimmed response to 5,000 characters.

**The post failed.** Both clients preserve the typed body, and the reply target remains selected. Read the error toast, correct access or connectivity, and submit once rather than duplicating the draft.

## Related guides

- [Comment on a file](/files/comments-and-replies)
- [Preview files](/files/preview-files)
