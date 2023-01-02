function slidesPlugin(activeElement = 2) {
    const slides = document.querySelectorAll('.slide');

    slides[activeElement].classList.add('active')

    for (const slide of slides) {
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses(event) {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }
}

slidesPlugin()