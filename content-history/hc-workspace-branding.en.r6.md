---
{
  "articleId": "hc-workspace-branding",
  "locale": "en",
  "revision": 6,
  "title": "Configure workspace branding",
  "summary": "Configure paid-plan workspace branding, preview public share pages and emails, validate asset limits, and understand permanent share-handle rules.",
  "category": "workspaces",
  "articleSlug": "branding",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/web/src/pages/settings/branding.tsx, apps/api/src/pages/api/workspaces/[id]/branding.ts, branding/logo.ts, branding/handle.ts, branding/preview-email.ts, apps/api/src/lib/branding/entitlement.ts, and migration 0196. This was a local source review; it performed no production action.",
  "related": [
    "hc-share-branding",
    "hc-share-preview-branding"
  ],
  "keywords": [
    "workspace branding",
    "workspace logo",
    "brand settings",
    "cloud storage"
  ]
}
---
Workspace branding changes what people outside a workspace see on public share pages and share-notification email. The feature is available on paid plans; the Free plan keeps dosya branding.

The built-in Owner and Admin roles can edit branding because they hold both **Access Settings** and **Manage branding**. A custom role needs both permissions. Only the workspace owner can claim the permanent share handle.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/branding-workflow-map-2026-10-14.webp" data-light-href="/screenshots/branding-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/branding-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/branding-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/branding-workflow-map-2026-10-14.webp" alt="Workspace branding sequence from opening Configure through previewing the public share page and saving the approved name, logo and colour." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the live recipient preview before saving; the logo upload is immediate, while the name, colour and switches wait for **Save branding**. <a class="workflow-map-full" href="/screenshots/branding-workflow-map-2026-10-14.webp" data-light-href="/screenshots/branding-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/branding-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What each control changes

| Control | Rule and recipient outcome |
| --- | --- |
| **Logo** | PNG, JPEG or WebP only, at most 2 MiB (2,097,152 bytes). Empty files, GIF and SVG are refused. A successful upload replaces the public logo immediately. |
| **Brand name** | Required before any custom branding appears. It is trimmed, limited to 48 characters and cannot contain line breaks or control characters. |
| **Brand colour** | Optional six-digit hexadecimal value such as `#B4472E`. It accents the share page; email stays black and white. |
| **Share page and share links** | Shows the name, logo and colour on the public page and uses a claimed handle in the URL. |
| **Email** | Uses the brand name in the masthead and sender display name. The address remains `noreply@dosya.dev`, and subjects still identify dosya.dev. |
| **Hide the Save to dosya button** | Removes that button only while share-page branding is enabled. |

## Steps

1. In the intended workspace, open **Settings → Workspace info** and find **Branding**.
2. Select **Configure**. If the row says **Branding is available on Starter and up**, the workspace owner's current plan does not include the feature. If **Configure** is disabled, inspect the role or contact support when the workspace says branding was disabled.
3. Upload a non-confidential logo. Use its preview to confirm that transparent padding, cropping and contrast work in both themes.
4. Enter **Brand name** and optionally **Brand colour**. A name must be present before the logo, colour or recipient switches take effect.
5. Choose **Share page and share links**, **Email**, and **Hide the Save to dosya button** for the surfaces the organization approved.
6. Open **Preview → View**. The share preview uses the unsaved form state; the email preview is rendered from the real template but is returned only to your browser and sends no message.
7. Select **Save branding**, then open a disposable share in a signed-out window to inspect the recipient view.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Workspace settings reference showing the active workspace context where the Branding configure row is opened." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Confirm the active workspace name before entering Branding because each workspace stores its own recipient identity. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Claim a share handle

The owner can enter a handle that is 3–30 characters long. It must use lowercase letters, numbers and single hyphens, start and end with a letter or number, and avoid reserved or already-held names. Availability checks are limited to 30 per minute per signed-in user.

Review the confirmation dialog before choosing **Claim permanently**. A claimed handle produces URLs shaped like `dosya.dev/s/@yourname/…`; it cannot be changed in the workspace UI, is not released when branding is revoked, and requires support to change.

## Recovery and reset

- **Use a PNG, JPEG or WebP image.** The declared MIME type or the file signature is unsupported; export a fresh raster image.
- **Logos must be 2 MB or smaller.** Compress or resize the source below 2,097,152 bytes.
- **A brand name can be at most 48 characters.** Shorten the visible name; whitespace is trimmed on save.
- **Use a six-digit hex colour, for example #B4472E.** Enter all six digits after `#`.
- **You do not have permission to change branding.** Ask an owner to grant **Access Settings** and **Manage branding**, or have an owner perform the change.
- **Branding is available on paid plans.** The workspace owner's effective plan lacks the `white_label` feature; stored branding remains available for a later upgrade.
- **Reset to dosya** clears the brand name and colour, then removes the logo. The three switches and permanent handle remain unchanged. If logo removal fails after the text reset, the UI reports **Partly reset** so you can retry removal.

## Expected result

The saved share page shows the approved brand name, optional logo and colour, while recipient email keeps the dosya.dev address and subject conventions. Refreshing the branding page returns the saved values, and a claimed handle remains read-only.

## Related guides

- [Customize sharing branding](/sharing/custom-branding)
- [Preview sharing branding](/sharing/preview-branding)
