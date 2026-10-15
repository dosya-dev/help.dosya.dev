---
{
  "articleId": "hc-sessions-verify-revoked-device",
  "locale": "en",
  "revision": 4,
  "title": "Verify that a revoked session is closed",
  "summary": "Revoke that session from the primary device, then refresh or navigate in the secondary browser. Verify that the secondary browser returns to sign-in and the revoked entry no longer appears active.",
  "category": "account",
  "articleSlug": "sessions-verify-revoked-device",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed. Visual and repeated copy reviewed against this guide’s existing task instructions and screenshot subject; migration: apps/help/scripts/rewrite-task-copy.mjs. No product behavior or image assets changed.",
  "related": [
    "hc-sessions",
    "hc-revoke-other-sessions"
  ],
  "keywords": [
    "sessions verify revoked device",
    "Active-session management details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
This guide covers **Verify that a revoked session is closed** in Dosya. The main action is to revoke that session from the primary device, then refresh or navigate in the secondary browser; the decisive check is whether the secondary browser returns to sign-in and the revoked entry no longer appears active.

<figure class="help-screenshot"><a href="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp" alt="Workflow for “Verify that a revoked session is closed”: revoke that session from the primary device, then refresh or navigate in the secondary browser; the secondary browser returns to sign-in and the revoked entry no longer appears active." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow for “Verify that a revoked session is closed”: revoke that session from the primary device, then refresh or navigate in the secondary browser; the secondary browser returns to sign-in and the revoked entry no longer appears active. <a href="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Account settings > Security > Active sessions in the current released client.
- Confirm the active account and workspace, then identify controlled secondary browser session.

## Steps: verify that a revoked session is closed

1. Open Account settings > Security > Active sessions and confirm the active account and workspace.
2. Locate controlled secondary browser session and verify its name or identifying details.
3. Revoke that session from the primary device, then refresh or navigate in the secondary browser.
4. Confirm that the secondary browser returns to sign-in and the revoked entry no longer appears active.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Reference for “Verify that a revoked session is closed”: Dosya active sessions view listing devices and recent activity." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify that a revoked session is closed”: Dosya active sessions view listing devices and recent activity. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

**Safety note.** Compare device, browser, time, and location context before revoking a session.

## Verify the result

After completing the steps, check the expected result: The secondary browser returns to sign-in and the revoked entry no longer appears active.

## Expected result

The controlled workflow completes and the secondary browser returns to sign-in and the revoked entry no longer appears active.

## Troubleshooting

**The expected control is missing.** Return to Account settings > Security > Active sessions, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
