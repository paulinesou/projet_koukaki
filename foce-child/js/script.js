// Parallaxe entre le background/video et le titre (logo)

const background = document.getElementById('background_header');
const logo = document.getElementById('logo');
const stopLogo = logo.offsetTop;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    background.style.top = value * 2 + 'px';
    logo.style.marginTop = value * 0.5 + 'px';

   if(scrollTop = (scrollTop + stopLogo).toFixed() - clientHeight * 0.5){
      logo.style.bottom = value * 0.5 + 'px';
   }

   if(scrollTop = 100)
});

// Apparition des titre h2 au scroll

const ratio = .5
const options = {
   root: null,
   rootMargin:'0px',
   threshold: ratio
}

const handleIntersect = function (entries, observer) {
   entries.forEach(function(entry) {
      if (entry.intersectionRatio > ratio) {
         entry.target.classList.add("active")
         observer.unobserve(entry.target)
      }
   })
}

const observeur = new IntersectionObserver(handleIntersect, options)
observeur.observe(document.querySelector(".title_anim"))

// Mouvement des nuages au scroll section lieu

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
 rotate: 50,
 stretch: 0,
 depth: 100,
 modifier: 1,
 slideShadows: false,
    }
 });


