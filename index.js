
var myCarousel = document.querySelector('#carouselExampleSlidesOnly');
var carousel = new bootstrap.Carousel(myCarousel);


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cards = document.querySelectorAll('.card');

searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
        const cardTitle = card.dataset.title.toLowerCase();
        if (cardTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});