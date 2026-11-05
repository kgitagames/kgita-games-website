const b=document.querySelector('.burger'),n=document.getElementById('nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded',false);b.focus()}});
document.querySelectorAll('img').forEach(i=>i.addEventListener('error',()=>{i.style.visibility='hidden'}));
