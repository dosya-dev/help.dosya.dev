---
{
  "articleId": "hc-ai-app-connect",
  "locale": "en",
  "revision": 6,
  "title": "Connect an AI app to Dosya",
  "summary": "Connect an AI client to one readable workspace, inspect its verified destination and scopes, then confirm the saved grant before using private files.",
  "category": "integrations",
  "articleSlug": "ai-app-connect",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/connect/ai.tsx; apps/web/src/pages/profile/ai-apps.tsx; apps/api/src/pages/authorize.ts; apps/api/src/pages/api/oauth/consent.ts; apps/api/src/pages/api/oauth/consent.unit.test.ts; apps/api/src/lib/oauth/consent.ts; apps/api/src/lib/oauth/consent.unit.test.ts; apps/api/src/lib/oauth/server.ts; apps/api/src/mcp-principal.ts; apps/api/src/mcp-gateway.ts; apps/api/src/lib/plans.ts; and apps/api/src/lib/oauth/connections.ts. Repository UI, OAuth and permission contracts were checked without sending production authorization requests or using live credentials.",
  "related": [
    "hc-ai-app-permissions",
    "hc-ai-app-disconnect",
    "hc-suspicious-activity"
  ],
  "keywords": [
    "connect AI app",
    "ChatGPT connection",
    "Claude connection",
    "cloud storage"
  ]
}
---
An AI client connects to Dosya through OAuth at `https://mcp.dosya.dev/mcp`. The approval grants read access to one workspace; it does not give the app your password or an API key.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" alt="AI app connection map from the client request through workspace and scope approval to the saved Dosya grant." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Start in the AI client, approve one eligible workspace in Dosya, and inspect the resulting row under Connected AI apps. <a class="workflow-map-full" href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-connect-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-connect-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you connect

- Start from the client you intend to use and enter the Dosya MCP server URL there. A bare browser visit is not a connection request.
- Sign in to the Dosya account that belongs to the target workspace. The consent transaction lasts **10 minutes**; an expired request must be started again from the AI client.
- Issued access tokens last **1 hour**. Refresh use keeps a connection alive only while it is used at least once every **30 days**, and every grant reaches an absolute **180-day** reconnect ceiling.
- Use a harmless file for the first read. Once an external app reads content, disconnecting cannot delete copies already held by that app.
- A regular workspace can be offered when you are a member. End-to-end encrypted Spaces are excluded because the server cannot read their files. Approval has no paid-plan gate and cannot bypass workspace membership.
- The source catalog gives each Free-plan connection **100 text file reads** and **25 image conversions** per UTC day. The current paid-plan defaults are unlimited for those two counters; a plan change is read on the next call.

## Steps

1. In Claude, ChatGPT or another MCP client, add `https://mcp.dosya.dev/mcp` as the server and begin its connect flow.
2. Complete Dosya sign-in if prompted. If the page says **That link is not valid**, return to the client and start again; do not reuse or edit the URL.
3. Read the identity badge. Claude and ChatGPT are shown as verified only when the authorization code will return to a recognized Claude or ChatGPT hostname. A different remote client shows **Not verified · sends to _host_**. A loopback callback warns, **This sends access to an app on your computer**.
4. Under **Workspace it can read**, select the intended workspace. With one eligible workspace, Dosya selects it automatically; with several, **Allow** stays disabled until you choose one. If none qualify, the page says **You have no workspace this app can read. End-to-end encrypted Spaces cannot be connected.**
5. Review the scope list. **Find and read files in _workspace_** is required and cannot be unchecked. If the client asked for `account.read`, **See your plan and storage** appears as an optional checked permission that you may clear.
6. Confirm the exclusions shown on the page: the grant cannot change, share or delete anything, and cannot open other workspaces or your Vault.
7. Select **Allow _app name_**. To abandon the request without creating a grant, select **Deny** instead. Dosya then returns the authorization result to the callback host displayed on the page.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="Dosya API-key restrictions dialog shown as a separate credential system from OAuth-connected AI applications." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>AI-app approval does not use this API-key form. Manage the resulting OAuth grant under Connected AI apps, without creating or exposing a reusable API secret. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The client resumes after authorization and can find and read files only in the selected workspace. Open the account menu, choose **Profile**, then **Connected AI apps**. Its row shows the client name, workspace, connection time and permission chips such as **Read files** and, when granted, **Plan and storage**.

Try one read of a non-confidential item. A file from another workspace, an E2EE Space or the Vault must remain unavailable, and the connector has no write, share or delete permission.

## If the connection fails

- **This request expired. Go back to your AI app and connect again.** means the ten-minute consent handle is no longer usable.
- **Could not connect the app. Please try again.** covers an unexpected client or network failure. Restart at the client if a retry does not resume the same request.
- **The server returned an unexpected destination** means the returned host differed from the one shown before approval. Stop and initiate a new connection; do not follow a replacement address manually.
- A `401` during the flow sends you through Dosya sign-in. The approval still has to belong to the same signed-in user who opened the consent request.
- If the row cannot be inspected, **Connected apps could not be loaded. Try again in a moment.** reports a listing failure; it does not prove that no grant exists.

## Related guides

- [Review AI app permissions](/integrations/ai-app-permissions)
- [Disconnect an AI app](/integrations/disconnect-ai-app)
- [Respond to suspicious activity](/account/suspicious-activity)
