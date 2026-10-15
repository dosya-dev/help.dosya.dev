---
{
  "articleId": "hc-webhook-recover-after-downtime",
  "locale": "en",
  "revision": 5,
  "title": "Recover webhook delivery after receiver downtime",
  "summary": "Restore a webhook receiver, verify it with a controlled test, re-enable the endpoint, and manually replay required failed events without duplicates.",
  "category": "developers",
  "articleSlug": "webhook-recover-after-downtime",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/webhooks/retry.ts, apps/api/src/lib/webhooks/health.ts, apps/api/src/pages/api/internal/webhooks/retry.ts, apps/api/src/pages/api/webhooks/[id]/test.ts, apps/api/src/pages/api/webhooks/[id]/index.ts, apps/web/src/pages/integrations/webhooks.tsx. Production behavior for “Recover webhook delivery after receiver downtime” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-webhook-signature",
    "hc-webhook-deliveries"
  ],
  "keywords": [
    "webhook recover after downtime",
    "Webhook consumer reliability",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Receiver recovery has two separate jobs: reopen future delivery and decide which failed historical events still need replay. Re-enabling an endpoint does not drain its terminal backlog.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14.webp" alt="Four panels show restoring the receiver, proving it with a disabled-endpoint test, re-enabling delivery, and manually replaying only required failed events." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show restoring the receiver, proving it with a disabled-endpoint test, re-enabling delivery, and manually replaying only required failed events. <a class="workflow-map-full" href="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14.webp" data-light-href="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/webhook-recover-after-downtime-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Restore the public HTTPS receiver and confirm it can verify the current signing secret, commit an event durably, and answer with 2xx inside Dosya’s ten-second timeout.
2. In **Integrations → Webhooks**, locate the endpoint. A sustained incident shows **Auto-disabled after repeated failures**, the failed-attempt count, disable time, and **Re-enable**.
3. While the endpoint is still disabled, choose **Send test event**. The test route sends a real signed request even when `active` is false; open **Deliveries** and wait for the new row to show **Success** rather than trusting the queued toast.
4. Select **Re-enable** only after that proof. The update clears `consecutive_failures` and `disabled_at`, but it does not change deliveries already marked **Failed**.
5. Review historical rows newest first and choose **Redeliver** only for business events the receiver still needs. Each replay has a new delivery ID but retains the original event ID and payload, so event-ID deduplication must be active.
6. Produce one controlled subscribed event and verify normal **Success**. Confirm the recovered business state once, then document any failed events intentionally left unreplayed.

A delivery receives at most six attempts: initial, then due after 30 seconds, 2 minutes, 10 minutes, 1 hour, and 6 hours. Fifteen consecutive failed attempts across an endpoint disable it. A later ten-minute health pass marks that endpoint’s remaining pending rows failed with `endpoint auto-disabled after sustained delivery failure`. Each pass examines at most 50 unhealthy endpoints, so a large incident may require subsequent sweeps before every disabled endpoint’s queue becomes terminal.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Recover webhook delivery after receiver downtime”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Recover webhook delivery after receiver downtime”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The repaired receiver passes a controlled test before the endpoint resumes future traffic. Re-enabling clears the incident counters, and manually selected historical events recover without duplicate downstream changes.

**A failed row stays failed after re-enable.** That is expected. Use **Redeliver** for the specific event after checking its business effect.

**The test succeeds but new events do not arrive.** Confirm the card is **Active**, the intended event badges remain selected, and the producer action occurred in the same workspace.

## Related guides

- [Verify webhook signatures](/developers/webhook-signatures)
- [Inspect deliveries](/developers/webhook-deliveries)
