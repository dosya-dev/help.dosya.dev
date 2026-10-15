---
{
  "articleId": "hc-comments-preserve-context-before-version",
  "locale": "en",
  "revision": 5,
  "title": "Preserve review context before replacing a file",
  "summary": "Record review context before uploading a new file version, preserve page or playback anchors, and distinguish earlier-version comments afterward.",
  "category": "files",
  "articleSlug": "comments-preserve-context-before-version",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/comments/comments-panel.tsx, apps/web/src/components/file-viewer.tsx, and apps/api/src/lib/comments/anchor.ts on 2026-10-14. Production version uploads were not tested.",
  "related": [
    "hc-file-comments",
    "hc-comments-open-file-thread"
  ],
  "keywords": [
    "comments preserve context before version",
    "File comment collaboration details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Comments survive a new version upload, but an anchored comment continues to describe the version that was current when the anchor was created. Record the decision before replacing content so later readers can separate old feedback from the new file.

<figure class="help-screenshot"><a href="/screenshots/comments-preserve-context-before-version-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-preserve-context-before-version-help-workflow-2026-10-14.webp" alt="Four-step map for summarizing a review, noting its version context, uploading replacement content, and separating earlier comments from the current file." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map shows the handoff between a version-bound discussion and a later upload. <a href="/screenshots/comments-preserve-context-before-version-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**What an anchor stores.** A top-level PDF comment can keep a page number of 1 or greater. Audio and video comments can keep a whole-millisecond position starting at 0. Dosya also records the current version number with that anchor. Replies do not carry their own anchors.

## Steps

1. Open the current file version and choose **Comments**. Navigate to the relevant page or playback position before focusing the new-comment field; focusing media commentary pauses playback while capturing the position.
2. Summarize what was approved, what remains open, and what the replacement is expected to change. Mention an eligible reviewer if the handoff needs attention.
3. Send the comment and use its page or time control to verify the location. Keep the comment under 5,000 characters and limit mentions to 20.
4. Upload the replacement through the file’s version workflow only after the context is visible in the thread.
5. Reopen **Comments** on the new version. When an anchored comment belongs to an earlier revision, Dosya labels it `vN`; selecting it reports **Comment was left on vN** rather than pretending the old position belongs to the current bytes.
6. Add a fresh current-version comment if the new document or media needs a new anchor. Editing the old message cannot move its original version anchor.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Launch review.pdf thread beside FILE DETAILS, used to preserve review decisions before a replacement version is uploaded." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot demonstrates where reviewers can leave durable context while checking the file identity and properties. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**What remains and what changes.** Uploading a version does not delete the existing discussion. The old comment text, author, time, and version anchor remain. Page numbers and media positions may no longer describe the same visual content in the replacement, so readers should follow the `vN` marker rather than infer equivalence.

**If context is missing.** Check that you posted to the correct file ID before uploading. If the old version comment was deleted, it cannot be restored through comment history; write a new message that explicitly identifies the earlier version and source of the recovered information.

## Expected result

The replacement becomes the current file version while the prior review remains readable and visibly associated with its original `vN` context. New feedback can use a new current-version anchor.

## Related guides

- [Understand anchors in file discussions](/files/comments-and-replies)
- [Reopen the same thread after versioning](/files/comments-open-file-thread)
