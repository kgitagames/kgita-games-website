// Set data-endpoint on the form in contact.html to a trusted form service URL (e.g. Formspree, Web3Forms, or a Cloudflare Pages Function at /api/contact).
// No secrets belong in this file. Until an endpoint is set, sending reports an error instead of faking success.
const f=document.getElementById('cf'),st=document.getElementById('status'),btn=f.querySelector('button');
const msgs={name:'Enter your name.',email:'Enter a valid email address.',subject:'Enter a subject.',message:'Enter your message.'};
const ok=(k,v)=>k==='email'?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v):v.trim().length>0;
function check(){let good=true;for(const k in msgs){const el=f.elements[k],e=document.getElementById('e-'+k),v=ok(k,el.value);
el.setAttribute('aria-invalid',!v);el.setAttribute('aria-describedby','e-'+k);e.textContent=v?'':msgs[k];if(!v&&good){el.focus()}good=good&&v}return good}
f.addEventListener('submit',async e=>{e.preventDefault();st.className='';st.textContent='';if(!check())return;
if(f.elements.website.value)return;
const url=f.dataset.endpoint;if(!url){st.className='bad';st.textContent='Sending is not set up yet. Your message was not sent.';return}
btn.disabled=true;btn.textContent='SENDING...';
try{const r=await fetch(url,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)});
if(!r.ok)throw new Error(r.status);st.className='ok';st.textContent='Message sent. Thank you.';f.reset()}
catch(_){st.className='bad';st.textContent='Your message could not be sent. Please try again later.'}
finally{btn.disabled=false;btn.textContent='SEND MESSAGE'}});
