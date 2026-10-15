---
{
  "articleId": "hc-extension-reconnect",
  "locale": "en",
  "revision": 6,
  "title": "Reconnect Save to dosya after the extension signs out",
  "summary": "Start a fresh browser authorization, approve the Dosya consent page, and confirm the account and save folder before capturing again.",
  "category": "extension",
  "articleSlug": "extension-reconnect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/extension/src/lib/auth/sign-in.ts, auth/refresh.ts, popup/components/SignedOut.tsx and apps/web/src/pages/connect/extension.tsx: fresh PKCE handoff, five-minute pending window, consent labels, scoped access and post-return identity checks. Local repository evidence only; no production request was made.",
  "related": [
    "hc-extension-connect",
    "hc-extension-save-folder",
    "hc-sessions"
  ],
  "keywords": [
    "reconnect Save to dosya",
    "browser extension signed out",
    "extension session expired",
    "Sign in with dosya",
    "extension authorization"
  ]
}
---
The extension keeps a separate Dosya session from the website. Reconnect when the popup returns to its signed-out screen or a supported browser notification says **Signed out of dosya** and **Sign in again from the popup**.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-reconnect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-reconnect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" alt="Reconnection path from the signed-out extension popup through Dosya account consent to the restored Saving to destination." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Begin in the signed-out popup, approve the newly opened Dosya request, then inspect the account email and <strong>Saving to</strong> row after returning. <a class="workflow-map-full" href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-reconnect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-reconnect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before reconnecting

- Finish signing in to the Dosya account that should receive browser captures, including any passkey or two-factor step.
- Open the extension in the browser profile where it was installed. A different profile has separate extension storage and sessions.
- Leave any failed item alone until the account connection is restored; otherwise a retry will end as **Signed out**.

## Steps: reconnect the account

1. Open **Save to dosya** from the browser toolbar and select **Sign in with dosya**.
2. If the browser asks whether the extension may reach `api.dosya.dev` and `app.dosya.dev`, approve those two Dosya origins. Refusing this prompt leaves the popup signed out and shows **dosya needs permission to reach api.dosya.dev to save files**.
3. Complete the regular Dosya sign-in in the opened window or tab. The extension receives the approved result; it never receives the password entered on the account page.
4. On **Connect Save to dosya for [browser]**, review the access list and select **Allow**. The connection can save files, create folders and create a share link for a file it saved. It cannot delete, rename or move content, change the account, or administer the team or billing.
5. Return to the popup. Safari's tab handoff first displays **Save to dosya is connected** and **You can close this tab**; close that tab, then reopen the toolbar popup.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Connected Save to dosya popup with the account email, Saving to destination, and two browser capture buttons." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>A successful return replaces the sign-in screen with the account email, destination selector and save controls. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Confirm the restored session

Check the email in the popup header, then read the complete **Saving to** workspace and folder. An expired token normally leaves the previous destination preference in this browser, but that folder may have been renamed, removed or become inaccessible while the session was disconnected.

Make one harmless visible screenshot and watch its row under **Recent saves**. A green check means the cloud upload completed; selecting that finished row opens the file in Dosya. Failed items retain **Retry now**, so retry them only after the new account and destination are correct.

## Expected result

The toolbar popup shows the intended email, an accessible **Saving to** location and active capture controls. A small test reaches that folder once and opens from its completed Recent saves row.

## If reconnection does not finish

**The popup still shows the sign-in page.** Start from its current **Sign in with dosya** button rather than an old consent bookmark or callback tab. A pending attempt is considered current for five minutes; after abandoning one, wait for that window to pass and begin again from the popup.

**The consent page says This link is incomplete.** Close it. The required state and callback values come from the extension, so a copied address cannot be repaired manually.

**The page reports Too many requests.** Authorization permits 10 attempts in 15 minutes for one web session. Stop repeating the button and try after that window has cleared.

**The wrong account appears after returning.** Open the popup's **Settings** menu and choose **Sign out**, then authorize the intended account. Explicit sign-out clears the destination, recent folders, pending captures and cached folder data from that extension installation, so resolve useful pending work first.

**A revoked session keeps returning to signed out.** In the web app, check **Profile → Sessions** for the browser-extension session. Start a new authorization after confirming the old session was revoked deliberately.

## Related guides

- [Installing and connecting Save to dosya](/extension/install-and-connect)
- [Choosing the browser extension destination](/extension/extension-save-folder)
- [Reviewing active sessions](/account/sessions)
