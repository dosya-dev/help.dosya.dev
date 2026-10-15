---
{
  "articleId": "hc-webhook-events",
  "locale": "en",
  "revision": 6,
  "title": "Choose webhook event subscriptions",
  "summary": "Choose file upload, file deletion, or share access events, understand each payload, and test the exact changes your receiver must process.",
  "category": "developers",
  "articleSlug": "webhook-events",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Verified the accepted names, selector labels, payload fields, update behavior and delivery headers in apps/api/src/lib/webhooks/events.ts; apps/api/src/lib/webhooks/emit.ts; apps/api/src/lib/webhooks/is-new-version-contract.unit.test.ts; apps/api/src/lib/webhooks/share-accessed-timestamp-contract.unit.test.ts; apps/api/src/pages/api/share/[token].ts; apps/api/src/pages/api/share/[token]/download.ts; apps/api/src/pages/api/share/[token]/download-all.ts; apps/api/src/pages/api/webhooks/[id]/index.ts; apps/web/src/pages/integrations/webhooks.tsx; and src/pages/developer/api.astro. Local repository evidence only; no production request was made.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries",
    "hc-webhook-signature"
  ],
  "keywords": [
    "webhook events",
    "file uploaded webhook",
    "file deleted webhook",
    "share accessed webhook",
    "webhook payload"
  ]
}
---
Dosya can notify one endpoint about three event types: `file.uploaded`, `file.deleted`, and `share.accessed`. Subscribe only to the changes your receiver can authenticate and process. Event selection filters future notifications for that endpoint; it does not replay activity that occurred before the subscription was saved.

## What each event means

| Event | When it fires | Fields inside `data` |
| --- | --- | --- |
| `file.uploaded` | A new file finishes uploading or a new version finishes replacing an existing file, including uploads through the web app, CLI, WebDAV, SFTP, or S3 gateway. | `file_id`, `name`, byte `size`, nullable `folder_id`, numeric `version`, and `is_new_version` |
| `file.deleted` | A file moves to Trash or is permanently erased. Deleting a folder produces an event for each affected descendant file. | `file_id`, `name`, and boolean `permanent` |
| `share.accessed` | A public share is viewed, a shared file is downloaded, or a shared folder archive is downloaded. | `share_id`, `token`, `access_type`, `accessed_at`, and the applicable `file_id` or `folder_id` |

Treat `file.uploaded` as both “new file” and “new version.” Branch on `data.is_new_version`; do not infer that distinction from the event name. For deletion, `permanent: false` means the file was moved to Trash, while `permanent: true` means it was purged and cannot be restored. Share access uses `access_type` values such as `view`, `download`, and `download_all`; a view can identify a file, folder, or bundle.

Every payload also has a top-level event `id`, `type`, Unix-second `created` time, `workspace_id`, and `data`. The request headers repeat the event identity as `X-Dosya-Event-Id` and the selected name as `X-Dosya-Event-Type`. Use the top-level `id` as the durable deduplication key.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-events-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-events-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-events-workflow-map-2026-10-14.webp" alt="Decision map for selecting Dosya webhook events and validating an example of each subscribed payload." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Map each downstream job to one documented event, then test a representative payload before enabling production effects. <a class="workflow-map-full" href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-events-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open [Integrations → Webhooks](https://app.dosya.dev/integrations/webhooks) with the endpoint's workspace active.
2. Find the endpoint URL and select **Edit**.
3. Under **Events**, check **File uploaded**, **File deleted**, or **Share accessed**. At least one must remain selected; otherwise the form shows `Select at least one event type.`
4. Review **Endpoint URL**, **Description**, and **Active** while the dialog is open, then select **Save changes**.
5. Confirm the endpoint card shows the intended event names as badges.

Webhook administration requires workspace membership plus the `manage_settings` permission. A scoped REST credential must have **Full access** to administer endpoints. If the API receives an unsupported string, it responds with `unknown event type: VALUE`; an empty list returns `events must be a non-empty array`.

The REST equivalent is `PATCH /api/webhooks/{endpoint_id}`. Send the complete replacement list because `events` describes the endpoint's saved subscription, rather than an item to add to the existing list:

```bash
curl --fail-with-body --silent --show-error --request PATCH \
  "https://api.dosya.dev/api/webhooks/$DOSYA_WEBHOOK_ID" \
  -H "Authorization: Bearer $DOSYA_API_KEY" \
  -H 'Content-Type: application/json' \
  --data-binary '{"events":["file.uploaded","file.deleted"]}'
```

Do not use `share.created`, `folder.created`, or `member.joined`; they are not accepted webhook event types in the current API.

## Prove the subscription with real actions

**Send test event** always sends a synthetic `file.uploaded` payload with `data.test: true`, even when the endpoint is subscribed only to another event. Use it to prove URL reachability and signature handling, then perform one harmless real action for every selected type:

- Upload a small disposable file and check `is_new_version: false`.
- Upload a new version of that file and check `is_new_version: true` with an increased version number.
- Move the test file to Trash and verify `permanent: false`; purge only if the test data is disposable.
- Open a test share, then download it, and confirm the receiver distinguishes `view` from `download`.

Open **Deliveries** on the endpoint card and match `event_type`, creation time, status, and event ID with the receiver log. A successful receiver should authenticate the raw body, persist the event ID, and return a 2xx response only after durable acceptance. Receiving an event twice must not repeat an external effect.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya Zapier setup page, which is separate from the custom webhook event selector under Integrations and Webhooks." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Zapier setup manages Zapier credentials and invitations; choose custom outbound subscriptions on **Integrations → Webhooks** instead. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The endpoint card lists only the required event names. Each controlled product action creates a matching signed delivery, and the receiver records its event once with the documented payload fields. Unselected event types do not create deliveries for that endpoint.

## Related guides

- [Create a webhook endpoint](/developers/webhook-create)
- [Inspect webhook delivery attempts](/developers/webhook-deliveries)
- [Verify the webhook signature](/developers/webhook-signatures)
