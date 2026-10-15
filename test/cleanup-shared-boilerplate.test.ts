import {describe,it,expect} from 'vitest';
import {cleanArticleBody,pickSamples} from '../scripts/cleanup-shared-boilerplate.mjs';

const shared=[
  'Read the displayed warning before leaving this screen.',
  'What should I check before repeating this task?',
  'Compare the saved result with the state recorded before the task.',
  'This entire section contains only repeated generic verification advice.',
];

describe('shared boilerplate cleanup',()=>{
  it('removes an exact standalone sentence and keeps nearby task copy',()=>{
    const input='The archive must contain the manifest.\n\nRead the displayed warning before leaving this screen.\n\nKeep the checksum for the downloaded archive.';
    const result=cleanArticleBody(input,shared);
    expect(result.body).toBe('The archive must contain the manifest.\n\nKeep the checksum for the downloaded archive.');
    expect(result.removedSentences).toEqual(['Read the displayed warning before leaving this screen.']);
  });

  it('removes formatted boilerplate from a mixed paragraph without changing the task sentence',()=>{
    const input='Read the **displayed warning** before leaving this screen. The failed row keeps its file name and request ID.';
    const result=cleanArticleBody(input,shared);
    expect(result.body).toBe('The failed row keeps its file name and request ID.');
    expect(result.removedSentences).toHaveLength(1);
  });

  it('removes an FAQ entry and heading left empty by exact sentence removal',()=>{
    const input=`## Frequently asked questions

### What should I check before repeating this task?

Compare the saved result with the state recorded before the task.

### Can the recipient retry the upload?

Yes. The same request remains available until its configured expiry.`;
    const result=cleanArticleBody(input,shared);
    expect(result.body).toContain('## Frequently asked questions');
    expect(result.body).not.toContain('What should I check before repeating this task?');
    expect(result.body).toContain('Can the recipient retry the upload?');
    expect(result.removedEmptyFaqs).toBe(1);
  });

  it('removes a non-FAQ heading whose section becomes empty',()=>{
    const input=`## Verify the result

This entire section contains only repeated generic verification advice.

## Archive evidence

![Archive result](/screenshots/archive.webp)`;
    const result=cleanArticleBody(input,shared);
    expect(result.body).not.toContain('## Verify the result');
    expect(result.body).toContain('## Archive evidence');
    expect(result.body).toContain('![Archive result](/screenshots/archive.webp)');
    expect(result.removedEmptyHeadings).toBe(1);
  });

  it('removes an emptied heading even when it follows a raw HTML figure without a blank line',()=>{
    const input=`<figure><img src="/screenshots/archive.webp" /></figure>
## Verify the result

This entire section contains only repeated generic verification advice.

## Archive evidence

Keep this task-specific evidence.`;
    const result=cleanArticleBody(input,shared);
    expect(result.body).toContain('<figure><img src="/screenshots/archive.webp" /></figure>');
    expect(result.body).not.toContain('## Verify the result');
    expect(result.body).toContain('## Archive evidence');
  });

  it('renumbers an ordered list after removing an exact shared step',()=>{
    const input=`1. Open the export panel.
2. Choose the account.
3. Read the displayed warning before leaving this screen.
4. Download the finished archive.`;
    const result=cleanArticleBody(input,shared);
    expect(result.body).toBe(`1. Open the export panel.
2. Choose the account.
3. Download the finished archive.`);
  });

  it('keeps a pre-existing empty heading that the cleanup did not empty',()=>{
    const input=`## Intentionally empty reference

## Verify the result

This entire section contains only repeated generic verification advice.

## Archive evidence

![Archive result](/screenshots/archive.webp)`;
    const result=cleanArticleBody(input,shared);
    expect(result.body).toContain('## Intentionally empty reference');
    expect(result.body).not.toContain('## Verify the result');
    expect(result.removedEmptyHeadings).toBe(1);
  });

  it('protects fenced code and raw HTML blocks even when they contain shared text',()=>{
    const input=`## Diagnostic examples

\`\`\`text
Read the displayed warning before leaving this screen.
\`\`\`

<figure><figcaption>Read the displayed warning before leaving this screen.</figcaption></figure>`;
    const result=cleanArticleBody(input,shared);
    expect(result.body).toBe(input);
    expect(result.removedSentences).toEqual([]);
  });

  it('protects an entire fenced block containing blank lines and Markdown-looking headings',()=>{
    const input=`## Diagnostic examples

\`\`\`text
Read the displayed warning before leaving this screen.

## What should I check before repeating this task?
Compare the saved result with the state recorded before the task.
\`\`\``;
    const result=cleanArticleBody(input,shared);
    expect(result.body).toBe(input);
    expect(result.removedSentences).toEqual([]);
  });

  it('keeps an allowlisted heading when its section still has task-specific content',()=>{
    const input=`## What should I check before repeating this task?

Confirm that the exported archive contains manifest.json.`;
    const result=cleanArticleBody(input,shared);
    expect(result.body).toBe(input);
    expect(result.removedSentences).toEqual([]);
  });

  it('does not remove a similar sentence or mutate an unchanged article',()=>{
    const input='Read the displayed upload warning before leaving this screen.';
    const result=cleanArticleBody(input,shared);
    expect(result.body).toBe(input);
    expect(result.changed).toBe(false);
  });

  it('includes one unchanged guide in the five audit samples',()=>{
    const changes=['faq-entry-emptied','section-heading-emptied','mixed-paragraph-preserved','list-item-removed'].map((kind,index)=>({
      articleId:`hc-changed-${index}`,file:`changed-${index}.md`,before:'Before text.',after:'After text.',removedSentences:['Shared sentence.'],
      removedEmptyFaqs:kind==='faq-entry-emptied'?1:0,removedEmptyHeadings:kind==='section-heading-emptied'?1:0,
      mixedParagraph:kind==='mixed-paragraph-preserved',hasListRemoval:kind==='list-item-removed',
    }));
    const samples=pickSamples(changes,[{articleId:'hc-unchanged',file:'unchanged.md',body:'Task-specific content remains untouched.'}]);
    expect(samples).toHaveLength(5);
    expect(samples.at(-1)).toMatchObject({articleId:'hc-unchanged',kind:'unchanged-guide',before:'Task-specific content remains untouched.',after:'Task-specific content remains untouched.',removedSentences:[]});
  });
});
