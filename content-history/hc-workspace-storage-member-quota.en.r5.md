---
{
  "articleId": "hc-workspace-storage-member-quota",
  "locale": "en",
  "revision": 5,
  "title": "Respond when a member upload reaches quota",
  "summary": "Diagnose a member’s per-uploader storage refusal, compare it with workspace and account capacity, then free or raise the correct limit before retrying.",
  "category": "workspaces",
  "articleSlug": "workspace-storage-member-quota",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/settings.tsx, apps/api/src/lib/quota.ts, apps/api/src/lib/upload/measured-quota.ts, apps/api/src/lib/upload/init-gates.ts, apps/api/src/lib/repo/repo-d1/gates.ts, apps/api/src/lib/workspace-do/repo/gates.ts, and apps/api/src/lib/files/purge.ts. No production upload was retried.",
  "related": [
    "hc-workspace-storage-allocation",
    "hc-storage-usage"
  ],
  "keywords": [
    "workspace storage member quota",
    "Workspace storage controls",
    "Dosya help",
    "team cloud storage"
  ]
}
---
**Storage per member** measures bytes attributed to one uploader and can refuse that person while the workspace still shows free capacity. It is independent of the total workspace cap.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14.webp" alt="Four-step member-quota map showing the exact workspace-wide rule, immediate live-usage reduction from Trash, broader purge accounting, and one retry." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Trash lowers the live per-uploader total immediately; workspace and account storage remain charged until irreversible purge. <a class="workflow-map-full" href="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-storage-member-quota-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Capture the file size, active workspace, uploader account, and full error message.
- The settings editor needs **Access Settings** and **Change storage per member**.
- Moving a file to Trash removes it from the live per-member sum, but workspace and account storage stay charged until permanent purge; purging is irreversible.

## Steps

1. Confirm the upload reports **You’ve reached your _N_ GB per-member storage limit** rather than a workspace or account message.
2. Open **Workspace settings → Hard limits** and read **Storage per member** plus **Total workspace storage cap**.
3. Compare the member’s attributed bytes plus the incoming file with the per-member limit using 1 GB = 1,073,741,824 bytes.
4. Move disposable files attributed to that uploader to Trash to lower the member total, or save a higher allowed per-member value.
5. Retry after the live rows or saved limit update; permanently purge Trash only when the workspace or account storage ceiling also needs space.
6. Retry the single failed upload and verify it completes without crossing the workspace owner’s remaining entitlement.

<figure class="help-screenshot"><a href="/screenshots/storage-breakdown-2026-10-12.webp"><img src="/screenshots/storage-breakdown-2026-10-12.webp" alt="Reference for “Respond when a member upload reaches quota”: Dosya storage breakdown showing used and available workspace capacity." width="1160" height="900" loading="lazy" decoding="async" /></a><figcaption>Reference for “Respond when a member upload reaches quota”: Dosya storage breakdown showing used and available workspace capacity. <a href="/screenshots/storage-breakdown-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Limit interaction

Raising the per-member value cannot exceed the owner’s plan storage ceiling and does not bypass the total workspace cap. An upload must satisfy the credential, role, file, member, workspace, and account gates.

The final measured-byte reservation is atomic, so two concurrent writes cannot both claim the same remaining workspace capacity. A successful retry increases workspace usage by the committed bytes.

## Expected result

The member’s controlled retry succeeds after live attributed usage plus the new file fits the per-member rule and both broader storage ceilings. Trash can resolve the member rule while the broader ceilings remain unchanged until purge.

## Troubleshooting

**The same member message remains.** Confirm the trashed files were uploaded by that member and are no longer live; another uploader’s files do not reduce this member’s attributed total.

**The error changes to a workspace or account limit.** The member ceiling is resolved, but Trash is still charged to those broader totals; permanently purge disposable content or raise the binding ceiling.

**Only one client fails.** Inspect credential-specific maximum file size and role usage limits on that surface.

## Related guides

- [Review storage allocation](/workspaces/storage-allocation)
- [Understand storage usage](/uploading/storage-usage)
