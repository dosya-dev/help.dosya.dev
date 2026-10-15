---
{
  "articleId": "hc-desktop-sync-modes",
  "locale": "en",
  "revision": 2,
  "title": "Choosing a desktop sync mode",
  "summary": "Compare all five sync modes, understand which deletions propagate, and choose a conflict rule before starting a folder pairing.",
  "category": "desktop",
  "articleSlug": "sync-modes",
  "status": "published",
  "lastReviewed": "2026-10-10",
  "verification": "Reviewed all five mode definitions, direction and deletion rules against current desktop source on 2026-10-10. Captured real local wizard states including Full Sync conflict choices. Protect & Upload completed a byte-verified sample transfer in isolated D1/R2; the other four modes, conflicts and deletions were not manually exercised end to end or in production.",
  "related": [
    "hc-desktop-sync-folder",
    "hc-version-history",
    "hc-restore-deleted"
  ],
  "keywords": [
    "Full Sync",
    "Push to Cloud",
    "Protect & Upload",
    "Pull from Cloud",
    "Save to Device",
    "sync mode",
    "conflict",
    "deletion",
    "backup"
  ]
}
---
Choose the mode in **Sync → Add sync folder → Sync mode**. Use **Full Sync** for changes in both directions, **Protect & Upload** for local-to-cloud transfers that keep cloud files after local deletion, or **Save to Device** for cloud-to-local transfers that keep local files after cloud deletion. The two other one-way modes also propagate deletions from their source side.

## Before you start

- Decide which side is the source of your changes: this computer, the cloud folder or both.
- Keep a separate copy of important files while testing a new pairing. Use a small disposable folder when testing deletion or conflict behavior.
- Check the workspace and cloud destination. A mistaken destination can affect files already stored there.
- Read the deletion column below. A mode that keeps destination files after deletion can still update them when its source changes.

## Compare the five modes

<div class="help-table" role="region" aria-label="Desktop sync mode comparison; scroll horizontally on narrow screens" tabindex="0">
  <table>
    <thead><tr><th scope="col">Mode in the app</th><th scope="col">Direction of changes</th><th scope="col">Deletions</th><th scope="col">Use when</th></tr></thead>
    <tbody>
      <tr><th scope="row">Full Sync</th><td>Local ↔ cloud</td><td>Applied in both directions</td><td>You edit on both sides and want them to mirror each other.</td></tr>
      <tr><th scope="row">Push to Cloud</th><td>Local → cloud</td><td>Local deletion can remove the cloud counterpart</td><td>This computer is the source and the cloud should follow it.</td></tr>
      <tr><th scope="row">Protect &amp; Upload</th><td>Local → cloud</td><td>Local deletion does not delete the cloud counterpart</td><td>You want local changes uploaded while retaining cloud copies of removed local files.</td></tr>
      <tr><th scope="row">Pull from Cloud</th><td>Cloud → local</td><td>Cloud deletion can remove the local counterpart</td><td>The cloud is the source and this computer should follow it.</td></tr>
      <tr><th scope="row">Save to Device</th><td>Cloud → local</td><td>Cloud deletion does not delete the local counterpart</td><td>You want cloud changes downloaded while retaining local copies of removed cloud files.</td></tr>
    </tbody>
  </table>
</div>

For one-way modes, changes made only on the destination are not sent back to the source. They can still be affected by later source updates. For example, editing a downloaded file in Save to Device does not upload that edit.

## Steps: choose the mode

1. **Open the pairing wizard.** Select **Sync → Add sync folder**, choose both folders in **Folders**, then select **Continue**.
2. **Choose the direction.** Select the mode that matches your intended source. The current wizard initially selects **Protect & Upload**; it does not initially select Full Sync.
3. **Check deletion behavior.** Read the selected description. If you expect a destination copy to remain after removing the source, use the corresponding protective mode and test that expectation with disposable files.
4. **Choose a conflict rule for Full Sync.** Selecting Full Sync reveals **Conflict resolution**. Choose **Keep both copies** if you want both versions retained when a conflict occurs, or **Last write wins** if the later change should replace the other version. The default is Keep both copies.
5. **Review Advanced.** Select **Continue**, check exclusions and any folder-size notice, then select **Start syncing**.
6. **Verify the direction with a sample.** Add a harmless sample on the source side and confirm it arrives at the destination. For Full Sync, repeat with a different sample created on the other side. Check Issues as well as the row status.

