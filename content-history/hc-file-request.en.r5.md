---
{
  "articleId": "hc-file-request",
  "locale": "en",
  "revision": 5,
  "title": "Create a client file upload request",
  "summary": "Create a client upload request, choose its destination and limits, test the public page, and verify each received file in your workspace.",
  "category": "sharing",
  "articleSlug": "file-request",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Local source-reviewed on 2026-10-14 against apps/web/src/pages/file-requests.tsx, apps/web/src/pages/file-request-detail.tsx, apps/api/src/pages/api/file-requests/create.ts, apps/api/src/lib/upload-request/title-folder.ts, apps/api/src/lib/upload-request/uploader-folder.ts, apps/api/src/lib/upload-request/guard.ts, apps/api/src/pages/api/upload-request/[token].ts, apps/api/src/pages/api/upload-request/[token]/upload.ts, apps/api/src/pages/api/upload-request/[token]/files.ts, apps/api/src/pages/api/upload-request/[token]/files.purge.unit.test.ts, multipart request routes, src/pages/upload-request/[token].astro and focused request tests. Verified current owner and guest labels, roles, link/email modes, 100-address invitation handling, default per-uploader folders, title-folder outcomes, destination gates, passwords, expiry, request/workspace limits, public error strings, completion receipts, irreversible public withdrawal purge and irreversible request revocation. Existing end-to-end captures were inspected and remain accurate.",
  "related": [
    "hc-request-upload",
    "hc-request-limits",
    "hc-request-recipients",
    "hc-request-manage",
    "hc-create-link"
  ],
  "keywords": [
    "create client file upload request",
    "receive files without an account",
    "client upload link",
    "cloud file request",
    "collect documents from clients",
    "file request destination folder"
  ]
}
---
A file request lets a client upload into a destination you control without joining your Dosya workspace. In **File requests**, select **New request**, choose **By link** or **By email**, set the acceptance rules, then test the recipient page before using it for important delivery.

A sharing link sends files outward. Use [Create a sharing link](/sharing/create-link) when the files already exist in your workspace and recipients need to open them.

## Before you start

- Select the workspace that should own the received files. Creating a request requires **upload files** permission because its URL delegates that permission to someone outside the workspace.
- Choose a live, visible destination inside your allowed folder subtree. A configured **Full lock** on that folder or an ancestor blocks public uploads even when you personally unlocked it for an hour.
- Check the owning account’s remaining plan storage and any workspace total-storage cap. File requests have no separate storage pool: accepted bytes consume that workspace’s ordinary allocation.
- Decide whether the request should use a public bearer URL or emailed invitations. **By link** needs no account. **By email** records and sends invitations to up to 100 valid addresses in one request.
- Prepare a harmless sample. A successful test occupies one **Max files** slot and uses workspace storage until removed.

## Steps

### Build the request

1. Open **File requests** and select **New request**. On an empty page, **Create a request** opens the same **Request files** dialog.
2. Select the **Request files** tab that matches this client handoff:
   - **By link** creates one URL for you to copy and distribute.
   - **By email** requires at least one **Email addresses** entry and sends an invitation. Split a list larger than 100 across requests.
3. Enter **Title (optional)** and **Message (optional)** with the exact documents, naming rules and deadline. Do not include account credentials.
4. Add **Password (opt)** when the URL needs a shared secret. The trimmed password must contain at least eight characters.
5. Set **Expires** to **Never**, **1 day**, **7 days**, **30 days** or **90 days**. The form starts at **7 days**. Expiry closes new uploads; it does not delete received files.
6. Select **Upload destination**. **Root (workspace top level)** means the workspace root for an unrestricted member and the member’s assigned anchor for a folder-confined role.
7. Review **Put each uploader in their own folder**. It is on by default:
   - With a title, Dosya first creates a new title-named folder in the selected destination, using a suffix such as “(2)” if necessary.
   - Each browser then receives its own child folder, named from the entered name, the invited address associated with that recipient URL, typed email, dropped folder name or a six-character guest reference in that order.
   - Turning the option off places submitted paths directly in the selected destination. This setting is fixed at creation in the current web editor; create a new request if the organization model must change.
