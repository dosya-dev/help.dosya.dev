---
{
  "articleId": "hc-workspace-region-routing",
  "locale": "en",
  "revision": 2,
  "title": "Understand workspace storage region and routing",
  "summary": "Identify the durable workspace storage location, distinguish it from transfer routing, and plan a new workspace when a different location is required.",
  "category": "workspaces",
  "articleSlug": "region-and-routing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current understand workspace storage region and routing workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-create-workspace-region",
    "hc-switch-workspaces"
  ],
  "keywords": [
    "storage region",
    "data location",
    "transfer routing",
    "cloud storage"
  ]
}
---
The workspace region is the durable storage choice made at creation; transfer edges or network routes do not silently migrate stored files.

A workspace has a durable storage location selected at creation. A nearby network route can improve transfer handling without changing where the workspace data is stored.

<figure class="help-screenshot"><a href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp"><img src="/screenshots/region-and-routing-workflow-map-2026-10-14.webp" alt="Four-step interface map for understand workspace storage region and routing, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/region-and-routing-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: understand workspace storage region and routing

1. Open workspace details and record its storage location.
2. Compare it with the region chosen at creation.
3. Treat a nearby transfer route as transport rather than durable storage.
4. Check current region availability before creating another workspace.
5. Plan an explicit verified transfer when location must change.
6. Confirm destination copies before removing originals.

<figure class="help-screenshot"><a href="/screenshots/workspace-location-picker-2026-10-12.webp"><img src="/screenshots/workspace-location-picker-2026-10-12.webp" alt="Dosya workspace location picker showing durable storage region choices before workspace creation." width="448" height="780" loading="lazy" decoding="async" /></a><figcaption>Choose the durable storage location before creating the workspace. <a href="/screenshots/workspace-location-picker-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Confirm the workspace region in its details. When a different location is required, verify copies in the destination workspace before removing any source data.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The understand workspace storage region and routing workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Create a workspace and choose location](/workspaces/create-and-choose-region)
- [Switch workspaces](/account/switch-workspaces)
