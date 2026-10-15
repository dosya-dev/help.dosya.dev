---
{
  "articleId": "hc-lightroom-sync-client-selections",
  "locale": "en",
  "revision": 2,
  "title": "Sync Dosya client selections into Lightroom",
  "summary": "Run Sync client selections from dosya from Plug-in Extras and wait for completion. Verify that lightroom writes the client choices into the catalog.",
  "category": "integrations",
  "articleSlug": "lightroom-sync-client-selections",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Sync Dosya client selections into Lightroom” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-lightroom-enable-client-favourites",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom sync client selections",
    "Lightroom client selections",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **Sync Dosya client selections into Lightroom** in Dosya. The main action is to run Sync client selections from dosya from Plug-in Extras and wait for completion; the decisive check is whether lightroom writes the client choices into the catalog.

Keep the connected provider account, Dosya workspace, authorization scope, source, destination, and job state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp"><img src="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp" alt="Four-step workflow map for sync dosya client selections into lightroom, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for sync dosya client selections into lightroom: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/lightroom-sync-client-selections-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open Lightroom Classic and the published Dosya gallery in the current released client.
- Confirm the active account and workspace, then identify published collection after a client marked favourites.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: sync Dosya client selections into Lightroom

1. Open Lightroom Classic and the published Dosya gallery and confirm the active account and workspace.
2. Locate published collection after a client marked favourites and verify its name or identifying details.
3. Run Sync client selections from dosya from Plug-in Extras and wait for completion.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that Lightroom writes the client choices into the catalog.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/lightroom-integration-overview-2026-10-13.webp"><img src="/screenshots/lightroom-integration-overview-2026-10-13.webp" alt="Dosya Lightroom Classic workflow for client favourites and catalog selections." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Ask clients to use a clear display name so their selection collection is recognizable. <a href="/screenshots/lightroom-integration-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Lightroom writes the client choices into the catalog. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result in both Dosya and the connected service because either side can retain a stale status. If the result differs from what you expected, stop before repeating the action. Record the provider, operation time, job or request identifier, and redacted error before reconnecting or retrying.

## Expected result

The controlled workflow completes and Lightroom writes the client choices into the catalog. The result remains visible after a refresh, reconnect, or return to the relevant screen.

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

**The expected control is missing.** Return to Lightroom Classic and the published Dosya gallery, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Enable client favourites](/integrations/lightroom-enable-client-favourites)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
