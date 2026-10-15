---
{
  "articleId": "hc-share-branding",
  "locale": "en",
  "revision": 6,
  "title": "Customize sharing-page branding",
  "summary": "Add a workspace logo, name, colour and permanent share handle, then control exactly which brand details recipients see on shared files and email.",
  "category": "sharing",
  "articleSlug": "custom-branding",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against local branding UI, entitlement, handle, logo, email-template, and API test sources: apps/web/src/pages/settings/branding.tsx; apps/api/src/pages/api/workspaces/[id]/branding.ts; apps/api/src/pages/api/workspaces/[id]/branding/logo.ts; apps/api/src/pages/api/workspaces/[id]/branding/handle.ts; apps/api/src/lib/branding/entitlement.ts; apps/api/src/lib/branding/handle.ts. Production behavior was not checked for this branding procedure.",
  "related": [
    "hc-share-preview-branding",
    "hc-create-link"
  ],
  "keywords": [
    "share branding",
    "custom logo",
    "sharing page colors",
    "file sharing"
  ]
}
---
Workspace branding can add a name, logo, colour and permanent handle to recipient-facing shares. Password, expiry, named-recipient and download controls continue to decide access.

Branding is available on Starter and higher paid plans. You need both **access_settings** and **manage_branding** permissions to change it; a custom role with only one cannot save or upload. The owner alone can claim the workspace handle.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/custom-branding-workflow-map-2026-10-14.webp" data-light-href="/screenshots/custom-branding-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/custom-branding-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/custom-branding-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/custom-branding-workflow-map-2026-10-14.webp" alt="Workspace Branding workflow showing logo upload, name and colour fields, recipient toggles, permanent handle claim, preview, and save." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Set the visual identity first, decide which recipient surfaces use it, preview the result, and save the text and toggle changes. <a class="workflow-map-full" href="/screenshots/custom-branding-workflow-map-2026-10-14.webp" data-light-href="/screenshots/custom-branding-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/custom-branding-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. In the web app, open **Workspace Settings → Branding**. A read-only member can see saved values but receives **You can see these settings but your role cannot change them.** A revoked workspace instead displays **Branding is disabled for this workspace. Your values are shown below but cannot be changed. Contact support to find out why.**
2. Under **Logo**, choose **Upload**. Use a PNG, JPEG or WebP file no larger than 2 MiB. Dosya rejects an SVG with **SVG logos are not accepted. Export your logo as a PNG, JPEG or WebP image.**, an unsupported format with **Use a PNG, JPEG or WebP image.**, an empty file with **That file is empty.**, and an oversized image with **Logos must be 2 MB or smaller.** Uploading applies immediately and replaces the previous public logo identifier; it is not held for the final save.
3. Enter **Brand name**. It is required before any branding resolves for recipients, accepts at most 48 characters, and cannot contain line breaks or control characters. The matching validation messages are **A brand name can be at most 48 characters.** and **A brand name cannot contain line breaks or control characters.** Without a saved name, shares and email keep Dosya defaults even if a colour or logo exists.
4. Set **Brand colour** to a six-digit hexadecimal value beginning with `#`, such as `#B4472E`. The field reports **Use a six-digit hex colour that starts with #.** This accent applies to the share page; branded email remains black and white.
5. Configure **Share page and share links**. **Brand the share page** enables the workspace name, logo, accent and claimed handle. **Hide the Save to dosya button** removes that recipient action only while share-page branding is enabled. It does not hide **Download** or **Copy link**.
6. Under **Email**, turn on **Brand email** if delivery mail should use the name and logo. The visible sender name changes, but mail still comes from `noreply@dosya.dev`. The subject is generated from the sender and shared items, such as **Firat shared a file with you: Q4-report.pdf**; branding does not replace that subject formula.
7. If the workspace has no handle, enter 3–30 lowercase ASCII letters, numbers or single hyphens under **Share handle**. It must begin and end with a letter or number and cannot contain consecutive hyphens or a reserved word. Availability is checked after 400 ms; the control shows **Checking...**, then **That handle is available.** when claimable.
8. Select **Claim handle**, review **Claim this handle?**, and choose **Claim permanently**. This owner-only operation cannot be changed through the UI, remains reserved if branding or the workspace is later disabled, and requires support to alter. Expected refusals include **Only the workspace owner can claim a share handle.**, **That handle is taken. Pick another.**, and **This workspace already has a share handle. Contact support to change it.**
9. Use **Preview → View** to inspect the draft, then select **Save branding**. A successful settings write reports **Saved — Your branding has been updated.** If the request cannot finish, Dosya shows **Couldn't save** with the API reason or **Could not reach the server. Please try again.**

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Workspace security reference used to confirm that branded sharing still follows the active workspace access policy." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Brand presentation does not replace the workspace permissions and per-link protections that govern recipient access. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the saved brand

Open a non-confidential share URL in a signed-out browser. Confirm the saved name and optional logo appear, the accent keeps controls readable, the claimed `@handle` is present in the URL when share branding is enabled, and protected links still demand their password or one-time code.

A lapsed paid plan stops applying the brand but retains its stored values. Returning to an eligible plan restores them without another upload. An administrator revocation also suppresses the brand and prevents edits.

## Remove or reset branding

**Remove** under Logo takes effect immediately. **Reset to dosya → Reset** clears the name, colour and logo, but leaves the three branding switches and permanent handle unchanged. There is no undo; re-enter the name and upload a new logo if the reset was accidental. A complete reset reports **Reset — Your name, colour and logo were cleared.** If object deletion fails after the text fields clear, the UI reports **Partly reset — Your name and colour were cleared, but the logo could not be removed.**

## Expected result

New and existing live share URLs resolve with the saved recipient presentation whenever the workspace remains entitled and branding is enabled. Access restrictions, file bytes and previously downloaded copies are unaffected.

## Related guides

- [Preview workspace sharing branding](/sharing/preview-branding)
- [Create a sharing link](/sharing/create-link)
- [Audit a sensitive delivery](/sharing/audit-delivery)