8. Expand **Advanced options** when the delivery needs narrower rules:
   - **Allowed extensions** accepts a comma-separated list such as `.pdf, .docx, .jpg`. A filename with a known extension outside the list is rejected.
   - **Max file size (MB)** caps each file, not the whole submission.
   - **Max files** counts accepted files across every uploader. Concurrent attempts reserve slots atomically so the cap cannot be exceeded by two clients racing for the final place.
9. For **By link**, select **Generate link**, save the URL under **Request link**, then select **Done**. For **By email**, choose **Send request** and wait for **Request sent**.

<figure class="help-screenshot">
  <a href="/screenshots/request-settings-2026-10-10.webp">
    <img src="/screenshots/request-settings-2026-10-10.webp" alt="Request files dialog for creating a client upload URL, with By link, Root workspace destination and Generate link identified." width="454" height="604" loading="lazy" decoding="async" />
  </a>
  <figcaption>Choose <strong>By link</strong>, confirm where client files will land, and review the request rules before selecting <strong>Generate link</strong>. <a href="/screenshots/request-settings-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/request-created-2026-10-10.webp">
    <img src="/screenshots/request-created-2026-10-10.webp" alt="Created client file request showing its Request link, Copy control and Done button." width="454" height="298" loading="lazy" decoding="async" />
  </a>
  <figcaption>Save the complete request URL with <strong>Copy</strong>; <strong>Done</strong> closes the result after the address is safely recorded. <a href="/screenshots/request-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

### Test the public upload page

1. Paste the generated client-upload address into a private browser window, then match its workspace identity, title, message, deadline and **Max files** terms to the owner form.
2. If it says **This request is locked**, enter the request password and select **Unlock**. This creates a request-specific access grant for 30 minutes; it is unrelated to a Dosya account password.
3. Choose a small sample with **Browse files**, **Choose a folder** or **Drop files here**. Touch devices can instead show **Photo library**, **Take a photo** and **Browse files**.
4. Inspect **This transfer** before sending. The page reports extension, size and remaining-count problems before eligible bytes move.
5. Optionally enter **Your name (optional)** and **Your email (optional)**. These labels help the owner recognize a delivery; typed values do not verify the sender’s identity.
6. Select the count-specific action, such as **Upload 1 file**. The browser transfers up to three files at once. Files above 50 MiB use 10 MiB multipart pieces with up to three part requests at a time.
7. Keep the page open until the row reads **Received**. If a password grant expires during a long transfer, enter it again under **Your access timed out** and choose **Unlock and continue**.

<figure class="help-screenshot">
  <a href="/screenshots/request-staged-2026-10-10.webp">
    <img src="/screenshots/request-staged-2026-10-10.webp" alt="Client file-request page with a new text file staged under This transfer and the Upload 1 file action ready." width="840" height="920" loading="lazy" decoding="async" />
  </a>
  <figcaption>The client reviews every staged row under <strong>This transfer</strong>, then explicitly starts the count shown on the upload button. Selection alone does not send a file. <a href="/screenshots/request-staged-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

### Confirm what you received

1. Return to **File requests** and open the request detail. Reload an already-open tab.
2. Match the received row’s name, size, uploader label and timestamp to the client’s receipt.
3. Open **Files** and inspect the configured destination. When uploader folders are enabled, follow the title folder and uploader folder rather than expecting the file directly at the selected level.
4. Tell the client the delivery is accepted only after both sides agree on the received item. The public ledger is tied to that visitor’s request cookie and is not a universal proof of identity.

