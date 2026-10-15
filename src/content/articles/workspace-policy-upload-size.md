---
{
  "articleId": "hc-workspace-policy-upload-size",
  "locale": "en",
  "revision": 5,
  "title": "Set a workspace upload-size policy",
  "summary": "Set the maximum size for one uploaded file, understand GiB enforcement across upload methods, and test the boundary without risking production data.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-upload-size",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 against apps/web/src/pages/settings.tsx, apps/api/src/pages/api/workspaces/[id]/settings.ts and upload-limits.ts, lib/upload/extension-policy.ts, init-gates.ts, measured-quota.ts, and their limit tests. No production setting or upload was attempted.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy upload size",
    "Workspace policy enforcement",
    "file upload size limit",
    "team cloud storage"
  ]
}
---
**Max upload file size** is the workspace-wide ceiling for one file. It applies independently of account storage, the total workspace cap, per-member storage, simultaneous-upload limits and limits attached to an API credential.

The value is displayed as GB but enforced in binary bytes: one entered GB equals 1,073,741,824 bytes. A file exactly at the ceiling is accepted by this rule; one byte above is refused.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-upload-size-help-workflow-2026-10-14.webp"><img src="/screenshots/workspace-policy-upload-size-help-workflow-2026-10-14.webp" alt="Workspace upload-size policy sequence from entering a whole-GB maximum through below-limit and above-limit file tests." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Save **Max upload file size**, then prove the boundary with disposable files whose exact byte sizes are known. <a href="/screenshots/workspace-policy-upload-size-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Permission and value rules

Built-in Owner and Admin roles can change this field. A custom role needs both **Access Settings** and **Change max file size**. Members who cannot edit the setting can still read the applicable upload constraint before sending files.

Use a whole number of at least 1 GB for a practical policy. The API rounds storage-related settings to whole GB, allows an empty value to clear this cap, and refuses a number above the workspace owner's effective storage entitlement. Negative or non-numeric input is rejected. Entering `0` creates a zero-byte boundary and blocks every non-empty file, so clear the field instead when no per-file workspace cap is wanted.

The server checks declared size before opening a resumable upload and checks the actual received bytes again at completion. Under-declaring a file cannot bypass the policy. The same shared size check covers regular upload sessions and measured-byte ingestion paths such as batch, sync and import flows; a specific client or protocol can impose an additional smaller limit.

## Steps

1. Switch to the workspace that should receive the rule, then open **Settings → Hard limits**.
2. Locate **Max upload file size**. Confirm that the suffix says **GB** and that you are not editing **Storage per member** or **Total workspace storage cap**.
3. Enter the approved whole-GB value. Keep it at or below the plan capacity shown for the workspace owner's effective entitlement.
4. Select the Save icon beside this row. The success toast reads **Limit updated** and **Your hard limit has been saved.**
5. Refresh **Settings → Hard limits** and verify that the same number returns.
6. Upload a disposable file comfortably below the boundary. Confirm that it completes and that its exact byte size is correct.
7. Try a second disposable file larger than `configured GB × 1,073,741,824`. The server should refuse it with the workspace size-limit message and must not publish a completed file.
8. Delete the accepted test file and empty Trash if you need its bytes released from storage accounting.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Hard limits settings reference showing the Max upload file size row and its per-field Save control." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The per-file maximum has its own permission and Save action; changing it does not raise account or workspace-total capacity. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## What users and clients receive

- Preflight responses expose `max_file_size_gb` to authenticated workspace members so clients can warn before sending.
- A file over the workspace rule receives **File exceeds the … GB size limit for this workspace**.
- A credential with a stricter byte limit can answer first with its own HTTP 413 refusal. Both the credential and workspace rule must pass.
- The multipart body also has to match the size declared at initialization; an oversized body can receive **Upload body is larger than the file_size declared at init**.
- The dedicated small batch endpoint has an independent 5 MiB per-file transport ceiling and can return **File too large for batch**, even when the workspace setting is higher.

Existing files and completed versions are not resized or deleted when this value is lowered. The new limit governs subsequent byte-adding operations, including a new version uploaded under an existing filename.

## Troubleshooting

**You don't have permission: change max file size.** Ask an owner to grant the granular permission together with Settings page access, or have an authorized administrator save the rule.

**max_file_size_gb must be a positive number or empty.** Remove text and negative values. Use a whole-number GB value, or leave the input blank to store no workspace-specific file maximum.

**max file size gb cannot exceed your plan's … GB storage limit. Upgrade your plan for more.** Reduce the field to the stated plan ceiling. A single file cannot be allowed to exceed the entire effective storage entitlement.

**A supposedly below-limit file is refused.** Check its actual bytes rather than the rounded size shown by the operating system, then inspect credential, plan, total-workspace, per-member, extension and batch-route limits.

**The save toast does not appear.** The UI reports **Couldn't save** and leaves the prior server value in force. Reload Settings before relying on the edited number.

## Expected result

The saved whole-GB maximum survives refresh, a controlled file below or exactly at the byte ceiling can pass this policy, and an oversized file is refused before it becomes a completed workspace item. No existing file is removed by the settings change.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
