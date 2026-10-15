---
{
  "articleId": "hc-cloud-import-destination",
  "locale": "en",
  "revision": 2,
  "title": "Choose a cloud-import destination",
  "summary": "Review the selection count and remove any unintended item. Verify that start the import and wait for the job confirmation.",
  "category": "integrations",
  "articleSlug": "import-destination",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed “Choose a cloud-import destination” against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance, FAQs, and an interface workflow map. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-cloud-import-connect",
    "hc-cloud-import-progress",
    "hc-import-google-drive",
    "hc-organize-files"
  ],
  "keywords": [
    "import destination",
    "cloud import folder",
    "select import files",
    "Google Drive destination",
    "OneDrive destination",
    "Dropbox destination",
    "cloud storage integration",
    "Dosya help"
  ]
}
---
This guide covers **Choose a cloud-import destination** in Dosya. The main action is to review the selection count and remove any unintended item; the decisive check is whether start the import and wait for the job confirmation.

Keep the connected provider account, Dosya workspace, authorization scope, source, destination, and job state in view while you work. Use step 2 to identify the exact target, then record its current state so a refresh, reconnect, or return to the page gives you a reliable comparison.

<figure class="help-screenshot"><a href="/screenshots/import-destination-help-workflow-2026-10-14.webp"><img src="/screenshots/import-destination-help-workflow-2026-10-14.webp" alt="Four-step workflow map for choose a cloud-import destination, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for choose a cloud-import destination: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/import-destination-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Connect the provider account and select the intended Dosya workspace.
- Create the destination folder first when you need a specific structure.
- Check available storage and your upload permission.
- Avoid importing the same source selection twice unless duplicate copies are intentional.

## Steps: select source items and destination

1. Open the provider integration and select **Import** for the correct connected account.
2. Browse the provider folders and select the required files or folders.
3. Review the selection count and remove any unintended item.
4. Choose the Dosya destination folder. Confirm its name and active workspace.
5. Start the import and wait for the job confirmation.
6. Open the import progress view rather than starting a second job when the picker closes.

<figure class="help-screenshot"><a href="/screenshots/import-google-picker-selected-2026-10-11.webp"><img src="/screenshots/import-google-picker-selected-2026-10-11.webp" alt="Dosya cloud-import picker with representative Google Drive files selected and controls for confirming the import destination." width="1429" height="799" loading="lazy" decoding="async" /></a><figcaption>Review every selected provider item and the Dosya destination before starting the import. <a href="/screenshots/import-google-picker-selected-2026-10-11.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: Start the import and wait for the job confirmation. Do not rely only on a success toast or submitted request. Refresh or reopen the relevant view and compare the visible account, workspace, path, status, count, or permission with the state you recorded before the task.

Verify the result in both Dosya and the connected service because either side can retain a stale status. If the result differs from what you expected, stop before repeating the action. Record the provider, operation time, job or request identifier, and redacted error before reconnecting or retrying.

## Expected result

Dosya creates an import job for the selected items and records the chosen workspace folder as its destination. Completed items appear there with their imported names and supported folder structure.

## Limits and destination rules

- The destination must be writable by your current role.
- Changing the active workspace after starting does not safely move the job.
- Provider shortcuts, shared items and unsupported item types can behave differently from ordinary files and folders.
- An existing item with the same name may create a collision or duplicate; inspect the result before deleting either copy.

## Practical checks

- Confirm you are working in the intended account and workspace before selecting the target.
- Re-read the exact target name, folder path, member, endpoint, or provider shown by the interface.
- Complete one controlled example first when the action can affect access, create copies, move data, or start a transfer.
- Verify the final state after a refresh; keep only nonsecret timestamps, statuses, and request identifiers for support.

## Troubleshooting

**The destination folder is missing.** Confirm the active workspace and your access to that folder. Create it in **Files** first if needed.

**The Import button remains disabled.** Select at least one supported source item and a valid writable destination.

**The wrong destination was chosen.** Let the current result finish or cancel it when the job offers cancellation. Verify completed files before moving or deleting them.

**A shared provider item is absent.** Confirm the connected provider account can open it directly and that the provider exposes it through the authorized connection.

## Frequently asked questions

### What should I check before repeating this task?

Return to the first step and confirm the active account, workspace, and target. Then compare the current state with the result described above. Repeating the action without that comparison can create duplicates, overwrite the wrong setting, or make the original error harder to diagnose.

### What details should I include when asking for help?

Include the action time, client or browser version, active workspace, expected result, visible status, and any nonsecret error or request identifier. Never include passwords, API keys, recovery codes, private sharing links, payment details, or confidential file contents.

## Related guides

- [Connect a cloud account](/integrations/connect-cloud-account)
- [Monitor cloud-import progress](/integrations/import-progress)
- [Import from Google Drive](/integrations/google-drive)
- [Organize files after import](/files/organize-files)
