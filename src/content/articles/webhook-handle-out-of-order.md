---
{
  "articleId": "hc-webhook-handle-out-of-order",
  "locale": "en",
  "revision": 5,
  "title": "Handle webhook events received out of order",
  "summary": "Use event occurrence fields and file version numbers to reject stale webhook work, then reconcile current state when no ordering field exists.",
  "category": "developers",
  "articleSlug": "webhook-handle-out-of-order",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/emit.ts, apps/api/src/lib/webhooks/retry.ts, apps/api/src/pages/api/webhooks/[id]/deliveries/[did]/redeliver.ts, apps/api/src/pages/api/upload/[sessionId]/complete.ts, apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/pages/api/share/[token].ts. Production behavior for “Handle webhook events received out of order” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-signature",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook handle out of order",
    "Webhook consumer reliability",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Webhook arrival order is not a state-order guarantee. Retry delays and manual redelivery can make an older payload arrive after a newer event, and delivery-row creation time records the attempt rather than the original business change.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14.webp" alt="Four panels show comparing event occurrence data, rejecting an older file version, reconciling an unversioned deletion, and committing the newest accepted state." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show comparing event occurrence data, rejecting an older file version, reconciling an unversioned deletion, and committing the newest accepted state. <a class="workflow-map-full" href="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-handle-out-of-order-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Verify the signature, deduplicate by the top-level event `id`, and parse `type`, `created`, `workspace_id`, and `data`. Event IDs are opaque values and must not be sorted.
2. Store top-level `created` as the event’s Unix-second occurrence time, not a total-order sequence. Separate events may share the same second, and a redelivery retains the old payload while receiving a new delivery row.
3. For `file.uploaded`, key state by `data.file_id` and compare the integer `data.version`. Apply a higher version, treat the same event ID as duplicate, and ignore a lower version that arrives after a newer one.
4. For `share.accessed`, use `data.accessed_at` for the access occurrence and retain every distinct event ID. Two views of one link are separate events even when their timestamps are close.
5. For `file.deleted`, note that current payloads provide `file_id`, `name`, and `permanent` but no resource version. Reconcile current Dosya state through an independently authorized API read before triggering an irreversible downstream deletion.
6. Test by delaying an older upload event, processing a higher file version first, and then releasing the old request. Confirm the stored version does not move backward and both attempts receive deliberate acknowledgements.

The sender offers no ordering contract across events or endpoints. Keep per-resource monotonic state where a reliable field exists and use current-state reconciliation where it does not.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Handle webhook events received out of order”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Handle webhook events received out of order”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The consumer converges on the newest known file version, retains distinct share accesses, and refuses to infer deletion order from random IDs or delivery timestamps. Late retries cannot roll downstream state backward.

**Two events have the same `created` value.** Use the resource-specific field or reconcile current state; the envelope timestamp has one-second precision.

**A delete cannot be reconciled.** Quarantine that event for operator review and return according to the receiver’s retry policy instead of guessing at an irreversible transition.

## Related guides

- [Verify webhook signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
