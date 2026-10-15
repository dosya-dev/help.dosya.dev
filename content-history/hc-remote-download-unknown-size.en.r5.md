---
{
  "articleId": "hc-remote-download-unknown-size",
  "locale": "en",
  "revision": 5,
  "title": "Fix an unknown-size remote download",
  "summary": "Choose a source that reports a positive Content-Length or total Content-Range, or download locally when Dosya cannot reserve an unknown byte count.",
  "category": "integrations",
  "articleSlug": "remote-download-unknown-size",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Fix an unknown-size remote download” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/lib/remote-download/probe.ts`, `apps/api/src/lib/remote-download/chunks.ts`, `apps/api/src/lib/remote-download/types.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download unknown size",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya must know the complete byte count before it can select a transfer strategy and check quota. Its probe requests `bytes=0-0`; a `206` response must include a numeric total in `Content-Range`, while a non-range response needs a numeric `Content-Length`.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Fix an unknown-size remote download: Inspect the final response after redirects, note status and size headers. For 206 require a positive total Content-Range, an asterisk total is unknown. For 200 require a positive Content-Length, zero or missing size is rejected. Submit once and inspect the Queued row, require a real total byte count." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows fix an unknown-size remote download from “Inspect the final response after redirects, note status and size headers.” through “For 206 require a positive total Content-Range, an asterisk total is unknown.” and “For 200 require a positive Content-Length, zero or missing size is rejected.”, ending with “Submit once and inspect the Queued row, require a real total byte count.”. <a class="workflow-map-full" href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-unknown-size-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

The startup toast says **The server didn’t report a file size, so this link can’t be fetched**. Because the probe fails before insertion, there is no failed job row and the attempt does not consume a daily job slot.

Zero, negative, missing, malformed, or JavaScript-unsafe totals are refused. `Transfer-Encoding: chunked` by itself does not supply the reservation size Dosya requires.

## Steps

1. Test the direct HTTPS link outside your signed-in browser session and identify the final response after redirects.
2. Inspect the response to the range probe: accept `206` only when `Content-Range` ends with a positive total such as `/1048576`.
3. If the server answers `200`, require a positive decimal `Content-Length`; an estimated size in page text does not count.
4. Generate a different provider export or download endpoint that reports one of those exact headers and still returns file bytes rather than HTML.
5. Paste the replacement URL into Remote download, select the target folder, and choose **Fetch file** once.
6. Confirm **Download started** and verify the queued row shows a real total instead of `-` before relying on the transfer.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Fix an unknown-size remote download”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Fix an unknown-size remote download”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The probe returns a positive known size, Dosya checks policy and quota, and a queued job is created. Range mode can accept up to 1 TB when a strong ETag is also present; the fallback stream path is limited to 10 GiB.

When the origin cannot expose a stable length, download the file locally and use a normal Dosya upload. The released remote-download API has no unknown-length streaming mode.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
