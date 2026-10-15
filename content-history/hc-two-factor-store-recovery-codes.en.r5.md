---
{
  "articleId": "hc-two-factor-store-recovery-codes",
  "locale": "en",
  "revision": 5,
  "title": "Store two-factor recovery codes",
  "summary": "Store all ten Dosya recovery codes offline, understand single-use behavior, and regenerate them safely when any copy may be exposed or lost.",
  "category": "account",
  "articleSlug": "two-factor-store-recovery-codes",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/profile/password.tsx, apps/api/src/lib/recovery.ts, and apps/api/src/pages/api/me/2fa/recovery-codes.ts. Production 2FA changes were not performed.",
  "related": [
    "hc-two-factor",
    "hc-two-factor-recovery"
  ],
  "keywords": [
    "two factor store recovery codes",
    "Two-factor authentication operations",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Authenticator enrollment displays 10 recovery codes in XXXX-XXXX form. Dosya shows the plaintext set in that response and stores hashes; each matching code can complete only one login.

<figure class="help-screenshot"><a href="/screenshots/two-factor-store-recovery-codes-help-workflow-2026-10-14.webp"><img src="/screenshots/two-factor-store-recovery-codes-help-workflow-2026-10-14.webp" alt="Recovery-code storage map from the ten-code screen through Copy all or Download, one-time use, and Regenerate codes." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>The recovery flow keeps codes away from the authenticator phone and shows that regeneration invalidates every earlier value. <a href="/screenshots/two-factor-store-recovery-codes-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. On the **Recovery codes** screen, choose **Copy all** for a trusted password manager or **Download** for the file named dosya-recovery-codes.txt.
2. Keep the set outside the phone running your authenticator. A recovery copy on the same lost device does not help.
3. At login, select **Use a recovery code instead**, enter one value, and choose **Use recovery code**. Letter case, spaces, and hyphens are normalized.
4. After use, the server records that code as spent. The settings row reports how many of the original ten remain.
5. If any copy is exposed or the count is too low, choose **Regenerate codes**. Enter the current password and select **Regenerate**.
6. Regeneration deletes every old code before issuing ten replacements. The warning **This invalidates your existing codes** is literal and irreversible.
7. If the account has no password, set one first; the regeneration control is disabled because password confirmation is required.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Password and two-factor auth screen before enrollment, showing Not enabled for Authenticator and the Enable authenticator button." width="1440" height="820" loading="lazy" decoding="async" /></a><figcaption>The screenshot displays Password, Two-factor authentication, and the starting Authenticator row with its green Enable authenticator control. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

Missing password input shows **Password required — Enter your current password to continue.** A bad password returns **Incorrect password**. Recovery-code regeneration works only for authenticator-based 2FA.

## Expected result

You hold a separate, protected copy of the current ten-code set and can identify how many remain. After regeneration, no old recovery code can authenticate, and a mandatory security notice records the replacement.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Use two-factor recovery](/account/two-factor-recovery)
