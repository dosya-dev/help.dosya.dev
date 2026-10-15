---
{
  "articleId": "hc-sftp-host-key-warning",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot an SFTP host-key warning",
  "summary": "Pause at an SFTP host-key prompt, verify the server fingerprint through a trusted Dosya channel, and connect without bypassing SSH identity checks.",
  "category": "integrations",
  "articleSlug": "sftp-host-key-warning",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/lib/integrations.ts, apps/ftp-server/src/sftp.ts, apps/ftp-server/src/config.ts, apps/help/src/content/articles/sftp-connect.md, and apps/status/src/probes/sftp.ts. No certified production fingerprint or live host-key prompt was available locally.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-restricted-key"
  ],
  "keywords": [
    "sftp host key warning",
    "SFTP client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
An SSH host-key warning concerns the server's identity, not your Dosya password or API key. Stop before authentication when the prompt is unexpected, names another host or port, or reports that a saved key changed. Rotating the `dos_…` credential cannot resolve a host-key mismatch.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp" alt="Four-step workflow for cancelling at the host-key warning, confirming the Dosya endpoint, obtaining the trusted fingerprint separately, and accepting only an exact match." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for cancelling at the host-key warning, confirming the Dosya endpoint, obtaining the trusted fingerprint separately, and accepting only an exact match. <a class="workflow-map-full" href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-host-key-warning-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

The production connection target in the app is `sftp.dosya.dev` on port `2222`. The server loads its host key at startup, but this repository does not contain a certified production fingerprint that this guide can safely publish. `ssh-keyscan` can collect the key presented on the same network path; by itself it does not prove that key belongs to Dosya.

## Steps

1. Cancel the connection without accepting the displayed key and without entering the API-key password. Preserve the exact hostname, port, key algorithm, fingerprint, client name, and time of the prompt.
2. Confirm the saved site targets `sftp.dosya.dev:2222`. A warning for port 22, a raw IP address, a proxy hostname, FTP, or FTPS is not the documented Dosya SFTP endpoint.
3. Determine whether this is a first connection, a new device with no trust record, or **REMOTE HOST IDENTIFICATION HAS CHANGED!** for an existing record. Treat the changed-key case as higher risk.
4. Obtain the current fingerprint from Dosya support or an administrator through a separate trusted channel. Compare every fingerprint character and the key type; do not rely on the warning dialog as its own confirmation source.
5. If the values match, accept the key in the original client and continue with password authentication. If they differ or no trusted value is available, keep the connection closed and send the captured non-secret details to support.
6. After acceptance, connect with the exact account email and dedicated API key, list the intended workspace, and perform a read-only test. Never enable a permanent “accept any host key” or `StrictHostKeyChecking=no` workaround.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP overview showing the port 2222 terminal command whose hostname and port must match a host-key prompt." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP overview showing the port 2222 terminal command whose hostname and port must match a host-key prompt. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A first-use prompt can be normal because the client has no stored trust record. A changed-key warning can also follow a legitimate server rotation, but deleting the old record before independent verification removes the protection the warning provides. Network interception and connecting to the wrong saved host present the same symptom, so the prompt alone cannot distinguish them.

Do not paste API keys, saved-host files, or full debug logs into a public support request. Host, port, algorithm, fingerprint, timestamp, and client version are sufficient for identity verification.

## Expected result

The client stores a host key only after an independently supplied fingerprint matches the displayed value, then authenticates to `sftp.dosya.dev:2222`. Any mismatch leaves the session closed and credentials unsent.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Connect with SFTP using a restricted key](/integrations/sftp-restricted-key)
