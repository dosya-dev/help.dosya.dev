---
{
  "articleId": "hc-sftp-disconnect-safely",
  "locale": "en",
  "revision": 5,
  "title": "Disconnect an SFTP client safely",
  "summary": "Finish every queued SFTP transfer, wait for the final close response, disconnect the session, and remove or revoke the saved API key safely.",
  "category": "integrations",
  "articleSlug": "sftp-disconnect-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/ftp-server/src/sftp.ts, apps/ftp-server/src/api.ts, apps/ftp-server/src/access.ts, apps/web/src/components/api-keys/api-keys-section.tsx, and apps/help/src/content/articles/sftp-connect.md. No production SFTP session was disconnected or credential revoked.",
  "related": [
    "hc-sftp-connect",
    "hc-sftp-troubleshoot"
  ],
  "keywords": [
    "sftp disconnect safely",
    "SFTP connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A transfer is not safely finished when its progress meter first reaches 100%. Dosya buffers SFTP uploads until the client closes the file handle; only a successful CLOSE response confirms that the cloud upload committed. Closing the connection earlier can leave no remote file, while an interrupted download can leave an incomplete local copy.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp" alt="Four-step workflow for waiting for queued transfers to close, disconnecting open SFTP handles, removing the saved device credential, and revoking the dedicated key." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for waiting for queued transfers to close, disconnecting open SFTP handles, removing the saved device credential, and revoking the dedicated key. <a class="workflow-map-full" href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/sftp-disconnect-safely-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Before disconnecting, identify whether the queue contains uploads, downloads, or only completed entries. An upload can still fail at CLOSE because workspace access changed, storage or policy rejected the file, or the service returned an API error. A download is complete only when the local client has written the expected byte count.

## Steps

1. Stop adding new work to the SFTP queue, then wait until every required transfer leaves its active or retrying state. Keep any failure message that names `close`, `read`, `write`, status 2, status 3, or status 4.
2. For an upload, refresh or relist the destination and compare the remote name and size with the local source. For a download, compare the local size or calculate a local checksum against a known-good copy.
3. Close open remote editors and file handles before ending the session. In an OpenSSH prompt use `bye`; in a graphical client choose its normal disconnect command instead of terminating the process.
4. Confirm the client shows no queued transfer and no live Dosya session. If it still reconnects automatically, disable that saved site's background synchronization or remove the site from the client's startup list.
5. Remove the saved `dos_…` password from that client's private credential store when this computer should no longer connect. Deleting a saved password does not invalidate copies of the same API key stored elsewhere.
6. For access that must end, open **Profile → API keys**, select the dedicated key, and choose **Revoke**. The receipt is **Key revoked**; fresh SFTP authentication can reflect a previously cached success for up to 60 seconds, so reconnect after that window to verify refusal.

<figure class="help-screenshot"><a href="/screenshots/developer-sftp-overview-2026-10-13.webp"><img src="/screenshots/developer-sftp-overview-2026-10-13.webp" alt="Dosya SFTP overview with the visible Get API Key, Connect on port 2222, and Transfer stages used before ending a client session." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya SFTP overview with the visible Get API Key, Connect on port 2222, and Transfer stages used before ending a client session. <a href="/screenshots/developer-sftp-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

Revoking the key prevents later operations but does not delete files already transferred. Ending a session also does not cancel a cloud mutation that already returned a successful CLOSE; verify the destination before deciding whether cleanup is needed.

If the queue is stuck, preserve the operation name and bounded server message. Dosya maps API 403 to **Permission denied**, API 404 to **No such file**, and other failures to status 4; key-shaped text is redacted and messages are capped at 180 characters.

## Expected result

The client has no active file handle or queued transfer, required files have verified final bytes, and the session is closed. Any credential removed locally is absent from that device, while a revoked key is refused on a new connection after the short authentication-cache window.

## Related guides

- [Connect an SFTP client](/integrations/sftp-connect)
- [Troubleshoot SFTP](/troubleshooting/sftp)
