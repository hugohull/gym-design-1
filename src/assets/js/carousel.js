document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('[data-carousel]');
    if (!carousel) return;

    const track = carousel.querySelector('[data-carousel-track]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const slides = Array.from(track.children);

    if (!track || !prevButton || !nextButton || !slides.length) return;

    let currentIndex = 0;

    const getSlidesPerView = () => (window.innerWidth >= 1024 ? 3 : 1);

    const getMaxIndex = () => Math.max(0, slides.length - getSlidesPerView());

    const updateCarousel = () => {
        const slidesPerView = getSlidesPerView();
        const maxIndex = getMaxIndex();
        const slideWidth = 100 / slidesPerView;

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === maxIndex;
        prevButton.classList.toggle('cs-disabled', currentIndex === 0);
        nextButton.classList.toggle('cs-disabled', currentIndex === maxIndex);
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex === 0) return;
        currentIndex -= 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        const maxIndex = getMaxIndex();
        if (currentIndex >= maxIndex) return;
        currentIndex += 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    updateCarousel();
});