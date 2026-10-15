---
{"articleId":"hc-vault-members","locale":"en","revision":1,"title":"Give or remove access to a Vault Space","summary":"Invite another Dosya user to an encrypted Space, verify the contact before trusting the key, and revoke future access with re-keying.","category":"files","articleSlug":"vault-member-access","status":"published","lastReviewed":"2026-10-12","verification":"Reviewed the Vault Members list, invite control, trust-on-first-use warning and revoke confirmation against the local current web app and encryption store on 2026-10-12. Screenshots use isolated representative members.","related":["hc-vault-overview","hc-vault-setup","hc-vault-files","hc-vault-unlock-troubleshooting"],"keywords":["share vault space","vault members","invite encrypted space","revoke vault access","re-key space","trust on first use"]}
---
Vault access is granted per encrypted Space. Invite the person's Dosya email from the Space's **Members** panel, verify the contact through another channel, and revoke access there when it should end.

## Before you start

- Unlock Vault and open the exact Space you intend to share.
- Confirm the recipient's Dosya account email through a trusted channel.
- Ask the recipient to set up Vault encryption first. An account without an encrypted identity cannot be invited yet.
- Remove files that do not belong in the shared Space before granting access.
- Understand that revocation cannot erase copies already downloaded by the member.

## Steps: invite a member

1. Open **Vault**, unlock it and select the intended Space.
2. Select **Members** above the encrypted file list.
3. Review the existing member list and the Space name in the dialog title.
4. Enter the recipient's complete Dosya email address.
5. Verify the address with the recipient outside Dosya because current access uses trust on first use.
6. Select **Invite** and wait for the member list to refresh.
7. Ask the recipient to unlock Vault and check **Shared with me** for the Space.

<figure class="help-screenshot"><a href="/screenshots/vault-members-2026-10-12.webp"><img src="/screenshots/vault-members-2026-10-12.webp" alt="Dosya Vault Members dialog for an encrypted Board records Space with current members, trust-on-first-use guidance and invite field." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Check the Space name and current members before inviting. The people shown are isolated representative accounts. Verify a real contact outside Dosya before trusting the first key. <a href="/screenshots/vault-members-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps: revoke a member

1. Open the Space and select **Members**.
2. Find the exact email whose access should end.
3. Select its revoke control.
4. Read the confirmation. Revocation re-keys the Space so the member cannot read future content, but copies they already downloaded stay with them.
5. Select **Revoke** and keep Vault open while re-keying completes.
6. Reopen **Members** and confirm the email is gone.

<figure class="help-screenshot"><a href="/screenshots/vault-revoke-access-2026-10-12.webp"><img src="/screenshots/vault-revoke-access-2026-10-12.webp" alt="Dosya Vault revoke-access confirmation warning that the Space will be re-keyed while files already downloaded remain with the former member." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>Revocation protects future Space content through re-keying. It cannot retrieve or erase a file the person already downloaded. <a href="/screenshots/vault-revoke-access-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

An invited user sees the encrypted Space under **Shared with me** after unlocking Vault. After successful revocation and re-keying, the removed user cannot read future content in that Space, and their email no longer appears in its member list.

## Limits and trust boundaries

- Vault Space membership is separate from ordinary workspace membership and ordinary share links.
- Automatic key-transparency protection is not yet available in the current interface; verify a new contact out of band.
- The recipient must already have a Vault encryption identity.
- Revocation cannot remove local copies already downloaded or otherwise saved by the former member.
- Re-keying a large Space can take time. Do not close the session or assume completion before the UI confirms it.

## Troubleshooting

**The invite says the user has not set up encryption.** Ask the recipient to open Vault, create their encryption identity and save their recovery key. Retry after they finish.

**The wrong email was invited.** Revoke that member promptly, wait for re-keying to complete, then invite the verified address.

**The recipient cannot find the Space.** Confirm the exact account email, ask them to unlock Vault and check **Shared with me**, then refresh the current session.

**Members will not load.** Keep Vault unlocked, verify the active Space and retry after checking the connection. Do not create a duplicate Space as a workaround.

**Revocation appears stuck.** Leave Vault open while the Space re-keys. If it fails, preserve the visible error and Space name for private support; never include a passphrase or recovery key.

## Related guides

- [Understand Dosya Vault](/files/vault-overview)
- [Set up and unlock Dosya Vault](/files/vault-setup)
- [Upload and download encrypted Vault files](/files/vault-files)
- [Troubleshoot a Vault that will not unlock](/troubleshooting/vault-unlock)