<figure class="help-screenshot">
  <a href="/screenshots/request-received-2026-10-10.webp">
    <img src="/screenshots/request-received-2026-10-10.webp" alt="Client request receipt showing client-example-2.txt retained with Received status and its 35-byte size." width="840" height="920" loading="lazy" decoding="async" />
  </a>
  <figcaption>A <strong>Received</strong> row is the client-side completion record; compare its filename and size with the owner’s request detail. <a href="/screenshots/request-received-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/request-owner-receipt-2026-10-10.webp">
    <img src="/screenshots/request-owner-receipt-2026-10-10.webp" alt="Owner request detail listing the completed client-example.txt upload with size and submission information." width="1160" height="720" loading="lazy" decoding="async" />
  </a>
  <figcaption>The owner confirms a completed client delivery from the request’s uploaded-file table, then checks the same file in its destination folder. <a href="/screenshots/request-owner-receipt-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The client’s completed row reads **Received**, the owner sees the same filename and byte size on the request detail, and the file exists under the chosen destination structure. The upload consumes ordinary workspace storage without making the client a workspace member.

## Limits and exact refusals

Request-specific acceptance rules and the owner plan/workspace storage gates both apply; the stricter result wins.

| Condition | Recipient response |
| --- | --- |
| Request was closed | **This request has been revoked** |
| Deadline passed | **This request has expired** |
| Count is exhausted | **This request has reached its file limit.** |
| Request size rule fails | **File is too large. Maximum size is N.N MB** |
| Extension is refused | **File type .ext is not allowed. Accepted: …** |
| Destination later receives Full lock | **This upload request can no longer accept files.** |
| Workspace storage is exhausted | A storage-quota refusal; the owner must free capacity or change the plan |

Blank request fields mean no request-specific extension, per-file-size or file-count ceiling. The owning account’s storage entitlement and the workspace total-storage cap can still refuse incoming bytes. **Never** removes only the request deadline; it does not create extra storage.

## Manage or end collection

The detail page provides **Copy link**, **Edit**, **Recipients**, the received-file table and **Revoke** while active. Editing future rules does not revalidate completed uploads. Moving the destination does not relocate earlier submissions.

Revocation is irreversible and stops future single-part and multipart calls. It notifies recorded recipients, but it leaves their completed workspace files and the owner ledger intact. Use [Edit or close a file request](/sharing/manage-file-request) before deleting any retained material.

## Troubleshooting

**The request cannot be created in a folder.** Confirm the folder exists, is inside your assigned subtree and is visible to your role. A hidden destination looks missing. A configured Full lock returns `folder_locked`; a personal unlock grant is intentionally ignored because the public URL outlives that grant.

**An invitation did not arrive.** The request can exist even when delivery fails after creation. Copy its URL from **File requests**, verify the address, and use the recipient controls to resend without creating a duplicate inbox.

**The sender only staged files.** Ask them to select the upload button and wait for **Received**. A filename under **This transfer** without that status is not an accepted delivery.

**The client sees a storage refusal.** Only a workspace member can free capacity, raise the workspace cap or change the owning plan. The outside uploader cannot solve it by signing in or choosing a different browser.

**A large upload stopped after revocation, expiry or a new destination lock.** Those gates are checked throughout multipart transfer. Reopen collection with an edited future expiry when appropriate, or create a new request after resolving the configured lock. A revoked token itself cannot return.

## Frequently asked questions

### Does a client need a Dosya account?

No. The public request URL authorizes the upload subject to its password, deadline, destination and file rules.

### Is a file request private because it was emailed?

An invitation can identify a recorded recipient, but anyone holding a plain request URL may still reach the public page unless its password protects it. Share sensitive request addresses carefully.

### Can uploaders remove a submitted file?

The public page can show **Remove** to the same visitor while the request remains usable. Confirming it permanently purges the received file, its versions, its share records and the stored objects they reference. This withdrawal bypasses **Deleted**, so neither the uploader nor the owner can recover it from Dosya Trash. An ordinary owner-side **Delete** in **Files** is different: that soft-deleted item appears under **Deleted** and follows workspace retention until it is purged.

## Related guides

- [Upload through a file request](/sharing/request-upload)
- [Set file-request limits](/sharing/request-limits)
- [Invite recipients and track submissions](/sharing/request-recipients)
- [Edit or close the request](/sharing/manage-file-request)
- [Troubleshoot a rejected submission](/sharing/troubleshoot-file-request)
