---
{
  "articleId": "hc-appearance-theme",
  "locale": "en",
  "revision": 6,
  "title": "Choose light or dark appearance",
  "summary": "Switch Light, Dark, or System mode, choose among eight color themes, verify account sync, and recover from an appearance save failure on this device.",
  "category": "account",
  "articleSlug": "appearance",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed 2026-10-14 against apps/web/src/pages/profile/appearance.tsx, apps/web/src/components/layout/profile-menu.tsx, apps/web/src/lib/theme.ts, apps/web/src/lib/themes.ts, apps/web/src/lib/boot.ts, apps/api/src/lib/appearance.ts, and apps/api/src/pages/api/me/appearance.ts. No production profile was updated; the inspection applied no persistent user theme.",
  "related": [
    "hc-profile-settings",
    "hc-navigate-web-app"
  ],
  "keywords": [
    "light theme",
    "dark theme",
    "appearance",
    "cloud storage"
  ]
}
---
Appearance is an account preference with two parts: a color **Theme** and a **Mode**. Mode can be **Light**, **Dark**, or **System**; System follows the device’s light/dark setting. The selection changes Dosya’s interface, never file contents, shared-link styling, or a recipient’s own view.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/appearance-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/appearance-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/appearance-workflow-map-2026-10-14.webp" alt="Appearance workflow covering mode, color theme, immediate preview, account save, and reload verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Choose a mode and palette separately, then reload to distinguish a saved account choice from a local preview. <a class="workflow-map-full" href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-light-href="/screenshots/appearance-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/appearance-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Available choices

The full **Appearance** page offers eight themes: **Default**, **Mono**, **Claude**, **Amber**, **Ocean**, **Bubblegum**, **Vercel**, and **Neo-Brutalism**. Each theme works with all three modes. A new or invalid preference falls back to the **Default** theme and **System** mode.

The avatar menu contains a compact **Appearance** row with **Light mode** and **Dark mode** radio controls only. Those controls keep the menu open and preserve the selected color theme. Open the linked Appearance page when you need **System** or a different palette.

## Steps

1. Open the account menu and choose **Appearance**, or go directly to `/profile/appearance`.
2. Under **Mode**, select **Light**, **Dark**, or **System**.
3. Under **Theme**, choose one of the eight labelled swatches.
4. Inspect navigation, Files, a settings form, focus indicators, status colors, and any code or document preview you rely on.
5. Reload the page. The applied mode and theme should return from the account profile.
6. Sign in on another supported browser or device and confirm the account preference is reconciled there.

The page previews each change immediately, writes it to local storage, and sends the complete theme-and-mode pair to the account API. No plan or workspace permission is required. Every choice is reversible and does not modify stored files.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Profile account panel used to confirm who will receive the saved Dosya appearance preference." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The saved palette and mode follow this user identity when another session loads the account profile. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Saving, motion, and recovery

On the full Appearance page, a rejected save restores the prior mode and palette and shows **Couldn’t save**, followed by the server error or “Your theme could not be saved.” Reconnect, make one selection, and reload before testing another device.

The avatar-menu light/dark control applies locally at once and starts its account save in the background. Because that shortcut does not display a save result, a reload is the decisive persistence check.

Supported browsers animate a user-initiated theme change with a short visual wipe. Dosya skips that transition when the device reports **prefers-reduced-motion: reduce** or when the browser lacks the View Transitions API. System mode listens for operating-system scheme changes while the app is open.

If a palette makes a control difficult to read, switch to **Default** and the clearest mode for the environment. Appearance changes do not alter permissions, storage, uploads, links, or notification delivery.

## Expected result

The chosen palette and mode apply immediately, survive a reload after a successful save, and reconcile when the same account starts another supported session. System mode changes with the device scheme, while explicit Light or Dark stays fixed.

## Related guides

- [Update profile settings](/account/profile-settings)
- [Navigate the web app](/account/navigate-web-app)
