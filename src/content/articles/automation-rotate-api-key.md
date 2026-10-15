---
{
  "articleId": "hc-automation-rotate-api-key",
  "locale": "en",
  "revision": 5,
  "title": "Rotate an automation API key",
  "summary": "Replace an automation credential without downtime, test the new secret, and revoke the old key so every later request uses the intended access.",
  "category": "integrations",
  "articleSlug": "automation-rotate-api-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/api-keys/api-keys-section.tsx, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/api/src/pages/api/me/api-keys/index.ts, apps/api/src/pages/api/me/api-keys/[id].ts, apps/api/src/lib/api-key-limits.ts. Production behavior for “Rotate an automation API key” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-zapier-connect",
    "hc-n8n-connect"
  ],
  "keywords": [
    "automation rotate api key",
    "Zapier and n8n automation",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Rotate an API key by overlapping the old and new credentials only long enough to test the replacement. Dosya keys cannot be edited, and the full `dos_…` secret is shown only once, so save it directly into the automation’s encrypted credential field.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp" data-light-href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Rotate an automation API key: Open Settings and expand the automation key, record every current restriction. Choose Duplicate settings, keep or narrow the copied permissions and limits. Replace the secret in the automation, run one scope-matched operation. Revoke the old key, prove the same automation works only with the replacement." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Open Settings and expand the automation key, record every current restriction.” and ends with “Revoke the old key, prove the same automation works only with the replacement.” <a class="workflow-map-full" href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp" data-light-href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/automation-rotate-api-key-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Settings → API keys**, expand the key used by the automation, and record its **Permission**, **Protocols**, **Reach**, expiry, IP allowlist, and active hours.
2. Choose **Duplicate settings**; keep the prefilled restrictions unless the automation now needs less access, give the replacement a distinct name, and create it.
3. Copy the newly issued key from the **is ready** dialog before closing it; Dosya cannot reveal that secret again.
4. Replace the credential in Zapier, n8n, or the calling system, then run one read or upload that matches the key scope and confirm the run succeeds.
5. Return to the key list and compare **Last used**; confirm the replacement handled the test rather than a cached result.
6. Expand the old row, choose **Revoke**, approve the irreversible deletion, and run the same automation once more to prove only the new key works.

A revoked key is refused immediately after its cache entry is cleared; the interface confirms **Key revoked** and says anything still using it will be refused. A free account may hold 3 keys and every account has a hard maximum of 20, so revoke an unused key first if creation reports a cap. Revoking a `wp_site` key also disconnects that WordPress site; rotate those credentials through the site connection flow instead.

## Expected result

The replacement row has the intended restrictions, the production automation succeeds with its newly stored secret, and requests that still present the retired key receive an authentication refusal. Keep the new secret in the automation’s credential store, not in a task note or run log.

## Related guides

- [Connect Zapier](/integrations/zapier)
- [Connect n8n](/integrations/n8n-connect)
