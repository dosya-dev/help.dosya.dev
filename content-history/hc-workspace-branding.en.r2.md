---
{
  "articleId": "hc-workspace-branding",
  "locale": "en",
  "revision": 2,
  "title": "Configure workspace branding",
  "summary": "Set approved workspace identity and sharing assets, preview recipient-facing changes, and verify contrast before saving.",
  "category": "workspaces",
  "articleSlug": "branding",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current configure workspace branding workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-share-branding",
    "hc-share-preview-branding"
  ],
  "keywords": [
    "workspace branding",
    "workspace logo",
    "brand settings",
    "cloud storage"
  ]
}
---
Workspace branding should identify the organization without obscuring file information or recipient access controls.

Workspace branding can appear on recipient-facing pages, so use approved assets and readable colours. A preview is the safest place to catch cropped logos or low contrast.

<figure class="help-screenshot"><a href="/screenshots/branding-workflow-map-2026-10-14.webp"><img src="/screenshots/branding-workflow-map-2026-10-14.webp" alt="Four-step interface map for configure workspace branding, from opening the correct control through verifying the saved result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a href="/screenshots/branding-workflow-map-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: configure workspace branding

1. Open the intended workspace Settings.
2. Open Branding.
3. Update approved name, image, colors or message.
4. Use the available preview.
5. Check desktop and narrow layouts.
6. Save and test a non-confidential recipient page.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya workspace security settings showing sharing and access controls for the active workspace." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Workspace controls apply to the active workspace and combine with roles. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open a non-confidential share page after saving and check the workspace name, logo, message and primary controls at desktop and narrow widths.

Refresh or reopen the relevant page before relying on the result. If the refreshed state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The configure workspace branding workflow completes for the test item and its result remains visible after a refresh or reconnect.

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

Check the account email and workspace name before the action and again when verifying the result. Similar names in another workspace refer to separate cloud-storage data and access policies.

### What should I include when asking support for help?

Include the action time, client and version, active workspace, expected result and exact nonsecret error. Never include passwords, API keys, webhook secrets, recovery codes, payment details or confidential file contents.

## Related guides

- [Customize sharing branding](/sharing/custom-branding)
- [Preview sharing branding](/sharing/preview-branding)
