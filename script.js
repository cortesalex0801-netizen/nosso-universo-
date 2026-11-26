const music=document.getElementById('music');
const enter=document.getElementById('enter');
enter?.addEventListener('click',async()=>{try{music.volume=.55;await music.play();}catch(e){console.info('A reprodução pode ser iniciada pelo controle do navegador.');}document.getElementById('cosmos').scrollIntoView({behavior:'smooth'});});
document.getElementById('back-top')?.addEventListener('click',()=>document.getElementById('inicio').scrollIntoView({behavior:'smooth'}));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
