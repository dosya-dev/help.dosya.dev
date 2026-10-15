---
{
  "articleId": "hc-cli-separate-profiles",
  "locale": "en",
  "revision": 3,
  "title": "Separate Dosya CLI profiles",
  "summary": "Create distinct named profiles or isolated configuration paths, authenticate each deliberately, and print nonsecret account context. Verify that each command targets the selected account and workspace without credential overlap.",
  "category": "developers",
  "articleSlug": "cli-separate-profiles",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-cli-auth",
    "hc-cli-json-output"
  ],
  "keywords": [
    "cli separate profiles",
    "Dosya CLI automation details",
    "Dosya help",
    "cloud storage API"
  ]
}
---
This guide covers **Separate Dosya CLI profiles** in Dosya. The main action is to create distinct named profiles or isolated configuration paths, authenticate each deliberately, and print nonsecret account context; the decisive check is whether each command targets the selected account and workspace without credential overlap.

<figure class="help-screenshot"><a href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp"><img src="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp" alt="Four-step workflow map for separate dosya cli profiles, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for separate dosya cli profiles: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cli-separate-profiles-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a terminal running the Dosya CLI in the current released client.
- Confirm the active account and workspace, then identify two accounts or automation environments.

## Steps: separate Dosya CLI profiles

1. Open a terminal running the Dosya CLI and confirm the active account and workspace.
2. Locate two accounts or automation environments and verify its name or identifying details.
3. Create distinct named profiles or isolated configuration paths, authenticate each deliberately, and print nonsecret account context.
4. Confirm that each command targets the selected account and workspace without credential overlap.

<figure class="help-screenshot"><a href="/screenshots/developer-cli-overview-2026-10-13.webp"><img src="/screenshots/developer-cli-overview-2026-10-13.webp" alt="Dosya CLI overview for authentication, structured output, and transfers." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use restricted profiles, structured output, and exit codes so scripts can fail safely. <a href="/screenshots/developer-cli-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Each command targets the selected account and workspace without credential overlap.

## Expected result

The controlled workflow completes and each command targets the selected account and workspace without credential overlap.

## Troubleshooting

**The expected control is missing.** Return to a terminal running the Dosya CLI, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Authenticate the Dosya CLI](/developers/cli-authenticate)
- [Use CLI JSON output](/developers/cli-json-output)
