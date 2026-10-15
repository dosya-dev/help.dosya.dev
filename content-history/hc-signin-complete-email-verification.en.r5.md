---
{
  "articleId": "hc-signin-complete-email-verification",
  "locale": "en",
  "revision": 5,
  "title": "Verify an email before signing in",
  "summary": "Complete Dosya email verification with the newest six-digit code, understand expiry and attempt limits, and recover when delivery fails safely.",
  "category": "account",
  "articleSlug": "signin-complete-email-verification",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-verified locally against apps/web/src/pages/verify.tsx, apps/api/src/pages/api/auth/verify.ts, apps/api/src/pages/api/auth/resend-verification.ts, and apps/api/src/lib/verification-lockout.ts. Production authentication was not attempted.",
  "related": [
    "hc-password-reset",
    "hc-identity-methods"
  ],
  "keywords": [
    "signin complete email verification",
    "Account sign-in recovery details",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Password sign-in refuses an unverified account with **Please verify your email before signing in.** The verification page accepts the six-digit code sent to the pending address; each code expires after 10 minutes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14.webp" data-light-href="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14.webp" alt="Four-step email-verification map showing Verify your email, a six-digit code, Resend code after 30 seconds, and the post-sign-in destination." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The workflow image displays the address check, newest six-digit code, resend cooldown, and either Welcome or the pending redemption path. <a class="workflow-map-full" href="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14.webp" data-light-href="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/signin-complete-email-verification-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Open **Verify your email** from sign-up or the verification link and confirm the displayed address.
2. Enter exactly six digits and select **Verify email**. Other input is blocked locally with **Enter the 6-digit code from your email.**
3. Use only the newest message. **Resend code** invalidates every older unused code, creates a fresh 10-minute code, and shows **A new code has been sent to your email.**
4. Wait at least 30 seconds between resends. An early request returns **Please wait Ns before requesting another code.** Resends are capped at 5 per IP address per hour.
5. One code permits 5 submitted attempts. Expired or missing challenges say **This code has expired. Request a new one.** or **No active verification code. Request a new one.**
6. Across new codes, failed guesses trigger account-wide locks: 10 misses for 15 minutes, 20 for 1 hour, and 30 or more for 24 hours.
7. If mail never arrives, inspect spam/quarantine, then use **Contact support** or **Use a different email**.

<figure class="help-screenshot"><a href="/screenshots/account-email-verification-2026-10-12.webp"><img src="/screenshots/account-email-verification-2026-10-12.webp" alt="Verify your email screen with a six-digit code field, Verify email, Resend code, Contact support, and Use a different email." width="448" height="468" loading="lazy" decoding="async" /></a><figcaption>The visible form names the destination address and places recovery links below the code, verification, and resend controls. <a href="/screenshots/account-email-verification-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Verification requests also have a 20-per-IP, 15-minute rate limit. A successful code is consumed and cannot be reused.

## Expected result

Dosya marks the email verified, clears failed-verification lock state, creates a 30-day browser session, and clears the pending-email cookie. The verification API returns `/welcome`, but the web page first checks its stored post-auth path: a pending redemption continues to `/redeem`; without one, the browser opens **Welcome**. Later password sign-in no longer returns the unverified-email error.

## Related guides

- [Reset your password](/account/reset-password)
- [Understand sign-in methods](/account/identity-and-sign-in)
