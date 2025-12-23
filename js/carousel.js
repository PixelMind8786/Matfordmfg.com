// Product Carousel Functionality
(function () {
    const carousel = document.getElementById('productCarousel');
    if (!carousel) return;

    const track = carousel;
    const slides = Array.from(track.children);
    const prevButton = document.querySelector('.carousel-button--left');
    const nextButton = document.querySelector('.carousel-button--right');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
    let startTransform = 0;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    // Update carousel position
    function updateCarousel(animate = true) {
        if (animate) {
            track.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        } else {
            track.style.transition = 'none';
        }
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // Next slide with infinite loop
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    // Previous slide with infinite loop
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        updateCarousel();
    }

    // Button event listeners
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // Touch swipe functionality (MOBILE ONLY - no mouse drag)
    function handleTouchStart(e) {
        isDragging = true;
        startX = e.touches[0].pageX;
        startTransform = currentIndex * -100;
    }

    function handleTouchMove(e) {
        if (!isDragging) return;

        currentX = e.touches[0].pageX;
        const diff = currentX - startX;
        const percentDiff = (diff / track.offsetWidth) * 100;

        track.style.transition = 'none';
        track.style.transform = `translateX(${startTransform + percentDiff}%)`;
    }

    function handleTouchEnd(e) {
        if (!isDragging) return;
        isDragging = false;

        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2; // 20% swipe threshold

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        } else {
            updateCarousel();
        }
    }

    // Touch events ONLY (no mouse events)
    track.addEventListener('touchstart', handleTouchStart, { passive: true });
    track.addEventListener('touchmove', handleTouchMove, { passive: false });
    track.addEventListener('touchend', handleTouchEnd);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
})();
