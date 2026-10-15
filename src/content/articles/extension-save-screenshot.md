---
{
  "articleId": "hc-extension-save-screenshot",
  "locale": "en",
  "revision": 6,
  "title": "Save a visible-page screenshot to Dosya",
  "summary": "Capture the active tab's visible area as a timestamped PNG, follow its upload in Recent saves, and verify the finished cloud file.",
  "category": "extension",
  "articleSlug": "extension-save-screenshot",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Verified against apps/extension/src/lib/capture/capture.ts, capture/filename.ts, lib/background/handlers.ts, lib/queue/runner.ts and popup/components/RecentSaves.tsx: visible-tab PNG capture, filename, 50 MiB limit, two-upload queue and completion states. Local repository evidence only; no production request was made.",
  "related": [
    "hc-extension-save",
    "hc-extension-save-folder",
    "hc-extension-save-confirmation-missing"
  ],
  "keywords": [
    "save browser screenshot",
    "visible page screenshot",
    "upload screenshot to cloud storage",
    "Save visible screenshot",
    "browser screenshot PNG"
  ]
}
---
**Save visible screenshot** captures the currently displayed area of the active browser tab and uploads it as a PNG. The action starts immediately; there is no crop or preview step inside the extension, so arrange the page before selecting it.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/extension-save-screenshot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-save-screenshot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-save-screenshot-workflow-map-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/extension-save-screenshot-workflow-map-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/extension-save-screenshot-workflow-map-2026-10-14.webp" alt="Screenshot sequence from arranging the visible browser viewport through the Recent saves upload row to the completed PNG in Dosya." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Prepare the viewport first, trigger <strong>Save visible screenshot</strong>, then use the queue row and the opened Dosya file as the two confirmation points. <a class="workflow-map-full" href="/screenshots/extension-save-screenshot-workflow-map-2026-10-14.webp" data-light-href="/screenshots/extension-save-screenshot-workflow-map-2026-10-14.webp" data-dark-href="/screenshots/extension-save-screenshot-workflow-map-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Prepare the page

1. Open the ordinary website tab whose visible area you need. Internal browser pages, add-on stores and some protected documents can refuse capture.
2. Scroll until the required section is on screen. A long page needs separate captures for sections outside the current viewport.
3. Close menus, cookie prompts, account popovers or notifications you do not want recorded. The PNG includes private information visible at that moment.
4. Open **Save to dosya** and inspect the workspace/folder beside **Saving to**. A destination change applies to this new capture after you select it.

## Steps: capture and upload the viewport

1. Select **Save visible screenshot**. On macOS you can instead use **Command + Shift + S**; other systems use **Ctrl + Shift + S**.
2. If text is selected on the page, the keyboard shortcut saves that selection as a text file. Clear the selection or use the screenshot button when the required output is an image.
3. Open the popup's **Recent saves** section. The captured bytes and queue record are stored in the browser before the cloud transfer begins, so closing the popup does not cancel the upload.
4. Wait for a green check. The extension can run two uploads at once, checks due queued work every minute, and automatically backs off temporary network failures from two seconds up to five minutes.
5. Select the completed row to open the file in Dosya, then inspect the image before sharing it.

<figure class="help-screenshot"><a href="/screenshots/extension-save-controls-2026-10-10-r2.webp"><img src="/screenshots/extension-save-controls-2026-10-10-r2.webp" alt="Save to dosya popup with the dark Save visible screenshot button below the selected destination breadcrumb." width="360" height="560" loading="lazy" decoding="async" /></a><figcaption>Choose the dark <strong>Save visible screenshot</strong> control after checking the destination shown directly above it. <a href="/screenshots/extension-save-controls-2026-10-10-r2.webp">Open full-size screenshot</a>.</figcaption></figure>

## Identify the resulting file

The filename uses the page title followed by the local capture date and time, for example `Studio 2026-10-07 09.05.png`. Characters that filesystems reject are replaced, and a title stem is limited to 200 characters. A title with no usable letters or numbers becomes `untitled`.

The completed Recent saves row displays the filename, destination and a green check. Its filename link opens `app.dosya.dev` with that file selected; **Open dosya** above the list opens the general file area instead.

Each extension capture is capped at 50 MiB (52,428,800 bytes), while the interface describes the ceiling as 50 MB. A workspace can also impose a lower per-file limit, file-type policy, storage allowance or member quota. The stored `.png` name must be allowed by that workspace.

## Expected result

Recent saves contains one timestamped PNG with the selected folder name and a green completion check. Opening its row shows the same visible page area that was on screen when capture began.

## Correct a failed screenshot

**This page cannot be captured.** Switch to a normal web page and trigger the action again. The browser does not expose protected tabs to extensions.

**The image omits content below the fold.** The command records one visible viewport rather than scrolling the document. Move to the missing section and create another PNG.

**The row says Waiting for network or Upload interrupted.** Keep the browser running so automatic retries can proceed, or select **Retry now** after connectivity returns. Restart recovery puts an interrupted upload back into the queue without intentionally creating a second capture.

**The item reports Rate limited.** Leave the existing row in place. It uses the server's retry delay, defaulting to 30 seconds when no delay is supplied.

**Recent saves shows Signed out.** Reconnect the extension, confirm its email and destination, then use **Retry now** on that retained capture.

**The server refuses the file.** Read the row's exact message. Storage quota, workspace upload permission, destination availability, `.png` policy and workspace size limits are separate gates; correct the named rule before retrying.

**The screenshot contains private data.** Delete the saved file in Dosya and retake it after removing the sensitive overlay. Screenshot capture cannot redact content after the PNG is produced.

## Related guides

- [Saving images, text and screenshots from your browser](/extension/save-from-browser)
- [Choosing the browser extension destination](/extension/extension-save-folder)
- [Verifying a save when confirmation is missing](/extension/extension-save-confirmation-missing)
