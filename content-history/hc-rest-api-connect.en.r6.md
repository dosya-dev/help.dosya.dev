---
{
  "articleId": "hc-rest-api-connect",
  "locale": "en",
  "revision": 6,
  "title": "Cloud storage REST API quickstart",
  "summary": "Create a read-only REST key, list workspaces and files with curl, and diagnose authentication, access and retry responses without changing stored data.",
  "category": "developers",
  "articleSlug": "rest-api-quickstart",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Evidence: src/pages/developer/api.astro; apps/api/src/middleware.ts; apps/api/src/lib/api-key-auth.ts; apps/api/src/lib/api-key-auth.unit.test.ts; apps/api/src/lib/api-key-limits.ts; apps/api/src/pages/api/me/api-keys/index.ts; apps/api/src/lib/auth-guards.ts; apps/api/src/lib/access/rest-scope.ts; apps/api/src/lib/access/conditions.ts; apps/api/src/pages/api/workspaces/index.ts; apps/api/src/pages/api/files/index.ts; apps/api/src/lib/paging.ts; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/api/src/pages/api/files/[id]/download-url.ts; apps/api/src/lib/listing/folder-listing-core.ts; apps/api/src/lib/access/rest-scope.unit.test.ts; apps/api/src/pages/api/me/api-keys/index.refusal.unit.test.ts. Repository contracts and tests verified locally; no production requests or credentials used.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes",
    "hc-api-key-revoke"
  ],
  "keywords": [
    "REST API",
    "API quickstart",
    "Bearer token",
    "API integration",
    "HTTP request",
    "cloud storage"
  ]
}
---
Use the cloud storage REST API at `https://api.dosya.dev/api` to list your workspaces, select a destination and read its files. This quickstart makes authenticated read requests without changing stored files. The API uses `/api`; do not add `/v1` or `/v2`.

## Create the test credential

1. Sign in at [Profile → API keys](https://app.dosya.dev/profile/api) and select **New API key**.
2. Enter a recognizable label in **What is it for?** and choose **Read only** under **What can it do?**
3. Expand **Restrictions and expiry**. Under **Protocols**, choose **Only the ones I pick** and check **REST API**. Select the intended **Workspace** if this integration should reach only one workspace. Leave **Folder** unset: ordinary folder-anchored keys are refused over REST.
4. Choose **Expires in 30 days**, check the summary, then select **Generate key**. Copy the full `dos_` token from the **is ready** dialog before selecting **Done**; the key list cannot reveal it afterward.

A free account can hold three API keys; the account-wide ceiling is 20 on other plans. Existing expired keys count toward those totals. Key permissions narrow your account's access; they do not grant workspace membership or a role permission you lack.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/rest-api-quickstart-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp" alt="Workflow for “Connect a small integration to the REST API”: store the secret in an environment variable or secret manager; test one known denied operation, then revoke the disposable key." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Connect a small integration to the REST API”: store the secret in an environment variable or secret manager; test one known denied operation, then revoke the disposable key. <a class="workflow-map-full" href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp" data-light-href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/rest-api-quickstart-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: send the first request

You need a shell, curl and Python 3 for the examples. Set `DOSYA_API_KEY` through your secret manager or an interactive prompt; never replace the variable with a real token in a saved command. Here is an interactive option for Bash:

```bash
read -r -s -p 'API key: ' DOSYA_API_KEY
printf '\n'
export DOSYA_API_KEY
curl --fail-with-body --silent --show-error \
  'https://api.dosya.dev/api/workspaces' \
  -H "Authorization: Bearer $DOSYA_API_KEY" \
  -o workspaces.json
python3 -c 'import json; d=json.load(open("workspaces.json")); print([(w["id"],w["name"]) for w in d["workspaces"]])'
```

A successful request returns HTTP **200** with `ok: true` and a `workspaces` array. Use a returned workspace ID, not its display name. A workspace-pinned key sees only its pinned workspace. An empty array is not evidence that the whole account has no workspaces: check the key's reach and your current membership.

Read files from one workspace's root folder:

```bash
DOSYA_WORKSPACE_ID='REPLACE_WITH_RETURNED_WORKSPACE_ID'
curl --fail-with-body --silent --show-error --get \
  'https://api.dosya.dev/api/files' \
  -H "Authorization: Bearer $DOSYA_API_KEY" \
  --data-urlencode "workspace_id=$DOSYA_WORKSPACE_ID" \
  --data-urlencode 'page=1' --data-urlencode 'per_page=100' \
  -o files.json
python3 -m json.tool files.json
```

The file listing defaults to 100 items per page and accepts `per_page` from 10 to 500. Supply `folder_id` to list a known subfolder. File IDs returned here are the values used by metadata and download routes. Your workspace role must allow the files page; hidden content and folder confinement can narrow the listing.

## Check failures before adding writes

| Response | What to change |
| --- | --- |
| **401**, `Invalid or expired API key` | Use the complete token, check expiry and revocation, and keep the exact `Authorization: Bearer …` header. |
| **403**, `This API key is not permitted to use the api surface` | Include REST API in the credential's protocol selection. |
| **403**, `This API key is anchored at a folder and can only be used over WebDAV or the S3 gateway` | Generate a workspace-pinned REST key without a folder anchor. |
| **403**, `This API key is restricted to specific source addresses` | Send from an allowed address; do not spoof forwarding headers. |
| **403**, `This API key is being used outside its allowed hours` | Check the selected timezone, weekdays and weekly window. |
| **429** with `Retry-After` | Wait the indicated number of seconds; slow concurrent requests rather than continuously retrying. |
| **503**, `Service temporarily unavailable` | Keep the credential and retry after the response's five-second delay. This authentication lookup failure is not a reason to replace a key. |

Authentication is followed by protocol, address/time, folder-anchor, scope and workspace-pin checks before the key's request counter is charged. A **Read only** key can list and download, but an attempted write is refused with a message naming its scope, method and path. Do not test this boundary against valuable data using a full-access key.

HTTP status and the JSON `error` identify a failure. Many JSON responses include `ok`, but the download-URL endpoint returns `url`, `size`, `name` and `region` without an `ok` field; validate the endpoint's actual response instead of assuming one universal shape. Retain status, error and any request identifier provided, with the authorization header redacted.

## Expected result and safe test cleanup

Compare returned workspace IDs and filenames with the signed-in app. Listing does not upload, delete or create a share link, and no recipient receives a file from these requests. Save only metadata you are allowed to retain.

Return to **Profile → API keys**, expand the test key, choose **Revoke** and confirm **Revoke** again when the test is finished. Revocation cannot be undone; integrations using that credential stop authenticating. Key creation, listing and deletion by ID require a signed-in session, so a bearer key cannot mint or administer sibling keys. For production, use separate credentials for read, upload and administrative work and recover uncertain write outcomes before replaying a request.

## Related guides

- [Create and manage API keys](/developers/api-key)
- [Upload file bytes and resume multipart transfers](/developers/api-upload-file)
- [Download through a temporary signed URL](/developers/api-download-file)
- [Register and verify a webhook receiver](/developers/webhook-create)