<figure class="help-screenshot">
  <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">
    <img src="/screenshots/desktop-sync-modes-2026-10-10.webp" alt="The five desktop sync modes in the pairing wizard, with Protect and Upload selected and each mode description visible." width="512" height="676" loading="lazy" decoding="async" />
  </a>
  <figcaption>Each mode has a <strong>direction and deletion description</strong>. Choose the behavior you need before selecting Continue. <a href="/screenshots/desktop-sync-modes-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

<figure class="help-screenshot">
  <a href="/screenshots/desktop-sync-conflicts-2026-10-10.webp">
    <img src="/screenshots/desktop-sync-conflicts-2026-10-10.webp" alt="Full Sync selected in the desktop wizard with Conflict resolution showing Last write wins and Keep both copies." width="512" height="752" loading="lazy" decoding="async" />
  </a>
  <figcaption>Selecting <strong>Full Sync</strong> reveals the conflict choices below the mode list. <strong>Keep both copies</strong> is the default; Last write wins can replace one version. <a href="/screenshots/desktop-sync-conflicts-2026-10-10.webp">Open full-size screenshot</a>.</figcaption>
</figure>

## Expected result

The pairing's **Mode** column matches your selection. Samples created on a source side reach the intended destination, and the destination-only sample in a one-way mode is not uploaded or downloaded back to the source.

If you need to confirm a deletion rule, use a disposable test file with copies already present on both sides. Remove it from the source, let sync settle and check both folders. Avoid testing a destructive rule with a file you need to keep.

## Changing a saved pairing's mode

The current app displays the saved mode but has no mode-edit control in Overview. Record the local path and cloud destination, pause the pairing, use its three-dot menu's **Remove**, and create a new pairing with the intended mode. Remove stops the relationship without deleting existing files.

Review the files already present before restarting. Recreating a pairing is a fresh comparison; it is not an undo operation for earlier deletions or replacements. Use [Deleted files](/files/restore-deleted) or [Version history](/files/version-history) when those recovery options apply.

## Limitations

The protective modes preserve destination copies when their source is deleted. They still transfer changes, so they do not freeze every historical version indefinitely. Available recovery and retained versions depend on the file and account's applicable limits.

Conflict rules apply when Full Sync detects competing changes. Keep both copies avoids choosing one winner automatically; it can leave extra copies for you to reconcile. Last write wins does not mean that the chosen version is the one you intended to keep. Check **Issues** for unresolved conflicts and skipped files.

## Troubleshooting

**A local edit did not reach the cloud.** Check whether the pairing is Pull from Cloud or Save to Device. Those modes take changes from the cloud, so local edits do not upload through that pairing.

**A cloud change did not reach this computer.** Check whether the mode is Push to Cloud or Protect & Upload. Those modes upload local changes and do not pull cloud edits.

**A destination copy disappeared after source deletion.** Check for Full Sync, Push to Cloud or Pull from Cloud, which propagate the relevant deletions. Pause the pairing before recovering a file, then review its mode so the same relationship does not repeat the removal.

**There are duplicate conflict copies.** Check Issues and the conflict rule. With Keep both copies, compare your own copies, keep the intended version and resolve the conflict before continuing important work.

**The mode looks right but a sample is missing.** Check paused state, workspace, exclusions, storage and per-file errors. Follow the folder setup troubleshooting before recreating a pairing.

## Frequently asked questions

### Which mode is selected by default?

The current wizard defaults to Protect & Upload.

### Does one-way sync stop people editing the destination?

No. It describes the transfer direction, not permissions. Destination edits do not propagate back and can be affected by later source updates.

### Can I make a deletion-proof backup by choosing a protective mode?

It prevents deletion propagation in the stated direction. Source updates still transfer, so keep an independent backup if you need a separately recoverable copy.

## Related guides

- [Setting up a desktop sync folder](/desktop/sync-folder)
- [Restoring an earlier version](/files/version-history)
- [Restoring deleted files](/files/restore-deleted)
