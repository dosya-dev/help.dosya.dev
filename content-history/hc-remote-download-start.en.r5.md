---
{
  "articleId": "hc-remote-download-start",
  "locale": "en",
  "revision": 5,
  "title": "Start a remote download from a direct URL",
  "summary": "Start a server-side remote download from a direct HTTPS file URL, choose its Dosya folder, and resolve permission, size, quota, or URL refusals.",
  "category": "integrations",
  "articleSlug": "remote-download-start",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/remote-download.tsx, apps/api/src/pages/api/remote-downloads/index.ts, apps/api/src/lib/remote-download/probe.ts, apps/api/src/lib/remote-download/types.ts, and apps/api/src/lib/ingest/register.ts. No external URL or production workspace was fetched.",
  "related": [
    "hc-remote-download",
    "hc-storage-usage"
  ],
  "keywords": [
    "remote download direct URL",
    "server-side file upload",
    "cloud storage fetch URL",
    "Dosya remote download limits"
  ]
}
---
Remote download fetches a public HTTPS file on Dosya's servers and registers it in the chosen workspace folder. Your browser connection is not used for the file transfer, and you may close the page after the job starts.

<figure class="help-screenshot"><a href="/screenshots/remote-download-start-help-workflow-2026-10-14.webp"><img src="/screenshots/remote-download-start-help-workflow-2026-10-14.webp" alt="Remote-download start flow with a direct HTTPS file URL, Home or selected folder destination, Fetch file button, and queued job row." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Submit a directly downloadable HTTPS object to the intended folder and confirm Dosya creates a queued server-side job. <a href="/screenshots/remote-download-start-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Requirements and limits

Your role needs permission to add files to the destination. Folder-confined members can fetch only into their permitted subtree. The workspace's storage quota, per-file ceiling, allowed or blocked extensions, and locked-backup rules apply before or at completion.

The source must be a publicly resolvable `https` URL that returns file bytes and a positive size. Google Drive or Dropbox share pages are HTML, so they are rejected; obtain a direct download address instead. Dosya follows at most **5 redirects** and rechecks every destination against its private-address guard.

At most **3** remote jobs may run concurrently in one workspace, and the workspace can start **20** jobs in a rolling **24-hour** window. Dismissing an old row does not free its daily slot. Range-capable sources with a strong ETag can be as large as **1 TB**; sources that cannot resume are limited to **10 GiB**, and a smaller workspace policy may refuse either case.

## Steps

1. Switch to the destination workspace and open **Integrations → Remote Downloads**.
2. Paste the direct URL into the field showing `https://example.com/big-file.zip`.
3. Leave the folder button on **Home** for the workspace root, or select it to open **Download into folder**. Choose a live folder and press **Select**.
4. Select **Fetch file**. Dosya first probes the URL, reported size, content type, range support, quota, and workspace policy.
5. Wait for **Download started**. Its message says **dosya is fetching the file for you - you can close this page.** A new row appears with status **queued**.

<figure class="help-screenshot"><a href="/screenshots/remote-downloads-overview-2026-10-13.webp"><img src="/screenshots/remote-downloads-overview-2026-10-13.webp" alt="Dosya Remote Downloads page showing the URL field, Home destination selector, Fetch file control, and jobs table." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The start page combines URL submission, destination selection, and the first queued status in one workspace-specific view. <a href="/screenshots/remote-downloads-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Resolve a refused start

- **Could not start download – You don't have permission to add files** requires a role or destination change.
- **That looks like a web page, not a file – paste a direct link to the file itself** means the source returned HTML.
- **The server didn't report a file size, so this link can't be fetched** means Dosya could not establish the required positive size.
- **This address isn't allowed** protects private, loopback, or otherwise disallowed network destinations.
- **This file is too large to fetch** means the transfer strategy exceeded its 1 TB resumable or 10 GiB stream ceiling.
- **Only 3 downloads can run at once - wait for one to finish** is the concurrency cap. **Daily limit of 20 remote downloads reached** clears only as earlier starts leave the rolling day.
- **Folder not found in this workspace** means the selected destination is stale, trashed, or belongs elsewhere.

The stored filename comes from `Content-Disposition` when available, otherwise from the final URL, and is sanitized to one path segment up to 200 characters. A live name collision is preserved by suffixing the new file, such as `report (2).pdf`; the existing file is not overwritten.

## Expected result

The start toast appears and the newest job row names the sanitized file with `queued` status, zero transferred bytes, and the chosen workspace destination recorded. No file appears in Files until the server reaches **Done** and registers the completed object.

## Related guides

- [Download a remote URL](/integrations/remote-download)
- [Understand storage limits](/uploading/storage-usage)
