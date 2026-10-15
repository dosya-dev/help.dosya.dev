---
{
  "articleId": "hc-workspace-invite-resend-existing",
  "locale": "en",
  "revision": 3,
  "title": "Resend a pending workspace invitation",
  "summary": "Read the role, inviter and remaining expiry. An expired invitation must be replaced and cannot be resent. Verify that wait for Invite resent, which confirms that the invitation email was sent to that address again.",
  "category": "workspaces",
  "articleSlug": "workspace-invite-resend-existing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Resend a pending workspace invitation” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
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
This guide covers **Resend a pending workspace invitation** in Dosya. The main action is to read the role, inviter and remaining expiry. An expired invitation must be replaced and cannot be resent; the decisive check is whether wait for Invite resent, which confirms that the invitation email was sent to that address again.

Keep the active workspace, member, role, folder boundary, and applicable policy in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp" alt="Four-step workflow map for resend a pending workspace invitation, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for resend a pending workspace invitation: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/workspace-invite-resend-existing-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

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

## Verify the result

After completing the steps, check the expected result: Wait for Invite resent, which confirms that the invitation email was sent to that address again. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result from the affected member or role’s perspective whenever the change controls access. If the result differs from what you expected, stop before repeating the action. Check the active workspace and your administrative role before repeating a member, policy, or permission change.

## Expected result

Dosya reports **Invite resent**, the recipient receives another copy of the invitation, and exactly one pending row remains with the original role, expiry and invitation URL.

## Limits and important details

- The same invite can be resent only while it is pending, unrevoked and unexpired.
- A five-minute cooldown prevents repeated email sends to the same recipient.
- Resending does not extend the invitation expiry or change its role.
- The sender needs the `invite_members` permission, and email delivery must be available.
- **Copy link** exposes the same invitation URL. Send it only through a trusted channel.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**Dosya says the invite was just resent.** Wait for the displayed cooldown, then retry once.

**The invite expired.** Create a new invitation after rechecking the email, role and folder boundary.

**The recipient still receives nothing.** Use **Copy link** only through a trusted direct channel, or contact private support with the recipient domain, approximate send time and nonsecret invite ID.

**There are duplicate rows.** Compare the addresses, roles and expiry. Revoke unnecessary rows and leave one verified invitation active.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Review pending invitations](/workspaces/workspace-pending-invites)
- [Correct an invitation sent to the wrong email](/workspaces/workspace-invite-correct-email)
- [Create and control invitation links](/workspaces/invite-links)
