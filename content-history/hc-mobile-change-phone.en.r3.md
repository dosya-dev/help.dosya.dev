---
{
  "articleId": "hc-mobile-change-phone",
  "locale": "en",
  "revision": 3,
  "title": "Change phones without losing cloud copies",
  "summary": "Verify completed cloud backups, sign out or secure the old device, install on the new phone and avoid re-uploading an entire library blindly.",
  "category": "account",
  "articleSlug": "mobile-change-phone",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed the current change phones without losing cloud copies workflow against local product source, UI labels and relevant tests on 2026-10-14. Added task-specific verification, limits, recovery guidance and an interface map based on the documented controls. Screenshots use isolated or nonsecret examples.",
  "related": [
    "hc-mobile-backup-progress",
    "hc-sessions",
    "hc-review-duplicates"
  ],
  "keywords": [
    "change phone",
    "reinstall mobile app",
    "keep cloud photos",
    "cloud storage"
  ]
}
---
Cloud copies remain in the Dosya workspace when changing devices, but local permission and backup selection must be configured again.

Cloud copies belong to the account and workspace, not to one handset. Finish and verify the old phone’s important backups before the new phone scans its library.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-change-phone-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" alt="Four-step interface map for change phones without losing cloud copies, from opening the correct control through verifying the result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Interface map: confirm the account or workspace context, complete one controlled task, then verify the result. <a class="workflow-map-full" href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-light-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/mobile-change-phone-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>
## Before you start

- Use the current released client or web app and sign in to the intended account.
- Select the correct workspace and use non-confidential test data.
- Record the current setting or result before changing it.
- Keep passwords, API keys, recovery keys and private links out of screenshots and support messages.

## Steps: change phones without losing cloud copies

1. On the old phone, wait for required backups to finish.
2. Open several cloud copies from another session.
3. Review or revoke the old mobile session when appropriate.
4. Install and sign in on the new phone.
5. Grant intended permissions and choose the destination.
6. Monitor duplicates while the new device scans its library.

<figure class="help-screenshot"><a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp"><img src="/screenshots/app-choice-mobile-availability-2026-10-12.webp" alt="Dosya mobile availability panel showing the supported mobile download choices reviewed before installation." width="900" height="766" loading="lazy" decoding="async" /></a><figcaption>Use the current official store listing for the device platform. <a href="/screenshots/app-choice-mobile-availability-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

Open several cloud files from another session, then sign in on the new phone and verify its account, workspace, permissions and backup destination.

Refresh or reopen the relevant page before relying on the result. If the state differs, stop before repeating the action and preserve the exact nonsecret message for the troubleshooting checks below.

## Expected result

The change phones without losing cloud copies workflow completes for the test item and its result remains visible after a refresh or reconnect.

## Limits and important details

- Available controls depend on the current client version, plan, role and workspace policy.
- A successful connection does not grant permissions beyond its credential and workspace boundary.
- Verify important results with a harmless test before relying on the workflow.

## Troubleshooting

**The expected control is missing.** Confirm the current client, active workspace and role, then check the relevant settings page.

**The operation is rejected.** Read the exact error and compare credentials, permissions, quota and workspace policy.

**The result is still unclear.** Repeat with one small test item and contact private support with the time, client version and nonsecret error.

## Frequently asked questions

### How do I confirm I used the correct account or workspace?

Check the account email, workspace name and current path before the action and again when verifying it. Similar names can refer to separate cloud-storage data and policies.

### What should I include when asking support for help?

Include the action time, client and version, expected result and exact nonsecret error. Never include passwords, API keys, recovery codes, private links, payment details or confidential file contents.

## Related guides

- [Monitor backup progress](/files/mobile-backup-progress)
- [Review sessions](/account/sessions)
- [Review duplicates](/files/review-duplicates)
