---
{
  "articleId": "hc-remote-download-direct-url",
  "locale": "en",
  "revision": 5,
  "title": "Tell a direct file URL from a share page",
  "summary": "Test whether an HTTPS URL returns file bytes with a reliable size instead of an HTML share page, sign-in screen, or blocked redirect chain safely.",
  "category": "integrations",
  "articleSlug": "remote-download-direct-url",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Tell a direct file URL from a share page” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/lib/remote-download/probe.ts`, `apps/api/src/lib/ssrf-guard.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download direct url",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The Remote download form expects a URL that returns file bytes directly. Dosya probes it with `GET` and `Range: bytes=0-0`; HTML and XHTML responses are treated as share pages even when a browser visually offers a download button.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-direct-url-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Tell a direct file URL from a share page: Open the candidate URL without provider cookies, confirm it returns file bytes. Inspect each redirect in the chain, require public HTTPS and port 443. Check the final response size headers, require total Content-Range or Content-Length. Compare the queued filename and size, match them to the provider file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows tell a direct file url from a share page from “Open the candidate URL without provider cookies, confirm it returns file bytes.” through “Inspect each redirect in the chain, require public HTTPS and port 443.” and “Check the final response size headers, require total Content-Range or Content-Length.”, ending with “Compare the queued filename and size, match them to the provider file.”. <a class="workflow-map-full" href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-direct-url-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Use an authorized public HTTPS URL on port 443. The source must work without your browser session because Dosya does not forward cookies, interactive login state, or custom request headers.

A usable response reports a positive total size through `Content-Range` on a `206` response or a numeric `Content-Length` otherwise. Dosya follows at most five redirects and applies the public-address check at every hop.

## Steps

1. Open the candidate link in a private browser window where you are signed out of the provider.
2. Reject any page that asks for login, renders sharing controls, or returns HTML instead of beginning the actual file response.
3. Inspect the final HTTPS address after redirects and confirm it uses no local hostname, private IP, or non-443 port.
4. Confirm the response identifies a positive byte length; a chunked stream with no total cannot be reserved as a remote download.
5. Paste the final direct URL into **Integrations > Remote download**, choose the destination, and select **Fetch file**.
6. Require **Download started**, then compare the queued filename and total bytes with the provider’s file before leaving the page.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Tell a direct file URL from a share page”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Tell a direct file URL from a share page”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The probe accepts the response, derives the filename from `Content-Disposition` or the final URL, and creates a job with a known byte total. The stored name is sanitized and limited to 200 characters.

**Not a direct file link** means the source returned HTML. **Source returned HTTP N** means the final response used an HTTP error status. Generate a provider download URL rather than reusing its sharing page.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
