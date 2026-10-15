---
{"articleId":"hc-request-uploader-confirm-invite","locale":"en","revision":2,"title":"Verify a file-request invitation before uploading","summary":"Check the requester, workspace, recipient address, request rules and URL before choosing files for a Dosya file-request invitation.","category":"sharing","articleSlug":"request-uploader-confirm-invite","status":"published","lastReviewed":"2026-10-14","verification":"Reviewed the current public upload-request page, recipient-token handling, password gate, requester and workspace labels, upload limits and revoked or expired responses against local product source and relevant tests on 2026-10-14. The screenshot uses an isolated recipient upload fixture.","related":["hc-request-upload","hc-request-password","hc-request-troubleshoot"],"keywords":["verify file request invitation","safe client file upload link","Dosya upload invitation","confirm file request sender","secure file collection"]}
---
A Dosya file-request invitation lets you upload files without joining the requester's workspace. Before selecting a file, verify who requested it, where the files will go and which rules apply. Treat the invitation URL as private because it can identify the intended recipient and open the upload page.

## Before you start

- Confirm that you expected a file request from the named person or organization.
- Compare the sender's address and request purpose with a previous conversation. If the invitation is unexpected, contact the requester through a channel you already trust.
- Do not forward the invitation. A request sent to a named email address can contain a recipient-specific URL.
- Open only a URL on the expected `dosya.dev` domain. Do not enter a Dosya password, API key or recovery code into a file-request page.

## Steps: verify the public request page

1. Open the invitation URL in a current browser.
2. Read the request title, requester name and destination workspace shown on the page. These should match the invitation and your conversation.
3. If the page identifies the recipient address, confirm that it is yours. Ask the requester for your own invitation if someone forwarded another recipient's URL.
4. Read the requester's message and the destination notice. The page states that files go to the named workspace's storage on Dosya.
5. Review every displayed rule before choosing files. Rules can include allowed file extensions, maximum size per file, maximum file count and a deadline.
6. If the request is password protected, the first page shows who locked the request and the destination workspace but withholds the upload rules and controls. Obtain the password through the separate channel chosen by the requester, unlock the page, then repeat the checks above.

<figure class="help-screenshot">
  <a href="/screenshots/request-staged-2026-10-10.webp"><img src="/screenshots/request-staged-2026-10-10.webp" alt="Public Dosya file-request page with a previous received item and one new sample file staged under This transfer." width="840" height="920" loading="lazy" decoding="async" /></a>
  <figcaption>After confirming the requester and rules, verify each filename under <strong>This transfer</strong> before selecting the final upload button. <a href="/screenshots/request-staged-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Stage a safe test when needed

For an important or unfamiliar collection, start with one small, non-confidential test file. Check the filename and size under **This transfer** before uploading. Selecting a file stages it in the browser; the requester has not received it until the upload finishes and the page shows a receipt or **Received** state.

Do not include passwords, identity documents or confidential material in a test unless the requester has confirmed that those exact files belong in this request and your organization permits the transfer.

## Expected result

The page identifies the requester and destination you expected, applies the stated file rules, and shows your own recipient context when the invitation is personalized. You can then select the intended files and complete the upload with confidence.

## Stop and verify independently when

- The request is unexpected or creates urgency that was not discussed.
- The requester, workspace, title or recipient address does not match.
- The link uses a lookalike domain, URL shortener or copied page outside `dosya.dev`.
- The page asks for your account password, API key, recovery key or payment details.
- The requested file type or data is broader than the purpose you agreed to.

## Limits and important details

- A recipient-specific URL identifies an invitation context, but it is not proof that the person opening it controls that email account.
- A request password protects the request page. It does not sign you in to Dosya or identify the uploader by itself.
- The requester can edit an active request's message, limits, destination or expiry. Recheck the visible rules when returning to an older invitation.
- Upload completion proves that Dosya received the file for the request. It does not prove that the requester reviewed or accepted its contents.

## Troubleshooting

**The request says revoked or expired.** The URL can no longer accept files. Ask the requester to extend an active request when possible or create and send a new request.

**The page asks for a password.** This can be a normal request password. Confirm the requester's identity and obtain that password separately. A request password is not your Dosya account password.

**The recipient address is wrong.** Do not upload through another person's invitation. Ask the requester to add or resend your address.

**The stated limits do not accept your file.** Check the extension, size and remaining file count. Ask the requester to edit the request rather than renaming content to disguise its type.

**You cannot confirm the sender.** Close the page without selecting files. Contact the person or organization using a known phone number, existing email thread or official support channel.

## Related guides

- [Upload files through a file request](/sharing/request-upload)
- [Unlock a password-protected file request](/sharing/request-password)
- [Troubleshoot a rejected request upload](/sharing/troubleshoot-file-request)
