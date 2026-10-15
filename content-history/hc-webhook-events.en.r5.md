---
{
  "articleId": "hc-webhook-events",
  "locale": "en",
  "revision": 5,
  "title": "Choose webhook events",
  "summary": "Subscribe only to documented event types, trigger representative changes, and keep event handling idempotent.",
  "category": "developers",
  "articleSlug": "webhook-events",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-webhook-create",
    "hc-workspace-activity"
  ],
  "keywords": [
    "webhook events",
    "event types",
    "webhook payload",
    "cloud storage"
  ]
}
---
Event selection controls which product changes call the endpoint. Use current event names and payloads from the reference.

A narrow event subscription reduces unnecessary deliveries and simplifies receiver logic. Consumers must still handle duplicates and events that arrive later than expected.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-events-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-events-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-events-workflow-map-2026-10-14.webp" alt="Workflow for “Choose webhook events”: enable only documented matching events; record event identifiers and ignore unsupported assumptions." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Choose webhook events”: enable only documented matching events; record event identifiers and ignore unsupported assumptions. <a class="workflow-map-full" href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-events-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-events-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: choose webhook events

1. List the business events the integration truly needs.
2. Open the webhook event selector.
3. Enable only documented matching events.
4. Save the configuration.
5. Trigger each event once with test data.
6. Record event identifiers and ignore unsupported assumptions.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Reference for “Choose webhook events”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Reference for “Choose webhook events”: Integrations &gt; Zapier setup page with API-key guidance and the Zapier invite button. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** For “Choose webhook events”, copy connection values from the current integration page and keep secrets private.

## Verify the result

Trigger each selected event with isolated test data and record its event identifier, type and delivery status. Confirm unselected events are not required by the workflow.

## Expected result

The choose webhook events workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Create a webhook](/developers/webhook-create)
- [Read workspace activity](/workspaces/activity)
