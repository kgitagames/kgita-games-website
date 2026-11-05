// Add gameplay screenshots here (file in assets/images/ + alt text).
const IMAGES=[...document.querySelectorAll('.gal img')].map(i=>({src:i.src,alt:i.alt}));
const lb=document.querySelector('.lb'),im=lb.querySelector('img');let cur=0,opener=null;
function show(i){cur=(i+IMAGES.length)%IMAGES.length;im.src=IMAGES[cur].src;im.alt=IMAGES[cur].alt}
function open(i,el){opener=el;show(i);lb.classList.add('open');lb.querySelector('.x').focus()}
function close(){lb.classList.remove('open');opener&&opener.focus()}
document.querySelectorAll('.gal button').forEach(b=>b.addEventListener('click',()=>open(+b.dataset.i,b)));
lb.querySelector('.x').onclick=close;lb.querySelector('.p').onclick=()=>show(cur-1);lb.querySelector('.n').onclick=()=>show(cur+1);
lb.addEventListener('click',e=>{if(e.target===lb)close()});
document.addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;
if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);
if(e.key==='Tab'){const f=[...lb.querySelectorAll('button')],i=f.indexOf(document.activeElement);e.preventDefault();f[(i+(e.shiftKey?-1:1)+f.length)%f.length].focus()}});
