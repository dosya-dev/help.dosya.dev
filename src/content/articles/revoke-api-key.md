---
{
  "articleId": "hc-api-key-revoke",
  "locale": "en",
  "revision": 6,
  "title": "Revoke and replace an API key",
  "summary": "Identify an API key by name and prefix, replace it in the safe order for the incident, then revoke it and verify that the old secret is refused.",
  "category": "developers",
  "articleSlug": "revoke-api-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/api-keys/api-keys-section.tsx, apps/web/src/components/api-keys/create-key-dialog.tsx, apps/api/src/pages/api/me/api-keys/[id].ts, apps/api/src/lib/api-key-limits.ts, apps/api/src/lib/api-key-auth.ts, apps/api/src/lib/kv-cache.ts, apps/api/src/lib/kv-defer.ts. Production behavior for “Revoke and replace an API key” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-api-key",
    "hc-api-key-scopes",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "revoke API key",
    "rotate key",
    "replace credential",
    "compromised token",
    "cloud storage"
  ]
}
---
Revoking one API key invalidates that credential without changing the account password, browser sessions, or unrelated keys. Choose the replacement order according to whether continuity or immediate containment matters more.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/revoke-api-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/revoke-api-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/revoke-api-key-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/revoke-api-key-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/revoke-api-key-workflow-map-2026-10-14.webp" alt="Four panels show matching an API key, preparing its replacement, initiating irreversible revocation, and allowing five minutes before verifying refusal." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four panels show matching an API key, preparing its replacement, initiating irreversible revocation, and allowing five minutes before verifying refusal. <a class="workflow-map-full" href="/screenshots/revoke-api-key-workflow-map-2026-10-14.webp" data-light-href="/screenshots/revoke-api-key-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/revoke-api-key-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → API keys**, search by the client’s descriptive name or visible `dos_····` prefix, and expand the row. Compare **Permission**, **Protocols**, **Reach**, **Created**, **Expires**, and **Last used** before acting.
2. Stop the client or scheduled job that uses the key. For a non-WordPress key, select **Duplicate settings**, create a narrowly scoped replacement, copy the one-time secret, update the client, and prove both an allowed and denied operation before revoking the old key. A `wp_site` row has no **Duplicate settings** action; reconnect that site through its WordPress plugin instead.
3. For a suspected leak, skip the overlap: revoke the exposed key first and accept temporary downtime. A replacement can use **Read only**, **Upload only**, or **Full access**, selected protocol surfaces, workspace or folder reach, IP ranges, active hours, and expiry.
4. Select **Revoke** on the exact row. In **Revoke _name_?**, review `Anything still using it stops working immediately. This can't be undone.` and choose **Revoke**. The control permanently deletes the row, while cached authorization can outlive the UI receipt briefly.
5. Confirm **Key revoked** and `Anything still using them will be refused from now on.` Dosya initiates invalidation for the API-key cache and any tied S3 access-key cache. Another worker isolate or edge cache can continue using a cached authorization until its entry expires.
6. Send harmless requests with the retired secret until authentication is refused, allowing up to five minutes for the longest API-key cache. Keep the old client stopped during that window, then resume only with the tested replacement.

A Free account can hold three API keys; the absolute user cap is 20. Keys cannot be edited after creation. Revoking a `wp_site` key also disconnects that WordPress site because the key is its only credential.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list showing named credentials and their management controls for identifying the correct key to revoke." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Use descriptive names so a compromised or retired client can be revoked precisely. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The old row disappears from **API keys**, cache invalidation begins, and the retired secret is rejected within five minutes. A routine replacement retains only the copied restrictions and passes its boundary test; an emergency rotation keeps the old client stopped until rejection is verified.

**Revoke failed** leaves the outcome uncertain. Reload the list: if the row remains, stop the client and retry; if it is absent, test the old secret rather than creating duplicate replacements.

**The replacement cannot be created.** Remove an unused key or upgrade when Dosya reports `The free plan allows 3 API keys. Delete one or upgrade for more.` The global refusal is `Maximum of 20 API keys reached`.

## Related guides

- [Create and manage an API key](/developers/api-key)
- [Choose key permission](/developers/api-key-scopes)
- [Respond to suspicious activity](/account/suspicious-activity)
