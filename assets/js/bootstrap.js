/* Custom JS used by index.html and gallery.html */

function openLightbox(src) {
  const lightboxImage = document.getElementById('lightbox-img');
  const lightbox = document.getElementById('lightbox');

  if (!lightboxImage || !lightbox) {
    return;
  }

  lightboxImage.src = src;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');

  if (!lightbox) {
    return;
  }

  lightbox.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const bookNavLinks = document.querySelectorAll('.glass-nav-links a[href="#book"]');
  const footerBookButton = document.querySelector('#book .glass-book-button');

  if (!bookNavLinks.length || !footerBookButton) {
    return;
  }

  const triggerButtonFlash = () => {
    footerBookButton.classList.remove('book-button-flash');
    void footerBookButton.offsetWidth;
    footerBookButton.classList.add('book-button-flash');
  };

  bookNavLinks.forEach((link) => {
    link.addEventListener('click', triggerButtonFlash);
  });

  footerBookButton.addEventListener('animationend', () => {
    footerBookButton.classList.remove('book-button-flash');
  });
});
