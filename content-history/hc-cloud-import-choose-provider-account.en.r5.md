---
{
  "articleId": "hc-cloud-import-choose-provider-account",
  "locale": "en",
  "revision": 5,
  "title": "Choose the correct cloud-provider account",
  "summary": "Identify the exact connected provider account by email, switch without carrying stale state, and confirm the intended source before starting import.",
  "category": "integrations",
  "articleSlug": "cloud-import-choose-provider-account",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/components/cloud-import/connected-accounts-card.tsx, apps/web/src/components/cloud-import/provider-picker-dialog.tsx, apps/web/src/api/cloud-import.ts, apps/api/src/pages/api/cloud/accounts/index.ts. Production behavior for “Choose the correct cloud-provider account” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-browse-provider"
  ],
  "keywords": [
    "cloud import choose provider account",
    "Cloud-import provider controls",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
Dosya stores each linked Google Drive, OneDrive, or Dropbox identity as a separate account row. The picker exposes an email selector only when more than one account for that provider is connected.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Choose the correct cloud-provider account: Review Connected accounts, match the intended provider email. Choose the same email in the picker account selector. Confirm the switch returned to Home and cleared prior selections. Start import, verify the receipt names the reviewed email." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Review Connected accounts, match the intended provider email.” and ends with “Start import, verify the receipt names the reviewed email.” <a class="workflow-map-full" href="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14.webp" data-light-href="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/cloud-import-choose-provider-account-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open the provider setup page and inspect **Connected accounts**, where each row shows its provider email and relative connection time.
2. Use the **Import** button on the intended row when available; that row’s account ID is preselected in the picker.
3. If you opened the general **Import files** button, choose the matching email from the picker’s account selector.
4. After switching, verify the breadcrumb returned to **Home**, the list reloaded, and the selected count reset instead of carrying another account’s folder IDs.
5. Within the chosen cloud-provider email, browse one identifying folder or filename, then select only the required import roots.
6. Choose **Import** and confirm the **Import started** toast says **From** followed by the same email you reviewed.

The account name supplied by a provider is stored but the current selection surface uses `account_email`; use that email as the decisive identifier. Accounts are user-scoped rather than workspace-scoped, while the import is written to the workspace active in Dosya. Switching accounts intentionally drops the previous breadcrumb and checks.

## Expected result

The source email in the start toast and progress card matches the account selected on the integration page. Remote names come from that identity, and no selection from another linked account survives the switch.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Browse provider files](/integrations/cloud-import-browse-provider)
