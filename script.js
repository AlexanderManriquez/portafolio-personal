const projectTile = document.querySelector('.project-tile');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

function scrollCarousel(direction) {
    const scrollAmount = projectTile.offsetWidth;
    if (direction === 'next') {
        projectTile.scrollLeft += scrollAmount;
        if (projectTile.scrollLeft >= (projectTile.scrollWidth - projectTile.offsetWidth)) {
            projectTile.scrollLeft = 0;
        }
    } else if (direction === 'prev') {
        projectTile.scrollLeft -= scrollAmount;
        if (projectTile.scrollLeft <= 0) {
            projectTile.scrollLeft = projectTile.scrollWidth - projectTile.offsetWidth;
        }
    }
}

nextButton.addEventListener('click', () => scrollCarousel('next'));
prevButton.addEventListener('click', () => scrollCarousel('prev'));
