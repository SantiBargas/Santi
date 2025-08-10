// script.js

let lastScrollTop = 0; // Almacena la última posición de scroll

// Función que detecta la dirección del scroll
function scrollEffect() {
    const infoSection = document.querySelector('.information-section');
    const screenPosition = window.innerHeight / 1.5; // Ajusta el punto de activación
    const position = infoSection.getBoundingClientRect().top;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Detectar si se hace scroll hacia abajo
    if (scrollTop > lastScrollTop && position < screenPosition) {
        // Scroll hacia abajo
        infoSection.classList.add('show');
    } else if (scrollTop < lastScrollTop && position > screenPosition) {
        // Scroll hacia arriba
        infoSection.classList.remove('show');
    }

    lastScrollTop = scrollTop; // Actualizar la última posición de scroll
}

// Añadir evento scroll para ejecutar la función
window.addEventListener('scroll', scrollEffect);
