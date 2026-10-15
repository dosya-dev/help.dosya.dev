---
{
  "articleId": "hc-sessions-lost-device-response",
  "locale": "en",
  "revision": 2,
  "title": "Secure Dosya after losing a signed-in device",
  "summary": "Change the password when applicable, revoke the lost-device session, review two-factor settings, and inspect security activity. Verify that the lost device can no longer use its previous session.",
  "category": "account",
  "articleSlug": "sessions-lost-device-response",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Secure Dosya after losing a signed-in device” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-sessions",
    "hc-revoke-other-sessions"
  ],
  "keywords": [
    "sessions lost device response",
    "Active-session management details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
This guide covers **Secure Dosya after losing a signed-in device** in Dosya. The main action is to change the password when applicable, revoke the lost-device session, review two-factor settings, and inspect security activity; the decisive check is whether the lost device can no longer use its previous session.

Keep the signed-in account, security state, plan, billing period, and saved preference in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/sessions-lost-device-response-help-workflow-2026-10-14.webp"><img src="/screenshots/sessions-lost-device-response-help-workflow-2026-10-14.webp" alt="Four-step workflow map for secure dosya after losing a signed-in device, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for secure dosya after losing a signed-in device: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/sessions-lost-device-response-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Account settings > Security > Active sessions in the current released client.
- Confirm the active account and workspace, then identify account accessed from a replacement trusted device.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: secure Dosya after losing a signed-in device

1. Open Account settings > Security > Active sessions and confirm the active account and workspace.
2. Locate account accessed from a replacement trusted device and verify its name or identifying details.
3. Change the password when applicable, revoke the lost-device session, review two-factor settings, and inspect security activity.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the lost device can no longer use its previous session.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/sessions-review-2026-10-10.webp"><img src="/screenshots/sessions-review-2026-10-10.webp" alt="Dosya active sessions view listing devices and recent activity." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Compare device, browser, time, and location context before revoking a session. <a href="/screenshots/sessions-review-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The lost device can no longer use its previous session. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Reopen the relevant account page and confirm the displayed value belongs to the intended account. If the result differs from what you expected, stop before repeating the action. Capture the time and nonsecret status, then check session, verification, billing, or policy requirements before trying again.

## Expected result

The controlled workflow completes and the lost device can no longer use its previous session. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to Account settings > Security > Active sessions, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Review active sessions](/account/sessions)
- [Revoke other sessions](/account/revoke-other-sessions)
