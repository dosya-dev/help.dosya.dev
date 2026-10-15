---
{
  "articleId": "hc-webdav-clear-stale-credentials",
  "locale": "en",
  "revision": 5,
  "title": "Clear stale WebDAV credentials",
  "summary": "Remove a stale Dosya WebDAV login from the client or operating-system credential store, then reconnect with the correct email and API key safely.",
  "category": "integrations",
  "articleSlug": "webdav-clear-stale-credentials",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/webdav.tsx, apps/web/src/lib/integrations.ts, apps/api/src/lib/webdav/auth.ts, apps/api/src/pages/webdav/[...path].ts, and apps/web/src/components/api-keys/api-keys-section.tsx. Operating-system credential dialogs and production authentication were not exercised.",
  "related": [
    "hc-webdav-connect",
    "hc-webdav-lock-permission-errors"
  ],
  "keywords": [
    "webdav clear stale credentials",
    "WebDAV connection reliability details",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
A WebDAV client can keep submitting an old password after you update the visible mount. Dosya uses HTTP Basic authentication: the username must match the API-key owner's email without regard to case, and the password must be a valid full `dos_…` key. An account password, masked key prefix, revoked key, or key owned by another email receives **401 Unauthorized**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp" alt="Four-step workflow for disconnecting the WebDAV mount, removing only the stale Dosya login, checking the replacement key, and reconnecting with the labelled endpoint." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for disconnecting the WebDAV mount, removing only the stale Dosya login, checking the replacement key, and reconnecting with the labelled endpoint. <a class="workflow-map-full" href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webdav-clear-stale-credentials-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

Before deleting credentials, copy the current endpoint from **Integrations → WebDAV** and record the intended workspace ID. Clearing a host-wide credential can affect other mounts that deliberately use the same `api.dosya.dev` login, so remove the narrowest matching entry and be ready to reconnect those mounts.

## Steps

1. Finish active transfers, close files opened from the mount, and disconnect or unmount the affected Dosya volume. A client may keep an authenticated connection alive until the mount closes.
2. Open the credential store used by that client. On macOS this may be Keychain Access; on Windows it may be Credential Manager; some WebDAV apps keep passwords in their own connection profile.
3. Search for `api.dosya.dev`, the WebDAV endpoint, or the saved account email. Delete only the stale Internet/network credential or clear the password in the specific client profile; do not remove unrelated browser or system sign-ins.
4. In Dosya **Profile → API keys**, confirm the replacement key is active, includes **WebDAV**, reaches the endpoint's workspace, and is owned by the email you will enter. Generate a new dedicated key if the full old secret is no longer available.
5. Reconnect with the labelled URL copied from the integration page, enter the key-owner email as username, and enter the full API key as password. Refuse any prompt that asks for your normal Dosya account password.
6. Open **All** and list a known folder. Download a harmless file, then perform a disposable write only when the key scope and role allow it; this distinguishes successful authentication from a later permission refusal.

<figure class="help-screenshot"><a href="/screenshots/developer-webdav-overview-2026-10-13.webp"><img src="/screenshots/developer-webdav-overview-2026-10-13.webp" alt="Dosya WebDAV overview with Get API Key, the labelled mount URL, and Browse stages used after clearing a saved login." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Dosya WebDAV overview with Get API Key, the labelled mount URL, and Browse stages used after clearing a saved login. <a href="/screenshots/developer-webdav-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

A 401 after clearing the store still points to Basic-auth input: malformed header, missing `dos_` password, invalid or revoked key, wrong owner email, or a WordPress site key. A 403 means authentication succeeded but a protocol, active-hours/IP condition, workspace pin, membership, or role gate refused the request. Server-side authentication lookup failure returns 500 rather than another password prompt.

Revoking the stale API key in Dosya stops later use but does not remove copies saved on devices, and deleting a local credential does not revoke the key elsewhere. Use both actions when access must end completely.

## Expected result

The client prompts for and saves the intended email/API-key pair, the correct workspace mount opens, and a known read succeeds. Any remaining refusal now identifies a WebDAV scope, workspace, role, condition, or content rule rather than a hidden stale password.

## Related guides

- [Connect with WebDAV](/integrations/webdav)
- [Troubleshoot WebDAV lock and permission errors](/integrations/webdav-lock-permission-errors)
