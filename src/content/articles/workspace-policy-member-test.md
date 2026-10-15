---
{
  "articleId": "hc-workspace-policy-member-test",
  "locale": "en",
  "revision": 5,
  "title": "Verify a policy change as a regular member",
  "summary": "Validate a workspace policy from a regular member session, record the exact refusal or success, and separate role, page, scope and cached-setting effects.",
  "category": "workspaces",
  "articleSlug": "workspace-policy-member-test",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed on 2026-10-14 against apps/web/src/pages/settings.tsx, apps/web/src/pages/role-create.tsx, apps/api/src/pages/api/workspaces/[id]/settings.ts, apps/api/src/lib/kv-cache.ts, and packages/test-harness/tests/roles-enforcement.int.test.ts. Production settings were not changed.",
  "related": [
    "hc-workspace-policies",
    "hc-workspace-roles"
  ],
  "keywords": [
    "workspace policy member test",
    "Workspace policy enforcement",
    "Dosya help",
    "team cloud storage"
  ]
}
---
Policy validation should use a non-administrator account because owner access can hide permission failures. Test one controlled operation after the setting or role change has propagated.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp" alt="Four-step member-policy test map showing the exact save receipt, effective role and scope, 60-second convergence, and one captured action result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Change one rule, wait for Settings updated, Role updated, or Limit updated, then capture one representative result from the member session. <a class="workflow-map-full" href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp" data-light-href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/workspace-policy-member-test-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Record the member’s role, folder anchor, active workspace, client surface, and the policy being changed.
- Use disposable content whose upload, share, rename, or deletion cannot affect another person.
- Expect settings and membership caches to remain stale briefly across distributed workers.

## Steps

1. As an authorized administrator, change one policy or permission and wait for its receipt: **Settings updated**, **Role updated**, or **Limit updated — Your hard limit has been saved.**
2. In **Team**, verify the test member’s role and **Whole workspace** or folder label.
3. Wait roughly 60 seconds, then reload the member’s web tab or reconnect the protocol client.
4. Confirm the member is operating in the intended workspace and can reach the page required for the test.
5. Perform exactly one representative action and capture the visible result or exact server error without repeated retries.
6. Compare the result with the configured policy, role permission, folder boundary, and any active-hours, IP, or usage condition.

<figure class="help-screenshot"><a href="/screenshots/workspace-policy-security-2026-10-12.webp"><img src="/screenshots/workspace-policy-security-2026-10-12.webp" alt="Reference for “Verify a policy change as a regular member”: Dosya workspace policy controls for sharing, security, and member actions." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Reference for “Verify a policy change as a regular member”: Dosya workspace policy controls for sharing, security, and member actions. <a href="/screenshots/workspace-policy-security-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Reading a refusal

**You don’t have access to …** identifies a page gate. **You don’t have permission …** identifies the capability needed for the operation. A missing resource can reflect folder confinement or hidden content. Quota, extension, password, link-expiry, active-hours, IP, and rate-limit messages come from separate gates.

Changing several controls at once makes the result ambiguous. Restore the disposable configuration after the test and remember that completed actions are not undone by tightening policy later.

## Expected result

The regular member receives the exact allowed or denied behavior predicted by the one changed rule, and the test record includes workspace, role, scope, client, time, and message.

## Troubleshooting

**The result matches the old configuration.** Wait a minute, reload or reconnect, and run one new request.

**The navigation item is absent.** Inspect the matching **Access …** permission before the action-level permission.

**The web test passes but a protocol fails.** Verify **Use WebDAV**, **Use the S3 gateway**, or **SFTP access**, plus any IP condition the gateway can enforce.

## Related guides

- [Set workspace policies](/workspaces/policies)
- [Choose roles](/workspaces/roles)
