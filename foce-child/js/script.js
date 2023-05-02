// Parallaxe entre le background/video et le titre (logo)

const background = document.getElementById('background_header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // logo.style.marginTop = value * 2.5 + 'px';
    // background.style.top = value * 1 + 'px';
});

// Effet apparition au scroll des titre H2

// Mouvement des nuages section lieu
// let bigCloud = document.getElementById('big_cloud');
// const littleCloud = document.getElementById('little_cloud');

// window.addEventListener('scroll', () => {
    


// });

// Swiper section personnage 

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });