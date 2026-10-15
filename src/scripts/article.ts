const root=document.querySelector<HTMLElement>('#article-interactions');
if(root) {
  const byId=<T extends HTMLElement>(id:string)=>root.querySelector<T>(`#${id}`)!;
  const api=root.dataset.api!,article=root.dataset.article!,revision=Number(root.dataset.revision);
  const endpoint=`/api/help/articles/${article}`,base={locale:'en',revision};
  let sequence=0,commentsPage=0,ballotReady:Promise<void>|undefined,questionKey=crypto.randomUUID();
  type Summary={yes:number;no:number;views:number;authenticated:boolean;myVote?:{choice:string;sequence:number};comments:Comment[];commentsPage:number;commentsPages:number;totalQuestions:number;myComments:{id:string;message:string;status:string;created_at:number}[]};
  type Comment={id:string;message:string;author:string;isStaff:boolean;createdAt:number;parentId:string|null;revision:number};
  async function request<T=any>(path:string,body?:unknown):Promise<T> {
    const response=await fetch(`${api}${path}`,{credentials:'include',cache:'no-store',...(body===undefined?{}:{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})});
    const result=await response.json().catch(()=>({error:'The help service could not respond. Try again.'}));
    if(!response.ok)throw Error(result.error??'Could not save. Try again.');return result;
  }
  const message=(id:string,value:string,error=false)=>{const el=byId(id);el.textContent=value;el.classList.toggle('error',error);};
  // User text is never interpreted as HTML. Only http(s) URLs become links.
  function appendText(el:HTMLElement,value:string){let index=0;for(const m of value.matchAll(/https?:\/\/[^\s<>]+/g)){
      el.append(document.createTextNode(value.slice(index,m.index)));const link=document.createElement('a');
      try { const url=new URL(m[0]);if(!['http:','https:'].includes(url.protocol))throw Error();link.href=url.href;link.rel='ugc nofollow';link.textContent=m[0];el.append(link); }catch{el.append(document.createTextNode(m[0]));}
      index=m.index!+m[0].length;}el.append(document.createTextNode(value.slice(index)));}
  function render(data:Summary){
    sequence=Math.max(sequence,data.myVote?.sequence??0);
    message('vote-result',data.yes+data.no?`${data.yes} of ${data.yes+data.no} voters found this helpful.`:'No votes yet.');
    for(const c of ['yes','no'])byId(`vote-${c}`).setAttribute('aria-pressed',String(data.myVote?.choice===c));
    byId('feedback-form').hidden=!data.myVote;
    message('view-result',`${data.views} opt-in view${data.views===1?'':'s'}. A view counts an opening, not reading or task completion.`);
    const list=byId<HTMLUListElement>('comments');list.replaceChildren();
    for(const comment of data.comments){const li=document.createElement('li'),meta=document.createElement('div'),p=document.createElement('p');
      li.className=`comment${comment.parentId?' comment-reply':''}`;meta.className='comment-meta';
      const author=document.createElement('span');author.textContent=comment.author; if(comment.isStaff)author.className='staff-label';
      meta.append(author,document.createTextNode(` · ${new Date(comment.createdAt*1000).toLocaleDateString('en')}${comment.isStaff?' · Staff reply':''}${comment.revision!==revision?` · Earlier revision ${comment.revision}`:''}`));appendText(p,comment.message);li.append(meta,p);list.append(li);}
    commentsPage=data.commentsPage;
    message('comments-status',data.totalQuestions?`Showing ${Math.min(20,data.totalQuestions-commentsPage*20)} of ${data.totalQuestions} published questions${data.commentsPages>1?` · page ${commentsPage+1} of ${data.commentsPages}`:''}. Newest questions appear first.`:'No published questions yet.');
    byId('comments-pagination').hidden=data.commentsPages<2;
    byId<HTMLButtonElement>('comments-newer').disabled=commentsPage===0;
    byId<HTMLButtonElement>('comments-older').disabled=commentsPage+1>=data.commentsPages;
    byId('comment-sign-in').hidden=data.authenticated;byId('question-form').hidden=!data.authenticated;
    const mine=byId<HTMLUListElement>('my-comments');mine.replaceChildren();byId('my-questions').hidden=!data.myComments.length;
    for(const comment of data.myComments){const li=document.createElement('li'),p=document.createElement('p'),state=document.createElement('span'),remove=document.createElement('button');
      li.className='comment';p.textContent=comment.message;state.className='comment-meta';state.textContent=`${comment.status==='pending'?'Pending review':comment.status==='approved'?'Published':'Not published'}`;
      remove.type='button';remove.className='button secondary small';remove.textContent='Remove my question';
      remove.addEventListener('click',async()=>{remove.disabled=true;try{await request(`/api/help/comments/${comment.id}/remove`,{});await load();}catch(e){message('question-status',String((e as Error).message),true);remove.disabled=false;}});
      li.append(state,p,remove);mine.append(li);}
  }
  async function load(page=commentsPage){try{render(await request<Summary>(`${endpoint}?locale=en&revision=${revision}&commentsPage=${page}`));}catch(e){message('vote-status',(e as Error).message,true);message('comments-status','Questions are unavailable. Reload this page to try again.',true);}}
  for(const [id,step] of [['comments-newer',-1],['comments-older',1]] as const)byId(id).addEventListener('click',()=>void load(commentsPage+step));
  byId('refresh-account').addEventListener('click',()=>void load());
  for(const choice of ['yes','no'])byId(`vote-${choice}`).addEventListener('click',async()=>{
    const buttons=['yes','no'].map(c=>byId<HTMLButtonElement>(`vote-${c}`));buttons.forEach(b=>b.disabled=true);message('vote-status','Saving your vote…');
    try{ballotReady??=request('/api/help/ballot',{}).then(()=>{}).catch(e=>{ballotReady=undefined;throw e;});await ballotReady;
      render(await request<Summary>(`${endpoint}/vote`,{...base,choice,sequence:++sequence}));message('vote-status','Thanks. You can change your answer at any time.');
      if(choice==='no')byId<HTMLSelectElement>('feedback-reason').focus();
    }catch(e){message('vote-status',(e as Error).message,true);}finally{buttons.forEach(b=>b.disabled=false);}
  });
  byId<HTMLFormElement>('feedback-form').addEventListener('submit',async e=>{e.preventDefault();const button=byId('feedback-form').querySelector<HTMLButtonElement>('button')!;button.disabled=true;message('feedback-status','Sending…');
    try{await request(`${endpoint}/feedback`,{...base,reason:byId<HTMLSelectElement>('feedback-reason').value,message:byId<HTMLTextAreaElement>('feedback-message').value});message('feedback-status','Your private feedback has been sent to Dosya staff.');}catch(e){message('feedback-status',(e as Error).message,true);}finally{button.disabled=false;}});
  byId<HTMLFormElement>('question-form').addEventListener('submit',async e=>{e.preventDefault();const button=byId('question-form').querySelector<HTMLButtonElement>('button')!;button.disabled=true;message('question-status','Submitting…');
    try{await request(`${endpoint}/comments`,{...base,message:byId<HTMLTextAreaElement>('question-message').value,submissionKey:questionKey});questionKey=crypto.randomUUID();byId<HTMLTextAreaElement>('question-message').value='';message('question-status','Your question is pending review. It will appear publicly only after approval.');await load();}catch(e){message('question-status',(e as Error).message,true);}finally{button.disabled=false;}});
  const consent=byId<HTMLInputElement>('view-consent');let enabled=false;try{enabled=localStorage.getItem('dosya_help_view_consent')==='yes';}catch{}consent.checked=enabled;
  let consentVersion=0,measurementQueue=Promise.resolve();
  function measure(enable:boolean){const version=++consentVersion;
    // Serialize cookie responses so a delayed enable cannot overwrite a later
    // withdrawal. Recheck intent after every await before counting or reporting.
    measurementQueue=measurementQueue.then(async()=>{
      if(version!==consentVersion)return;
      try{await request('/api/help/view-session',{consent:enable});
        if(version!==consentVersion||consent.checked!==enable)return;
        if(enable&&document.visibilityState==='visible'){await request(`${endpoint}/view`,{...base,consent:true});if(version!==consentVersion)return;await load();}
        if(version===consentVersion)message('view-status',enable?'View measurement enabled.':'View measurement disabled.');
      }catch(e){if(version===consentVersion)message('view-status',(e as Error).message,true);}
    });return measurementQueue;
  }
  consent.addEventListener('change',()=>{try{localStorage.setItem('dosya_help_view_consent',consent.checked?'yes':'no');}catch{}void measure(consent.checked);});
  void load();if(enabled){if(document.visibilityState==='visible')void measure(true);else document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&consent.checked)void measure(true);},{once:true});}
}
