'use strict';
// El loader se oculta tras cargar la página y tiene respaldo para conexiones lentas.
const loader = document.getElementById('preloader');
let loaderHidden = false;
function hideLoader() { if (loader && !loaderHidden) { loaderHidden = true; loader.classList.add('hide'); } }
window.addEventListener('load', () => setTimeout(hideLoader, 500));
setTimeout(hideLoader, 2200);

// Cierra la navegación móvil al escoger una sección.
document.querySelectorAll('#menuStyleUp .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menuStyleUp');
    if (menu && menu.classList.contains('show') && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu, {toggle:false}).hide();
    }
  });
});

// Validación local, NO envía un mensaje ni almacena datos.
const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');
form.addEventListener('submit', event => {
  event.preventDefault();
  const nombre = form.elements.nombre.value.trim();
  const email = form.elements.email.value.trim();
  const mensaje = form.elements.mensaje.value.trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  feedback.className = 'form-feedback';
  if (!nombre || !validEmail || !mensaje) {
    feedback.textContent = 'Completa tu nombre, un correo válido y el mensaje.';
    feedback.classList.add('error');
    return;
  }
  feedback.textContent = '¡Gracias, ' + nombre + '! Formulario validado correctamente (demostración: no se envió ningún correo).';
  feedback.classList.add('success');
});
form.addEventListener('reset', () => { feedback.textContent = ''; feedback.className = 'form-feedback'; });
