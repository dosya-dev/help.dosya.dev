---
{
  "articleId": "hc-webhook-create",
  "locale": "en",
  "revision": 6,
  "title": "Create a webhook endpoint",
  "summary": "Register a workspace webhook through the app or REST, verify signed events, test delivery and handle retries, endpoint caps, secret rotation and deletion.",
  "category": "developers",
  "articleSlug": "webhook-create",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Evidence: apps/web/src/pages/integrations/webhooks.tsx; apps/web/src/router.tsx; apps/api/src/pages/api/webhooks/index.ts; apps/api/src/pages/api/webhooks/index.cap.unit.test.ts; apps/api/src/pages/api/webhooks/[id]/index.ts; apps/api/src/pages/api/webhooks/[id]/test.ts; apps/api/src/pages/api/webhooks/[id]/roll-secret.ts; apps/api/src/pages/api/webhooks/[id]/deliveries/index.ts; apps/api/src/pages/api/webhooks/[id]/deliveries/[did]/redeliver.ts; apps/api/src/lib/webhooks/events.ts; apps/api/src/lib/webhooks/events.unit.test.ts; apps/api/src/lib/webhooks/guard.ts; apps/api/src/lib/webhooks/guard.unit.test.ts; apps/api/src/lib/webhooks/emit.ts; apps/api/src/lib/webhooks/deliver.ts; apps/api/src/lib/webhooks/deliver.unit.test.ts; apps/api/src/lib/webhooks/retry.ts; apps/api/src/lib/webhooks/retry.unit.test.ts; apps/api/src/lib/webhooks/sign.ts; apps/api/src/lib/webhooks/sign.unit.test.ts; apps/api/src/lib/ssrf-guard.ts; apps/api/src/lib/upload/finalize-session.ts; src/pages/developer/api.astro; apps/api/src/lib/access/rest-scope.ts; apps/api/src/lib/webhooks/emit.unit.test.ts; apps/api/src/lib/webhooks/authz.ts; apps/api/src/lib/webhooks/authz.unit.test.ts. Repository contracts and tests verified locally; no production requests or credentials used.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key"
  ],
  "keywords": [
    "create webhook",
    "webhook endpoint",
    "webhook secret",
    "cloud storage"
  ]
}
---
Set up a cloud storage webhook to receive signed JSON notifications at your own public HTTPS receiver. Dosya supports `file.uploaded`, `file.deleted` and `share.accessed`. Creating an endpoint activates it immediately, so deploy the receiver and its private secret storage before relying on production events.

## Access and receiver requirements

Select the workspace whose activity should reach your server. Webhook administration requires workspace membership and **manage_settings**: built-in owner and administrator roles qualify, as does a custom role granted that permission. A REST credential additionally needs **Full access**, REST API protocol access and a workspace pin compatible with the endpoint. A read-only or upload-only key cannot administer webhooks.

The receiver URL must use HTTPS and resolve to publicly reachable addresses. Localhost, private-network destinations and disallowed addresses are rejected, including when DNS changes after creation. A public HTTPS development tunnel may be used if its destination passes validation; `http://localhost` cannot be registered.

The endpoint cap is **16 per workspace**, including inactive endpoints. Free-plan users can create **3 endpoints in total across their workspaces**, counted by creator. The workspace cap is checked before that free-plan cap. Delete an unused endpoint only after deciding whether you need its delivery history.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/webhook-create-workflow-map-2026-10-14.webp" alt="Workflow for “Create a webhook endpoint”: enter the endpoint URL and documented events; trigger one harmless event and inspect its delivery." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Workflow for “Create a webhook endpoint”: enter the endpoint URL and documented events; trigger one harmless event and inspect its delivery. <a class="workflow-map-full" href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-light-href="/screenshots/webhook-create-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/webhook-create-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: create it in the app

