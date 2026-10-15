---
{
  "articleId": "hc-extension-destination-missing",
  "locale": "en",
  "revision": 2,
  "title": "Recover a missing extension destination",
  "summary": "Confirm workspace, refresh the picker, check folder access in Dosya, and reconnect only if the listing remains stale. Verify that the authorized destination appears or its access restriction is clear.",
  "category": "extension",
  "articleSlug": "extension-destination-missing",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Recover a missing extension destination” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-extension-reconnect",
    "hc-extension-permissions"
  ],
  "keywords": [
    "extension destination missing",
    "Browser extension troubleshooting details",
    "Dosya help",
    "browser file upload"
  ]
}
---
This guide covers **Recover a missing extension destination** in Dosya. The main action is to confirm workspace, refresh the picker, check folder access in Dosya, and reconnect only if the listing remains stale; the decisive check is whether the authorized destination appears or its access restriction is clear.

Keep the browser profile, signed-in account, site permission, destination workspace, and folder in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp"><img src="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp" alt="Four-step workflow map for recover a missing extension destination, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for recover a missing extension destination: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/extension-destination-missing-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open the browser extension menu and Save to Dosya panel in the current released client.
- Confirm the active account and workspace, then identify folder picker that does not show the expected folder.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: recover a missing extension destination

1. Open the browser extension menu and Save to Dosya panel and confirm the active account and workspace.
2. Locate folder picker that does not show the expected folder and verify its name or identifying details.
3. Confirm workspace, refresh the picker, check folder access in Dosya, and reconnect only if the listing remains stale.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the authorized destination appears or its access restriction is clear.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/extension-consent-2026-10-10.webp"><img src="/screenshots/extension-consent-2026-10-10.webp" alt="Browser consent screen for the Save to Dosya extension." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Check the active browser profile, site permission, and Dosya session before reinstalling. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The authorized destination appears or its access restriction is clear. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Open the saved result in Dosya and compare it with the selected page, screenshot, or file. If the result differs from what you expected, stop before repeating the action. Check the active browser profile, site permission, extension session, destination access, and the visible extension error.

## Expected result

The controlled workflow completes and the authorized destination appears or its access restriction is clear. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to the browser extension menu and Save to Dosya panel, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Reconnect the browser extension](/extension/extension-reconnect)
- [Review extension permissions](/extension/extension-permissions)
