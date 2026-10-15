---
{
  "articleId": "hc-api-trash-file",
  "locale": "en",
  "revision": 5,
  "title": "Move a file to Deleted items through the API",
  "summary": "Trash a file idempotently with trash_only, verify it in the deleted listing, and avoid a second bare DELETE that permanently erases every version.",
  "category": "developers",
  "articleSlug": "api-trash-file",
  "status": "published",
  "lastReviewed": "2026-10-15",
  "verification": "Reviewed locally on 2026-10-15 against apps/api/src/pages/api/files/[id]/index.ts, apps/api/src/lib/files/delete-mode.ts, apps/api/src/pages/api/files/index.ts, and apps/api/src/lib/access/rest-scope.ts. Production data was not deleted.",
  "related": [
    "hc-api-folder-operations",
    "hc-rest-api-connect"
  ],
  "keywords": [
    "api trash file",
    "REST API mutation safeguards",
    "Dosya help",
    "cloud storage API"
  ]
}
---
Use `DELETE /api/files/:id?trash_only=1` when automation intends a recoverable delete. The safeguard makes repeated delivery harmless. A bare DELETE is state-dependent: it trashes a live file, but permanently purges an already trashed file.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/api-trash-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-trash-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-trash-file-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/api-trash-file-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/api-trash-file-help-workflow-2026-10-14.webp" alt="Four workflow panels show reading the live target, sending a recoverable delete, accepting its safe receipt, and finding the same ID in Deleted items." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The diagram covers reading the live target, sending a recoverable delete, accepting its safe receipt, and finding the same ID in Deleted items. <a class="workflow-map-full" href="/screenshots/api-trash-file-help-workflow-2026-10-14.webp" data-light-href="/screenshots/api-trash-file-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/api-trash-file-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Use a full-access API key. The workspace role needs `delete_own_files` for the caller’s files or `delete_any_file` for other owners’ files.
- Record the file ID, name, version count, and current parent before deletion.
- Deleted items continue to consume storage until permanent purge. Purge is irreversible.

## Steps

1. Read the target metadata and confirm the ID belongs to the intended workspace. Stop if it is already deleted unless the job explicitly handles that state.
2. Send `DELETE /api/files/file_id?trash_only=1` with the bearer key. Keep `permanent=1` out of the request; the two flags must not be combined.
3. Accept `{ "ok": true, "permanent": false }` for the first trash action. A repeated safe request may return `{ "ok": true, "already_trashed": true }`.
4. Query `GET /api/files?deleted=1` and locate the same ID. Its absence from the normal listing alone is insufficient evidence because filters and pagination can also hide an item.
5. Store the trash receipt with the job record. Do not issue an unqualified second DELETE as a generic retry because the server would interpret the trashed state as permission to purge.
6. If permanent removal is explicitly approved, send `DELETE /api/files/file_id?permanent=1` and verify disappearance from the deleted listing. Treat that action and all versions as unrecoverable.

<figure class="help-screenshot"><a href="/screenshots/developer-api-overview-2026-10-13.webp"><img src="/screenshots/developer-api-overview-2026-10-13.webp" alt="Dosya developer overview with API and SDK entry points for move a file to deleted items through the api." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>The developer overview supplies the API and SDK entry points referenced by “Move a file to Deleted items through the API”. <a href="/screenshots/developer-api-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Expected result

The safe request moves a live file to Deleted items, and repeating it reports `already_trashed` instead of purging. Storage usage falls only after a separately requested permanent deletion.

## Troubleshooting

**The file is not in the deleted listing.** Check pagination, workspace, and the response status before retrying.

**The request returns 403.** Confirm full key scope, ownership permission, and lock rules.

**A bare DELETE response was lost.** Inspect both normal and deleted listings before any new call. Never use an unqualified retry against an item that might already be trashed.

## Related guides

- [Use folder operations](/developers/api-folder-operations)
- [REST API quickstart](/developers/rest-api-quickstart)
