---
{
  "articleId": "hc-cli-auth",
  "locale": "en",
  "revision": 4,
  "title": "Authenticate the Dosya CLI",
  "summary": "Sign the CLI in with the supported interactive flow or a dedicated secret, then verify the selected account without printing credentials.",
  "category": "developers",
  "articleSlug": "cli-authenticate",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-cli-install",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "CLI login",
    "CLI authentication",
    "CLI token",
    "cloud storage"
  ]
}
---
Authenticate only after confirming the CLI binary and account. Automation should use a separately revocable least-privilege credential.

Interactive sign-in and automation credentials serve different contexts. Avoid command-line arguments that place a reusable secret in shell history or process listings.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-authenticate-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cli-authenticate-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" alt="Four-step interface map for authenticate the dosya cli, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cli-authenticate-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cli-authenticate-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: authenticate the dosya cli

1. Open the CLI authentication help.
2. Choose the supported interactive or automation method.
3. Complete sign-in without placing a secret in shell history.
4. Run the account or status command.
5. Confirm the expected account and active workspace.
6. Revoke the test credential when it is no longer needed.

<figure class="help-screenshot"><a href="/screenshots/api-key-listed-2026-10-10.webp"><img src="/screenshots/api-key-listed-2026-10-10.webp" alt="Dosya API-key list showing named technical credentials that can be identified and revoked independently." width="1160" height="750" loading="lazy" decoding="async" /></a><figcaption>Name each credential for the client and task it serves. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Run the status or account command and confirm the expected identity and workspace. Revoke test credentials after the automation path is proven.

## Expected result

The authenticate the dosya cli workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Related guides

- [Install the CLI](/developers/cli-install)
- [Choose key permission](/developers/api-key-scopes)
