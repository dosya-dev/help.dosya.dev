---
{
  "articleId": "hc-mobile-vault-transfer-progress",
  "locale": "en",
  "revision": 5,
  "title": "Review Vault transfer progress on mobile",
  "summary": "Read Vault upload and download byte progress, retry failed uploads safely, handle download-only failures, and understand the five-minute lock boundary.",
  "category": "files",
  "articleSlug": "mobile-vault-transfer-progress",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/mobile/src/vault/ui/TransferBar.tsx, apps/mobile/src/vault/store.ts, apps/mobile/app/(tabs)/vault/space/[id]/[folderId].tsx, apps/mobile/app/(tabs)/vault/file.tsx. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-vault-setup",
    "hc-vault-members"
  ],
  "keywords": [
    "mobile vault transfer progress",
    "Vault in the mobile app",
    "Dosya help",
    "cloud storage"
  ]
}
---
Vault transfers exist only inside the unlocked session. Each row shows the file name and bytes written as `_done_ of _total_`; completed rows disappear automatically.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14.webp" alt="Mobile Vault transfer workflow: keep the Space unlocked, retry a failed upload in its existing row, verify the encrypted destination entry, and finish before the five-minute background lock." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Mobile Vault transfer workflow: keep the Space unlocked, retry a failed upload in its existing row, verify the encrypted destination entry, and finish before the five-minute background lock. <a class="workflow-map-full" href="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14.webp" data-light-href="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/mobile-vault-transfer-progress-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

A failed upload says **Couldn’t upload _name_.** and keeps a **Retry** action plus **Dismiss**. Retry reuses the same row and source so it cannot leave a second failed row that could upload a duplicate. A failed download says **Couldn’t download _name_.** but has no Retry payload; dismiss it, return to the folder, and open the file again.

## Steps

1. Keep Vault unlocked and remain in the relevant Space while the transfer is active.
2. Read the file name and byte counter in the transfer row; an unknown total shows only bytes completed.
3. For **Couldn’t upload _name_.**, fix connectivity or workspace attachment and tap **Retry** on that same row.
4. For **Couldn’t download _name_.**, tap **Dismiss**, return to the Space folder, and open the file again to start a fresh download.
5. After Vault removes a completed upload row, refresh or inspect the destination folder and open the new encrypted entry.
6. Finish or deliberately abandon transfers before leaving Vault in the background for five minutes, because the automatic lock aborts downloads and wipes decrypted cache.

Uploads may retry workspace attachment once after a 412 response. **Dismiss** removes only the status row; pressing it during an active upload does not abort that upload. Dismissing a failed upload also deletes the picker’s plaintext cache copy, so its **Retry** option is gone. Locking clears all transfer rows, aborts cache downloads, and removes decrypted cached files from the session.

## Expected result

A successful transfer row disappears and the uploaded entry is present or the downloaded file opens from session cache. A failed upload remains explicitly retryable; a failed download is restarted by reopening the file after dismissal.

## Related guides

- [Set up Vault](/files/vault-setup)
- [Manage Vault members](/files/vault-member-access)
