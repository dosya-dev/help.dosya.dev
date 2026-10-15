---
{
  "articleId": "hc-s3-fix-signature-time-error",
  "locale": "en",
  "revision": 5,
  "title": "Fix an S3 signature time error",
  "summary": "Diagnose S3 signature mismatch versus presigned expiry, inspect the signing machine’s clock and retry a newly signed read-only Dosya request.",
  "category": "integrations",
  "articleSlug": "s3-fix-signature-time-error",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed 2026-10-14 against local repository implementation and tests. Local evidence: apps/api/src/lib/s3/auth.ts; apps/api/src/lib/s3/auth.presign-expiry.unit.test.ts; apps/api/src/lib/api-key-auth.ts; apps/api/src/pages/s3/[...path].ts; apps/api/src/lib/s3/xml.ts; apps/api/src/lib/s3/operations/list-objects.ts; apps/web/src/pages/integrations/s3.tsx; apps/web/src/components/api-keys/api-keys-section.tsx; apps/api/src/pages/api/me/api-keys/s3-credentials.ts. Code review confirms no RequestTimeTooSkewed code or normal header/future-presign skew tolerance is implemented. Official references: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-troubleshooting.html; https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html; https://docs.aws.amazon.com/cli/latest/topic/s3-config.html; https://support.apple.com/guide/mac-help/set-the-date-and-time-mchlp2996/mac; https://learn.microsoft.com/windows-server/networking/windows-time-service/windows-time-service-tools-and-settings; https://www.freedesktop.org/software/systemd/man/latest/timedatectl.html. External commands are source-derived and checked on temporary local fixtures where reported; no production credentials or remote writes used. Existing captures retain their original verification scope. Supplemental official sources checked: https://github.com/systemd/systemd/blob/main/man/timedatectl.xml; https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html. Review correction: replaced the earlier illustration with a source-derived process diagram following the current guide, inspected both 1200x675 themes with no text clipping and narrow-page/full-size behavior; diagrams show command stages, not an invented app UI.",
  "related": [
    "hc-s3-connect",
    "hc-s3-troubleshoot"
  ],
  "keywords": [
    "fix S3 RequestTimeTooSkewed error",
    "SignatureDoesNotMatch",
    "presigned URL expired",
    "S3 clock signing"
  ]
}
---
Read the S3 response's exact **Code** and **Message** before changing your clock or credentials. `RequestTimeTooSkewed`, `SignatureDoesNotMatch` and an expired presigned URL describe different failures. The current Dosya gateway emits the latter two cases described below; it does **not** implement a `RequestTimeTooSkewed` response or a documented normal-request clock-skew tolerance.

<figure class="help-screenshot"><a class="process-diagram-link" href="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14-dark.webp"><picture class="process-diagram"><source data-theme-source="dark" media="not all" srcset="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14.webp" alt="Process diagram: distinguish signature mismatch from presigned expiry, check the actual signer, create a fresh request and test a read-only bucket list." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Process diagram: distinguish signature mismatch from presigned expiry, check the actual signer, create a fresh request and test a read-only bucket list. <a class="process-diagram-full" href="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14.webp" data-light-href="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/s3-fix-signature-time-error-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start: identify the actual error

Save the status and redacted XML Code/Message from one failed operation, plus the client version and actual endpoint host/path. Dosya authentication XML includes **RequestId** (currently `0`), not a guaranteed diagnostic server-time or maximum-skew field. Remove Authorization, S3 secrets and the entire presigned query string from anything you share.

| Response | Meaning in the current Dosya implementation |
| --- | --- |
| 403 `SignatureDoesNotMatch` / `The request signature does not match` | The recomputed SigV4 signature differs; investigate secret pairing or changed signed data. This message alone does not prove a wrong clock. |
| 403 `AccessDenied` / `Request has expired` | A presigned request is past its signed timestamp plus declared expiry. |
| 400 `InvalidRequest` / `X-Amz-Expires is required for presigned requests` | The query-auth request omitted a required validity duration. |
| 400 `InvalidRequest` / `X-Amz-Expires must be an integer between 1 and 604800 seconds` | Its declared duration is invalid; regenerate rather than editing it. |
| 400 `InvalidRequest` / `Invalid X-Amz-Date` | The presigned date is not in the parser's `YYYYMMDDTHHMMSSZ` format. |
| 403 `AccessDenied` / `Missing X-Amz-Date` | The signed header request has no timestamp. |
| 403 `InvalidAccessKeyId` | Its access ID is invalid, revoked, expired or otherwise unavailable; synchronizing time will not restore the key. |

The verified presign duration range is **1–604,800 seconds (seven days)**. The server accepts the exact expiry boundary and refuses any instant after it. The current header-auth code has no general “±5/15 minutes” check, and the presign code supplies no future-date skew window. Do not rely on an old header signature remaining usable or assume an AWS tolerance applies here; generate a fresh request for every retry.

If your client reports **RequestTimeTooSkewed**, check whether the network request actually went to `api.dosya.dev/s3`, rather than AWS, a different service or a proxy. A client's displayed explanation may summarize a different underlying response. AWS's [troubleshooting guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-troubleshooting.html) explains clock-related AWS signing failures; it does not establish a Dosya timing policy.

