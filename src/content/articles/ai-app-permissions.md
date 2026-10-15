---
{
  "articleId": "hc-ai-app-permissions",
  "locale": "en",
  "revision": 6,
  "title": "Review AI app permissions",
  "summary": "Interpret each AI consent label, limit the grant to one readable workspace, remove optional account access, and deny suspicious callback destinations.",
  "category": "integrations",
  "articleSlug": "ai-app-permissions",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/web/src/pages/connect/ai.tsx; apps/web/src/lib/ai-brands.ts; apps/api/src/lib/oauth/consent.ts; apps/api/src/lib/oauth/consent.unit.test.ts; apps/api/src/lib/oauth/server.ts; apps/api/src/lib/oauth/server.unit.test.ts; apps/api/src/pages/api/oauth/consent.ts; apps/api/src/pages/api/oauth/consent.unit.test.ts; apps/api/src/mcp-principal.ts; apps/api/src/mcp-gateway.ts; apps/api/src/lib/plans.ts; and apps/web/src/pages/profile/ai-apps.tsx. Local source and unit-test contracts were examined; no production OAuth decision was submitted.",
  "related": [
    "hc-ai-app-connect",
    "hc-api-key-scopes"
  ],
  "keywords": [
    "AI app scopes",
    "files read scope",
    "account access",
    "cloud storage"
  ]
}
---
The consent screen is the enforceable boundary for an AI connection. Dosya recognizes only `files.read` and `account.read`, binds the grant to one workspace, and discards unknown requested scopes.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/ai-app-permissions-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" alt="Permission review map identifying the callback badge, workspace selector, required file-reading scope and optional account scope." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Evaluate the destination first, then choose the workspace and keep only the optional access the client actually needs. <a class="workflow-map-full" href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-light-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/ai-app-permissions-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## What each control means

| Consent control | Access granted |
| --- | --- |
| **Workspace it can read** | Restricts the connector principal to that single workspace ID. Other workspaces and the Vault remain outside the grant. |
| **Find and read files in _workspace_** | The required `files.read` scope. It permits discovery and reading, so Dosya does not offer a connection without it. |
| **See your plan and storage** | Optional `account.read`. It lets the client read plan and storage information; clear it when the task only needs files. |
| **Allow _name_** | Approves the displayed destination and selected scope set. |
| **Deny** | Completes the request as denied and creates no usable grant. |

The page also states two permanent exclusions for this connector: it cannot change, share or delete content, and it cannot open any unselected workspace or Vault data. A workspace role may already expose fewer files; OAuth permission never increases that membership access.

## Steps

1. Compare the app identity with the action you just took. A badge beginning **Verified:** is based on the exact callback hostname, not the self-declared app name. Dosya currently recognizes `claude.ai`, `claude.com`, `chatgpt.com` and `chat.openai.com` for branded verification.
2. Treat **Not verified · sends to _host_** as a destination disclosure. Approve only when that host belongs to the client you deliberately configured. For a localhost callback, proceed only while the expected local application is waiting for access.
3. Inspect **Workspace it can read**. The menu contains your eligible non-E2EE workspace memberships; selecting a workspace does not add you as a member or change your role.
4. Leave **Find and read files in _workspace_** selected. It is required by the resource server and is always inserted even if the client omitted it from its request.
5. Decide whether the client needs account facts. Uncheck **See your plan and storage** when it does not. Dosya grants optional scopes only when the client requested them, the page offered them, and you left them selected.
6. Read **Access goes to _host_** and the signed-in email at the bottom. If either is unexpected, choose **Deny**, close the client request, and investigate before trying again.
7. After approval, open **Profile → Connected AI apps** and compare the row's workspace and chips with your decision. The chips use **Read files** and **Plan and storage**.

<figure class="help-screenshot"><a href="/screenshots/api-key-restrictions-2026-10-10.webp"><img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="API-key protocol, workspace and expiry restrictions that do not apply to an OAuth AI consent grant." width="582" height="867" loading="lazy" decoding="async" /></a><figcaption>These API-key restrictions belong to reusable developer credentials. An AI consent grant is read-only, limited by its chosen workspace and managed from Connected AI apps. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The saved connection names exactly one workspace and always displays **Read files**. **Plan and storage** appears only when you approved `account.read`. A read in the chosen workspace succeeds; attempts to write, share, delete, inspect another workspace or reach an E2EE Space are outside the connector's permission model.

Approval is reversible by disconnecting the grant. That action stops later token use but cannot recall file contents or account information the client already received. Free-plan limits are counted separately for each grant: **100 text reads** and **25 image conversions**, resetting at UTC midnight; current paid-plan defaults leave both counters unlimited.

## Refuse or recover safely

- Choose **Deny** when the callback host, client identity, signed-in email or workspace differs from your expectation.
- **You have no workspace this app can read. End-to-end encrypted Spaces cannot be connected.** means the account has no eligible selection; moving data out of an E2EE Space solely to satisfy a connector changes its security boundary.
- If **Allow** is unavailable, choose a workspace. The button remains disabled while the workspace value is empty.
- An expired consent request returns `410` and the page instructs you to begin again. The ten-minute handle cannot be extended or replayed.
- Unknown scopes are not displayed or granted. If a client claims it received a permission absent from the screen, disconnect the row and treat that behavior as an external-client issue.

## Related guides

- [Connect an AI app](/integrations/ai-app-connect)
- [Choose API-key permission](/developers/api-key-scopes)
