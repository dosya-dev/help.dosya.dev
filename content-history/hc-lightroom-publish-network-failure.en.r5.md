---
{
  "articleId": "hc-lightroom-publish-network-failure",
  "locale": "en",
  "revision": 5,
  "title": "Troubleshoot Lightroom publish network failures",
  "summary": "Recover from Lightroom publish network failures after the three-in-a-row stop, preserve completed uploads, and retry only queued photos safely.",
  "category": "integrations",
  "articleSlug": "lightroom-publish-network-failure",
  "status": "published",
  "lastReviewed": "2026-10-14",
  "verification": "Reviewed against apps/lightroom/dosya.lrdevplugin/DosyaGallery.lua, apps/lightroom/dosya.lrdevplugin/DosyaErrors.lua, apps/lightroom/dosya.lrdevplugin/DosyaUploader.lua on 2026-10-14. Production behavior was not queried; this revision is awaiting publication.",
  "related": [
    "hc-lightroom-connect-catalog",
    "hc-lightroom-publish-gallery"
  ],
  "keywords": [
    "lightroom publish network failure",
    "Lightroom connection and publish troubleshooting",
    "Dosya help",
    "cloud storage integration"
  ]
}
---
The publisher counts consecutive failures classified as network errors. A successful upload resets the count; three network failures in a row stop the batch so every remaining photo does not repeat the same retries.

<figure class="help-screenshot"><a class="workflow-map-link" href="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14-dark.webp"><picture class="workflow-map"><source data-theme-source="dark" media="not all" srcset="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14-dark.webp" type="image/webp" /><img src="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14.webp" alt="Four-step workflow map for Troubleshoot Lightroom publish network failures: Record published failed and unattempted counts, keep exact reasons. Leave completed photos published, do not remove and add them again. Inspect both retry queues, identify failed and unattempted photos. Publish again after recovery, reduce concurrency if instability persists." width="1200" height="675" loading="lazy" decoding="async" /></picture></a><figcaption>The map starts with “Record published failed and unattempted counts, keep exact reasons.” and ends with “Publish again after recovery, reduce concurrency if instability persists.” <a class="workflow-map-full" href="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14.webp" data-light-href="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14.webp" data-dark-href="/screenshots/lightroom-publish-network-failure-help-workflow-2026-10-14-dark.webp">Open full-size screenshot</a>.</figcaption></figure>

## Steps

1. Read the final dialog and record `Published N, failed N, not attempted N.` plus each grouped failure reason before dismissing it.
2. Look for `dosya could not be reached for 3 photos in a row, so the rest were not attempted. Check your connection, then publish again.` This identifies the deliberate batch stop.
3. Keep completed photos in the published collection. Do not remove and re-add them: successful renditions already have remote file IDs and remain published.
4. Restore internet access, DNS, TLS, or proxy reachability, then use **File > Plug-in Manager > dosya.dev > Check connection** to verify the stored key still works.
5. Reopen the collection and inspect **Modified Photos to Re-Publish** and **New Photos to Publish**. These queues hold failed and unattempted photos from the partial run.
6. Click **Publish** again and reconcile the new counts. If instability continues, reduce **Uploads at once** toward 1 in the publish-service settings before another attempt.

**Different stop classes.** Authentication, connection, quota, and some rate or server conditions can stop a batch immediately instead of waiting for three network failures. Use the exact grouped message; reconnecting will not fix a quota refusal.

**Idempotent intent.** The uploader uses stable remote IDs and idempotency keys. Retrying the queued Lightroom items is safer than manually uploading rendered files, because the publish relationship can version the correct file and restore gallery registration.

## Expected result

Previously completed photos stay published, only queued work resumes after connectivity is healthy, and the final run leaves no unexplained failed or unattempted items.

## Related guides

- [Connect Lightroom](/integrations/lightroom-connect-catalog)
- [Publish a Lightroom gallery](/integrations/lightroom-publish-gallery)
