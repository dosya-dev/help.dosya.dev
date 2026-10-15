---
{
  "articleId": "hc-remote-download-address-not-allowed",
  "locale": "en",
  "revision": 5,
  "title": "Understand an Address not allowed remote-download error",
  "summary": "Replace a blocked local, private, non-HTTPS, or redirected address with a public HTTPS file URL, then confirm Dosya accepts the new download job.",
  "category": "integrations",
  "articleSlug": "remote-download-address-not-allowed",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed for “Understand an Address not allowed remote-download error” against the released implementation on 2026-10-14: `apps/web/src/pages/integrations/remote-download.tsx`, `apps/api/src/lib/ssrf-guard.ts`, `apps/api/src/lib/remote-download/probe.ts`, `apps/api/src/pages/api/remote-downloads/index.ts`. The production surface remains routed by `apps/web/src/router.tsx` and the corresponding API handlers; no unreleased behavior is described.",
  "related": [
    "hc-remote-download-errors",
    "hc-remote-download-start"
  ],
  "keywords": [
    "remote download address not allowed",
    "Remote download failure details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya accepts only public HTTPS sources for server-side downloads. The address guard rejects unsafe input before a job row is created, so this failure appears in the **Could not start download** toast as **This address isn’t allowed**, not as a failed item in the table.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Understand an Address not allowed remote-download error: Inspect the rejected URL and redirects, record scheme host port and final address. Remove local and private destinations, require public HTTPS on port 443. Submit the public file URL once, choose Fetch file and await the toast. Require Download started as the receipt, match a new Queued row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>This map follows understand an address not allowed remote-download error from “Inspect the rejected URL and redirects, record scheme host port and final address.” through “Remove local and private destinations, require public HTTPS on port 443.” and “Submit the public file URL once, choose Fetch file and await the toast.”, ending with “Require Download started as the receipt, match a new Queued row.”. <a class="workflow-map-full" href="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14.webp" data-light-href="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/remote-download-address-not-allowed-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Open **Integrations > Remote download** in the intended workspace. You need membership plus the role permission to add files. Obtain a source URL that its owner authorizes Dosya’s server to fetch.

The guard refuses non-HTTPS schemes, explicit ports other than `443`, and `localhost`, `.local`, or `.internal` hosts. For IPv4, it blocks loopback, private, link-local, carrier-grade NAT, Dosya’s own origin, and the `224.0.0.0/3` multicast and reserved range. For IPv6, it blocks `::`, `::1`, `fc00::/7`, `fe80::/10`, and IPv4-mapped or compatible forms whose embedded IPv4 address is blocked. DNS answers are checked too, and every redirect is checked again; five redirect hops are allowed.

## Steps

1. Copy the rejected address into a private note and identify its scheme, hostname, optional port, and redirect target without exposing embedded tokens.
2. Replace `http://` with a real provider-issued `https://` download URL; changing text alone does not help if that HTTPS endpoint still resolves to a blocked address.
3. Remove any non-443 port and avoid local machine names, router addresses, private cloud endpoints, or URLs that redirect into an internal network.
4. Test the replacement in a private browser window and require a public file response without VPN, local DNS, cookies, or an interactive sign-in.
5. Paste the replacement into the Remote download field, keep the intended destination selected, and choose **Fetch file** once.
6. Require the **Download started** toast and a new **Queued** row; if the same refusal returns, inspect every redirect rather than repeatedly submitting the original URL.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Reference for “Understand an Address not allowed remote-download error”: Dosya Remote Downloads overview page." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Understand an Address not allowed remote-download error”: Dosya Remote Downloads overview page. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Dosya accepts the public HTTPS source and creates a queued job. The browser may be closed after the success toast because the transfer runs on Dosya’s servers.

A DNS lookup failure is reported as **Couldn’t reach that URL**, while a public URL that redirects to a private destination is still refused as an unsafe address. A blocked attempt consumes neither the three active-job slots nor the 20-job rolling daily allowance because no job was inserted.

## Related guides

- [Troubleshoot remote downloads](/integrations/remote-download-errors)
- [Start a remote download](/integrations/remote-download-start)
