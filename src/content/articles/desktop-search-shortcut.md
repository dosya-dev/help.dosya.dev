---
{
  "articleId": "hc-desktop-search-shortcut",
  "locale": "en",
  "revision": 5,
  "title": "Use desktop search from the keyboard",
  "summary": "Open workspace search with Command-K or Control-K, use its 250 ms live query, filter result types, and navigate safely to the matching item.",
  "category": "desktop",
  "articleSlug": "desktop-search-shortcut",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed locally in apps/desktop/src/renderer/components/layout/AppShell.tsx, apps/desktop/src/renderer/pages/SearchPage.tsx, apps/desktop/src/main/menu-template.ts, and apps/desktop/tests/e2e/search-shortcut.spec.ts. Production search data was not queried.",
  "related": [
    "hc-desktop-system-tray",
    "hc-desktop-check-updates"
  ],
  "keywords": [
    "desktop search shortcut",
    "Desktop navigation and notifications",
    "Dosya help",
    "desktop cloud storage"
  ]
}
---
The authenticated desktop shell reserves `⌘K` on macOS and `Ctrl+K` elsewhere for Dosya search. Results come from the active workspace and are separated into files, folders, shares, and file requests.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14.webp" alt="Four panels show Command-K or Control-K, the focused Search files field, the 250-millisecond query delay, and folder navigation after result verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Open workspace search, submit a distinctive query, and verify result type before following a file row to its folder. <a class="workflow-map-full" href="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14.webp" data-light-href="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/desktop-search-shortcut-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Before you start**

- Focus the Dosya main window and confirm the intended workspace in the sidebar.
- The global shortcut is available inside the authenticated shell; it does not operate from the signed-out screen.

## Steps

1. Press `⌘K` on macOS or `Ctrl+K` on Windows and Linux. The same action is available as **Search dosya…** in the application menu.
2. Confirm `/search` opens and the field **Search files, folders, shares...** receives focus. The sidebar also displays the platform-specific shortcut beside **Search...**.
3. Type a distinctive complete or partial name. The input updates the URL and runs the workspace query after a 250 ms pause; pressing Enter also submits immediately.
4. Check the result count, then narrow with **All**, **Files**, **Folders**, **Shared**, or **Requests**. Each badge reflects the matching count in that group.
5. Select the matching row only after confirming its type and identifying metadata. A file result navigates to its containing folder rather than promising to open the viewer directly.
6. If the result is absent, clear the field with the `X`, verify the active workspace, and try a less restrictive term. An empty query sends no search request.

<figure class="help-screenshot"><a href="/screenshots/desktop-app-overview-2026-10-13.webp"><img src="/screenshots/desktop-app-overview-2026-10-13.webp" alt="Dosya desktop overview from which the global Command-K or Control-K search shortcut can be opened." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The shortcut works from authenticated dashboard and deep pages when the Dosya window owns keyboard focus. <a href="/screenshots/desktop-app-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

Search returns workspace-scoped matches across files, folders, shared links, and file requests. The selected result routes to the relevant desktop location for further inspection.

If `Cmd/Ctrl+K` does nothing, refocus the authenticated Dosya window and use **Search dosya…**. Operating-system shortcuts or another foreground application can receive keystrokes before Dosya.

## Related guides

- [Use the desktop system tray](/desktop/desktop-system-tray)
- [Check desktop updates](/desktop/desktop-check-updates)
