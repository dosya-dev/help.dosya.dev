---
{
  "articleId": "hc-api-key",
  "locale": "en",
  "revision": 2,
  "title": "Creating and managing an API key",
  "summary": "Generate a key in Profile, choose its permissions and restrictions, save it while it is displayed, and replace or revoke it later.",
  "category": "developers",
  "articleSlug": "api-key",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed on 2026-10-14. Evidence: apps/web/src/pages/profile/api.tsx; apps/web/src/components/api-keys/create-key-dialog.tsx; apps/web/src/components/api-keys/api-keys-section.tsx; apps/web/src/lib/api-keys.ts; apps/web/src/lib/api-keys.test.ts; apps/web/src/lib/usage-units.ts; apps/api/src/pages/api/me/api-keys/index.ts; apps/api/src/pages/api/me/api-keys/index.refusal.unit.test.ts; apps/api/src/pages/api/me/api-keys/[id].ts; apps/api/src/pages/api/me/api-keys/s3-credentials.ts; apps/api/src/pages/api/me/api-keys/s3-credentials.unit.test.ts; apps/api/src/lib/api-key-limits.ts; apps/api/src/lib/api-key-limits.unit.test.ts; apps/api/src/lib/access/write-validation.ts; apps/api/src/lib/access/rest-scope.ts; apps/api/src/lib/access/conditions.ts; apps/api/src/lib/usage/plan-limits.ts; apps/api/src/middleware.ts; apps/api/src/lib/auth-guards.ts; apps/api/src/pages/api/workspaces/index.ts; apps/api/src/lib/files/download-grant-core.ts; apps/api/src/lib/upload/finalize-session.ts; apps/api/src/lib/usage/durable-object.ts; apps/api/src/lib/access/rest-scope.unit.test.ts; apps/api/src/lib/access/write-validation.unit.test.ts; apps/api/src/lib/usage/plan-limits.unit.test.ts; apps/api/src/lib/usage/durable-object.daily.unit.test.ts. Repository contracts and tests verified locally; no production requests or credentials used.",
  "related": [
    "hc-sessions"
  ],
  "keywords": [
    "API key",
    "token",
    "developer",
    "scope",
    "WebDAV",
    "S3",
    "revoke",
    "integration"
  ]
}
---
Open **Profile → API keys**, select **New API key**, name it, and choose what it can do. Review **Restrictions and expiry** before selecting **Generate key**, then copy the key while the result dialog is open. The full key is shown only once.

## Before you start

- Sign in to the account the integration should use. API keys are managed in your account profile; they can also be restricted to one workspace.
- Check which protocol and permissions your tool needs. Create a separate key for each tool so you can identify and revoke it independently.
- Prepare private credential storage for the key. Do not put it in a public repository, a shared screenshot or a support message.
- If you want a workspace or folder restriction, make sure you belong to that workspace and know which folder the integration should reach.

## Steps: generate and save a key

1. **Find API keys.** Open the avatar's **Account menu**, select **Profile**, then select **API keys** in the profile navigation. You can also open [API keys](https://app.dosya.dev/profile/api) directly.
2. **Open the form.** Select **New API key** in the strip above the key list.
3. **Name its purpose.** In **What is it for?**, enter a label you will recognize later, such as a tool name and its purpose. The label identifies the key; it is not the credential. Names may contain at most **64 characters**.
4. **Choose its permission.** Under **What can it do?**, select **Read only**, **Upload only** or **Full access**. **Read only** supports listing and downloading. **Upload only** permits upload transactions and folder creation, but does not grant access to list, download or delete existing files. It is not a create-only guarantee: a same-name REST upload may add a version to an existing file when your access permits it. **Full access** is the most permissive option. The form initially selects **Full access**, so make an explicit choice.
5. **Review restrictions.** Open **Restrictions and expiry**. Follow the options below to limit the key to the intended protocols, workspace, addresses, schedule and usage. A new unrestricted form also starts with **Whole account**, **All protocols** and **Never expires**.
6. **Read the summary.** Check the description at the bottom of the form against the tool's purpose. Confirm that the reach, permission and expiry are intentional.
7. **Generate the credential.** Select **Generate key**. If creation succeeds, a dialog headed with the key's name and **is ready** displays the full key.
8. **Save it before closing.** Use **Copy** beside the displayed key and store it privately, then enter it into your tool's credential settings. Select **Done** only after saving it. Closing the dialog removes this opportunity to see the full key.

