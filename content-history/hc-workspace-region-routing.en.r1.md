---
{"articleId":"hc-workspace-region-routing","locale":"en","revision":1,"title":"Understand workspace storage region and routing","summary":"Identify the durable workspace storage location, distinguish it from transfer routing, and plan a new workspace when a different location is required.","category":"workspaces","articleSlug":"region-and-routing","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current understand workspace storage region and routing workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-create-workspace-region","hc-switch-workspaces"],"keywords":["storage region","data location","transfer routing"]}
---
The workspace region is the durable storage choice made at creation; transfer edges or network routes do not silently migrate stored files.

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

## Related guides

- [Create a workspace and choose location](/workspaces/create-and-choose-region)
- [Switch workspaces](/account/switch-workspaces)
