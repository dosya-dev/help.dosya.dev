---
{
  "articleId": "hc-extension-connect",
  "locale": "en",
  "revision": 1,
  "title": "Installing and connecting Save to dosya",
  "summary": "Install the browser extension from its official listing, approve its connection to your account, and choose where browser saves will go.",
  "category": "extension",
  "articleSlug": "install-and-connect",
  "status": "published",
  "lastReviewed": "2026-10-10",
  "verification": "Reviewed browser installation links and current extension sign-in source on 2026-10-10. Captured the actual locally loaded Chrome extension popup, current consent page and folder picker. Real isolated API PKCE authorization/exchange issued the fixture session; tokens were seeded into the extension for capture. Store installation and native browser callback handoff were not verified in production or across all browsers.",
  "related": [
    "hc-extension-save",
    "hc-sessions"
  ],
  "keywords": [
    "browser extension",
    "Save to dosya",
    "Chrome",
    "Firefox",
    "Edge",
    "Safari",
    "install",
    "connect",
    "Allow",
    "folder picker"
  ]
}
---
Install **Save to dosya** using the browser links on the [official extension page](https://dosya.dev/browser-extension/), open its toolbar popup and select **Sign in with dosya**. Approve the connection on Dosya's consent page, then check **Saving to** before your first save.

## Before you start

- Have a Dosya account and access to its normal sign-in method and any two-factor authentication.
- Use the official browser-specific installation link. Check the current availability and requirements there; browser-store listings can change.
- Choose a regular workspace and folder where you can add files. The extension's destination list excludes Vault workspaces.
- Prepare a harmless ordinary web page for your first test. Browser settings, extension stores and other protected pages may refuse capture.

## Steps: install the extension

1. **Open the official extension page.** Go to [Save to dosya](https://dosya.dev/browser-extension/) and choose Chrome, Firefox, Edge or Safari for the browser you are using.
2. **Follow that browser's installation prompts.** Confirm the extension's name and source before adding it. Safari installation may also require enabling the extension in Safari's Extensions settings after installing its companion app.
3. **Find the toolbar popup.** Open the browser's extensions menu and select **Save to dosya**. Pin it to the toolbar if your browser supports pinning and you want a visible shortcut.
4. **Start from the popup.** Select **Sign in with dosya**. Keep the browser's sign-in or consent window open until the connection finishes.

<figure class="help-screenshot">
  <a href="/screenshots/extension-sign-in-2026-10-10.webp">
    <img src="/screenshots/extension-sign-in-2026-10-10.webp" alt="Signed-out Save to dosya popup with the Sign in with dosya button beneath its image, text and screenshot features." width="360" height="560" loading="lazy" decoding="async" />
  </a>
  <figcaption>Open Save to dosya from the browser toolbar. The <strong>Sign in with dosya</strong> button is near the bottom of the popup. <a href="/screenshots/extension-sign-in-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: approve the account connection

1. **Sign in to Dosya when asked.** Use the account that should receive your saves and complete its required factors. The extension opens Dosya's account flow rather than collecting your account password in its popup.
2. **Read the permission page.** It is headed **Connect Save to dosya for** your browser. It explains that the extension can save files into your folders, create folders and create a share link for a file it saved.
3. **Approve deliberately.** Select **Allow** to connect, or **Cancel** to leave without approving this request. The connection page also states that the extension cannot delete, rename or move files, or manage your account, team or billing.
4. **Return to the extension.** Open its popup again after the browser completes the handoff. Check the email in the header and the destination under **Saving to**.

<figure class="help-screenshot">
  <a href="/screenshots/extension-consent-2026-10-10.webp">
    <img src="/screenshots/extension-consent-2026-10-10.webp" alt="Dosya extension consent page titled Connect Save to dosya for Chrome, listing permissions above Allow and Cancel." width="448" height="554" loading="lazy" decoding="async" />
  </a>
  <figcaption>Read the <strong>permissions in the centre card</strong>, then use <strong>Allow</strong> at the bottom to approve this account connection. <a href="/screenshots/extension-consent-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Steps: choose the save destination

1. **Open the destination row.** Select the folder button under **Saving to**. Before choosing a specific folder, this may show the default workspace destination.
2. **Choose the workspace if available.** The picker shows a workspace selector when there is more than one available workspace.
3. **Choose a folder.** Use **Search folders** to find a name, then select it from **Folders**. A **Recent** section appears after you have chosen destinations.
4. **Create a folder if needed.** Enter its name in **New folder here**, then select the plus button. The new folder becomes your destination. It is created under the current destination folder when you remain in that workspace, or at the workspace root after switching workspaces.
5. **Confirm the row.** The popup should now show the intended workspace and folder. Changing it affects subsequent saves; it does not move files already saved elsewhere.

<figure class="help-screenshot">
  <a href="/screenshots/extension-folder-picker-2026-10-10.webp">
    <img src="/screenshots/extension-folder-picker-2026-10-10.webp" alt="Save to dosya folder picker showing Search folders, Desktop samples in Folders, and the New folder here field." width="360" height="560" loading="lazy" decoding="async" />
  </a>
  <figcaption>Use <strong>Search folders</strong> and the folder list to choose an existing destination. <strong>New folder here</strong> and the plus button create one instead. <a href="/screenshots/extension-folder-picker-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The popup shows your account email, the intended **Saving to** destination and the **Save visible screenshot** and **Save selection** controls. Use the [browser saving guide](/extension/save-from-browser) for a small test, then open its completed row to check the saved file in Dosya.

## Disconnecting later

Open the <strong>Settings</strong> gear at the bottom right of the popup and choose <strong>Sign out</strong> when you want to disconnect this browser. Signing out clears its saved destination, recent-save list and pending captures from the extension. Finish or resolve pending saves first.

To revoke access from Dosya, open **Profile → Sessions**, find the session named for your browser extension and revoke it. Signing out of a web tab alone is not the same as revoking the extension's separate session.

## Limitations

Browser permissions and account consent are separate. Allow on the account page connects Dosya; the browser may separately ask for permission to save an image from a particular site. Grant only the site access needed for your task.

The extension saves into regular storage and does not select Vault workspaces. It is not a whole-browser backup, bookmark sync tool or full-page archive exporter. The captures here show Chrome; installation and permission prompts differ in other browsers.

## Troubleshooting

**The account page says This link is incomplete.** Restart sign-in from the extension popup. Do not open a bookmarked or manually copied consent URL.

**The connection was cancelled or did not match the request.** Start again from Sign in with dosya and complete the newly opened window. Avoid reusing a previous callback tab.

**Choose a folder does nothing on an older build.** Update the extension. The current code initializes the destination after sign-in so the picker can open before the first capture; earlier builds could leave this row without a destination.

**There are no workspaces or the folder is missing.** Check the account email and access to a regular workspace. Vault workspaces are excluded. The picker can cache a folder list for up to an hour. If a new folder is missing, wait for the cache to refresh or create the needed folder through the picker.

**The popup shows the wrong account.** Use Settings → Sign out at the bottom right of the popup, then start a new connection with the intended account.

## Frequently asked questions

### Is an API key required?

No. The extension uses its own account-consent sign-in. API keys are used by other tools such as Zapier.

### Can it delete my files?

The extension connection does not grant delete, rename or move operations. Review the actual permission page before approving.

### Can I change the folder for each project?

Yes. Open Saving to and choose another destination before making the next save.

## Related guides

- [Saving images, text and screenshots from your browser](/extension/save-from-browser)
- [Reviewing active sessions](/account/sessions)
