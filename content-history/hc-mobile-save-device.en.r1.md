---
{"articleId":"hc-mobile-save-device","locale":"en","revision":1,"title":"Save a Dosya file to the device","summary":"Save a Dosya file to the device. Follow a controlled workflow, verify the result, and avoid changing the wrong workspace or item.","category":"files","articleSlug":"mobile-save-device","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the save a dosya file to the device workflow against current local product source, UI labels and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-browse","hc-mobile-permissions"],"keywords":["mobile save device","mobile file actions","Dosya help"]}
---
Save a Dosya file to the device is safest when you verify the account, workspace and target before committing the action. This guide uses a small controlled example so you can confirm each state.

## Before you start

- Open Mobile Files in the current released Dosya client.
- Confirm the active account and workspace, then identify one supported file.
- Use non-confidential test data and record the current state before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: save a Dosya file to the device

1. Open Mobile Files and confirm the active workspace.
2. Select one supported file and check its name or identifying details.
3. Choose Save to device and approve the destination prompt.
4. Read the confirmation, warning or progress state before leaving the screen.
5. Verify that the file appears in the selected device location.
6. Refresh or reopen the view once to confirm the result persisted.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya app chooser showing the current mobile availability entry points." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current released mobile app and confirm its active workspace before changing files. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The workflow completes for the controlled test and the file appears in the selected device location. The result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- Actions may be blocked by folder locks, hidden-item rules, storage limits or a restricted credential.
- For destructive or access-changing actions, test with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Mobile Files, confirm the active workspace and check that your role permits the action.

**The operation is rejected.** Read the exact message and check access, locks, quota, network state and client version before retrying.

**The result is unclear.** Repeat with one small test item, then contact support with the time, client version and a nonsecret error message.

## Related guides

- [Browse files on mobile](/files/mobile-browse-files)
- [Mobile permissions](/account/mobile-permissions)
