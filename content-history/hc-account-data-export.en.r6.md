---
{
  "articleId": "hc-account-data-export",
  "locale": "en",
  "revision": 6,
  "title": "Request an export of your account data",
  "summary": "Request a verified account-data copy, download its report and ZIP parts within seven days, and follow exact code, archive, retention and retry limits.",
  "category": "account",
  "articleSlug": "account-data-export",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally verified against apps/web/src/components/account/privacy-section.tsx, apps/web/src/lib/data-rights.ts, apps/api/src/pages/api/me/data/index.ts, apps/api/src/pages/api/me/data/verify.ts, and apps/api/src/lib/account/export/constants.ts on 2026-10-14. Production UI was not exercised.",
  "related": [
    "hc-profile-settings",
    "hc-sessions"
  ],
  "keywords": [
    "account data export",
    "account privacy and access",
    "Dosya help",
    "cloud storage"
  ]
}
---
Open **Profile → Privacy → Get a copy of your data** from a signed-in browser session. An API key cannot read or start this account-level request.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/account-data-export-workflow-map-2026-10-14.webp" data-light-href="/screenshots/account-data-export-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/account-data-export-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/account-data-export-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/account-data-export-workflow-map-2026-10-14.webp" alt="Privacy controls showing Request it, six-digit code confirmation, export preparation, and seven-day report and ZIP downloads." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The Privacy sequence moves from Request it through Confirm to the report, manifest, and numbered archives that expire after seven days. <a class="workflow-map-full" href="/screenshots/account-data-export-workflow-map-2026-10-14.webp" data-light-href="/screenshots/account-data-export-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/account-data-export-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Select **Request it**. Dosya records an access request with a 30-day response deadline and emails a six-digit confirmation code.
2. Enter the code under **We emailed you a code**, then select **Confirm**. A code lasts 15 minutes, resending is limited to once every 60 seconds, and five wrong attempts burn that code.
3. Leave the page open while **Your code was accepted and we are putting your copy together** appears. A build stuck for 15 minutes is marked failed so **Try again** becomes available.
4. Download the readable report, manifest, and every numbered ZIP archive shown. These downloads expire seven days after creation.
5. If you ask again within one hour, Dosya returns the same current copy instead of walking the account again.

The report contains account and workspace records plus structured JSON/CSV. Archives contain files you uploaded when download permissions allow. Archive planning stops at 50,000 files, splits parts at 5,000 entries or 4 GiB, and keeps at most 10,000 recent activity records. A truncated delivery stays open and explains what remains owed.


<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile identity fields used to confirm which signed-in account will own the personal-data request." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Check the profile email before requesting the copy because the completed export belongs to that authenticated account. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The Privacy panel records the request and deadline. A completed answer exposes the report and all available archive parts until their expiry; no files, settings, or sessions are changed by requesting the copy.

If the page says **That code is not correct**, retry the current code before its fifth failed attempt. For **That code has expired. Request a new one.**, use **Send me a code** after the countdown. Preserve the displayed request record when an export has expired; the legal record remains even though its download links disappear.

## Related guides

- [Review active sessions](/account/sessions)
- [Delete an account](/account/delete-account)
