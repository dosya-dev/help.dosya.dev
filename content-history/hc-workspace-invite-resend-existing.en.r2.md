---
{"articleId":"hc-workspace-invite-resend-existing","locale":"en","revision":2,"title":"Resend a pending workspace invitation","summary":"Find the existing pending invitation, verify its email, role and expiry, then resend the same valid link without creating a duplicate invite.","category":"workspaces","articleSlug":"workspace-invite-resend-existing","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web Team page, pending-invite Resend control, five-minute resend cooldown, existing-token reuse, expiry checks and permission enforcement against local product source and relevant tests on 2026-10-14. The screenshot uses isolated workspace data.","related":["hc-workspace-pending-invites","hc-workspace-invite-correct-email","hc-workspace-invite-links"],"keywords":["resend workspace invitation","pending team invite email","Dosya invite not received","avoid duplicate invitation","workspace member invite"]}
---
Use **Resend** on the existing Pending invites row when the recipient did not receive the original email. Dosya sends the same still-valid invitation again; it does not create another pending row or a new invitation token.

## Before you start

- Confirm the active workspace and intended recipient address.
- Ask the recipient to check spam, junk, quarantine and filtered inboxes.
- Review the existing invite's role and expiry before resending it.
- If the address is wrong, revoke and replace the invitation instead of resending it.

## Steps: resend the existing invitation

1. Open **Team** in the correct workspace.
2. Under **Pending invites**, find the exact recipient email.
3. Read the role, inviter and remaining expiry. An expired invitation must be replaced and cannot be resent.
4. If the row is correct, select **Resend** once.
5. Wait for **Invite resent**, which confirms that the invitation email was sent to that address again.
6. Confirm that Pending invites still contains one row for the recipient.
7. Ask the recipient to open the newest email and verify the workspace and role before accepting.

<figure class="help-screenshot"><a href="/screenshots/workspace-pending-2026-10-10.webp"><img src="/screenshots/workspace-pending-2026-10-10.webp" alt="Dosya Team page Pending invites list with recipient, role, Copy link, Resend and Revoke controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use <strong>Resend</strong> on the verified existing row. Creating another invite is unnecessary and can make access review harder. <a href="/screenshots/workspace-pending-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Dosya reports **Invite resent**, the recipient receives another copy of the invitation, and exactly one pending row remains with the original role, expiry and invitation URL.

## Limits and important details

- The same invite can be resent only while it is pending, unrevoked and unexpired.
- A five-minute cooldown prevents repeated email sends to the same recipient.
- Resending does not extend the invitation expiry or change its role.
- The sender needs the `invite_members` permission, and email delivery must be available.
- **Copy link** exposes the same invitation URL. Send it only through a trusted channel.

## Troubleshooting

**Dosya says the invite was just resent.** Wait for the displayed cooldown, then retry once.

**The invite expired.** Create a new invitation after rechecking the email, role and folder boundary.

**The recipient still receives nothing.** Use **Copy link** only through a trusted direct channel, or contact private support with the recipient domain, approximate send time and nonsecret invite ID.

**There are duplicate rows.** Compare the addresses, roles and expiry. Revoke unnecessary rows and leave one verified invitation active.

## Related guides

- [Review pending invitations](/workspaces/workspace-pending-invites)
- [Correct an invitation sent to the wrong email](/workspaces/workspace-invite-correct-email)
- [Create and control invitation links](/workspaces/invite-links)