1. Open [Integrations → Webhooks](https://app.dosya.dev/integrations/webhooks) with the intended workspace active.
2. Select **New endpoint**. In **New webhook endpoint**, enter **Endpoint URL**.
3. Under **Events**, choose at least one of **File uploaded**, **File deleted** or **Share accessed**. Add **Description** if it will help identify this receiver later.
4. Select **Create endpoint**. The form rejects a non-HTTPS address with `URL must be a valid https:// address.` and an empty event selection with `Select at least one event type.`
5. In **Signing secret**, select **Copy** and store the `whsec_` value in your receiver's secret configuration before closing the dialog. It will not be shown again.
6. The endpoint card should show **Active** and the subscribed event names. Select **Send test event**, then inspect **Deliveries** and the receiver's logs.

The test button sends a synthetic `file.uploaded` event with `data.test: true`, `file_id: "test_file"`, `name: "test.txt"` and `size: 12`. It does not create a real file. This test is sent even if your endpoint subscribes only to a different event, so make the receiver handle it deliberately. The toast **Test event sent** confirms the trigger; a successful delivery and the receiver's verified record confirm receipt.

## Register and test through REST

Set `DOSYA_API_KEY` privately to an authorized full-access key. Replace the workspace and receiver examples with your actual values:

```bash
set -e
umask 077
curl --fail-with-body --silent --show-error \
  'https://api.dosya.dev/api/webhooks' \
  -H "Authorization: Bearer $DOSYA_API_KEY" \
  -H 'Content-Type: application/json' \
  --data-binary '{
    "workspace_id": "REPLACE_WITH_WORKSPACE_ID",
    "url": "https://receiver.example.com/dosya",
    "events": ["file.uploaded"],
    "description": "File processing receiver"
  }' -o webhook-created.json
```

`receiver.example.com` is a nonfunctional placeholder. The **201** response contains `ok: true` and `webhook` with `id`, `workspace_id`, `url`, `events`, `description`, `active: 1`, `source`, `secret` and `created_at`. Copy `webhook.secret` into private receiver configuration, never into the API-key field. A webhook signing secret verifies outbound events; it is not a REST authentication token.

Read `webhook.id` and send the test after saving the secret:

```bash
DOSYA_WEBHOOK_ID=$(python3 -c 'import json; print(json.load(open("webhook-created.json"))["webhook"]["id"])')
curl --fail-with-body --silent --show-error --request POST \
  "https://api.dosya.dev/api/webhooks/$DOSYA_WEBHOOK_ID/test" \
  -H "Authorization: Bearer $DOSYA_API_KEY"
curl --fail-with-body --silent --show-error \
  "https://api.dosya.dev/api/webhooks/$DOSYA_WEBHOOK_ID/deliveries?page=1&per_page=10" \
  -H "Authorization: Bearer $DOSYA_API_KEY"
```

The test response returns `delivery_id`; delivery may still be running when that response arrives. The list shows its status, attempts, response code and any recorded error. Remove `webhook-created.json` after saving the one-time secret. `GET /api/webhooks?workspace_id=…` lists endpoints without revealing their secrets.

## Verify each received request

The receiver gets an HTTP **POST** with `Content-Type: application/json`, `User-Agent: dosya-webhooks/1` and these headers:

- `X-Dosya-Signature: t=TIMESTAMP,v1=LOWERCASE_HEX_HMAC`
- `X-Dosya-Event-Id`: the stable event ID
- `X-Dosya-Event-Type`: the event name
- `X-Dosya-Delivery-Id`: the delivery record ID

The JSON envelope has `id`, `type`, `created` in Unix seconds, `workspace_id` and `data`. A file-upload event supplies `file_id`, `name`, `size` in bytes, `folder_id`, `version` and `is_new_version`. It notifies your receiver; it does not include the file bytes or grant file-download rights.

Verify HMAC-SHA256 using the signing secret over `timestamp + "." + raw_body`. Preserve the original request bytes before JSON parsing; reserializing JSON can change the signature. Compare in constant time and reject timestamps more than **300 seconds** away from your clock. This Node.js verification function uses only built-in crypto:

```javascript
import { createHmac, timingSafeEqual } from 'node:crypto';

// rawBody must be a Buffer of the untouched HTTP request body.
export function verified(rawBody, signature, secret, now = Math.floor(Date.now() / 1000)) {
  const match = /^t=(\d+),v1=([0-9a-f]{64})$/.exec(signature ?? '');
  if (!match || Math.abs(now - Number(match[1])) > 300) return false;
  const expected = createHmac('sha256', secret)
    .update(match[1] + '.').update(rawBody).digest();
  const received = Buffer.from(match[2], 'hex');
  return received.length === expected.length && timingSafeEqual(expected, received);
}
```

Only parse and enqueue the event after verification succeeds. Persist a deduplication record keyed by the envelope `id` before applying business effects; automated retries retain the event/delivery identity, and manual redelivery uses a new delivery ID for the same event and payload. Returning 2xx before durable acceptance risks acknowledging work you then lose.

## Delivery timing and recovery

Any **2xx** response marks delivery success. The receiver has a **10-second** timeout; accept quickly and move long processing to a durable queue. Non-2xx responses, timeouts and URL-validation failures count as failed attempts. One allowed redirect hop may be followed; a second redirect is a failure. A direct stable receiver URL is easier to diagnose than redirect chains.

There are **6 attempts total**, not six retries after the first. The first runs immediately; after successive failures, delays are **30 seconds, 2 minutes, 10 minutes, 1 hour and 6 hours**, measured from the preceding failed attempt. Scheduling and network work can add delay; these are not guaranteed delivery deadlines.

An endpoint is auto-disabled after **15 consecutive failed attempts across events**. A successful attempt resets that failure run. Fix the receiver, inspect **Deliveries**, then use **Re-enable** on the disabled card; re-enabling clears its failure counter. Do not re-enable an unchanged broken receiver.

For a retained delivery, use **Redeliver** in its expanded log or `POST /api/webhooks/{id}/deliveries/{delivery_id}/redeliver`. It creates another delivery record, preserving the original event ID and payload. Keep deduplication in place so retrying a notification cannot duplicate a job, invoice or external action. Test and redelivery endpoints each allow **20 calls per user per 300 seconds**; obey a **429** response's `Retry-After`.

## Setup errors and irreversible changes

| Failure | Resolution |
| --- | --- |
| **400**, `Endpoint URL not allowed: …` | Correct HTTPS, DNS or the named address-validation issue. The URL is checked at registration and delivery. |
| **400**, `events must be a non-empty array` | Send at least one supported event string. |
| **400**, `unknown event type: …` | Use `file.uploaded`, `file.deleted` or `share.accessed` exactly. |
| **403**, `API key scope 'full' required` | Use an authorized full-access credential; a role change alone will not widen a restricted key. |
| **403**, `You don't have permission to manage webhooks` | Request **manage_settings** from the workspace administrator. |
| **400**, `Webhook endpoint limit reached (16 per workspace). Delete an unused endpoint first.` | Review the workspace's endpoints, including disabled ones. |
| **403**, `The free plan allows 3 webhook endpoints in total. Delete one or upgrade for more.` | Review endpoints you created across all workspaces. |
| **404**, `Webhook not found` or `Delivery not found` | Confirm the IDs and endpoint association before retrying. |

**Roll secret** generates a new signing secret and makes the old one stop working immediately, without a grace period. Prepare the receiver to accept the replacement promptly, save the newly revealed value and remove the old secret. The REST equivalent is `POST /api/webhooks/{id}/roll-secret`, which returns `secret` once and allows **10 rotations per user per hour**. A missed reveal requires another rotation.

**Edit** can change the URL, events, description and active state. **Delete** asks for confirmation and permanently removes the endpoint **and its delivery history**; it cannot be undone. Deletion stops future delivery to that endpoint but cannot recall events or data already received by another server.

The receiver's response snippet can be retained in the log up to **500 characters**. Return a short neutral acknowledgement without credentials or confidential data. Log event IDs, delivery IDs and sanitized errors rather than secrets, signatures or complete sensitive payloads. Send a real harmless subscribed event after the synthetic test and verify it was accepted once before enabling downstream production actions.

## Expected result

The endpoint is Active in the selected workspace, its receiver verifies the signature and persists one event record, and Deliveries shows success for the synthetic test and a harmless subscribed event. The endpoint’s saved secret is held privately by the receiver; endpoint listings do not reveal it.

## Related guides

- [Set up REST authentication](/developers/rest-api-quickstart)
- [Create or revoke an integration API key](/developers/api-key)
