---
{
  "articleId": "hc-lightroom-connect-catalog",
  "locale": "en",
  "revision": 2,
  "title": "Connect a Lightroom catalog to Dosya",
  "summary": "Choose Connect, sign in in the opened browser, and approve the code shown by Lightroom. Verify that lightroom reports the chosen workspace as connected.",
  "category": "integrations",
  "articleSlug": "lightroom-connect-catalog",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Connect a Lightroom catalog to Dosya” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-api-key",
    "hc-choose-app"
  ],
  "keywords": [
    "lightroom connect catalog",
    "Lightroom Classic setup",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Connect a Lightroom catalog to Dosya** in Dosya. The main action is to choose Connect, sign in in the opened browser, and approve the code shown by Lightroom; the decisive check is whether lightroom reports the chosen workspace as connected.

Keep the connected provider account, Dosya workspace, authorization scope, source, destination, and job state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp" alt="Four-step workflow map for connect a lightroom catalog to dosya, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for connect a lightroom catalog to dosya: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/lightroom-connect-catalog-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Lightroom Classic and Integrations > Lightroom Classic in the current released client.
- Confirm the active account and workspace, then identify dosya.dev entry in Plug-in Manager.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: connect a Lightroom catalog to Dosya

1. Open Lightroom Classic and Integrations > Lightroom Classic and confirm the active account and workspace.
2. Locate dosya.dev entry in Plug-in Manager and verify its name or identifying details.
3. Choose Connect, sign in in the opened browser, and approve the code shown by Lightroom.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that Lightroom reports the chosen workspace as connected.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic integration overview with the plug-in connection and gallery workflow." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use Lightroom Classic 10 or newer and keep the plug-in folder in a permanent local location. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Lightroom reports the chosen workspace as connected. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result in both Dosya and the connected service because either side can retain a stale status. If the result differs from what you expected, stop before repeating the action. Record the provider, operation time, job or request identifier, and redacted error before reconnecting or retrying.

## Expected result

The controlled workflow completes and Lightroom reports the chosen workspace as connected. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to Lightroom Classic and Integrations > Lightroom Classic, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Create and manage API keys](/developers/api-key)
- [Choose a Dosya app](/account/choose-app)
