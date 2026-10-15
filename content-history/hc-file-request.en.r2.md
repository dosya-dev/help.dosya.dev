---
{
  "articleId": "hc-file-request",
  "locale": "en",
  "revision": 2,
  "title": "Receiving files from clients with a file request",
  "summary": "Create a request link, choose its destination and upload rules, and check that a client's files arrive in your workspace.",
  "category": "sharing",
  "articleSlug": "file-request",
  "status": "published",
  "lastReviewed": "2026-10-10",
  "verification": "Verified link-request creation, public recipient uploads of 41-byte and 35-byte samples, and the completed 41-byte submission in the owner request detail against the isolated local current web app and API on 2026-10-10. Real creation, staged-recipient, received-recipient and owner-receipt screenshots reviewed. Other controls were checked against source; production and email delivery were not verified.",
  "related": [
    "hc-upload-files",
    "hc-create-link"
  ],
  "keywords": [
    "client",
    "receive",
    "request",
    "upload link",
    "collect",
    "allowed extensions"
  ]
}
---
Open **File requests**, select **New request**, then choose **By link** in **Request files**. Set the upload destination and any restrictions, generate the URL, and send it to your client. They can upload through the public request page without a Dosya account.

A file request receives files. A sharing link gives access to files you already have; use [Creating a sharing link](/sharing/create-link) for that task.

## Before you start

- Sign in and select the workspace that should receive the delivery. You need permission to create requests, and the receiving workspace needs available storage.
- Choose an accessible destination folder. A missing, hidden or fully locked destination can prevent request creation.
- Decide what to ask for, when uploads should stop, and whether to limit file extensions, individual size or total file count.
- Prepare a small, non-confidential sample for checking the recipient experience. Test uploads count toward **Max files**.

## Steps: create the request

1. **Open File requests.** Find **File requests** in the app and select **New request**. An empty list also offers **Create a request**. Both open **Request files**.
2. **Choose By link.** Select **By link** beneath the dialog heading. This workflow provides a URL to copy.
3. **Describe the delivery.** Enter **Title (optional)** and **Message (optional)**. Tell the client what to send; omit account credentials.
4. **Set password and expiry.** **Password (opt)** is optional and requires at least eight characters after surrounding whitespace is trimmed. **Expires** starts at **7 days** and offers **Never**, **1 day**, **7 days**, **30 days** and **90 days**.
5. **Choose Upload destination.** Select the destination button, which shows **Root (workspace top level)** when no folder is selected. In **Select folder**, choose the folder and confirm with **Select folder**. Check the resulting destination before continuing.
6. **Set Advanced options.** Enter **Allowed extensions**, such as `.pdf, .docx, .jpg`, if only specific file extensions should be accepted. **Max file size (MB)** applies to an individual file. **Max files** sets a request count restriction. Leaving these fields blank adds no restriction from that field; storage and service limits still apply.
7. **Generate and copy.** Select **Generate link**. The dialog displays **Request link** and **Copy**. Creation also attempts automatic copying. Select **Done** to return to the list.

<figure class="help-screenshot">
  <a href="/screenshots/request-settings-2026-10-10.webp">
    <img src="/screenshots/request-settings-2026-10-10.webp" alt="Request files dialog; callout 1 identifies By link, callout 2 identifies Upload destination set to Root (workspace top level), and callout 3 identifies Generate link." width="454" height="604" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Choose By link. <strong>2.</strong> Check where uploads will arrive. <strong>3.</strong> Select Generate link after reviewing the title, message and rules. <a href="/screenshots/request-settings-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/request-created-2026-10-10.webp">
    <img src="/screenshots/request-created-2026-10-10.webp" alt="Request files result dialog with Request link visible; callout 1 identifies Copy and callout 2 identifies Done." width="454" height="298" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Copy the request URL to send to your client. <strong>2.</strong> Select Done to return to File requests. <a href="/screenshots/request-created-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: check the client's upload experience

