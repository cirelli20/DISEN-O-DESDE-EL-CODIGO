// =========================================================
// HEADER
// =========================================================
const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
});

// =========================================================
// APARICIÓN DE ELEMENTOS AL HACER SCROLL
// =========================================================
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

// Evita que el contenido visible al cargar quede oculto.
window.addEventListener("load", () => {
  revealElements.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      element.classList.add("visible");
    }
  });
});

// =========================================================
// MOVIMIENTO MUY SUAVE DEL FONDO DEL HERO
// =========================================================
const hero = document.querySelector(".hero");
const glowOne = document.querySelector(".glow-one");
const glowTwo = document.querySelector(".glow-two");

// Solo aplicamos el efecto cuando el dispositivo tiene mouse.
if (window.matchMedia("(pointer: fine)").matches) {
  hero.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    glowOne.style.transform = `translate(${x}px, ${y}px)`;
    glowTwo.style.transform = `translate(${-x}px, ${-y}px)`;
  });
}
