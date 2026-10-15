---
{
  "articleId": "hc-api-upload-file",
  "locale": "en",
  "revision": 6,
  "title": "Upload a file with the REST API",
  "summary": "Initialize a REST upload, send single or resumable multipart bytes, verify the stored file, and recover safely from limits, conflicts and lost responses.",
  "category": "developers",
  "articleSlug": "api-upload-file",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Evidence: src/pages/developer/api.astro; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/api/src/pages/api/upload/init.ts; apps/api/src/pages/api/upload/init.force-multipart.unit.test.ts; apps/api/src/lib/upload/open.ts; apps/api/src/lib/upload/init-gates.ts; apps/api/src/lib/upload/extension-policy.ts; apps/api/src/lib/upload/body-pipeline.ts; apps/api/src/lib/upload/finalize-session.ts; apps/api/src/lib/upload/content-hash.ts; apps/api/src/lib/upload/stale-multiparts.ts; apps/api/src/lib/upload/stale-multiparts.unit.test.ts; apps/api/src/lib/usage/durable-object.ts; apps/api/src/lib/access/rest-scope.ts; apps/api/src/pages/api/upload/[sessionId].ts; apps/api/src/pages/api/upload/[sessionId].abort.unit.test.ts; apps/api/src/pages/api/upload/[sessionId].content-hash.unit.test.ts; apps/api/src/pages/api/upload/[sessionId]/status.ts; apps/api/src/pages/api/upload/[sessionId]/part/[partNumber].ts; apps/api/src/pages/api/upload/[sessionId]/part/[partNumber].capped-body.unit.test.ts; apps/api/src/pages/api/upload/[sessionId]/complete.ts; apps/api/src/pages/api/upload/[sessionId]/complete.response-integrity.unit.test.ts; apps/api/src/lib/validation-policy.generated.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/lib/versioned-write.unit.test.ts; apps/api/src/pages/api/files/index.ts; apps/api/src/lib/listing/folder-listing-core.ts; apps/api/src/lib/versioned-write.allowance.unit.test.ts; apps/api/src/lib/access/rest-scope.unit.test.ts; apps/api/src/middleware.ts; apps/api/src/lib/upload/begin.ts. Repository contracts and tests verified locally; no production requests or credentials used.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "REST API",
    "file upload",
    "cloud storage",
    "multipart upload",
    "API authentication"
  ]
}
---
Upload a file with the REST API by opening an upload session, sending its bytes and reading the final file response. An initialization response reserves a transfer; it does **not** mean a stored file is ready. Small files finish with one PUT; multipart uploads need a separate completion call.

## Credential and destination