1. **Open the request privately.** Paste the URL into a private browser window. Check the request's title, message and displayed rules.
2. **Unlock if required.** A protected page says **This request is locked**. Enter the request password in **Password** and select **Unlock**. This password belongs to the request, not the client's account.
3. **Choose sample files.** On a desktop, use **Browse files**, **Choose a folder** or **Drop files here**. Touch devices offer **Photo library**, **Take a photo** and **Browse files** when available. Selection stages files; it does not finish uploading.
4. **Review This transfer.** Check the staged names and any rule errors. Optionally complete **Your name (optional)** and **Your email (optional)**. These entries label a submission without verifying identity.
5. **Start the upload.** Select the primary upload button. Its label changes to the selected count, such as **Upload 1 file**. Keep the page open and watch each row until the transfer reports receipt.
6. **Confirm receipt in your account.** Return to **File requests**, open the request and check the uploaded-file entries. Check **Files** in the destination too. Reload an already-open detail page.

<figure class="help-screenshot">
  <a href="/screenshots/request-staged-2026-10-10.webp">
    <img src="/screenshots/request-staged-2026-10-10.webp" alt="Public file request with a previous 41-byte sample receipt and a new 35-byte file staged; callout 1 identifies This transfer and callout 2 identifies Upload 1 file." width="840" height="920" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Review the new file under This transfer; the earlier sample is already received. <strong>2.</strong> Select Upload 1 file to send the newly staged sample. <a href="/screenshots/request-staged-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

Permitted completed files appear in the request's uploaded-file list and its selected workspace destination. The public page keeps a transfer record and shows receipt after successful submission. The client does not become a workspace member by uploading.

Send the checked URL and share any request password privately.

<figure class="help-screenshot">
  <a href="/screenshots/request-received-2026-10-10.webp">
    <img src="/screenshots/request-received-2026-10-10.webp" alt="Public request after the new 35-byte sample upload succeeds; callout 1 identifies Received Just now beneath client-example-2.txt, with a receipt and Add more files below." width="840" height="920" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> Received confirms the new sample finished uploading. The receipt below records the completed transfer; Add more files starts another selection when the request allows it. <a href="/screenshots/request-received-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/request-owner-receipt-2026-10-10.webp">
    <img src="/screenshots/request-owner-receipt-2026-10-10.webp" alt="Owner request detail after an anonymous sample upload; callout 1 identifies client-example.txt in the uploaded-file table, showing a size of 41 bytes." width="1160" height="720" loading="lazy" decoding="async" />
  </a>
  <figcaption><strong>1.</strong> The completed client-example.txt submission appears in the request detail with its size and submission information. <a href="/screenshots/request-owner-receipt-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Manage the request afterward

Open its detail page to use **Copy link**, inspect received files, or select **Edit** to review the request settings. An active request also offers **Revoke**, which stops further access through its upload link. Revocation is not a substitute for separately managing files already received.

## Troubleshooting and limits

For rejected files, check the extension, individual size and remaining count. Renaming an extension does not convert a file into a different format. Ask the requester to adjust a rule only when the intended original file should be accepted.

If the request is unavailable, check expiry and revocation before retrying. If storage is exhausted, the requester must address the receiving workspace's capacity. Selecting **Never** expiry or leaving restrictions blank does not remove that storage requirement.

If a transfer fails, read its row's error and use **Retry** when offered. If password access expires during a transfer, the page can show **Your access timed out** with **Unlock and continue**. Enter the request password there before continuing.

A missing file can mean the sender has only staged it, is still transferring, or encountered an error. Ask them to confirm the receipt, then check the request and destination. Ordinary requests are separate from [Vault encryption](https://dosya.dev/vault/).

Use [private support](https://app.dosya.dev/support) for persistent errors. Keep confidential URLs and client files out of public comments.

## Frequently asked questions

### Does my client need a Dosya account?

No. This **By link** workflow accepts uploads through the public request page, subject to its password, expiry and rules.

### Does selecting files send them immediately?

No. The recipient reviews staged files under **This transfer**, then selects the upload button. Wait for the receipt before treating the delivery as complete.

### Does the sender's entered name prove their identity?

No. Name and email are optional submission details. They should not be treated as verified identity merely because they appear beside a delivery.

## Related guides

- [Uploading files and folders](/uploading/files-and-folders)
- [Creating a sharing link](/sharing/create-link)
- [Watch the existing file request tutorial](https://dosya.dev/tutorials/collect-files-with-a-file-request/)
- [Receiving files from clients](https://dosya.dev/blog/receive-files-from-clients) discusses broader collection workflows.
