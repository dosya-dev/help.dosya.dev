---
{
  "articleId": "hc-ai-app-disconnect",
  "locale": "en",
  "revision": 6,
  "title": "Disconnect an AI app",
  "summary": "Revoke one saved AI grant, verify refusal after the one-minute token-cache window, and separately secure keys, sessions, or retained copies.",
  "category": "integrations",
  "articleSlug": "disconnect-ai-app",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/profile/shared.tsx; apps/web/src/pages/profile/index.tsx; apps/web/src/pages/profile/ai-apps.tsx; apps/web/src/pages/profile/ai-apps.test.tsx; apps/api/src/pages/api/me/ai-connections/index.ts; apps/api/src/pages/api/me/ai-connections/[id].ts; apps/api/src/lib/oauth/connections.ts; apps/api/src/lib/oauth/connections.unit.test.ts; apps/api/src/lib/oauth/token-cache.ts; apps/api/src/lib/oauth/token-cache.unit.test.ts; and apps/api/src/lib/oauth/server.ts. Listing, revocation, and the one-minute validated-token cache were checked in repository code and tests; no production grant was revoked.",
  "related": [
    "hc-ai-app-connect",
    "hc-sessions"
  ],
  "keywords": [
    "disconnect AI app",
    "revoke app access",
    "connected apps",
    "cloud storage"
  ]
}
---
Disconnecting deletes one OAuth grant. A token already validated by a warm server isolate can continue working for up to 60 seconds; after that cache window, a new validation fails. Disconnect does not sign out browser sessions, revoke API keys, affect other AI rows or erase material already copied outside Dosya.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/disconnect-ai-app-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" alt="AI revocation map for identifying one client and workspace row, disconnecting its grant, and testing the former connection." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Match both the application and workspace before selecting **Disconnect**, then allow the validated-token cache to expire before the final access test. <a class="workflow-map-full" href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-light-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/disconnect-ai-app-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before revoking access

- Ask the client to stop active work if an incomplete read would be confusing. A token that this server isolate already validated may remain accepted for no more than 60 seconds after revocation.
- Record which row you intend to remove. The list shows application name, workspace name, relative connection time and scopes, newest connection first.
- Save anything you need from the client itself. Dosya controls the authorization grant, not the app's chat history, local cache, exports or retained copies.
- This setting requires an interactive signed-in session. An API key or connected-app token cannot list or administer sibling grants.

## Steps

1. Open the account menu and select **Profile**.
2. In the profile navigation, choose **Connected AI apps**. The direct route is `/profile/ai-apps`.
3. Find the row whose app name and workspace match the connection you want to revoke. Check the **Read files** and optional **Plan and storage** chips when similarly named rows exist.
4. Select **Disconnect** on that row. There is no second confirmation dialog in this screen, so the click is the revocation action.
5. Wait for **App disconnected**. Its message names the client and confirms that it can no longer read the workspace; the page then reloads the connection list.
6. Wait at least 60 seconds, then return to the AI client and retry a harmless read. It should require a new authorization or report that access is unavailable.
7. If the client also uses a Dosya API key, open **Profile → API keys** and handle that credential separately. Review **Sessions** as a separate account control when unauthorized sign-in is also a concern.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="API-key restrictions screen used to distinguish reusable keys from a disconnected AI OAuth grant." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>An OAuth disconnect does not revoke credentials created in this API-key area. Remove any separate key only when the same client was also configured with one. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The selected row disappears after the list refreshes, while unrelated clients and workspaces remain. The server has removed the grant; once the accepted validation cache expires within 60 seconds, previously issued tokens fail validation. Dosya also records a successful `mcp_grant_revoked` audit event against that workspace.

Revocation cannot be undone for the same grant. To restore access, start a fresh connect request in the AI client and review a new consent screen. The new approval may select different optional access, but it cannot recover or constrain data the old connection already received.

## When disconnect does not complete

- **Disconnect failed · Not found** means the grant was absent from your current user's listing, which can occur if it was already removed or the page was stale. Reload before acting on a different row.
- **Could not disconnect right now. Try again in a moment.** is returned when grant listing or provider revocation fails. The row should be treated as active until a retry succeeds and the row disappears.
- **Connected apps could not be loaded. Try again in a moment.** means Dosya could not obtain the list. It intentionally does not show the empty-state sentence in that case.
- **No AI apps are connected** appears only after a successful load returns zero grants; it also displays the MCP address for a future connection.
- If the former client can still read immediately after the success toast, wait until more than 60 seconds have passed and test a fresh read. Continued access after that points to a different connection row, a separate API key, previously cached file content or another Dosya account.

## Related guides

- [Connect an AI app](/integrations/ai-app-connect)
- [Review sessions](/account/sessions)
