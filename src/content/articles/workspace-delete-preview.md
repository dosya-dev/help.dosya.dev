---
{
  "articleId": "hc-workspace-delete-preview",
  "locale": "en",
  "revision": 6,
  "title": "Preview workspace deletion impact",
  "summary": "Review exact workspace deletion counts and blockers before requesting the 15-minute email code, while avoiding an irreversible removal by mistake.",
  "category": "workspaces",
  "articleSlug": "workspace-delete-preview",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified locally on 2026-10-14 against apps/web/src/components/delete-workspace-dialog.tsx, apps/api/src/pages/api/workspaces/[id]/delete-preview.ts, delete-request.ts, index.ts, workspace-operations/service.ts, and deletion tests. Nothing was deleted in production.",
  "related": [
    "hc-workspace-roles",
    "hc-invite-team"
  ],
  "keywords": [
    "workspace delete preview",
    "workspace dashboard and members",
    "delete cloud storage workspace",
    "cloud storage"
  ]
}
---
The deletion preview is the non-destructive first step of Dosya's three-step workspace deletion gate. It counts the data at risk and names blockers before any confirmation code is sent.

Only the workspace owner can open this flow. An Admin or custom role cannot delete a workspace, even with settings permissions. Previewing and cancelling change nothing.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-delete-preview-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp" alt="Workspace deletion preview sequence showing impact counts, deletion blockers, the emailed code step and exact-name confirmation." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Stop on the review step to reconcile files, storage, folders and people; **Cancel** closes the dialog without issuing a code or deleting content. <a class="workflow-map-full" href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp" data-light-href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/workspace-delete-preview-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What the preview counts

- **Files permanently deleted** includes live files and files still in Trash.
- **Storage freed** is the byte total for those files, formatted into a readable unit.
- **Folders removed** includes the workspace folder tree that the deletion cascade removes.
- **Team members losing access** counts other members, excluding the owner who opened the dialog.
- Share links, file requests, comments and version history tied to the workspace are removed too.

Deletion is blocked when another member remains or when this is the owner's last workspace. The preview reports **has_members** as a message to remove members or transfer ownership, and **last_workspace** as a requirement to create another workspace first.

## Steps

1. Switch to the exact workspace you intend to assess, then open **Settings → Danger zone**.
2. Select **Delete** beside **Delete workspace**. Do not use **Leave workspace** or **Transfer ownership** as substitutes; they have different effects.
3. Wait for **Counting what would be deleted…** to finish. If the preview fails, use the displayed error and reload it rather than proceeding from memory.
4. Compare the workspace name, file count, byte total, folder count and other-member count with your own inventory. Trash is included in these totals.
5. Read each red blocker. **Continue** stays disabled until the preview loads and the blocker list is empty.
6. Select **Cancel** when this is only an impact review. No email code is created and the workspace remains available.
7. If deletion is intended, first export or copy everything that must survive and verify the destination bytes. Remove other members, and create another owned workspace when this is the last one.

<figure class="help-screenshot"><a href="/screenshots/workspace-team-overview-2026-10-12.webp"><img src="/screenshots/workspace-team-overview-2026-10-12.webp" alt="Workspace Team page used to identify every other member who blocks owner-initiated workspace deletion." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Use Team to resolve the **other members** blocker before returning to Danger zone; transferring ownership means the previous owner can no longer delete this workspace. <a href="/screenshots/workspace-team-overview-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## If you continue past preview

1. **Continue** requests a six-digit code at the owner's account email. The message names the workspace and repeats file, size and member figures.
2. **Code lifetime and resend limits:** the code expires after 15 minutes. A new request has a 60-second cooldown, is limited to five deletion-code requests per hour, and invalidates any older unconsumed code.
3. Entering the six digits advances to the name check. The server still validates the code only when **Delete forever** is submitted.
4. Type the workspace name exactly. A name mismatch is refused with **The workspace name you typed does not match.** and does not spend a code attempt.
5. **Attempt limit:** each six-digit submission spends an attempt before comparison. The fifth attempt burns the token and is refused even if that fifth value is correct; request a new code afterward.
6. **Delete forever** begins logical removal. The workspace becomes unavailable immediately. Object cleanup can continue in the background, in which case the UI reports **Workspace deletion started**.

The action is irreversible. Files, folders, Trash, versions, shares, file requests, comments and memberships have no restore path for the owner or dosya.dev support. Audit evidence is retained separately for forensic integrity.

## Recovery from blockers and errors

**This workspace still has other members.** Remove each non-owner member, or transfer ownership and let the new owner decide. The server rechecks this condition immediately before deletion.

**This is your only workspace. Create another one first.** Create a separate owned workspace; membership in somebody else's workspace does not satisfy the owner requirement.

**A code was just sent. Check your inbox, or wait a minute to request another.** Use the newest message or wait 60 seconds. Repeatedly requesting codes invalidates previous values.

**Your confirmation code has expired. Request a new one.** Return to the verification step and issue another code after the cooldown.

**Workspace ownership or membership changed. Review the workspace and try again.** The atomic deletion gate caught a race. Close the dialog, reload the preview and reconcile its counts again.

**Failed to delete workspace. Please try again.** The deletion batch did not complete. Reload the account: a retry returns the existing pending or complete receipt instead of starting a second deletion.

## Expected result

For a preview-only review, closing the dialog leaves the workspace and every counted resource intact. If the owner completes all gates, the workspace disappears from access, its data cannot be restored, and background cleanup may finish after the accepted request.

## Related guides

- [Workspace roles](/workspaces/roles)
- [Invite team members](/workspaces/invite-team)
