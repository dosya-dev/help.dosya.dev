---
{
  "articleId": "hc-webhook-delete-endpoint",
  "locale": "en",
  "revision": 6,
  "title": "Delete an unused webhook endpoint",
  "summary": "Export any required delivery evidence, delete the selected webhook endpoint, and understand that its history and pending retries are removed permanently.",
  "category": "developers",
  "articleSlug": "webhook-delete-endpoint",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/integrations/webhooks.tsx, apps/api/src/pages/api/webhooks/index.ts, apps/api/src/pages/api/webhooks/[id]/index.ts, apps/api/src/pages/api/internal/webhooks/retry.ts, apps/api/src/lib/webhooks/guard.ts, apps/api/src/lib/notifications/integrations.ts. Production behavior for “Delete an unused webhook endpoint” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-create",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook delete endpoint",
    "Webhook endpoint management",
    "Dosya help",
    "cloud storage"
  ]
}
---
Deleting a webhook endpoint removes its delivery history and pending retries as well as stopping new events. Export any evidence first because Dosya provides no restore operation.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" alt="Four panels show opening the exact endpoint, exporting required delivery evidence, reviewing the irreversible Delete webhook warning, and confirming removal." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show opening the exact endpoint, exporting required delivery evidence, reviewing the irreversible Delete webhook warning, and confirming removal. <a class="workflow-map-full" href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-delete-endpoint-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in interactively, choose the workspace, and open **Integrations → Webhooks**. Your workspace role must include `manage_settings`; an API request made with a scoped key requires **Full access**.
2. Match the endpoint by its complete HTTPS URL, description, subscribed event badges, and **Active** or **Disabled** state. Do not rely on position because endpoints are listed newest first.
3. Open **Deliveries** and record any event ID, response status, attempt count, or failure evidence your audit process requires. Deletion removes all delivery rows for this endpoint.
4. Select **Delete** on the endpoint card. In **Delete webhook**, verify the URL and read `This can’t be undone and its delivery history will be lost.`
5. Choose the destructive **Delete** button. The API deletes the endpoint’s delivery rows and endpoint record together, preventing future event creation and retry selection. It cannot cancel an attempt a worker already selected or started, so the receiver may still observe one final in-flight request.
6. Confirm **Webhook deleted**, reload the page, and produce one controlled subscribed event only if safe. No new delivery row should appear for the deleted endpoint. Allow for the final in-flight request, and remember that the same receiver URL can still get requests when another active endpoint uses it.

Deleting an unused endpoint can free one of the limits: 16 endpoints per workspace, and three endpoints in total for a Free user across all workspaces. Other workspace administrators receive an in-app notice of the removal.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Delete an unused webhook endpoint”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Delete an unused webhook endpoint”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The endpoint card and its stored delivery history disappear. Dosya creates no future delivery rows for that endpoint and no longer selects its retries, although an attempt already in flight can still reach the receiver once.

**Delete failed** means the endpoint may still exist. Reload before retrying so a delayed response does not lead to action on the wrong row.

**The control is unavailable.** Confirm the selected workspace and ask for a role carrying `manage_settings`; owner/admin names are not the only valid roles because a custom role may hold that permission.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Inspect deliveries](/developers/webhook-deliveries)
