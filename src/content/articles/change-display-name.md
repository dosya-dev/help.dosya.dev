---
{
  "articleId": "hc-change-display-name",
  "locale": "en",
  "revision": 6,
  "title": "Change your account display name",
  "summary": "Update the Full name field for every workspace, understand the 80-character limit, and verify the saved name without changing your email or password.",
  "category": "account",
  "articleSlug": "change-display-name",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally with apps/web/src/pages/profile/identity.tsx, apps/api/src/pages/api/me/name.ts, packages/shared/src/validation/policy.ts, and apps/api/src/pages/api/me/name.unit.test.ts. No request reached production services or an identity provider.",
  "related": [
    "hc-profile-settings",
    "hc-sessions"
  ],
  "keywords": [
    "change display name",
    "Dosya full name",
    "account profile name",
    "cloud storage account"
  ]
}
---
Your Dosya display name is the **Full name** under **Profile → Identity**. It is visible to teammates across all workspaces, so one save changes the name associated with this account everywhere it is displayed. It does not modify the account email, sign-in password, workspace ownership, or file ownership.

Names may use spaces, apostrophes, hyphens, and Unicode scripts. Dosya trims surrounding whitespace, removes invisible formatting characters, normalizes the stored text, and allows at most **80 characters**. An empty or invisible-only value returns **Name is required**; an over-limit value returns **Name is too long (max 80 chars)**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/change-display-name-workflow-map-2026-10-14.webp" data-light-href="/screenshots/change-display-name-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/change-display-name-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/change-display-name-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/change-display-name-workflow-map-2026-10-14.webp" alt="Profile Identity workflow for replacing the Full name and saving the account-wide display name." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Edit <strong>Full name</strong>, save it once, and verify the account header without changing <strong>Email address</strong>. <a class="workflow-map-full" href="/screenshots/change-display-name-workflow-map-2026-10-14.webp" data-light-href="/screenshots/change-display-name-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/change-display-name-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Profile → Identity**. On the compact web layout, open **Profile** and choose **Identity**.
2. Confirm the email shown beneath the current name so you edit the intended account.
3. In **Full name**, enter the name teammates should see. Keep the normalized result within 80 characters.
4. Select **Save** beside the field.
5. Wait for the confirmation **Saved — Your name has been updated.**
6. Reload **Identity** and open a workspace where another member can see your account name.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Identity settings containing the account Full name field, Save control, and unchanged Email address row." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The <strong>Full name</strong> field controls the shared account label; the separate <strong>Email address</strong> row remains the login and billing address. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What changes after saving

The updated value is written to the user account and cached identity records for browser and mobile authentication are invalidated. The next identity read can therefore return the new name across clients. Existing sessions remain signed in.

The name may appear in workspace member lists, invitations, sharing activity, or other collaborative views. Because it is an account property, you cannot assign a different personal display name to each workspace.

## Troubleshooting

If nothing happens when **Save** is selected, remove whitespace-only content. For a rejected long name, shorten it to 80 characters or fewer. A failed request appears as **Update failed** followed by the server message, or **The change could not be saved.** when no specific reason is available.

If the old name remains in one open view, refresh that view after the success toast. If the email changed or a verification code is requested, you are using the separate email-change control; cancel that flow before continuing.

## Expected result

The new display name appears after refresh and in collaborative account surfaces, while the sign-in email and active sessions remain unchanged.

## Related guides

- [Update profile settings](/account/profile-settings)
- [Review sessions](/account/sessions)
