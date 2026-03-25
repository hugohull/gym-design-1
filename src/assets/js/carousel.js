document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('[data-carousel-track]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const slides = Array.from(track.children);
    let currentIndex = 0;

    const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        prevButton.classList.toggle('cs-hidden', currentIndex === 0);
        nextButton.classList.toggle('cs-hidden', currentIndex === slides.length - 1);
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) return;
        currentIndex -= 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex === slides.length - 1) return;
        currentIndex += 1;
        updateCarousel();
    });

    updateCarousel();
});