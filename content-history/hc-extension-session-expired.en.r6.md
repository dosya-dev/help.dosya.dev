---
{
  "articleId": "hc-extension-session-expired",
  "locale": "en",
  "revision": 6,
  "title": "Fix an expired Save to Dosya browser session",
  "summary": "Sign in again when token refresh fails, restore the intended destination, and retry the existing Signed out row without discarding local captures.",
  "category": "extension",
  "articleSlug": "extension-session-expired",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/lib/api/client.ts, apps/extension/src/lib/auth/refresh.ts, apps/extension/src/lib/auth/sign-in.ts, apps/extension/src/lib/store/prefs.ts, apps/extension/src/entrypoints/popup/components/SignedOut.tsx, apps/web/src/pages/connect/extension.tsx. Production behavior for “Fix an expired Save to Dosya browser session” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-reconnect",
    "hc-extension-permissions"
  ],
  "keywords": [
    "extension session expired",
    "Browser extension troubleshooting details",
    "Dosya help",
    "browser file upload"
  ]
}
---
The extension retries one request after refreshing an expired access token. When refresh itself is rejected, stored tokens are cleared and the popup returns to **Sign in with dosya**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-session-expired-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-session-expired-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp" alt="Four panels show identifying Signed out, selecting Sign in with dosya, restoring Account and Saving to, and retrying the original row." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Restore authentication without discarding the failed capture, then use Retry now on that existing queue row. <a class="workflow-map-full" href="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-session-expired-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-session-expired-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the popup and distinguish the signed-out screen or a row marked **Signed out** from temporary states such as **Waiting for network**.
2. Select **Sign in with dosya**. The browser opens the normal Dosya authentication flow; passwords, passkeys, and two-factor checks stay on the Dosya page.
3. On **Connect Save to dosya for `<browser>`**, review the listed save, folder-creation, and single-file share abilities, then select **Allow**.
4. Return to the popup and confirm the account email plus **Saving to** destination. The extension cannot delete, rename, or move files or manage account, team, or billing settings.
5. Find the original failed row and select **Retry now**. A prior **Signed out** failure does not resume automatically merely because authentication succeeded.
6. Open the completed row and confirm it points to one file in the intended destination before clearing any other local state.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Connect Save to dosya authorization page with Allow and Cancel controls and the extension’s limited capabilities." width="448" height="554" loading="lazy" decoding="async" /></a><figcaption>Normal Dosya authentication completes before the limited browser-extension authorization is approved. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The popup shows the intended account and destination, and the original failed row completes after **Retry now**. No invented session-expiry duration or nonexistent **Reconnect** control is required.

Avoid explicit sign-out as a diagnostic reset: it clears tokens, destination settings, caches, pending sign-in data, queued rows, and captured blobs. Uploaded files remain in Dosya.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
