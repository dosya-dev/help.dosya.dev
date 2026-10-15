---
{"articleId":"hc-share-change-password","locale":"en","revision":2,"title":"Change a sharing-link password","summary":"Revoke a password-protected sharing link, create a replacement with a new password, and verify that the previous URL no longer opens.","category":"sharing","articleSlug":"share-change-password","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current web Share dialog, Shared list, password policy, recipient unlock flow, and share-link API behavior against local product source and relevant tests on 2026-10-14. The current web app accepts a password during link creation; replacing an existing password requires revoking the link and generating a new URL. The screenshot uses an isolated sample file.","related":["hc-password-link","hc-revoke-link","hc-share-preflight-private-window"],"keywords":["change share link password","replace password protected link","secure file sharing password","revoke sharing link","new share URL"]}
---
Changing the password for an existing sharing link requires a replacement link in the current Dosya web app. Revoke the old URL, generate a new link with the new password, test both URLs, and then send the replacement URL and password separately.

## Before you start

- Confirm the file, folder or bundle attached to the existing link.
- Plan how you will notify recipients. Revoking the old link removes access immediately, including for people who know the old password.
- Choose a password with at least eight characters that is different from the previous value and from your Dosya account password.
- Keep the URL and password in separate messages when practical. Do not place either value in a screenshot or support request.

## Steps: replace the protected link

1. Open **Shared** and select **By me**.
2. Find the link whose password must change. Open its detail page and confirm **Password: Set** so you do not revoke the wrong URL.
3. Return to the Shared list and select **Revoke** for that link. Read the warning and confirm. A revoked URL cannot be reactivated.
4. Open **Files**, locate the same item, and choose its sharing action.
5. Select **By email** if access must stay limited to named recipients; otherwise select **By link**. Choose the intended expiry and expand **Advanced options**.
6. Enter the new value in **Password (optional)**. Dosya requires at least eight characters, and a workspace policy may require every link to have a password.
7. Reapply the old link's other required controls, such as **View only**, recipient addresses, metadata removal, download limit, expiry and title.
8. Select **Generate link** and copy the replacement URL.
9. Open the replacement URL in a private browser window. Confirm the old password is rejected and the new password unlocks the item.
10. Open the revoked URL in a separate private window and confirm it is unavailable. Send recipients the replacement URL and new password.

<figure class="help-screenshot">
  <a href="/screenshots/share-password-2026-10-10.webp">
    <img src="/screenshots/share-password-2026-10-10.webp" alt="Dosya Share dialog with Advanced options expanded, a password entered, and Generate link highlighted." width="454" height="748" loading="lazy" decoding="async" />
  </a>
  <figcaption>Enter the replacement password under <strong>Advanced options</strong>, then generate a new link. <a href="/screenshots/share-password-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The old URL is unavailable after revocation. The replacement URL asks for a password, rejects the previous password, and opens with the new one. **Shared → By me** contains the replacement link with a password indicator.

## Limits and important details

- The web app creates a new URL rather than editing the password in place. Update every message, document or automation that used the revoked URL.
- Anyone who has both the new URL and password can forward them. Use named recipients when access must be tied to particular email addresses.
- Password attempts are rate limited. Repeated incorrect tests can temporarily delay further unlock attempts, so test deliberately.
- A password does not change file permissions inside the workspace. It protects access through that public sharing URL.
- Workspace policy can require a password or limit link expiry. Your replacement must satisfy the current policy even if the old link used earlier settings.

## Troubleshooting

**The new password is rejected while creating the link.** Use at least eight characters and check the exact validation message. Avoid leading or trailing spaces that you may not reproduce when sending it.

**The old password appears to work.** Verify the browser opened the replacement URL and start with a fresh private window. An already unlocked share can keep its access cookie during that browser session.

**The replacement link opens without a password.** Return to **Shared → By me** and check for the password indicator. If it is absent, revoke that URL and create another link with the Password field completed before selecting **Generate link**.

**A recipient cannot open the replacement.** Confirm they received the complete new URL, then send the new password through the agreed channel. If the link also uses named recipients, they must complete email verification.

## Related guides

- [Add a password to a sharing link](/sharing/password-link)
- [Revoke a sharing link](/sharing/revoke-link)
- [Preflight a sharing link in a private window](/sharing/share-preflight-private-window)
