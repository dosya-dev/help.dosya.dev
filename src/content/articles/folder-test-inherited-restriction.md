---
{
  "articleId": "hc-folder-test-inherited-restriction",
  "locale": "en",
  "revision": 5,
  "title": "Test an inherited folder restriction",
  "summary": "Test a child item as the affected member to prove which ancestor lock, hidden rule, workspace role, or assigned-root boundary controls access.",
  "category": "files",
  "articleSlug": "folder-test-inherited-restriction",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/api/src/lib/folder-lock-gate.unit.test.ts, apps/api/src/lib/folder-lock-write-gate.unit.test.ts, apps/api/src/lib/hidden/rest-gate.ts, and apps/api/src/lib/download-guard.ts. Production behavior was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-lock-folder",
    "hc-folder-restriction-inheritance"
  ],
  "keywords": [
    "folder test inherited restriction",
    "Folder protection and access details",
    "Dosya help",
    "cloud storage"
  ]
}
---
A child item may look unprotected in its own menu while an ancestor still controls it. Use a separate member account to test the effective rule, not merely the child’s stored setting.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14.webp" data-light-href="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14.webp" alt="Light-theme test map showing ancestor review, password access, view-only and write checks, and separate share and sync verification." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The test map keeps each inherited-access probe visible: map ancestors, test passwords, check view-only and writes, then verify share and sync paths separately. <a class="workflow-map-full" href="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14.webp" data-light-href="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/folder-test-inherited-restriction-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

**Prepare a safe probe**

Choose one non-sensitive child file and record every folder in its path. Note the member’s workspace role, assigned root, and whether any ancestor is hidden, **View only**, or **Password** protected. Owners and members with elevated hidden-item capabilities can see more than ordinary users, so they are poor test subjects.

## Steps

1. Sign in as the affected member in a private browser or separate profile. Navigate from the member’s visible root toward the child without using an owner’s cached state.
2. For a **Password** ancestor, confirm the child is unavailable before unlocking. Enter the correct password at the ancestor and retry; the viewer unlock lasts one hour for that member.
3. For a **View only** ancestor, confirm that browsing and preview work while download is refused. A child marked **Unlocked** must not bypass the ancestor.
4. Test one write operation such as upload or move. A full-password ancestor rejects writes inside the subtree even if the member’s role normally allows them.
5. Test the relevant share link and sync client independently. Share access does not consume the member’s viewer-unlock token, and both full-lock and view-only subtrees are excluded from sync.

<figure class="help-screenshot"><a href="/screenshots/file-lock-modes-2026-10-12.webp"><img src="/screenshots/file-lock-modes-2026-10-12.webp" alt="Dosya file lock example showing Unlocked, View only, and Password for Launch review.pdf." width="1440" height="1000" loading="lazy" decoding="async" /></a><figcaption>The file example shows the same three stored modes used on folders; inherited tests must still inspect ancestors because a child Unlocked choice does not override them. <a href="/screenshots/file-lock-modes-2026-10-12.webp">Open full-size screenshot</a>.</figcaption></figure>

**Interpret a missing item**

A missing child is not proof that the lock alone caused it. Hidden rules are inherited separately and may return **Folder not found** or omit rows. Assigned-root confinement can make a path unreachable. The member may also lack a required workspace capability such as file-page access or downloads. Change one control at a time, refresh, and repeat the same probe.

If a correct password stops working, check whether the one-hour unlock expired or a manager changed the password. Do not repeatedly guess: five wrong entries can produce a 15-minute persistent lock, while a separate per-isolate request limit can return **Too many requests** with `Retry-After`.

## Expected result

The test identifies the controlling ancestor or workspace boundary, and the child follows that rule consistently for browsing, preview, download, writes, shares, and sync.

## Related guides

- [Lock a folder](/files/lock-folder)
- [Understand inherited folder restrictions](/files/folder-restriction-inheritance)
