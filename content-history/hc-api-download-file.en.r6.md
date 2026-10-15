---
{
  "articleId": "hc-api-download-file",
  "locale": "en",
  "revision": 6,
  "title": "Download a file with the REST API",
  "summary": "Obtain a signed REST download URL, choose its lifetime or file version, fetch and verify bytes, and resolve locks, permissions and usage failures.",
  "category": "developers",
  "articleSlug": "api-download-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Evidence: apps/api/src/pages/api/files/[id]/download-url.ts; apps/api/src/lib/download-ttl.ts; apps/api/src/lib/download-ttl.unit.test.ts; apps/api/src/lib/files/download-grant-core.ts; apps/api/src/pages/api/files/[id]/download-url.access.unit.test.ts; apps/api/src/lib/files/version-one.ts; apps/api/src/pages/api/files/[id]/unlock.ts; apps/api/src/lib/access/rest-scope.ts; apps/api/src/pages/api/files/index.ts; apps/api/src/middleware.ts; apps/api/src/lib/r2-presign.ts; apps/api/src/lib/usage/enforce.ts; apps/api/src/lib/usage/plan-limits.ts; apps/web/src/components/api-keys/create-key-dialog.tsx. Repository contracts and tests verified locally; no production requests or credentials used.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "REST API",
    "file download",
    "cloud storage",
    "signed download URL",
    "API authentication"
  ]
}
---
Download a stored file with the REST API in two requests: obtain an authorized temporary URL from `GET /api/files/{file_id}/download-url`, then fetch that URL from storage. The grant response is JSON, not file bytes and not a redirect. Keep the URL private because anyone holding it can fetch the authorized object until it expires.

## Select a file you are allowed to download

Use a **Read only** or **Full access** API key with **REST API** enabled. Create it at **Profile → API keys → New API key** if needed, then save the complete token before closing its one-time reveal. A workspace pin may restrict the key; an ordinary folder-anchored key is refused on this protocol.

Use `GET /api/files?workspace_id=WORKSPACE_ID` to find a file ID. Add `folder_id` when looking inside a particular folder. The selected file must belong to a workspace you are a member of, lie inside any member confinement, be visible to you and permit downloads. Your role needs access to the files page and **download_files**; being able to preview a file is insufficient.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-download-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-download-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-download-file-workflow-map-2026-10-14.webp" alt="Workflow for “Download a file with the REST API”: request the authorized download URL and fetch it promptly; verify that downloaded bytes match the source file." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Download a file with the REST API”: request the authorized download URL and fetch it promptly; verify that downloaded bytes match the source file. <a class="workflow-map-full" href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-download-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-download-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: request and consume the grant

Set `DOSYA_API_KEY` privately and replace the file placeholder below. This Bash example uses curl and Python 3, stores the grant with private file permissions and does not print its signed URL:

```bash
set -e
umask 077
DOSYA_FILE_ID='REPLACE_WITH_FILE_ID'
DOSYA_GRANT_FILE=$(mktemp)
curl --fail-with-body --silent --show-error \
  "https://api.dosya.dev/api/files/$DOSYA_FILE_ID/download-url" \
  -H "Authorization: Bearer $DOSYA_API_KEY" \
  -o "$DOSYA_GRANT_FILE"
python3 - "$DOSYA_GRANT_FILE" <<'PYTHON'
import json, sys
from urllib.request import urlopen
grant = json.load(open(sys.argv[1]))
with urlopen(grant["url"]) as response, open("dosya-download.bin", "wb") as output:
    while chunk := response.read(1024 * 1024):
        output.write(chunk)
from pathlib import Path
actual = Path("dosya-download.bin").stat().st_size
if actual != grant["size"]:
    raise SystemExit(f"Size mismatch: received {actual}, expected {grant['size']}")
print("Downloaded", grant["name"], "bytes:", actual, "region:", grant["region"])
PYTHON
rm -f "$DOSYA_GRANT_FILE"
```

Stop after an unsuccessful grant instead of reading an older JSON file. The Python example requires Python **3.8 or later**. It writes to `dosya-download.bin`; choose a new local output name before rerunning if you need to preserve an earlier download.

A successful **200** grant contains exactly the needed fields: `url`, `size` in bytes, `name` and `region`. This route does not include `ok: true`. Fetch the `url` as returned, including all signing parameters, without attaching your Dosya API key to that storage request. The grant checks your rights; storage uses the URL's signature.

