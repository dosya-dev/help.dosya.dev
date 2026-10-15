---
{
  "articleId": "hc-comments-start-clear-review-thread",
  "locale": "en",
  "revision": 5,
  "title": "Start a clear file review thread",
  "summary": "Start a useful file review with a precise request, page or time context, eligible mentions, and a clear check that responses stay on one thread.",
  "category": "files",
  "articleSlug": "comments-start-clear-review-thread",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/components/comments/mention-composer.tsx, apps/web/src/components/comments/comments-panel.tsx, and apps/api/src/pages/api/comments/mentionable.ts on 2026-10-14. Production delivery was not exercised.",
  "related": [
    "hc-file-comments",
    "hc-comments-open-file-thread"
  ],
  "keywords": [
    "comments start clear review thread",
    "File comment collaboration details",
    "Dosya help",
    "cloud storage"
  ]
}
---
Start a review with one actionable top-level comment. A precise request gives replies a stable parent and keeps the decision attached to the file rather than scattered across separate messages.

<figure class="help-screenshot"><a href="/screenshots/comments-start-clear-review-thread-help-workflow-2026-10-14.webp"><img src="/screenshots/comments-start-clear-review-thread-help-workflow-2026-10-14.webp" alt="Four-step map for selecting the correct file, adding section or timestamp context, stating the requested change, and checking that reviewers can respond." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The map demonstrates the information a clear first review comment should establish. <a href="/screenshots/comments-start-clear-review-thread-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

**Prepare the context.** Open the exact file and current version. For a PDF, display the target page. For audio or video, seek to the relevant moment. Do not include passwords, recovery codes, payment details, or other secrets in a comment or screenshot.

## Steps

1. In Preview, choose **Comments** and verify the file name and workspace. Use the general composer, not **Reply**, to start a new top-level thread.
2. State the location, observed issue, requested change, and acceptance check. Example: “Page 4, pricing table: align the annual total with the monthly column; reply after the PDF export is replaced.”
3. Add `@mentions` only for people who need to act. The search begins after a 150 ms pause, evaluates up to 50 eligible workspace candidates, and displays no more than 10 matches. The query is capped at 64 characters.
4. Keep the complete body within 5,000 characters and no more than 20 mentions. Choose **Send** once.
5. Confirm your identity, timestamp, and optional page or playback anchor. Ask reviewers to use **Reply** beneath this message so the discussion remains grouped.

<figure class="help-screenshot"><a href="/screenshots/file-comment-thread-2026-10-12.webp"><img src="/screenshots/file-comment-thread-2026-10-12.webp" alt="Launch review.pdf Comments page with a chronological discussion and FILE DETAILS sidebar." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The screenshot shows the shared file context, dated messages, and composer used to begin a focused review thread. <a href="/screenshots/file-comment-thread-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Visibility and delivery.** Only members who can see the target can be accepted as mentions; inaccessible candidates are silently omitted. Mentioned people, the file owner when different from the author, and eligible thread participants can receive notices without duplicate delivery for overlapping roles.

**If the thread cannot start.** A blank body produces `Comment body is required`; an oversized body produces `Comment too long (max 5000 characters)`; too many recipients produce `Too many mentions (max 20)`. A hidden or confined target, missing `access_files`, or locked parent folder can prevent access before composition. Resolve that access condition instead of moving the discussion to an unrelated file.

## Expected result

One top-level comment identifies the file, review location, requested outcome, and responsible people. Replies can stay beneath it, and later versions retain the original message’s version context.

## Related guides

- [Structure a complete file review discussion](/files/comments-and-replies)
- [Open the intended thread before inviting reviewers](/files/comments-open-file-thread)
