---
{"articleId":"hc-map-missing-photo","locale":"en","revision":1,"title":"Troubleshoot a photo missing from the map","summary":"Troubleshoot a photo missing from the map with a controlled test, clear verification, limits, and recovery steps.","category":"files","articleSlug":"map-missing-photo","status":"published","lastReviewed":"2026-10-13","verification":"Reviewed the troubleshoot a photo missing from the map workflow against current local product source, UI labels, integration documentation, and relevant tests on 2026-10-13. Screenshots use isolated or nonsecret examples.","related":["hc-file-map","hc-preview-files"],"keywords":["map missing photo","Photo map workflows","Dosya help"]}
---
Troubleshoot a photo missing from the map is easier to verify when you use one controlled item and check the account, workspace, and destination at every step. This guide follows the current Dosya workflow and calls out the result you should see.

## Before you start

- Open Map in the current released client.
- Confirm the active account and workspace, then identify photo expected to contain location data.
- Use a small non-confidential test item and record its current state before changing it.
- Keep passwords, API keys, recovery keys, private links, and personal client data out of screenshots and support messages.

## Steps: troubleshoot a photo missing from the map

1. Open Map and confirm the active account and workspace.
2. Locate photo expected to contain location data and verify its name or identifying details.
3. Inspect its details and original metadata, then refresh after processing completes.
4. Read the displayed warning, permission, progress, or confirmation state before leaving the screen.
5. Confirm that the photo appears when valid coordinates exist or the missing metadata is confirmed.
6. Refresh or reopen the relevant view once to verify the result persisted.

<figure class="help-screenshot"><a href="/screenshots/mobile-app-overview-2026-10-13.webp"><img src="/screenshots/mobile-app-overview-2026-10-13.webp" alt="Dosya mobile and cross-platform file experience including location-aware photo browsing." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Only media with usable embedded location metadata can appear on the map. <a href="/screenshots/mobile-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The controlled workflow completes and the photo appears when valid coordinates exist or the missing metadata is confirmed. The result remains visible after a refresh, reconnect, or return to the relevant screen.

## Limits and important details

- Available controls depend on the current client version, account plan, workspace role, and policy.
- Processing, indexing, background transfer, or third-party authorization can delay a visible result.
- For destructive, access-changing, or automation actions, validate with disposable data before applying the workflow to important files.

## Troubleshooting

**The expected control is missing.** Return to Map, confirm the active workspace, and check that your role and client version support the action.

**The operation is rejected or stalls.** Read the exact message and check permissions, locks, storage, network state, source availability, and any third-party authorization before retrying.

**The result is still unclear.** Repeat with one small test item, then contact support with the time, client version, workspace, and a nonsecret error or request identifier.

## Related guides

- [Explore files on the map](/files/file-map)
- [Preview files](/files/preview-files)
