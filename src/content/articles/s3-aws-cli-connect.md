---
{
  "articleId": "hc-s3-aws-cli-connect",
  "locale": "en",
  "revision": 5,
  "title": "Connect the AWS CLI to Dosya S3",
  "summary": "Configure an isolated AWS CLI profile for Dosya’s path-style S3 endpoint, then list, upload, download, compare and clean up one sample safely.",
  "category": "integrations",
  "articleSlug": "s3-aws-cli-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 against local repository implementation and tests. Local evidence: apps/web/src/pages/integrations/s3.tsx; apps/web/src/lib/integrations.ts; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/web/src/components/api-keys/api-keys-section.tsx; apps/api/src/pages/api/me/api-keys/s3-credentials.ts; apps/api/src/lib/api-key-limits.ts; apps/api/src/pages/s3/[...path].ts; apps/api/src/lib/s3/auth.ts; apps/api/src/lib/s3/router.ts; apps/api/src/lib/s3/operations/list-objects.ts; apps/api/src/lib/s3/operations/put-object.ts; apps/api/src/lib/s3/operations/head-object.ts; apps/api/src/lib/s3/operations/get-object.ts; apps/api/src/lib/s3/operations/delete-object.ts; apps/api/src/lib/s3/operations/subresources.ts; apps/api/src/lib/versioned-write.ts; apps/api/src/pages/api/internal/files/trim-versions.ts; apps/api/src/pages/api/internal/files/purge-trash.ts; apps/api/src/lib/usage/plan-limits.ts; src/pages/developer/s3.astro. Official references: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html; https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html; https://docs.aws.amazon.com/cli/latest/topic/s3-config.html; https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-options.html; https://docs.aws.amazon.com/cli/latest/reference/s3api/list-objects-v2.html; https://docs.aws.amazon.com/cli/latest/reference/s3api/put-object.html; https://docs.aws.amazon.com/cli/latest/reference/s3api/get-object.html; https://docs.aws.amazon.com/cli/latest/userguide/cli-usage-returncodes.html. External commands are source-derived and checked on temporary local fixtures where reported; no production credentials or remote writes used. Existing captures retain their original verification scope. Supplemental official source checked: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html. Review correction: replaced the earlier illustration with a source-derived process diagram following the current guide, inspected both 1200x675 themes with no text clipping and narrow-page/full-size behavior; diagrams show command stages, not an invented app UI. Throttle-response evidence: apps/api/src/lib/rate-limit.ts; apps/api/src/lib/usage/enforce.ts.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "AWS CLI S3 compatible endpoint",
    "aws profile",
    "path-style addressing",
    "Dosya S3 upload"
  ]
}
---
Use a dedicated named AWS CLI profile to test Dosya S3 without changing your normal AWS credentials. This walkthrough lists one workspace, uploads a uniquely named text file, downloads it and checks the bytes. It uses direct `s3api` calls so the small-file test is easy to inspect.

<figure class="help-screenshot"><a class="process-diagram-link" href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14-dark.webp"><picture class="process-diagram"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp" alt="Process diagram: configure a dedicated AWS profile, list the workspace bucket, upload and inspect a new sample, then download and compare its bytes." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Process diagram: configure a dedicated AWS profile, list the workspace bucket, upload and inspect a new sample, then download and compare its bytes. <a class="process-diagram-full" href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-aws-cli-connect-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

