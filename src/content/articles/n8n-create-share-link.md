---
{
  "articleId": "hc-n8n-create-share-link",
  "locale": "en",
  "revision": 5,
  "title": "Build an n8n workflow that creates a Dosya share link",
  "summary": "Build an n8n sharing workflow from an earlier Dosya item ID, test one controlled input, and prevent duplicate links after an ambiguous network result.",
  "category": "integrations",
  "articleSlug": "n8n-create-share-link",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Source-reviewed locally on 2026-10-14 against apps/n8n/examples/02-store-and-share-pdf.json, apps/n8n/nodes/Dosya/actions.ts, apps/n8n/nodes/Dosya/transport.ts, apps/n8n/test/actions.test.mts, and apps/api/src/lib/share/create.ts. Production behavior for “Build an n8n workflow that creates a Dosya share link” was not exercised; this revision is awaiting publication.",
  "related": [
    "hc-n8n-create-share-link-node",
    "hc-n8n-connect"
  ],
  "keywords": [
    "n8n create share link",
    "n8n share link workflow",
    "Dosya n8n integration",
    "n8n cloud file sharing"
  ]
}
---
A complete n8n sharing workflow should receive or create a Dosya item, pass its stable ID into **Share Link → Create**, and use the returned URL. The share step creates access; it does not upload bytes or notify a recipient by itself.


<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/n8n-create-share-link-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-create-share-link-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-create-share-link-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/n8n-create-share-link-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/n8n-create-share-link-help-workflow-2026-10-14.webp" alt="Four-step workflow for mapping an earlier Dosya ID, configuring link options, running one manual test, and verifying the signed-out result." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>Four-step workflow for mapping an earlier Dosya ID, configuring link options, running one manual test, and verifying the signed-out result. <a class="workflow-map-full" href="/screenshots/n8n-create-share-link-help-workflow-2026-10-14.webp" data-light-href="/screenshots/n8n-create-share-link-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/n8n-create-share-link-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Start with one non-confidential item. For an uploaded file, use the preceding Dosya node’s `id`; for a folder, retain its `fld_…` output.
2. Add **Create Share Link**, choose **Share Link → Create**, and map the target by ID rather than selecting a stale editor sample.
3. Configure **Access Code**, **Expires In Days**, and **View Only** for the real recipient. Use an access code of 8 or more characters and treat `0` days as the workspace default.
4. Connect downstream delivery only to the returned `url`. Keep `id` for later link management and retain `expires_at` when recipients need a deadline.
5. Execute one manual test. A successful test creates a real active link, so do not press test repeatedly and do not assume deactivating the workflow removes it.
6. Verify the signed-out link, then activate the workflow. Monitor its first live execution and confirm one input produced one expected link before increasing volume.

The bundled **Store and share a PDF** example returns `file_id`, `name`, `share_url`, and `expires_at` from an Upload node followed by Create Share Link. Add an email or webhook response separately if somebody must receive the URL.


## Expected result

Each accepted input maps to the intended Dosya resource and yields one verified public URL with the configured effective access. The workflow’s delivery step receives that URL only after creation succeeds.

The node automatically retries a 429 at most within three total attempts when the wait is 30 seconds or less. It deliberately does not replay share creation after a timeout, 502, 503 or 504 because the first request may already have created a link; check Dosya before manual retry.

## Related guides

- [Configure the n8n share-link node](/integrations/n8n-create-share-link-node)
- [Connect n8n](/integrations/n8n-connect)
