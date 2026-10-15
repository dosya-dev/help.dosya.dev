---
{
  "articleId": "hc-notifications-open-correct-workspace",
  "locale": "en",
  "revision": 5,
  "title": "Open a notification in the correct workspace",
  "summary": "Open a notification safely when several workspaces exist, verify the active context, and recover when membership or resource visibility changed.",
  "category": "account",
  "articleSlug": "notifications-open-correct-workspace",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally on 2026-10-14 against apps/mobile/src/files/WorkspaceSwitcher.tsx, apps/mobile/src/files/workspaceStore.ts, apps/mobile/app/notifications.tsx, apps/mobile/src/notifications/actionPath.ts, apps/api/src/lib/notifications/query.ts, and workspace-switch tests. No production resource was opened.",
  "related": [
    "hc-notification-preferences",
    "hc-notification-troubleshoot"
  ],
  "keywords": [
    "notifications open correct workspace",
    "Notification delivery diagnostics",
    "Dosya help",
    "secure cloud storage"
  ]
}
---
Notification history belongs to the account, while files, teams, shares, and permissions belong to individual workspaces. Confirm context before acting when names repeat across workspaces.

<figure class="help-screenshot"><a href="/screenshots/notifications-open-correct-workspace-help-workflow-2026-10-14.webp"><img src="/screenshots/notifications-open-correct-workspace-help-workflow-2026-10-14.webp" alt="Notification resource workflow checking account identity, active workspace, current membership, and supported mobile route." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Account-wide notices still require the correct workspace context before a resource can open. <a href="/screenshots/notifications-open-correct-workspace-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Check the signed-in email in Settings or Profile before opening the notice.
2. Read the notification title/body for a workspace or resource name. The inbox itself is not filtered by the workspace currently shown in the header.
3. Tap the workspace name and choose the expected entry under **Your workspaces**. The phone displays **Switching workspace…** for two seconds while queries refresh.
4. Return to the notification and open its supported action or row destination.
5. Compare the file/team/share name with the selected workspace before editing, downloading, or dismissing any resource-specific warning.

<figure class="help-screenshot"><a href="/screenshots/account-profile-identity-2026-10-12.webp"><img src="/screenshots/account-profile-identity-2026-10-12.webp" alt="Dosya profile identity reference for matching an account-wide notification to its workspace membership." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Identity and workspace context must both match before acting on a linked resource. <a href="/screenshots/account-profile-identity-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

Mobile route mapping converts `/files/:id` to its file screen and supports Files, Shares, Teams, Workspaces, Profile, Notifications, and the Vault root. The route itself does not grant access. Current membership, folder confinement, locks, hidden-item rules, and role permissions are checked by the destination APIs.

Choosing the same workspace is a no-op and shows no splash. If no active workspace is stored, the app displays and persists the first returned membership; that fallback can be wrong for a notification from another workspace, so inspect the name.

## Expected result

The resource opens under the intended account and workspace, or access is refused without exposing content from a workspace the user cannot reach.

## Troubleshooting

**The notification opens a different-looking file list.** Check the workspace header; account-wide inbox rows can reference another membership than the active one.

**The workspace is absent.** Membership may have ended or the current account is wrong. Review **My workspaces** before requesting a new invitation.

**The route opens but the item is unavailable.** It may have been moved, trashed, hidden, locked, or purged after the notification was created. Ask a current workspace owner to verify its state.

## Related guides

- [Review settings for cross-workspace notices](/account/notification-preferences)
- [Resolve notification workspace mismatch](/troubleshooting/notifications)
