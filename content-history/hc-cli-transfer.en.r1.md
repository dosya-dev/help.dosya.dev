---
{"articleId":"hc-cli-transfer","locale":"en","revision":1,"title":"Upload and download with the CLI","summary":"Run a small CLI upload and download, verify names and sizes, and keep automation from overwriting or deleting unintended files.","category":"developers","articleSlug":"cli-transfer","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current upload and download with the cli workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-cli-workspace","hc-upload-files","hc-download-files"],"keywords":["CLI upload","CLI download","command line transfer"]}
---
Start with one non-confidential file and explicit source and destination paths before placing CLI transfer commands in a script.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: upload and download with the cli

1. Select the workspace and destination.
2. Run the documented upload command for one sample.
3. List the destination and verify name and size.
4. Download it to a new local path.
5. Open or compare the downloaded sample.
6. Add error handling and dry-run checks before scaling the script.

<figure class="help-screenshot"><a href="/screenshots/zapier-setup-2026-10-10.webp"><img src="/screenshots/zapier-setup-2026-10-10.webp" alt="Dosya integration setup page showing the verified connection values and guidance used by an automation client." width="1160" height="800" loading="lazy" decoding="async" /></a><figcaption>Copy connection values from the current integration page and keep secrets private. <a href="/screenshots/zapier-setup-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The upload and download with the cli workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Select a CLI workspace](/developers/cli-workspace)
- [Upload in the web app](/uploading/files-and-folders)
- [Download files](/uploading/download-files)
