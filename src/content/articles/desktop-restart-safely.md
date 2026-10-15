---
{
  "articleId": "hc-desktop-restart-safely",
  "locale": "en",
  "revision": 5,
  "title": "Restart the desktop app safely",
  "summary": "Quit and reopen Dosya through its cleanup path so sync state is retained, interrupted operations requeue, and partial receive files are removed.",
  "category": "desktop",
  "articleSlug": "desktop-restart-safely",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Locally reviewed against apps/desktop/src/main/index.ts, apps/desktop/src/main/quit-state.ts, apps/desktop/src/main/sync/index.ts, apps/desktop/src/main/lan-receive.ts, and apps/desktop/src/main/vault-save.ts. No production client process was restarted.",
  "related": [
    "hc-desktop-install",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop restart safely",
    "Desktop app lifecycle details",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
A window close usually hides Dosya to the tray, so a real restart must use **Quit dosya** or the application’s Quit command. That path gives the sync engine and receive sinks a bounded cleanup window.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-restart-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-restart-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-restart-safely-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-restart-safely-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-restart-safely-help-workflow-2026-10-14.webp" alt="Four panels show recording current sync state, choosing Quit dosya, allowing five-second cleanup, and verifying requeued operations after reopening." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Use the explicit quit path, allow bounded cleanup, then confirm abandoned running work returned to pending. <a class="workflow-map-full" href="/screenshots/desktop-restart-safely-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-restart-safely-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-restart-safely-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Save work in other editors; Dosya cannot preserve unsaved changes owned by another application.
- Note the affected pair’s status and any `N files not synced` count so the reopened state can be compared.

## Steps

1. Inspect **Sync > Overview** and note active transfers, pair states, and file-error counts. You may pause deliberately, but pausing is not required for the engine’s write-through persistence.
2. Open the tray or menu-bar menu and choose **Quit dosya**, or use the operating system’s application Quit command. Do not use the window close button as proof the process ended.
3. Allow up to five seconds for shutdown. Dosya stops watchers and pollers, releases folder access, aborts LAN receives, and aborts Vault plaintext sinks before the bounded quit completes.
4. Launch Dosya again and sign in if the session is no longer valid. The sync engine does not start without a session, and an account change removes stale pairs to prevent cross-account data exposure.
5. Return to **Sync > Overview**. Database operations left as `running` by the stopped process are reset to pending at startup, and enabled pairs resume unless sync is globally paused.
6. Verify the earlier pair state and error ledger. Interrupted LAN or Vault destination files should not remain as apparently complete partial files; retry any source operation that still needs delivery.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview after a full quit and relaunch, used to confirm the session and resumed sync context." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>After reopening, compare the account, workspace, pair status, and pending work with the values recorded before quitting. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Completed sync mutations remain recorded because the engine writes changes through as they happen. Interrupted queued operations resume from pending rather than depending on an end-of-process save.

If Dosya merely disappears into the tray, choose **Quit dosya** again. A forced operating-system termination can bypass the normal five-second cleanup, although the next start still requeues database operations left running.

## Related guides

- [Install and sign in to the desktop app](/desktop/install-and-sign-in)
- [Check for desktop updates](/desktop/desktop-check-updates)
