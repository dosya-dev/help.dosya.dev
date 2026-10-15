---
{
  "articleId": "hc-remote-download-source-changed",
  "locale": "en",
  "revision": 5,
  "title": "Retry when a remote source file changed",
  "summary": "Replace a mutable source URL after Dosya detects changed length or validator data, then start a fresh job and verify the new file from zero.",
  "category": "integrations",
  "articleSlug": "remote-download-source-changed",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Retry when a remote source file changed” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/lib/remote-download/chunks.ts`, `apps/api/src/lib/remote-download/durable-object.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download source changed",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya probes a source before transfer and expects the same object until completion. A range job sends the strong ETag through `If-Range`; a `200` response where `206` was expected proves the validator no longer matches. Stream mode also compares the received byte count with the probed size.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-source-changed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-source-changed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-source-changed-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-source-changed-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-source-changed-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Retry when a remote source file changed: Record expected size and current progress, keep the failed row as evidence. Obtain a URL for one immutable revision, avoid a mutable latest-file link. Start a fresh transfer from byte zero, changed-source partials cannot resume. Compare stored length with the final source, clean up only after a byte match." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows retry when a remote source file changed from “Record expected size and current progress, keep the failed row as evidence.” through “Obtain a URL for one immutable revision, avoid a mutable latest-file link.” and “Start a fresh transfer from byte zero, changed-source partials cannot resume.”, ending with “Compare stored length with the final source, clean up only after a byte match.”. <a class="workflow-map-full" href="/screenshots/remote-download-source-changed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-source-changed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-source-changed-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Treat **File changed on the source server** as terminal. Dosya cleans up the partial object and does not continue by mixing bytes from two revisions.

A signed URL can also become mutable when its provider regenerates content behind the same address. Prefer an immutable version URL or a fresh export whose contents will remain unchanged for the whole transfer.

## Steps

1. Record the failed row’s filename, expected total, and progress, then leave it visible while checking the origin.
2. Ask the source owner whether the object was replaced, regenerated, truncated, or still being uploaded after the Dosya job began.
3. Finish producing the source file and obtain a new public HTTPS URL tied to the final version rather than reusing a mutable endpoint.
4. Test that URL privately and confirm its reported total stays constant across two requests; a range-capable source should return `206` with a total and strong ETag.
5. Start a new Remote download job to the intended folder; the failed row has no restart-from-partial control.
6. Require **Done**, compare the stored byte size with the final source, and only then use the terminal X to remove the old row.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Retry when a remote source file changed”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Retry when a remote source file changed”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The new transfer starts from byte zero and completes entirely from one source revision. No partial bytes from the changed job become a Dosya file.

If the provider continuously rewrites the same URL, download the finished object locally and upload it through Dosya instead. A new remote job against an unstable address can reproduce the same terminal error.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
