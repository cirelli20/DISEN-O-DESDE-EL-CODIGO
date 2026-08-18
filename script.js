const header = document.querySelector('.site-header');
if (header) window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target);}});},{threshold:.12});
revealElements.forEach((element)=>revealObserver.observe(element));
window.addEventListener('load',()=>{revealElements.forEach((element)=>{const rect=element.getBoundingClientRect();if(rect.top<window.innerHeight)element.classList.add('visible');});});
const hero=document.querySelector('.hero');const glowOne=document.querySelector('.glow-one');const glowTwo=document.querySelector('.glow-two');
if(hero&&glowOne&&glowTwo&&window.matchMedia('(pointer: fine)').matches){hero.addEventListener('mousemove',(event)=>{const x=(event.clientX/window.innerWidth-.5)*10;const y=(event.clientY/window.innerHeight-.5)*10;glowOne.style.transform=`translate(${x}px, ${y}px)`;glowTwo.style.transform=`translate(${-x}px, ${-y}px)`;});}


// =========================================================
// LOGOS DE HERRAMIENTAS
// =========================================================
// Si el archivo existe, se muestra el logo. Si todavía no lo has
// agregado a img/logos/, se mantiene visible el espacio de reemplazo.
document.querySelectorAll('[data-logo]').forEach((image) => {
  const card = image.closest('.logo-card');

  const showLogo = () => {
    if (image.naturalWidth > 0) card?.classList.add('logo-loaded');
  };

  image.addEventListener('load', showLogo);
  image.addEventListener('error', () => card?.classList.remove('logo-loaded'));

  if (image.complete) showLogo();
});
