const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const visibleItems = 4; // Number of visible items in the carousel

let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
    // Move by 100% / visibleItems per slide
    const offset = -(currentIndex * (100 / visibleItems));
    carousel.style.transform = `translateX(${offset}%)`;
}

// Handle "Next" button
nextButton.addEventListener('click', () => {
    if (currentIndex >= totalItems - visibleItems) {
        // If at the end, reset to the start to create the infinite loop
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
});

// Handle "Prev" button
prevButton.addEventListener('click', () => {
    if (currentIndex <= 0) {
        // If at the beginning, reset to the last set of items to create the infinite loop
        currentIndex = totalItems - visibleItems;
    } else {
        currentIndex--;
    }
    updateCarousel();
});

// Optional: Automatically loop through the items (autoplay)
setInterval(() => {
    nextButton.click(); // Simulate click on next button every 3 seconds
}, 8000);