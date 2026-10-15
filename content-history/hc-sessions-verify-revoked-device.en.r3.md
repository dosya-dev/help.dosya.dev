---
{
  "articleId": "hc-sessions-verify-revoked-device",
  "locale": "en",
  "revision": 3,
  "title": "Verify that a revoked session is closed",
  "summary": "Revoke that session from the primary device, then refresh or navigate in the secondary browser. Verify that the secondary browser returns to sign-in and the revoked entry no longer appears active.",
  "category": "account",
  "articleSlug": "sessions-verify-revoked-device",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
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

<figure class="help-screenshot"><a href="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp" alt="Four-step workflow map for verify that a revoked session is closed, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for verify that a revoked session is closed: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sessions-verify-revoked-device-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Account settings > Security > Active sessions in the current released client.
- Confirm the active account and workspace, then identify controlled secondary browser session.

## Steps: verify that a revoked session is closed

1. Open Account settings > Security > Active sessions and confirm the active account and workspace.
2. Locate controlled secondary browser session and verify its name or identifying details.
3. Revoke that session from the primary device, then refresh or navigate in the secondary browser.
4. Confirm that the secondary browser returns to sign-in and the revoked entry no longer appears active.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Dosya active sessions view listing devices and recent activity." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Compare device, browser, time, and location context before revoking a session. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The secondary browser returns to sign-in and the revoked entry no longer appears active.

## Expected result

The controlled workflow completes and the secondary browser returns to sign-in and the revoked entry no longer appears active.

## Troubleshooting

**The expected control is missing.** Return to Account settings > Security > Active sessions, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
