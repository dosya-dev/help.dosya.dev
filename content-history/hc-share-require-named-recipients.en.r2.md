---
{
  "articleId": "hc-share-require-named-recipients",
  "locale": "en",
  "revision": 2,
  "title": "Require named recipients for a sensitive share",
  "summary": "Add only intended recipient addresses and enable their verification flow. Verify that unlisted visitors cannot access the protected content.",
  "category": "sharing",
  "articleSlug": "share-require-named-recipients",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Require named recipients for a sensitive share” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-create-link",
    "hc-password-link"
  ],
  "keywords": [
    "share require named recipients",
    "Sharing-link security controls",
    "Dosya help",
    "file sharing"
  ]
}
---
This guide covers **Require named recipients for a sensitive share** in Dosya. The main action is to add only intended recipient addresses and enable their verification flow; the decisive check is whether unlisted visitors cannot access the protected content.

Keep the link or request, recipient access, expiration, password, and download policy in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/share-require-named-recipients-help-workflow-2026-10-14.webp"><img src="/screenshots/share-require-named-recipients-help-workflow-2026-10-14.webp" alt="Four-step workflow map for require named recipients for a sensitive share, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for require named recipients for a sensitive share: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/share-require-named-recipients-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open a Dosya sharing link in the current released client.
- Confirm the active account and workspace, then identify share recipient settings.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal data out of screenshots and support messages.

## Steps: require named recipients for a sensitive share

1. Open a Dosya sharing link and confirm the active account and workspace.
2. Locate share recipient settings and verify its name or identifying details.
3. Add only intended recipient addresses and enable their verification flow.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that unlisted visitors cannot access the protected content.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-links-overview-2026-10-13.webp"><img src="/screenshots/share-links-overview-2026-10-13.webp" alt="Dosya sharing links overview for passwords, expiry, recipients, and access controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test the link in a private browser window before sending it to real recipients. <a href="/screenshots/share-links-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Unlisted visitors cannot access the protected content. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Test recipient access in a private browser window so an existing owner session does not hide a permission problem. If the result differs from what you expected, stop before repeating the action. Preserve the link status and nonsecret error text, then check expiration, password, recipient rules, and workspace sharing policy.

## Expected result

The controlled workflow completes and unlisted visitors cannot access the protected content. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The expected control is missing.** Return to a Dosya sharing link, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Add a password](/sharing/password-link)
