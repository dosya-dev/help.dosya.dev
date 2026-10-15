---
{
  "articleId": "hc-api-list-files",
  "locale": "en",
  "revision": 3,
  "title": "List files with the REST API",
  "summary": "Send a workspace-scoped list request and inspect the response, then verify that the response contains only accessible items.",
  "category": "developers",
  "articleSlug": "api-list-files",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current list files with the rest api workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-rest-api-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "api list files",
    "REST API file workflows",
    "Dosya help",
    "cloud storage"
  ]
}
---
Use this workflow to list files with the REST API in the intended account or workspace.

A list request returns only items allowed by the key’s workspace, folder and read scope. Pagination may require additional requests for a complete set.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-list-files-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-list-files-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-list-files-workflow-map-2026-10-14.webp" alt="Four-step interface map for list files with the rest api, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-light-href="/screenshots/api-list-files-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/api-list-files-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Open the REST API files endpoint in the current released Dosya client.
- Confirm the active account and workspace, then identify a read-scoped test key.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: list files with the REST API

1. Open the REST API files endpoint and confirm the active workspace.
2. Select a read-scoped test key and check its name or identifying details.
3. Send a workspace-scoped list request and inspect the response.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the response contains only accessible items.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/api-key-permission-2026-10-10.webp"><img src="/screenshots/api-key-permission-2026-10-10.webp" alt="Dosya API-key permission selector showing the access granted to an integration." width="582" height="666" loading="lazy" decoding="async" /></a><figcaption>Use a disposable key with the narrowest scope and a non-production workspace. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Compare the response with a known folder, inspect pagination fields and confirm an inaccessible path is not returned.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The workflow completes for the controlled test and the response contains only accessible items. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to the REST API files endpoint, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [REST API quickstart](/developers/rest-api-quickstart)
- [API-key scopes](/developers/api-key-scopes)
