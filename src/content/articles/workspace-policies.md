---
{"articleId":"hc-workspace-policies","locale":"en","revision":1,"title":"Setting workspace limits and sharing policies","summary":"Configure upload, storage, sharing and access rules for a workspace, then understand how they combine with plan and role limits.","category":"workspaces","articleSlug":"policies","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the current Hard limits and Security settings against the local current web app and API on 2026-10-12. Screenshots use isolated representative settings; cross-client enforcement claims were checked against current server gates and tests.","related":["hc-workspace-roles","hc-storage-usage","hc-password-link"],"keywords":["workspace policies","upload limit","storage cap","sharing policy","force password","disable share links","allowed domain"]}
---
Workspace policies let an authorized administrator set a stricter operating boundary than the account plan. Use **Hard limits** for file size, storage and upload controls, and **Security** for sharing, sessions and access lists.

## Before you start

- Select the intended workspace and open **Settings**.
- You need the permission named by the setting. Most security controls require **Manage settings**; hard-limit controls have dedicated permissions.
- Record the current values before changing them.
- Test restrictive changes with a harmless file and a second test member before relying on them for a team.
- A workspace policy can reduce an allowance. It cannot create storage or capabilities beyond the account plan.

## Steps: configure hard limits

1. Open **Settings → Hard limits**.
2. Set **Max upload file size** for the largest single file the workspace should accept.
3. Set **Storage per member** if one member should not consume the entire workspace allocation. Leave the field blank when no member-specific cap is needed.
4. Set **Total workspace storage cap** below or equal to the allocation available to the workspace.
5. Set **Max simultaneous uploads** to control per-member transfer concurrency.
6. Use **Allowed file types** as a comma-separated allowlist, or **Blocked file types** to reject selected extensions. Avoid contradictory lists.
7. Save each changed row and wait for its confirmation.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-hard-limits-2026-10-12.webp"><img src="/screenshots/workspace-policy-hard-limits-2026-10-12.webp" alt="Dosya Workspace settings showing maximum file size, storage per member, total storage, simultaneous upload and file-type controls." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Hard limits apply workspace-specific caps to uploads and storage. Save each row after reviewing its units. <a href="/screenshots/workspace-policy-hard-limits-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: configure sharing and access rules

1. Open **Settings → Security**.
2. Turn on **Disable public share links** when the workspace must prevent new share-link creation.
3. Turn on **Force password on share links** when every newly created link must have a password.
4. Choose **Share link max expiry** to cap link lifetime. **Default share link expiry** only preselects a value that an eligible sharer may change within the cap.
5. Set **Session timeout** and **Download rate limit** when required.
6. Manage IP, country and allowed email-domain lists carefully. A mistaken allowlist can block legitimate members.
7. Save, then perform one allowed and one deliberately denied test with a non-owner test member.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Dosya Workspace Security settings with controls for disabling public links, forcing share passwords and recording upload origin." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Security policies govern link creation and other access behavior. A maximum expiry is a cap; a default expiry is only the initial choice. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Saved values remain visible after reload. New actions that exceed a cap or violate a rule are refused with an explanation. Existing members retain only the access allowed by their role, folder scope, workspace policies and account plan together.

## Limits and interactions

- The effective upload limit is the smallest applicable plan, workspace, role, credential and request limit.
- Disabling share links prevents creation; manage existing links separately.
- Forcing passwords applies to share-link creation and does not turn ordinary storage into Vault encryption.
- Allowed email domains affect joining. They do not rewrite existing member email addresses.
- IP and country rules can be affected by VPNs, proxies and corporate gateways.
- Settings shown by the API but absent from the current UI should not be assumed to be enforced.

## Troubleshooting

**A member sees a smaller limit than the plan advertises.** Compare the plan allowance with workspace hard limits, their role conditions and the specific upload or file-request limit. The smallest boundary wins.

**Share creation is unavailable.** Check **Disable public share links**, the member's role and folder scope.

**A link cannot use the requested expiry.** The workspace maximum expiry clamps longer choices. Choose a shorter duration or have an authorized administrator review the cap.

**A legitimate person cannot join.** Review the allowed email-domain list and member cap. Do not weaken unrelated role permissions as a workaround.

**A policy locked out a test user.** Revert it from an owner or authorized administrator session. Preserve the exact error and setting name for private support.

## Related guides

- [Choosing built-in and custom workspace roles](/workspaces/roles)
- [Understanding storage usage and failed quota checks](/uploading/storage-usage)
- [Protecting a sharing link with a password](/sharing/password-link)
