window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Scroll animaciones
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0 });

document.querySelectorAll(`
  .nosotros-img,
  .nosotros-content h2,
  .nosotros-divider,
  .nosotros-content > p,
  .nosotros-content h3,
  .feature
`).forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12}s`;
  observer.observe(el);
});

// Animacion servicios
document.querySelectorAll('.servicio-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.08}s`;
  observer.observe(el);
});

// Animacion aduanas
document.querySelectorAll('.aduana-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.12}s`;
  observer.observe(el);
});


// Animacion mejor opcion
const observerMejor = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0 });

document.querySelectorAll('.mejor-img-grande, .mejor-img-small').forEach(el => {
  observerMejor.observe(el);
});

// Animacion beneficios
document.querySelectorAll('.beneficios-img, .beneficios-content').forEach(el => {
  observer.observe(el);
});

// Animacion contacto
document.querySelectorAll('.contacto-info, .contacto-mapa').forEach(el => {
  observer.observe(el);
});

