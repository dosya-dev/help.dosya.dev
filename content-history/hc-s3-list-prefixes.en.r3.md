---
{
  "articleId": "hc-s3-list-prefixes",
  "locale": "en",
  "revision": 3,
  "title": "List folders and prefixes over S3",
  "summary": "List objects with a delimiter and then narrow to a child prefix. Verify that the client represents Dosya folders and objects consistently.",
  "category": "integrations",
  "articleSlug": "s3-list-prefixes",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Mechanically reviewed against the local 2026-10-14 catalog baseline. Removed only exact shared-boilerplate sentences identified by that baseline; task-specific instructions and product claims were not changed.",
  "related": [
    "hc-s3-connect",
    "hc-s3-permissions"
  ],
  "keywords": [
    "s3 list prefixes",
    "S3-compatible client operations",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
This guide covers **List folders and prefixes over S3** in Dosya. The main action is to list objects with a delimiter and then narrow to a child prefix; the decisive check is whether the client represents Dosya folders and objects consistently.

<figure class="help-screenshot"><a href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp"><img src="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp" alt="Four-step workflow map for list folders and prefixes over s3, from checking the correct context through verifying the final result." width="1200" height="675" loading="lazy" decoding="async" /></a><figcaption>Workflow map for list folders and prefixes over s3: confirm the context, complete the documented action, and verify the resulting state. <a href="/screenshots/s3-list-prefixes-help-workflow-2026-10-14.webp">Open full-size screenshot</a>.</figcaption></figure>

## Before you start

- Open an S3-compatible client connected to Dosya in the current released client.
- Confirm the active account and workspace, then identify permitted workspace path.

## Steps: list folders and prefixes over S3

1. Open an S3-compatible client connected to Dosya and confirm the active account and workspace.
2. Locate permitted workspace path and verify its name or identifying details.
3. List objects with a delimiter and then narrow to a child prefix.
4. Confirm that the client represents Dosya folders and objects consistently.

<figure class="help-screenshot"><a href="/screenshots/developer-s3-overview-2026-10-13.webp"><img src="/screenshots/developer-s3-overview-2026-10-13.webp" alt="Dosya S3-compatible access overview for object clients and scripts." width="1200" height="630" loading="lazy" decoding="async" /></a><figcaption>Use a restricted S3-surface key and configure the documented endpoint, region, and addressing mode. <a href="/screenshots/developer-s3-overview-2026-10-13.webp">Open full-size screenshot</a>.</figcaption></figure>

## Verify the result

After completing the steps, check the expected result: The client represents Dosya folders and objects consistently.

## Expected result

The controlled workflow completes and the client represents Dosya folders and objects consistently.

## Troubleshooting

**The expected control is missing.** Return to an S3-compatible client connected to Dosya, confirm the active workspace, and check that your role and client version support the action.

## Related guides

- [Connect an S3 client](/integrations/s3-connect)
- [Restrict S3 permissions](/developers/s3-permissions)
