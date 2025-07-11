const slider = document.getElementById('trainer-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const slides = slider.children;
const totalSlides = slides.length;

function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
});

let galleryIndex = 0;
const gallerySlider = document.getElementById('gallery-slider');
const gallerySlides = document.querySelectorAll('#gallery-slider > div');
const galleryTotal = gallerySlides.length;

document.getElementById('galleryPrevBtn').addEventListener('click', () => {
  galleryIndex = (galleryIndex - 1 + galleryTotal) % galleryTotal;
  updateGallerySlider();
});

document.getElementById('galleryNextBtn').addEventListener('click', () => {
  galleryIndex = (galleryIndex + 1) % galleryTotal;
  updateGallerySlider();
});

function updateGallerySlider() {
  const offset = -galleryIndex * 100;
  gallerySlider.style.transform = `translateX(${offset}%)`;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
