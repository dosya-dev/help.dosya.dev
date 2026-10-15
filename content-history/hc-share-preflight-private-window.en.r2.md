---
{
  "articleId": "hc-share-preflight-private-window",
  "locale": "en",
  "revision": 2,
  "title": "Preflight a sharing link in a private window",
  "summary": "Copy the link, open a private browser window, and complete the same steps a recipient will see. Verify that the share opens with the intended password, identity, expiry, and download controls.",
  "category": "sharing",
  "articleSlug": "share-preflight-private-window",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Preflight a sharing link in a private window” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-create-link",
    "hc-share-delivery-audit"
  ],
  "keywords": [
    "share preflight private window",
    "Sharing-link delivery lifecycle",
    "Dosya help",
    "file sharing"
  ]
}
---
This guide covers **Preflight a sharing link in a private window** in Dosya. The main action is to copy the link, open a private browser window, and complete the same steps a recipient will see; the decisive check is whether the share opens with the intended password, identity, expiry, and download controls.

Keep the link or request, recipient access, expiration, password, and download policy in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp"><img src="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp" alt="Four-step workflow map for preflight a sharing link in a private window, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for preflight a sharing link in a private window: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/share-preflight-private-window-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the Dosya sharing-link management view in the current released client.
- Confirm the active account and workspace, then identify new sharing link with final access settings.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: preflight a sharing link in a private window

1. Open the Dosya sharing-link management view and confirm the active account and workspace.
2. Locate new sharing link with final access settings and verify its name or identifying details.
3. Copy the link, open a private browser window, and complete the same steps a recipient will see.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the share opens with the intended password, identity, expiry, and download controls.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/share-created-2026-10-10.webp"><img src="/screenshots/share-created-2026-10-10.webp" alt="Dosya confirmation for a newly created sharing link and its delivery controls." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Test the final recipient experience before sending sensitive or time-limited content. <a href="/screenshots/share-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The share opens with the intended password, identity, expiry, and download controls. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Test recipient access in a private browser window so an existing owner session does not hide a permission problem. If the result differs from what you expected, stop before repeating the action. Preserve the link status and nonsecret error text, then check expiration, password, recipient rules, and workspace sharing policy.

## Expected result

The controlled workflow completes and the share opens with the intended password, identity, expiry, and download controls. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the Dosya sharing-link management view, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Create a link](/sharing/create-link)
- [Audit delivery](/sharing/audit-delivery)
