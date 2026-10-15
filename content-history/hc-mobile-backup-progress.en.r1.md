---
{"articleId":"hc-mobile-backup-progress","locale":"en","revision":1,"title":"Monitor mobile backup progress","summary":"Read queued, uploading, completed and paused mobile backup states, then verify the final cloud copy before deleting a local item.","category":"files","articleSlug":"mobile-backup-progress","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current monitor mobile backup progress workflow against local product source, UI labels and relevant tests on 2026-10-12. Screenshots use isolated or nonsecret examples.","related":["hc-mobile-backup-setup","hc-mobile-background"],"keywords":["mobile backup progress","photo upload progress","backup paused"]}
---
A selected photo is not protected until its mobile backup completes and the cloud copy can be opened.

## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: monitor mobile backup progress

1. Open the mobile backup status.
2. Read queued and active counts.
3. Keep the app available for an initial large batch.
4. Inspect any paused or failed reason.
5. Wait for completion.
6. Open a recent backed-up item from Dosya to verify it.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel showing the supported mobile download choices reviewed before installation." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current official store listing for the device platform. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The monitor mobile backup progress workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Related guides

- [Set up mobile backup](/files/mobile-photo-backup)
- [Fix background backup](/troubleshooting/mobile-background-backup)
