---
{
  "articleId": "hc-extension-save-confirmation-missing",
  "locale": "en",
  "revision": 5,
  "title": "Verify an extension save when confirmation is missing",
  "summary": "Use Recent saves when a notification is absent, read the exact queue state, and retry the existing save row without creating another capture.",
  "category": "extension",
  "articleSlug": "extension-save-confirmation-missing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/extension/src/entrypoints/popup/components/RecentSaves.tsx, apps/extension/src/entrypoints/popup/state.ts, apps/extension/src/lib/upload/one-shot.ts, apps/extension/src/lib/queue/runner.ts, apps/extension/src/lib/background/handlers.ts, apps/extension/src/entrypoints/background.ts. Production behavior for “Verify an extension save when confirmation is missing” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-extension-reconnect",
    "hc-extension-permissions"
  ],
  "keywords": [
    "extension save confirmation missing",
    "Browser extension troubleshooting details",
    "Dosya help",
    "browser file upload"
  ]
}
---
A missing system notification is not a failed save. Safari has no extension notification API, and other browsers can suppress notifications while the upload receipt remains in **Recent saves**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14.webp" alt="Four panels show finding the generated name, reading its queue state, retrying the existing row, and opening the completed file ID." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use Recent saves as the receipt when a notification is absent, and retry the recorded upload instead of recapturing the page. <a class="workflow-map-full" href="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/extension-save-confirmation-missing-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the popup and locate the generated filename under **Recent saves** rather than searching for a user-entered name; the extension does not provide pre-save naming.
2. Wait through an active **Waiting for network**, **Rate limited**, or **Finishing an earlier attempt** state. The popup refreshes queue state about every two seconds.
3. If the row shows **Signed out**, sign in again and return to that row. If it says **Capture is gone**, its stored bytes are no longer available and it cannot finish.
4. For a retryable upload failure, select **Retry now** once so that queue item keeps its idempotency identity. A blocked-image permission retry recaptures the source and replaces its failed row; repeating the page action yourself always creates a separate item.
5. When the row gains a completed check, open its body. It links directly to `app.dosya.dev/files?view=<fileId>`.
6. Confirm the exact file and destination in Dosya. Treat the popup row as authoritative when no **Saved to dosya** operating-system notification appeared.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Dosya extension authorization page used when a Signed out queue state requires a new login." width="448" height="554" loading="lazy" decoding="async" /></a><figcaption>After signing in, return to the existing failed row and choose Retry now instead of recapturing. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The original queue row either opens one completed file or presents a specific terminal reason. A suppressed notification, especially on Safari, no longer causes an unnecessary second capture.

The popup shows only the ten most recent local rows. Older receipts can still exist in Dosya even when they have left that shortened view.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
