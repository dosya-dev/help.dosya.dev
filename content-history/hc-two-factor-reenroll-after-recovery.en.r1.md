---
{"articleId":"hc-two-factor-reenroll-after-recovery","locale":"en","revision":1,"title":"Re-enroll two-factor authentication after recovery","summary":"Re-enroll two-factor authentication after recovery with a controlled test, clear verification, limits, and recovery steps.","category":"account","articleSlug":"two-factor-reenroll-after-recovery","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the re-enroll two-factor authentication after recovery workflow against current local product source, UI labels, existing help evidence, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-two-factor","hc-two-factor-recovery"],"keywords":["two factor reenroll after recovery","Two-factor authentication operations","Dosya help"]}
---
Re-enroll two-factor authentication after recovery is easier to verify when you use one controlled item and confirm the account, workspace, source, and destination at each step. This guide follows the current Dosya workflow and identifies the result you should see.

## Before you start

- Open Account settings > Security > Two-factor authentication in the current released client.
- Confirm the active account and workspace, then identify account restored with a recovery method.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery codes, private links, personal data, and confidential file contents out of screenshots and support messages.

## Steps: re-enroll two-factor authentication after recovery

1. Open Account settings > Security > Two-factor authentication and confirm the active account and workspace.
2. Locate account restored with a recovery method and verify its name or identifying details.
3. Review sessions, remove the unavailable factor, enroll a new authenticator, and generate a new recovery-code set.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that future sign-ins use the new factor and the old recovery material is retired.
6. Refresh, fetch, or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/two-factor-start-2026-10-10.webp"><img src="/screenshots/two-factor-start-2026-10-10.webp" alt="Dosya two-factor authentication setup showing an authenticator QR code." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Finish enrollment only after a fresh authenticator code succeeds and recovery codes are stored safely. <a href="/screenshots/two-factor-start-2026-10-10.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and future sign-ins use the new factor and the old recovery material is retired. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, policy, and selected integration surface.
- Processing, indexing, background transfer, provider authorization, or storage accounting can delay a visible result.
- For destructive, access-changing, or automated actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Account settings > Security > Two-factor authentication, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error, delivery, or request identifier.

## Related guides

- [Set up two-factor authentication](/account/two-factor)
- [Recover two-factor access](/account/two-factor-recovery)