Open [Profile → API keys](https://app.dosya.dev/profile/api), select **New API key**, choose **Upload only**, then open **Restrictions and expiry → Protocols**, choose **Only the ones I pick** and check **REST API**. Save the one-time token from **Generate key** privately. A workspace pin is supported; a folder anchor on an ordinary key is not supported over REST.

You need the destination's `workspace_id` and, for a subfolder, `folder_id`. An upload-only key can open and poll upload sessions but cannot list ordinary files or workspaces. Obtain IDs with a separately authorized read credential or from the signed-in app's requests. Do not temporarily broaden a production upload key just to discover its destination.

To discover IDs with an authorized read key, supply it privately as `DOSYA_READ_API_KEY` and request the workspace list:

```bash
curl --fail-with-body --silent --show-error \
  'https://api.dosya.dev/api/workspaces' \
  -H "Authorization: Bearer $DOSYA_READ_API_KEY"
```

Copy the intended workspace's `id` from `workspaces`. Then request `GET /api/files?workspace_id=THAT_ID` with the same read authorization to inspect its root listing; copy a destination folder's ID from the returned folders. To inspect a nested folder, also supply `folder_id`. Use those IDs with the upload credential; human-readable names are not API IDs.

Your workspace membership must permit **upload_files** and access to the upload page. The destination must lie inside any member confinement, be visible to that member and permit new content. A folder lock, file lock, extension rule, owner storage quota, member storage cap or workspace concurrency setting can stop the transfer.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-upload-file-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-upload-file-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" alt="Workflow for “Upload a file with the REST API”: create the upload, transfer bytes and complete it; verify that the returned file appears in the target folder." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Upload a file with the REST API”: create the upload, transfer bytes and complete it; verify that the returned file appears in the target folder. <a class="workflow-map-full" href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-upload-file-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-upload-file-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: upload a small test file with curl

Supply `DOSYA_API_KEY` privately, and replace the workspace placeholder with a real authorized ID. This example needs curl and Python 3. It creates a **12-byte** file and uploads it to the workspace root:

```bash
set -e
printf 'Hello dosya\n' > dosya-api-test.txt
DOSYA_WORKSPACE_ID='REPLACE_WITH_WORKSPACE_ID'
python3 - "$DOSYA_WORKSPACE_ID" <<'PYTHON' > upload-request.json
import json, sys
print(json.dumps({"workspace_id": sys.argv[1],
                  "file_name": "dosya-api-test.txt", "file_size": 12,
                  "mime_type": "text/plain"}))
PYTHON
curl --fail-with-body --silent --show-error \
  'https://api.dosya.dev/api/upload/init' \
  -H "Authorization: Bearer $DOSYA_API_KEY" \
  -H 'Content-Type: application/json' \
  --data-binary @upload-request.json -o upload-init.json
DOSYA_UPLOAD_PATH=$(python3 -c 'import json; print(json.load(open("upload-init.json"))["upload_url"])')
curl --fail-with-body --silent --show-error --request PUT \
  "https://api.dosya.dev$DOSYA_UPLOAD_PATH" \
  -H "Authorization: Bearer $DOSYA_API_KEY" \
  -H 'Content-Type: text/plain' \
  --data-binary @dosya-api-test.txt -o upload-result.json
python3 -m json.tool upload-result.json
```

Stop if initialization fails; do not run the PUT with a stale path from a previous attempt. Add `"folder_id": "REPLACE_WITH_FOLDER_ID"` to the initialization JSON for a known destination folder. Names are sanitized to remove path separators, traversal and control characters, then checked against the **255-character** filename limit. Send actual integer bytes in `file_size`, not MB or a formatted string.

Initialization returns **201** with `session_id`, `upload_url`, `workspace_id`, `file_name`, `file_size`, `mime_type`, `extension`, `region` and `resumable`. For a file of at most **52,428,800 bytes (50 MiB)**, `resumable` is null unless `force_multipart: true` was requested. Region comes from the workspace; a client-supplied region does not move the file.

The PUT's **201** response contains `ok: true` and `file`, including `id`, `name`, `size_bytes`, `version`, `region`, `content_hash`, `hash_verified` and `etag`. Check `size_bytes` against the local file and retain the ID. An upload-only key can verify completion through session status; use the signed-in file list or a read key to inspect the resulting file independently. Uploading alone does not create a public link or email a recipient.

## Multipart transfer and resume

Above 50 MiB, use the returned `resumable` values. Parts are **10,485,760 bytes (10 MiB)**, except the shorter final part. `total_parts` is the declared size divided by the part size, rounded up. A positive-size file may also request `force_multipart: true`; zero-byte forced multipart is rejected.

For a larger local file, build a fresh initialization body from its actual size instead of keeping the 12-byte test values. This Python command replaces `upload-request.json` using the already selected workspace; change `path` and add a known `folder_id` if needed:

```bash
python3 - "$DOSYA_WORKSPACE_ID" <<'PYTHON' > upload-request.json
import json, sys
from pathlib import Path
path = Path("REPLACE_WITH_LOCAL_FILE_PATH")
print(json.dumps({"workspace_id": sys.argv[1], "file_name": path.name,
                  "file_size": path.stat().st_size,
                  "mime_type": "application/octet-stream"}))
PYTHON
```

Run the earlier `POST /api/upload/init` with that body, save its response to `upload-init.json`, and use the same unchanged local file in the resumable program below. Keep the successful initialization JSON so an interrupted run can resume the same session. The following Python 3 program sends missing parts sequentially and completes them. Save it as `resume-upload.py`, set the private `DOSYA_API_KEY` environment variable, and run `python3 resume-upload.py PATH_TO_UNCHANGED_FILE upload-init.json`. It requires an initialization whose `resumable` is non-null:

```python
import json, os, sys
from pathlib import Path
from urllib.request import Request, urlopen

base = "https://api.dosya.dev"
init = json.loads(Path(sys.argv[2]).read_text())
r = init["resumable"]
if r is None:
    raise SystemExit("Use the single PUT flow for this session")
file = Path(sys.argv[1])
if file.stat().st_size != init["file_size"]:
    raise SystemExit("Local size changed; open a new upload session")
headers = {"Authorization": "Bearer " + os.environ["DOSYA_API_KEY"]}

def call(path, method="GET", body=None):
    req = Request(base + path, data=body, method=method,
                  headers={**headers, "Content-Type": "application/octet-stream"})
    with urlopen(req) as response:
        return json.load(response)

state = call(r["status_url"])
if state["status"] == "complete":
    print("Already complete; file:", state["file_id"])
    raise SystemExit(0)
if state["status"] == "failed":
    raise SystemExit("Session failed; open a fresh session and resend the file")
done = set(state["uploaded_parts"])
with file.open("rb") as stream:
    for number in range(1, r["total_parts"] + 1):
        chunk = stream.read(r["part_size"])
        if number not in done:
            call(r["part_upload_url"] + "/" + str(number), "PUT", chunk)
result = call(r["complete_url"], "POST", b"")
print("Stored file:", result["file"]["id"], "bytes:", result["file"]["size_bytes"])
```

Keep the local file unchanged; equal size does not guarantee equal content. A part number is one-based and must not exceed `total_parts`. Retrying an already-recorded part returns its saved ETag with `already_uploaded: true`; it does not replace that part's bytes. HTTP **413** with `Part exceeds the 10 MB part size` means the chunk is too large. Empty parts are refused as `Empty part data`.

A completion request is `POST` to `complete_url`; parts are already tracked by the server, so no client ETag array is required. A missing-part response says `Only N of M parts uploaded. Upload remaining parts before completing.` Poll status, send the missing numbers and complete again. Do not replay initialization as an idempotent operation: it opens another session, and no `Idempotency-Key` header protects this endpoint.

## Timeouts, conflicts and safe recovery

`GET /api/upload/{session_id}/status` returns `status`, `bytes_uploaded`, `uploaded_parts`, `part_size`, `total_parts`, `has_multipart` and `file_id`. `file_id` is null until completion. After losing a final response, check this endpoint first: a `complete` session and its ID let you recover without uploading another version.

A never-started pending session can be retired after **10 minutes** without activity. Started multipart sessions are eligible for retirement after **24 hours** without a landed write; cleanup timing is not an exact expiry promise. Restart a retired session using new initialization and resend all parts. An abandoned credential concurrency slot expires after **15 minutes** without renewal; part requests renew an active upload's slot.

| Error | Recovery |
| --- | --- |
| **403**, `You don't have upload permission in this workspace` | Ask the workspace administrator to grant the required action, or select an allowed destination. |
| **403**, `You don't have access to the upload page` | The role needs page access as well as upload permission for REST uploads. |
| **404**, `Destination folder not found` | Confirm the ID belongs to this workspace and is visible; do not substitute a folder name. |
| **403**, `folder_locked` | Resolve the destination lock with an authorized administrator before retrying. |
| **400**, `File exceeds the … GB size limit for this workspace` | Use a smaller file or have the administrator change that workspace rule. |
| **413** for a credential file-size limit | Replace the key only if a larger cap is authorized; the server also checks actual received bytes. |
| **400** with `error_code: concurrent_upload_limit` | Finish or cancel other transfers; inspect `max_concurrent_uploads` in the response. |
| **409**, `Upload session is already complete` | Poll status and recover the stored file ID. |
| **429** or retryable **503** | Honor `Retry-After`; retain multipart state and retry missing parts rather than opening parallel replacement sessions. |

Storage, size/extension, per-member and concurrent-upload checks precede destination/version validation. Completion rechecks applicable limits against received bytes, so passing initialization is not a promise that finalization will succeed.

A same-name upload may become a new version of an existing file when your access permits it; uploading is not always create-only. For a deliberate replacement, send `file_id` and the last-seen `expected_version` at initialization. A stale version produces **409** `version_conflict`; refresh and decide whether to replace the newer data. Use a unique test filename to avoid accidental version changes. The workspace’s max_versions retention rule can permanently prune old version objects after a successful replacement; the default is **10 retained version entries** when that setting is absent. Save any older revision you need before replacing a file, rather than assuming every upload preserves unlimited history.

To abandon an unfinished session, send `DELETE /api/upload/{session_id}` with the same authorization. It aborts partial storage and retires the session; absent or failed sessions return `ok: true` with `already_gone: true`. Completed sessions return **409** and are not deleted by this cancellation endpoint. Cancellation discards unsaved transfer progress; it does not undo a completed file or version.

For the single PUT path, optionally send `X-Dosya-Sha256` containing exactly 64 hex characters of the expected SHA-256. A matching digest sets `hash_verified: true`; mismatch is **400** `hash_mismatch`, with expected and received hashes. Without that header, false means no client digest was supplied, not failed verification. Multipart completion does not provide this same one-shot hash guarantee; verify downloaded bytes separately when integrity is essential.

Keep tokens out of debug traces and store session metadata privately. A lost token cannot be recovered from its masked list row. Revoke compromised credentials; do not send upload authorization headers to support.

## Expected result

A completed session names a durable file in the selected workspace and folder. Its returned byte count reflects the received body; an existing same-name target can instead have a new version. Confirm the ID, size and version before marking the transfer successful.

## Related guides

- [Create a scoped API credential](/developers/api-key)
- [Verify file bytes by downloading them](/developers/api-download-file)
