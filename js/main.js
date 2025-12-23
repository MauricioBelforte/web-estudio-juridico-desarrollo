document.addEventListener('DOMContentLoaded', function () {
    // Lógica para el botón "Ver más"
    const btnVerMas = document.getElementById('btn-ver-mas');
    const serviciosContainer = document.getElementById('servicios-estilo-secundario');
    const arrow = document.getElementById('arrow-indicator');
    const overlay = document.getElementById('overlay-areas');
    const tituloh2 = document.getElementById('titulo-h2');


    if (btnVerMas && serviciosContainer && arrow && overlay) {
        btnVerMas.addEventListener('click', function () {
            const isVisible = serviciosContainer.classList.contains('servicios-visibles');

            if (isVisible) {
                serviciosContainer.classList.remove('servicios-visibles');
                overlay.classList.remove('visible');
                btnVerMas.textContent = 'Ver más';
                arrow.classList.remove('up'); // Quita la rotación para que apunte hacia abajo
                arrow.classList.remove('arrow-hidden'); // Muestra la flecha
                tituloh2.classList.remove('color-texto-dorado');
                tituloh2.classList.add('color-texto-negro');
            } else {
                serviciosContainer.classList.add('servicios-visibles');
                overlay.classList.add('visible');
                btnVerMas.textContent = 'Ocultar';
                arrow.classList.add('up'); // Rota la flecha (aunque no se verá)
                arrow.classList.add('arrow-hidden'); // Oculta la flecha
                tituloh2.classList.remove('color-texto-negro');
                tituloh2.classList.add('color-texto-dorado');
            }
        });
    }
});

// Funciones para el menú de navegación móvil
function openNav() {
    document.getElementById("menu-movil").style.width = "100%";
}

function closeNav() {
    document.getElementById("menu-movil").style.width = "0%";
}