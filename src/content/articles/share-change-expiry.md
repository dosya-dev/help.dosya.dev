---
{
  "articleId": "hc-share-change-expiry",
  "locale": "en",
  "revision": 5,
  "title": "Extend or shorten a sharing-link expiry",
  "summary": "Edit an active or expired non-revoked link's deadline in the Dosya mobile app, keeping its URL while applying workspace and free-plan expiry caps.",
  "category": "sharing",
  "articleSlug": "share-change-expiry",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally on 2026-10-14 against apps/mobile/app/shares/[id].tsx, apps/mobile/src/share/EditShareSheet.tsx, apps/mobile/src/share/expiry.ts, apps/api/src/pages/api/shares/[id].ts, apps/api/src/lib/share/update.ts, and apps/api/src/lib/share/apply-update.ts. Production status: no link was edited.",
  "related": [
    "hc-create-link",
    "hc-password-link"
  ],
  "keywords": [
    "share change expiry",
    "sharing link expiration",
    "extend file share",
    "file sharing"
  ]
}
---
The native Dosya app can change any non-revoked link in place, including one whose expiry has already passed. Saving a different expiry keeps the token and URL already delivered to recipients, then applies the new deadline immediately. The current web Shared page shows expiry but does not expose this edit sheet.

<figure class="help-screenshot"><a href="/screenshots/share-change-expiry-help-workflow-2026-10-14.webp"><img src="/screenshots/share-change-expiry-help-workflow-2026-10-14.webp" alt="Expiry edit workflow in the Dosya mobile link detail screen, from Edit through a new deadline and Save changes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Change the lifetime on the existing record so every previously sent copy of the URL follows the saved deadline. <a href="/screenshots/share-change-expiry-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Who can edit the link

Open **Shared**, choose **By me**, and select the link in the iPhone or Android app. A creator needs **View own shared links**; **View all shared links** permits an authorized member to edit another creator's link. The target must remain in the member's workspace scope. Revoked links have no **Edit** action and return **This link has been revoked and can no longer be changed** if an old client still submits the request.

Expiry choices are **1 hour**, **24 hours**, **7 days**, **30 days**, **90 days**, **Pick a date**, and **Never**. A custom instant must be at least one minute ahead and no more than 3,650 days from the time of saving. Workspace maximum-expiry policy silently lowers a longer choice, including **Never**. For a free-plan creator, an edited deadline is similarly capped at seven days from the edit.

## Steps

1. In the mobile app, open **Shared** and select the link whose deadline should change.
2. Confirm the file name and existing **Expires** value on the link detail screen.
3. Tap **Edit**, then use the **Expires** picker in **Edit this link**.
4. Choose the required preset. For an exact date, select **Pick a date**, choose the calendar value, and check the **Works through ...** line.
5. Review any warning caused by other changed controls. Expiry alone does not remove the password, change named recipients, or alter view-only mode.
6. Tap **Save changes**. A successful update displays **Link updated** and closes the sheet.
7. Reopen the detail view and read the resulting deadline. Use that saved value rather than assuming a requested **Never** or distant date escaped a plan or workspace cap.

<figure class="help-screenshot"><a href="/screenshots/share-links-overview-2026-10-13.webp"><img src="/screenshots/share-links-overview-2026-10-13.webp" alt="Shared links overview with status and expiry columns used to locate a non-revoked link before editing it on mobile." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The overview distinguishes active, expiring, expired, and revoked records; expired links remain editable, while revoked links are terminal. <a href="/screenshots/share-links-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## What recipients experience

Extending an active deadline lets the same address continue working for longer. Extending an expired, non-revoked link beyond the current time reactivates that same URL; it does not create a replacement. Shortening a deadline can end access for everyone holding the URL as soon as the new instant passes. Setting **Never** removes the date only when workspace and plan rules allow it. The edit does not resend email or notify external recipients, so communicate a materially changed deadline yourself.

If the calendar is left incomplete, the app shows **Pick a date for the link to expire.** A past or too-near timestamp produces **Expiry must be at least a minute in the future**; an excessive timestamp returns **Expiry cannot be more than 3650 days from now**. **Nothing changed yet.** means **Save changes** remains disabled.

## Expected result

The detail screen reports the final stored expiry, and every existing copy of the share URL follows that deadline. The address itself remains unchanged, and no new link is created.

## Related guides

- [Create a sharing link](/sharing/create-link)
- [Add a password](/sharing/password-link)
