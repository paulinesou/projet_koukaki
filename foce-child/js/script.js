// Parallaxe entre le background/video et le titre (logo)

const background = document.getElementById('background_header');
const logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

   //  logo.style.marginTop = value * 1 + 'px';
   //  background.style.top = value * 1 + 'px';
});

// Effet apparition au scroll des titre H2

// Mouvement des nuages section lieu

const bigCloud = document.querySelector('.big_cloud');
const littleCloud = document.querySelector('.little_cloud');

window.addEventListener('scroll', () => {

   const {scrollTop, clientHeight} = document.documentElement;
   const topElementToTopViewport = bigCloud.getBoundingClientRect().top;
   const mouvLittleCloud = littleCloud.getBoundingClientRect().top;

   if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.50){
      bigCloud.classList.add("active")
   }

   if(scrollTop > (scrollTop + mouvLittleCloud).toFixed() - clientHeight * 0.74){
      littleCloud.classList.add("active")
   }   

});

// Swiper section personnage 

  var swiper = new Swiper('.mySwiper', {
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
 rotate: 20,
 stretch: 0,
 depth: 200,
 modifier: 1,
 slideShadows: true,
    },
    loop: true,
 }) ;
