// Selecciona el contenedor del carrusel
const projectTile = document.querySelector('.project-tile');

// Función para desplazar automáticamente el carrusel cada cierto tiempo
function autoScroll() {
  projectTile.scrollLeft += projectTile.offsetWidth; // Desplaza una imagen a la vez
  if (projectTile.scrollLeft >= (projectTile.scrollWidth - projectTile.offsetWidth)) {
    projectTile.scrollLeft = 0; // Vuelve al inicio cuando se alcanza el final
  }
}

// Intervalo para desplazamiento automático cada 3 segundos (puedes ajustar el tiempo)
setInterval(autoScroll, 3000);