Check the downloaded size against `size`. For stronger integrity verification, compare a local SHA-256 with a trusted source digest: a matching filename or length alone cannot prove identical contents. Preserve the chosen file/version identity with the verification result.

## URL lifetime, versions and accounting

| Query parameter | Supported behavior |
| --- | --- |
| `ttl` | Integer seconds; defaults to **300 seconds (5 minutes)**. Positive values are capped at **3,600 seconds (1 hour)**. Missing, invalid or nonpositive values use 300. |
| `version` | A positive version number selects that stored revision; omit it for the current file. A nonexistent valid version yields **404** `Version not found`. |
| `region` | Optional expected region. A mismatch returns **404** `File not found`; it does not redirect the file to a new location. |
| `ut` | A valid unlock token for this user's fully locked file, when required. It does not bypass role or visibility checks. |

For example, `/api/files/FILE_ID/download-url?version=1&ttl=3600` requests the first version with a one-hour URL. The initial version of a never-edited file is supported even though no earlier-version entry exists. Use explicit positive integers: malformed `version` input is not a reliable way to select a revision.

Expiration matters for later Range requests as well as the first GET. For a long-running downloader or media player, request an adequate TTL up to the one-hour ceiling. If storage refuses an expired URL, obtain a fresh grant using a still-authorized credential; editing the old URL's expiry parameters invalidates its signature.

The applicable credential/plan download-byte allowance is charged using the selected version's full size **when the grant is issued**, even if you never fetch it or only read a range. Repeated grants can therefore consume the allowance multiple times. Cache a private unexpired grant within the intended job rather than requesting a new URL for every chunk. A download audit event records issuance; it is not proof that a recipient received every byte.

## Diagnose an unavailable download

| Status and error | Meaning and recovery |
| --- | --- |
| **401**, `Invalid or expired API key` | Replace the missing, revoked or expired token before requesting another grant. |
| **403**, `Access denied` | You are not a member of the file's workspace. |
| **403**, `This file is outside the folder you're confined to` | The membership's folder boundary excludes this file. |
| **403**, `You don't have download permission` | Ask an administrator for the download action; preview permission cannot substitute. |
| **403**, `This file is view-only and cannot be downloaded` | Respect its view-only lock; this endpoint will not provide downloadable bytes. |
| **403**, `This file is locked. Enter the lock password to access it.` | Obtain a valid file unlock token through the authorized unlock flow, then send `ut`. |
| **403**, `Invalid or expired unlock token. Please re-enter the password.` | Repeat authorized unlocking; the old token is no longer valid. |
| **404**, `File not found` | Check ID and optional region. Hidden content and locked ancestors deliberately use the same response as missing content. |
| **429** with `Retry-After` | Wait in seconds; a key's request or download-byte limit can refuse a grant before a URL exists. |
| **500**, `Download failed: …` | URL signing failed. Preserve the sanitized error and retry later; do not publish storage details or credentials in logs. |

A full-lock file can be unlocked with `POST /api/files/{file_id}/unlock` and JSON `{"password":"REPLACE_WITH_LOCK_PASSWORD"}`. The returned `unlock_token` is valid for **one hour**, belongs to the caller and does not remove the lock. That POST is a full-scope operation: a read-only REST key cannot call it. Use a separately authorized full-access credential for that password step or the signed-in app, then keep the token private. Avoid repeated password guessing; unlocking is throttled.

Access checks run before URL signing: workspace membership, files-page access, confinement, download permission, hidden/ancestor locks, the file's own lock, selected version and byte allowance. An expired grant does not erase the stored file, and downloading does not create a share link or notify a chosen recipient.

## Protect the downloaded copy and URL

Revoking the API key prevents new authenticated grants, but does not revoke an already issued storage URL; allow its short TTL to expire. Avoid putting signed URLs in screenshots, issue reports, query logs or analytics. Do not run commands with shell tracing while secrets are present.

The local file is now a separate copy under your control. Deleting or changing the cloud file does not remove that downloaded copy. Remove the temporary grant file after use and store downloaded data with the permissions its contents require.

## Expected result

Your local output has the selected file version and the grant’s reported size. The stored file remains in its workspace; the temporary URL grants access only for its lifetime, and a downloaded copy remains available independently of that lifetime.

## Related guides

- [REST API authentication and workspace listing](/developers/rest-api-quickstart)
- [Manage the credential used for download grants](/developers/api-key)