<figure class="help-screenshot">
  <a href="/screenshots/api-key-permission-2026-10-10.webp">
    <img src="/screenshots/api-key-permission-2026-10-10.webp" alt="New API key form with an example label; callout 1 identifies the selected Read only permission." width="582" height="666" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Choose Read only when the tool only needs to list and download files. Review the summary before adding restrictions. <a href="/screenshots/api-key-permission-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Choose restrictions that fit your tool

The expanded form groups options by question:

- **Where can it reach?** Under **Protocols**, choose **All protocols** or **Only the ones I pick**. If you choose the latter, check at least one of **REST API**, **WebDAV**, **SFTP** or **S3 gateway**. If no protocol is checked, the form omits the restriction and the key remains allowed on all protocols. Select the actual required protocol before generating it. Choose a **Workspace** to replace **Whole account** with one workspace. After selecting a workspace, **Choose folder…** can restrict reach to a folder and its descendants; the picker uses **Select folder** to confirm.
- **Where can it be used from?** Add comma-separated addresses or CIDR ranges under **Allowed IP ranges**, or turn on **Only during a weekly window** and choose the timezone, days, **From** and **To** times.
- **How much can it use?** Optionally enter **Requests / minute**, **Download / day (GB)**, **Max file size (MB)** or **Concurrent transfers**. Blank fields add no key-specific usage limit; they do not override your plan or other applicable service limits.
- **When should it stop working?** Choose **Never expires**, **Expires in 30 days** or **Expires in 90 days**.

Two protocol constraints matter before you save: a folder-restricted key can be used only over WebDAV or the S3 gateway, and adding an IP allowlist stops SFTP working with that key. Review the form's explanations when combining these options.

<figure class="help-screenshot">
  <a href="/screenshots/api-key-restrictions-2026-10-10.webp">
    <img src="/screenshots/api-key-restrictions-2026-10-10.webp" alt="API-key restrictions with Only the ones I pick selected; callout 1 identifies the checked REST API protocol and callout 2 identifies Expires in 30 days." width="582" height="867" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> This example allows REST API only. <strong>2.</strong> It expires in 30 days. Review these choices before selecting Generate key. <a href="/screenshots/api-key-restrictions-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The new key appears in the **API keys** list. Its row shows **Permission**, **Protocols**, **Reach** and **Last used**, with expiry information when applicable. The list displays a partial identifier instead of the full credential.

Configure the tool to use the selected protocol and try its intended operation. A key with the wrong permission, reach or access conditions can exist successfully yet be refused for that operation.

<figure class="help-screenshot">
  <a href="/screenshots/api-key-listed-2026-10-10.webp">
    <img src="/screenshots/api-key-listed-2026-10-10.webp" alt="API keys list after generation; callout 1 identifies the example key row with a partial identifier, Read only permission, REST API protocol and expiry date." width="1160" height="750" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> The saved key appears in the list with its permission, protocol and expiry. The full secret is not shown here. <a href="/screenshots/api-key-listed-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Review, replace or revoke a key

Use **Search name or prefix** and the permission filter to find a key. Open the expand control at the end of its row to see **Configuration**, **Guards** and **Actions**.

Keys cannot be edited after creation. **Duplicate settings** opens a new-key form with several existing settings filled in. Review the replacement's settings carefully: its expiry starts at **Never expires**, and usage limits start blank. Set the intended expiry and limits again before generating it. Generate and save the replacement, update the tool, and then revoke the old credential when appropriate.

To revoke a key, expand its row, select **Revoke**, check the confirmation dialog, and select **Revoke** again. This cannot be undone. Tools still using that key will be refused. Multiple row checkboxes also make a **Revoke** action available for the selected keys.

## S3 credentials

An API token and an S3 credential pair are different settings. If the key allows **S3 gateway**, expand its row and select **Enable** beside **S3 credentials**. The resulting dialog provides **Access key ID**, **Secret access key**, **Endpoint** and **Region** for an S3-compatible client.

Save the secret before selecting **Done**. **Active · show** can reopen the other S3 details later, but it cannot retrieve the secret. An expired key cannot be used to enable S3 access, and a key excluding S3 shows **Not allowed**.


## Account caps and the exact failure messages

The free plan allows **3 API keys per user** across the account; other plans are still capped at **20 total**. These counts include expired keys until you revoke them. A workspace restriction changes reach, not how keys are counted. You can generate keys on the free plan, and naming a workspace requires membership there.