## Steps: check time on the machine that signs

1. Pause the failing automated job so it stops resending the same signed payload. Note whether signing happens on your computer, a container, a build runner or an application server; correcting a browser clock cannot repair a signature created elsewhere.
2. Inspect that system's UTC time. The commands below only display time/status; they do not change the machine:

```sh
# macOS or Linux
 date -u '+%Y-%m-%dT%H:%M:%SZ'
# Linux systems that use systemd (not every container has it)
 timedatectl status
```

```powershell
# Windows PowerShell
(Get-Date).ToUniversalTime().ToString('yyyy-MM-ddTHH:mm:ssZ')
w32tm /query /status
```

3. Compare with a trusted time source used by your organization. UTC represents the same instant across time zones; changing the display zone alone does not synchronize a clock. A server's HTTP Date header can help spot gross differences but is not an authoritative time-synchronization service, and proxies/caches can make it misleading.
4. If time is wrong, use the operating system's supported automatic time setting or your administrator's time service. On macOS, Date & Time settings expose automatic date/time; Windows Date & time provides its time synchronization controls; on systemd Linux check the reported NTP state. Managed devices, VMs and containers may require the host administrator to repair synchronization. Confirm the UTC output again after a change.

These commands may need a service or permission on your platform. A failed `timedatectl` or `w32tm` command is not evidence that Dosya credentials are invalid. Keep the signer synchronized without disabling HTTPS verification or broadening key permissions.

## Steps: issue a newly signed, read-only test

Use a correctly configured AWS CLI v2 profile, here named `dosya-help-check`. It must hold the **S3** access ID/secret pair, with `us-east-1` and `s3.addressing_style` set to `path`. Obtain the pair via **Profile → API keys**, expand an S3-enabled key, and select **S3 credentials → Enable**; the secret is available only in that generation dialog. Use a **Read only** key for diagnosis, pinned to your workspace with S3 gateway allowed. Your workspace role must also permit S3 and listing.

Configure the profile interactively with `aws configure --profile dosya-help-check` rather than passing the secret as a shell argument. Never overwrite an existing unrelated profile. Set path style with `aws configure set s3.addressing_style path --profile dosya-help-check`. Replace `ws_example` below with **Bucket** from **Integrations → S3**:

```sh
aws --profile dosya-help-check --region us-east-1 --endpoint-url https://api.dosya.dev/s3 s3api list-objects-v2 --bucket ws_example --max-keys 1 --no-paginate
```

Launching this command signs a new request; clicking retry on a stored presigned URL does not. Expect one listing page, possibly with no Contents for an empty location, and CLI exit zero. A read-only list neither overwrites nor deletes files. If the result changes to a protocol, role, IP, active-hours or usage refusal, the time/signature symptom is resolved but access setup still needs its own correction. The key cannot exceed your role; no plan upgrade is required just to fix signing, though key counts and normal allowance rules still apply.

## Presigned links, proxies and signature mismatch

**Expired URL.** Ask the trusted application that generated the URL to create another after its signer has correct time. Do not extend `X-Amz-Expires`, rewrite `X-Amz-Date` or strip parameters by hand: those values participate in the signature. A presigned URL is a credential-bearing link; share it only with its intended recipient and never paste it into public diagnostics. Regeneration provides a new URL, not a permanent public Dosya share. Revoking its parent credential also removes access.

**Clock is correct but SignatureDoesNotMatch persists.** Match the `DOSYA…` ID to the secret generated for that exact key. Confirm the endpoint includes `/s3`, path addressing is enabled, and the signed method, object path, encoded query, Host header and payload-hash header arrive unchanged. A proxy that rewrites any signed component can invalidate the signature. Check which profile the actual failing job selects; commands without the explicit `--profile` option can resolve environment credentials instead. Inspect the intended sources with `aws configure list --profile dosya-help-check` privately.

**Cached or replayed request.** Disable the job's reuse of stored Authorization headers or presigned URLs and let its SDK sign each request at send time. Merely resending identical bytes keeps the old expiry. If testing direct access avoids a proxy, compare behavior using a fresh signature on each route rather than carrying one signature between different hosts.

**Secret lost or exposed.** S3 **Active · show** cannot recover the secret. Create replacement credentials, update the affected signer and revoke the compromised key after validating the replacement. Revocation is irreversible and affects every client using that key/pair, while leaving cloud files intact. Do not rotate other clients' keys merely because one request was malformed.

## Expected result

A freshly generated read-only request succeeds against the intended Dosya bucket, or returns an exact access refusal that can be diagnosed separately. No data mutation was needed to establish that signing works. Record the corrected signer, endpoint and timestamp privately so the scheduled job uses the same configuration next time.

## Related guides

- [AWS CLI profile and transfer test](/integrations/s3-aws-cli-connect)
- [S3 connection fields and permission boundary](/integrations/s3-connect)
- [Troubleshoot other S3 access failures](/troubleshooting/s3)
