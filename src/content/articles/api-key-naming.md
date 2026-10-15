---
{
  "articleId": "hc-api-key-naming",
  "locale": "en",
  "revision": 5,
  "title": "Name an API key for its owner and purpose",
  "summary": "Apply a searchable 64-character key name that identifies its client and purpose, then replace the credential safely when that label must change.",
  "category": "developers",
  "articleSlug": "api-key-naming",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/web/src/components/api-keys/create-key-dialog.tsx, apps/web/src/components/api-keys/api-keys-section.tsx, apps/web/src/lib/api-keys.ts, and apps/api/src/lib/api-key-limits.ts. Production status: the rewritten naming and replacement flow has not yet been checked live.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api key naming",
    "API key operations",
    "Dosya help",
    "cloud storage API"
  ]
}
---
An API-key name is a searchable label stored beside the credential. Dosya does not parse it into owner, environment, or purpose fields, and duplicate labels are allowed.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-key-naming-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-naming-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-naming-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-key-naming-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-key-naming-help-workflow-2026-10-14.webp" alt="Four panels show choosing a client-purpose convention, entering a name within 64 characters, locating the masked row by search, and replacing the key when its label becomes stale." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show choosing a client-purpose convention, entering a name within 64 characters, locating the masked row by search, and replacing the key when its label becomes stale. <a class="workflow-map-full" href="/screenshots/api-key-naming-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-key-naming-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-key-naming-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Choose a useful convention

In **Profile → API keys**, the **New API key** dialog asks **What is it for?** and suggests `e.g. rclone backup`. A practical convention is `client-environment-owner` or `client-purpose`, such as `rclone-prod-ops`. This is an organizational choice rather than a server-enforced format.

## Steps

1. Identify the single application, environment, and responsible team or person that will own the credential.
2. Form a compact label with the distinguishing facts, avoiding the secret, customer data, or temporary ticket numbers.
3. Enter it under **What is it for?** and keep the result within the 64-character limit.
4. Finish permission and restriction choices, press **Generate key**, and store the one-time `dos_…` value separately from its label.
5. Return to the API-key table and use **Search name or prefix** to confirm that the new row can be found unambiguously.
6. If the label later becomes wrong, duplicate the settings into a correctly named replacement, migrate the client, and revoke the old key.

## Validation and identity

The exact API errors are `Name is required` and `Name must be 64 characters or less`. The web helper says **Just a label, so you can recognise it later.** A name is not an authentication value and need not be unique.

The list shows a masked fingerprint and lets operators search by name or stored prefix. Existing names cannot be edited in place. Replacement creates a different secret, so revocation must wait until the client has been updated.

The account may hold at most 20 API keys, while the free plan permits 3. Expired rows still count until they are deleted.

## Expected result

The row is recognizable from its label and masked fingerprint without revealing the credential, and an operator can trace it to one client before rotation or revocation.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Reference for “Name an API key for its owner and purpose”: Dosya REST API overview page with Get API Key and View SDKs links." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Name an API key for its owner and purpose”: Dosya REST API overview page with Get API Key and View SDKs links. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Related guides

- [Create an API key](/developers/api-key)
- [Choose key scopes](/developers/api-key-scopes)
