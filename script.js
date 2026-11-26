const music=document.getElementById('music');
const enter=document.getElementById('enter');
enter.addEventListener('click',async()=>{try{await music.play();}catch(e){console.info('A reprodução pode ser iniciada pelo controle do navegador.');}document.getElementById('nossa-historia').scrollIntoView({behavior:'smooth'});enter.textContent='Universo iniciado ✧';enter.disabled=true;});
document.getElementById('back-top').addEventListener('click',()=>{document.getElementById('inicio').scrollIntoView({behavior:'smooth'});});
const field=document.querySelector('.lantern-field');
for(let i=0;i<16;i++){const l=document.createElement('span');l.className='lantern';l.style.left=(8+Math.random()*84)+'%';l.style.top=(8+Math.random()*78)+'%';l.style.animationDelay=(-Math.random()*9)+'s';l.style.animationDuration=(7+Math.random()*6)+'s';l.style.transform=`scale(${.65+Math.random()*.7})`;field.appendChild(l)}
// A trilha é iniciada apenas após o toque de entrada e permanece ativa durante a rolagem.
