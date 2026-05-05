const carousel = document.querySelector('.visuals__carousel');

if (carousel) {
    const track = carousel.querySelector('.visuals__track');
    const slides = Array.from(carousel.querySelectorAll('.visuals__slide'));
    const prevButton = carousel.querySelector('.visuals__button--prev');
    const nextButton = carousel.querySelector('.visuals__button--next');
    const dots = Array.from(carousel.querySelectorAll('.visuals__dot'));
    let activeIndex = 0;

    function updateCarousel(index) {
        activeIndex = (index + slides.length) % slides.length;
        track.style.transform = `translateX(-${activeIndex * 100}%)`;

        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle('visuals__dot--active', dotIndex === activeIndex);
        });
    }

    prevButton.addEventListener('click', () => updateCarousel(activeIndex - 1));
    nextButton.addEventListener('click', () => updateCarousel(activeIndex + 1));

    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => updateCarousel(dotIndex));
    });
}
