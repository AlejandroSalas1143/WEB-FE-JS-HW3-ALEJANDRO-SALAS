// app.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento predeterminado del enlace

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Ajusta el desplazamiento para que no se oculte detrás del header
                    behavior: 'smooth'
                });
            }
        });
    });
});