| Creation response | Recovery |
| --- | --- |
| `Name is required` | Fill **What is it for?** with a nonblank label. |
| `Name must be 64 characters or less` | Shorten the label; changing it does not change the token's security. |
| `Maximum of 20 API keys reached` | Revoke an unused credential before generating another. |
| `The free plan allows 3 API keys. Delete one or upgrade for more.` | Review the entire key list, including expired entries. |
| `Not a member of that workspace` | Select a workspace you belong to; key creation does not add membership. |
| `Folder not found in that workspace` | Reopen the folder picker in the selected workspace and choose a live folder. |
| `Invalid IP/CIDR entry: "…"` | Correct the named address or subnet instead of deleting the intended access boundary. |

The 20-key cap is checked before the free-plan cap. A successfully generated key can still be denied at use time: the protocol, address/time conditions, folder anchor, operation scope and workspace pin are checked before request usage is charged. A role remains an additional boundary, even with **Full access**.

## Units and expiry that affect a working integration

**Download / day (GB)** and **Max file size (MB)** use 1024-based units: 1 GB is **1,073,741,824 bytes** and 1 MB is **1,048,576 bytes**. Requests and concurrent transfers are counts. Positive integer values are required for stored usage limits; zero is not the way to request unlimited use. Leave an optional field blank for no key-specific limit, while applicable plan and workspace constraints still apply.

**Expires in 30 days** and **Expires in 90 days** are measured from creation, not first use. **Never expires** sets no scheduled expiry. The credential becomes usable once creation succeeds, so store and configure it before enabling a job. Treat the displayed expiry as the stop time; do not depend on a warm authentication cache extending access.

For REST, the stricter of explicit key limits and applicable plan ceilings controls request counts, transfer concurrency and download bytes. WebDAV, S3 and SFTP do not apply plan ceilings to request counts or transfer concurrency, but explicit credential limits still apply, and download byte ceilings remain relevant on every protocol. Requesting a signed download URL counts its file size when the URL is granted, even if the URL is never fetched. Daily download counters reset at **UTC midnight**; the weekly active-hours window uses the timezone you selected instead.

## Use and verify the token

For a REST client, send `Authorization: Bearer` followed by the complete `dos_` token. A **Read only** credential can make this harmless request; an **Upload only** credential cannot list workspaces:

```bash
# DOSYA_API_KEY must already be supplied privately by your secret store.
curl --fail-with-body --silent --show-error \
  'https://api.dosya.dev/api/workspaces' \
  -H "Authorization: Bearer $DOSYA_API_KEY"
```

Check HTTP 200 and the `workspaces` array against the intended account. A pin narrows this array to the selected workspace. For an upload credential, verify with a small upload and its returned file ID instead; its session status is allowed, but ordinary file listing is not.

A **401** carrying `Invalid or expired API key` means the token is invalid, expired or revoked. A **403** naming the `api surface` means REST API is excluded. A message naming the credential's scope, request method and path means the operation needs a different permission; widening workspace access will not fix that. A **429** supplies `Retry-After` in seconds. A temporary **503** during authentication asks for a five-second retry and does not mean the key was lost.

API-key administration itself requires your signed-in account session: a bearer token cannot create, list or revoke other keys through the profile endpoints. This protects sibling credentials even when the presented key has **Full access**.

## Limitations and troubleshooting

The full API key and the S3 secret are not retrievable later. If either is lost, create replacement credentials and revoke the old key as needed. Copying a partial identifier from the list will not authenticate a tool.

If **Generate key** fails, check the name and the error message. If you have reached your account's key limit, remove an unneeded key or review your plan before creating another. Expired keys still appear in the list, so review them when checking your total.

If a tool is refused, check **Permission**, **Protocols**, **Reach**, expiry, IP allowlist and active hours. A folder-restricted key will not work over REST API or SFTP. An SFTP client will not work with an IP-restricted key. Do not resolve these errors by granting broader access before checking the actual requirement.

Use [private support](https://app.dosya.dev/support) for a persistent credential problem. Share the key's label, selected protocol and error message; omit the full key, authorization headers, S3 secret and generated credential commands.

## Frequently asked questions

### Can I display the full key again after selecting Done?

No. The full token is shown only at creation. Create a replacement if you did not save it, update the integration, and revoke the unused old key.

### Does Duplicate settings preserve every restriction?

No. Review the replacement form: usage limits start blank, and expiry starts at **Never expires**. Set those options explicitly before generating the replacement.

### Does revoking sessions also revoke API keys?

API keys are managed separately. Revoke the key on this page when an integration should stop authenticating. Use **Profile → Sessions** to review signed-in browsers and apps.

## Related guides

- [Reviewing active sessions](/account/sessions)
- [Watch the existing API-key tutorial](https://dosya.dev/tutorials/create-an-api-key/)
- [Watch the existing WebDAV tutorial](https://dosya.dev/tutorials/mount-your-storage-with-webdav/)
