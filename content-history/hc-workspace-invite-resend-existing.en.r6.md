---
{
  "articleId": "hc-workspace-invite-resend-existing",
  "locale": "en",
  "revision": 6,
  "title": "Resend a pending workspace invitation",
  "summary": "Resend one active seven-day invitation without changing its token, role or expiry, observe the five-minute cooldown, and verify the pending row.",
  "category": "workspaces",
  "articleSlug": "workspace-invite-resend-existing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/teams.tsx, apps/api/src/pages/api/team/invites/[id]/resend.ts, apps/api/src/pages/api/team.ts, and packages/test-harness/tests/team.int.test.ts. No production email was sent.",
  "related": [
    "hc-workspace-pending-invites",
    "hc-workspace-invite-correct-email",
    "hc-workspace-invite-links"
  ],
  "keywords": [
    "resend workspace invitation",
    "pending team invite email",
    "Dosya invite not received",
    "avoid duplicate invitation",
    "workspace member invite",
    "team cloud storage",
    "Dosya help"
  ]
}
---
Resending uses the same email-bound invitation and remaining expiry. It sends another message but does not create a second pending row, extend seven-day validity, or alter the assigned role.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp" alt="Four-step resend map showing the exact pending email, active invitation state, Invite resent receipt, and acceptance from the newest message." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Resend the existing active row once, preserve its role and expiry, and have the recipient use the newest email with the matching account. <a class="workflow-map-full" href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Your role needs **Invite members**, and outbound email must be configured.
- Confirm the exact recipient, inviter, role, and remaining expiry under **Pending invites**.
- Ask the recipient to check spam, quarantine, and filtering before another send.

## Steps

1. Open **Team** and locate the exact email address under **Pending invites**.
2. Read the role and **expires in** value; an accepted, revoked, or expired invitation cannot be resent.
3. Select **Resend** once on that row rather than creating another invitation.
4. Wait for **Invite resent — The invitation email was sent to _address_ again.**
5. Confirm the page still contains one pending row with the original role and expiry.
6. Ask the recipient to use the newest message and sign in with the same email address before accepting.

<figure class="help-screenshot"><a href="/screenshots/workspace-pending-2026-10-10.webp"><img src="/screenshots/workspace-pending-2026-10-10.webp" alt="Dosya Team page Pending invites list with recipient, role, Copy link, Resend and Revoke controls." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>Use <strong>Resend</strong> on the verified existing row. Creating another invite is unnecessary and can make access review harder. <a href="/screenshots/workspace-pending-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Delivery and timing

A five-minute cooldown begins with the original send and every successful resend. A premature retry returns **This invite was just re-sent. Try again in … minute(s).** The server updates `last_sent_at` only after email delivery succeeds.

The resend keeps the same URL and expiry date. **Copy link** exposes that bearer URL and should be used only through a trusted direct channel.

## Expected result

Dosya reports **Invite resent**, one pending record remains, and the recipient can open the unchanged email-bound invitation before its original expiry.

## Troubleshooting

**This invite has expired. Send a new one.** Create a replacement after rechecking the address and role.

**The email could not be sent. Try again later.** Delivery failed and the cooldown timestamp was not advanced; wait before one controlled retry.

**The recipient sees an email mismatch.** They must sign in with the exact invited address; resending does not retarget the invitation.

## Related guides

- [Review pending invitations](/workspaces/workspace-pending-invites)
- [Correct an invitation sent to the wrong email](/workspaces/workspace-invite-correct-email)
- [Create and control invitation links](/workspaces/invite-links)
