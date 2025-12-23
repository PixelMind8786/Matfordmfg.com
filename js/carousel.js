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
        currentIndex = Math.max(0, Math.min(index, slides.length - 1));
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    }

    // Previous slide
    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    // Button event listeners
    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // Touch/Mouse drag functionality
    function handleStart(e) {
        isDragging = true;
        track.classList.add('grabbing');
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        startTransform = currentIndex * -100;
    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diff = currentX - startX;
        const percentDiff = (diff / track.offsetWidth) * 100;

        track.style.transition = 'none';
        track.style.transform = `translateX(${startTransform + percentDiff}%)`;
    }

    function handleEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        track.classList.remove('grabbing');

        const diff = currentX - startX;
        const threshold = track.offsetWidth * 0.2; // 20% swipe threshold

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && currentIndex > 0) {
                prevSlide();
            } else if (diff < 0 && currentIndex < slides.length - 1) {
                nextSlide();
            } else {
                updateCarousel();
            }
        } else {
            updateCarousel();
        }
    }

    // Mouse events
    track.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);

    // Touch events
    track.addEventListener('touchstart', handleStart, { passive: false });
    track.addEventListener('touchmove', handleMove, { passive: false });
    track.addEventListener('touchend', handleEnd);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // Auto-play (optional - uncomment to enable)
    /*
    let autoplayInterval = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        nextSlide();
      } else {
        currentIndex = 0;
        updateCarousel();
      }
    }, 5000);
  
    // Pause autoplay on hover
    carousel.parentElement.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });
  
    carousel.parentElement.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        if (currentIndex < slides.length - 1) {
          nextSlide();
        } else {
          currentIndex = 0;
          updateCarousel();
        }
      }, 5000);
    });
    */
})();
