---
{
  "articleId": "hc-two-factor-reenroll-after-recovery",
  "locale": "en",
  "revision": 2,
  "title": "Re-enroll two-factor authentication after recovery",
  "summary": "Review sessions, remove the unavailable factor, enroll a new authenticator, and generate a new recovery-code set. Verify that future sign-ins use the new factor and the old recovery material is retired.",
  "category": "account",
  "articleSlug": "two-factor-reenroll-after-recovery",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Re-enroll two-factor authentication after recovery” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-two-factor",
    "hc-two-factor-recovery"
  ],
  "keywords": [
    "two factor reenroll after recovery",
    "Two-factor authentication operations",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
This guide covers **Re-enroll two-factor authentication after recovery** in Dosya. The main action is to review sessions, remove the unavailable factor, enroll a new authenticator, and generate a new recovery-code set; the decisive check is whether future sign-ins use the new factor and the old recovery material is retired.

Keep the signed-in account, security state, plan, billing period, and saved preference in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/two-factor-reenroll-after-recovery-help-workflow-2026-10-14.webp"><img src="/screenshots/two-factor-reenroll-after-recovery-help-workflow-2026-10-14.webp" alt="Four-step workflow map for re-enroll two-factor authentication after recovery, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for re-enroll two-factor authentication after recovery: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/two-factor-reenroll-after-recovery-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Account settings > Security > Two-factor authentication in the current released client.
- Confirm the active account and workspace, then identify account restored with a recovery method.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: re-enroll two-factor authentication after recovery

1. Open Account settings > Security > Two-factor authentication and confirm the active account and workspace.
2. Locate account restored with a recovery method and verify its name or identifying details.
3. Review sessions, remove the unavailable factor, enroll a new authenticator, and generate a new recovery-code set.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that future sign-ins use the new factor and the old recovery material is retired.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Dosya two-factor authentication setup showing an authenticator QR code." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Finish enrollment only after a fresh authenticator code succeeds and recovery codes are stored safely. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Future sign-ins use the new factor and the old recovery material is retired. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Reopen the relevant account page and confirm the displayed value belongs to the intended account. If the result differs from what you expected, stop before repeating the action. Capture the time and nonsecret status, then check session, verification, billing, or policy requirements before trying again.

## Expected result

The controlled workflow completes and future sign-ins use the new factor and the old recovery material is retired. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to Account settings > Security > Two-factor authentication, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Recover two-factor access](/account/two-factor-recovery)
