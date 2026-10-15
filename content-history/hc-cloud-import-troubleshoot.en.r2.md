---
{
  "articleId": "hc-cloud-import-troubleshoot",
  "locale": "en",
  "revision": 2,
  "title": "Troubleshoot a cloud import",
  "summary": "Choose a writable Dosya folder with enough storage. Verify that if it succeeds, retry only the failed original items in smaller groups.",
  "category": "troubleshooting",
  "articleSlug": "cloud-imports",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Troubleshoot a cloud import” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-destination",
    "hc-cloud-import-progress",
    "hc-storage-usage"
  ],
  "keywords": [
    "cloud import failed",
    "Google Drive import error",
    "OneDrive import error",
    "Dropbox import error",
    "partial import",
    "import troubleshooting",
    "cloud storage troubleshooting",
    "Dosya help"
  ]
}
---
This guide covers **Troubleshoot a cloud import** in Dosya. The main action is to choose a writable Dosya folder with enough storage; the decisive check is whether if it succeeds, retry only the failed original items in smaller groups.

Keep the affected account, workspace, client version, reproducible action, and exact error state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/cloud-imports-help-workflow-2026-10-14.webp"><img src="/screenshots/cloud-imports-help-workflow-2026-10-14.webp" alt="Four-step workflow map for troubleshoot a cloud import, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for troubleshoot a cloud import: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/cloud-imports-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Record the provider, connected email, Dosya workspace, destination and visible error.
- Keep source files unchanged while diagnosing.
- Check Dosya service status and the provider's own status.
- Never send provider tokens, passwords or private file links in a public report.

## Steps: isolate the failure

1. Confirm the connected account email can open the source directly at the provider.
2. Reopen the provider picker and test one small ordinary file.
3. Choose a writable Dosya folder with enough storage.
4. Start the small import and inspect its job state.
5. If it succeeds, retry only the failed original items in smaller groups.
6. Verify completed items before removing the provider originals or restarting a whole folder.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Dosya provider picker with isolated files selected for a controlled cloud-import test and destination confirmation." width="1429" height="799" loading="lazy" decoding="async" /></a><figcaption>A small controlled selection helps separate account and destination problems from one unsupported or inaccessible source item. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: If it succeeds, retry only the failed original items in smaller groups. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Repeat the smallest safe reproduction once and confirm whether the same error and request context return. If the result differs from what you expected, stop before repeating the action. Preserve the original error, time, request identifier, and recent changes before clearing state or starting over.

## Expected result

The controlled file reaches the destination, or produces a narrower error tied to provider access, source type, destination permission, quota or connectivity.

## Limits and common causes

- Organization policies can block the connection or selected shared content.
- Provider-native documents, shortcuts and shared-drive objects may not import like ordinary files.
- Expired authorization can affect a previously connected account.
- A partial job can leave valid completed files beside failed items.
- Retrying an entire completed selection can create duplicates and consume storage.

## Troubleshooting by symptom

**The account cannot connect.** Check pop-ups, provider organization policy and the chosen account. Disconnect a stale row before reconnecting when appropriate.

**The picker is empty.** Confirm the connected email, provider permission and whether the content is shared with that account.

**Import cannot start.** Select a supported source item, a writable destination and the correct active workspace.

**The job partially completed.** Verify successful items and retry only failures. Keep a list of missing paths.

**The job reports quota or policy failure.** Compare available storage and workspace upload rules with the affected item.

**A repeat created duplicates.** Use the duplicate review and compare paths and sizes before removing any copy.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Choose an import destination](/integrations/import-destination)
- [Monitor and verify an import](/integrations/import-progress)
- [Understand storage usage](/uploading/storage-usage)
