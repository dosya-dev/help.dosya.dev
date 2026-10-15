---
{
  "articleId": "hc-cancel-account-deletion",
  "locale": "en",
  "revision": 6,
  "title": "Cancel a scheduled account deletion",
  "summary": "Cancel during the 30-day recovery window, preserve the account and stored files, and understand why a previously canceled subscription stays canceled.",
  "category": "account",
  "articleSlug": "cancel-account-deletion",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified in apps/web/src/pages/profile/delete.tsx, apps/web/src/components/deletion-banner.tsx, apps/api/src/pages/api/me/delete-cancel.ts, apps/api/src/pages/api/me.ts, and apps/api/src/lib/account/preview.ts. No production account, email, or billing-provider action was performed.",
  "related": [
    "hc-profile-settings",
    "hc-sessions"
  ],
  "keywords": [
    "cancel account deletion",
    "30 day recovery window",
    "restore Dosya account",
    "cloud storage account deletion"
  ]
}
---
Confirming account deletion schedules it **30 days** later; it does not erase files immediately. After signing in again, Dosya shows a persistent banner with the exact deletion date and days remaining. Cancellation must be explicit: signing in to download a last file does not silently call off the deletion.

Use **Cancel deletion** before the scheduled date. The cancel action clears the deletion timestamps and attempt counter, invalidates any unconsumed deletion code, and keeps the account, eligible workspaces, and files in place.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/cancel-account-deletion-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cancel-account-deletion-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cancel-account-deletion-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/cancel-account-deletion-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/cancel-account-deletion-workflow-map-2026-10-14.webp" alt="Scheduled account deletion recovery workflow using the persistent date banner and the Profile Cancel deletion control before the deadline." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Read the scheduled date in the banner, open the deletion page, and cancel while the 30-day window is still active. <a class="workflow-map-full" href="/screenshots/cancel-account-deletion-workflow-map-2026-10-14.webp" data-light-href="/screenshots/cancel-account-deletion-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/cancel-account-deletion-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Sign in to the scheduled account. Scheduling revoked every previous browser session, mobile token, and linked extension credential, so a fresh login is expected.
2. Read the banner: **Your account is scheduled for deletion on [date] — [n] days left.** Select its **Cancel deletion** link.
3. On **Profile → Delete account**, confirm the page says **Deletion scheduled** and shows the same date. It also states **Nothing has been deleted yet.**
4. Select **Cancel deletion**. No email code or password confirmation is required to stop destruction.
5. Wait for **Deletion cancelled — Your account will not be deleted.**
6. Confirm the scheduled section clears. The global banner should disappear after the account state refreshes; reload once if it remains temporarily.
7. Open an expected workspace and a known file to verify continued access.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile identity reference for confirming the email of the account whose scheduled deletion is being canceled." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Verify the profile email after the fresh sign-in so cancellation is applied to the intended account. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What cancellation preserves

The deletion preview counts files, including trashed files, in workspaces that would be destroyed with the account. Files the user uploaded into somebody else's workspace are not part of that destructive count and survive under a tombstone identity. Canceling before the sweep leaves the account and its still-existing data as they are.

Scheduling account deletion also attempts to cancel the Stripe subscription immediately so the user is not charged during the recovery window. **Cancel deletion does not resume that subscription.** After recovering the account, open Billing and check whether a new subscription or other paid capacity is needed.

At the due date, an hourly sweeper can begin permanent purge. After the account and sole-owned workspace data have been removed, support cannot use this cancel action to reconstruct them. Treat the displayed scheduled date as the deadline rather than waiting for the final hour.

## Troubleshooting

**No deletion is scheduled for this account.** means the server no longer has a pending timestamp. Refresh the profile and confirm the signed-in email; the deletion may already have been canceled or completed.

If the button reports another error while the banner remains, retry from a normal signed-in browser session. API keys cannot cancel account deletion. Record the exact scheduled date and error text when contacting support, without including passwords, deletion codes, or session cookies.

## Expected result

The deletion banner and scheduled date disappear, the account and remaining cloud files stay accessible, and Billing accurately shows whether paid service must be started again.

## Related guides

- [Update profile settings](/account/profile-settings)
- [Review sessions](/account/sessions)
