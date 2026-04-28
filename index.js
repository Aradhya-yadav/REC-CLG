// ----- Header Slider -----
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');
let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
  }
  imgs[n].style.display = 'block';
}
if (imgs.length > 0) changeSlide();

if (prev_btn && next_btn) {
  prev_btn.addEventListener('click', (e) => {
    e.preventDefault();
    n = n > 0 ? n - 1 : imgs.length - 1;
    changeSlide();
  });

  next_btn.addEventListener('click', (e) => {
    e.preventDefault();
    n = n < imgs.length - 1 ? n + 1 : 0;
    changeSlide();
  });
}

// ----- Horizontal Scroll -----
const scrollContainer = document.querySelectorAll('.product');
for (const item of scrollContainer) {
  item.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}

// ----- Navbar Toggle -----
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});