Install AWS CLI v2 using [AWS's platform installation instructions](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), then run `aws --version`. The shell examples below use macOS/Linux POSIX syntax; the `aws` commands also run in PowerShell, but replace the local `printf`, `cmp` and `$?` checks with its equivalents.

In the intended Dosya workspace, open **Integrations → S3** and copy the **Bucket** ID. The endpoint is `https://api.dosya.dev/s3`, region `us-east-1`, with **path** addressing. There is no WebDAV `All/` prefix. For a folder-anchored key, keys start below the anchor: use `aws-check.txt` to write inside the anchor, not `AnchorName/aws-check.txt`.

Prepare credentials through **Profile → API keys → New API key**: choose **Full access** for all three tests, the intended **Workspace**, and **S3 gateway** under **Restrictions and expiry → Protocols → Only the ones I pick**. Generate it, then expand the key row and select **S3 credentials → Enable**. Copy the **Access key ID** and **Secret access key** from that dialog. The `dos_…` token is not the AWS CLI secret. The S3 secret is shown only when generated; **Active · show** cannot retrieve it afterward. If lost, replace the key/pair, migrate clients, then revoke the old key.

Your role must allow S3 plus file listing, upload and download. A new nested prefix also needs folder creation. Free-plan use is permitted within allowances; a free account can have three API keys, with a global maximum of 20. Explicit access/usage restrictions remain effective on every command.

## Steps: configure one private profile

1. **Choose a profile that does not already exist.** These instructions use `dosya-help-check`. Check `aws configure list-profiles` first. Use a different name consistently if that profile belongs to an existing connection.
2. **Enter the pair interactively.** Run:

```sh
aws configure --profile dosya-help-check
```

At the prompts, enter the generated S3 access ID, its S3 secret, `us-east-1` and `json`. Do not paste credentials as command arguments or commit the resulting files. The prompt avoids embedding the secret in shell command history, but do not run it in a recorded terminal session: AWS CLI configuration is not a promise of a masked prompt.

AWS CLI stores the pair in `~/.aws/credentials` and settings in `~/.aws/config` by default (under your user home on Windows too). They are local files, not an encrypted password vault. On a private Unix account, restrict those files after configuring:

```sh
chmod 600 ~/.aws/credentials ~/.aws/config
```

3. **Set S3 path addressing for this profile.** This changes only its config:

```sh
aws configure set s3.addressing_style path --profile dosya-help-check
aws configure get region --profile dosya-help-check
aws configure get s3.addressing_style --profile dosya-help-check
```

Expect `us-east-1` and `path`. Every remote command below supplies `--endpoint-url` explicitly; omitting it can send the request to AWS instead of Dosya. Do not run an STS identity command to validate these credentials: Dosya provides an S3 gateway, not AWS STS.

4. **Check the selected sources privately.** Run `aws configure list --profile dosya-help-check`: for this explicit named-profile walkthrough, the credentials should come from the shared credentials file and the region from its config. Commands that omit `--profile` use a different resolution path and can select environment credentials instead; keep the profile option on every test. Although the listing masks most credential characters, its output still belongs in private diagnostics. See [AWS credential precedence](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

## Steps: list, upload and download a sample

Replace `ws_example` everywhere with the copied workspace ID, and replace `aws-check-20261014-unique.txt` with a new name you have confirmed is unused. Run from a disposable local working folder. Do not choose an existing important key: PUT can replace its current content with a new Dosya version.

```sh
aws --profile dosya-help-check --region us-east-1 --endpoint-url https://api.dosya.dev/s3 s3api list-objects-v2 --bucket ws_example --max-keys 10 --no-paginate
printf 'Dosya AWS CLI connection check\n' > ./aws-check-20261014-unique.txt
aws --profile dosya-help-check --region us-east-1 --endpoint-url https://api.dosya.dev/s3 s3api put-object --bucket ws_example --key aws-check-20261014-unique.txt --body ./aws-check-20261014-unique.txt
aws --profile dosya-help-check --region us-east-1 --endpoint-url https://api.dosya.dev/s3 s3api head-object --bucket ws_example --key aws-check-20261014-unique.txt
aws --profile dosya-help-check --region us-east-1 --endpoint-url https://api.dosya.dev/s3 s3api get-object --bucket ws_example --key aws-check-20261014-unique.txt ./aws-check-downloaded.txt
cmp ./aws-check-20261014-unique.txt ./aws-check-downloaded.txt
```

`--max-keys 10 --no-paginate` requests one small listing page; an empty authorized root can legitimately have no Contents. It does not establish that no other pages exist. Normal larger walks must follow pagination; the gateway caps one page at 1,000 entries.

PUT normally produces JSON containing **ETag**; HEAD includes **ContentLength**; GET writes the destination file and prints its response metadata. The sample line above is 31 bytes including the newline. Choose a new download filename too, since an existing local output file can be overwritten. `cmp` prints nothing and exits zero for identical files. On PowerShell, compare `(Get-FileHash ./source.txt).Hash` with `(Get-FileHash ./download.txt).Hash`, and inspect `$LASTEXITCODE` immediately after each native AWS command. On POSIX shells use `echo $?` immediately; a later command replaces that status.

In Dosya **Files**, confirm the same filename and size in the selected workspace (or key anchor). A zero CLI exit code and matching downloaded bytes are the connection test; ETags for multipart files are not ordinary MD5 hashes. This procedure grants no recipient a public link.

## Expected result and deliberate cleanup

You have a dedicated profile whose direct bucket listing succeeds and whose sample survives a byte-for-byte download check. Keep the profile only if you intend to use it, with the credential files private.

To remove **only this known sample**, review the bucket/key again, then run:

```sh
aws --profile dosya-help-check --region us-east-1 --endpoint-url https://api.dosya.dev/s3 s3api delete-object --bucket ws_example --key aws-check-20261014-unique.txt
```

DeleteObject returns 204 even for an absent key, so do not treat a quiet result as evidence the object previously existed. A real deletion sends the file to Dosya Trash and revokes its shares; it does not immediately free storage. Trash purge follows the owner's effective seven-day free or 30-day paid retention. Permanent purge destroys the recoverable bytes.

To retire the connection, use **Revoke** on its dedicated API key. That is irreversible and also disables its S3 pair, without removing your cloud data. Remove just the `[dosya-help-check]` block from the local credentials file and `[profile dosya-help-check]` block from config after checking you are editing the intended profile; do not delete shared AWS configuration files. Erase local samples only after any inspection you still need.

## Troubleshooting

**AccessDenied while listing or downloading.** Upload only is insufficient. Check key scope, S3 protocol, workspace pin, member role, address and active-hour restrictions. S3 root listing uses ordinary file paths rather than WebDAV collection names.

**SignatureDoesNotMatch.** Verify that the access ID and secret came from the same S3 dialog, and that the client signs the exact endpoint, region and path actually sent. A proxy rewrite or a different profile selected by a wrapper can make a correctly saved profile fail.

**Usage or front-door throttling.** A 429 XML **SlowDown** comes from key/role usage enforcement: read its Message and honor Retry-After if supplied. Reduce parallel transfers for a concurrency refusal; retries cannot replenish byte allowance. The separate front-door throttle returns 429 JSON **{"ok":false,"error":"Too many requests"}**, with Retry-After, after its 600 requests/minute per-user or 1,200/minute per-IP budget is exhausted. Wait for that interval and stagger request-heavy jobs. Workspace storage/file policies and daily egress remain separate limits.

**A backup client requires bucket versioning or Object Lock.** Those AWS configuration features are unsupported here; configuring path style does not provide them. Matching-name uploads use Dosya history (default 10 versions, with pruning and free-owner seven-day aged-version retention), not AWS S3 version IDs. Keep independent originals.

Never put full credentials, signed request URLs or unredacted `--debug` output into a public issue. For clock and presign-specific refusals, see the dedicated signature-time guide.

## Related guides

- [S3 settings, operation support and permission errors](/integrations/s3-connect)
- [S3 request signing and expiry recovery](/integrations/s3-fix-signature-time-error)
- [AWS CLI configuration reference](https://docs.aws.amazon.com/cli/latest/topic/s3-config.html)
