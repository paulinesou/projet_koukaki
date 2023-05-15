// Parallaxe entre le background/video et le titre (logo)

const background = document.getElementById('background_header');
const logo = document.getElementById('logo');
const stopLogo = logo.offsetTop;

window.addEventListener('scroll', () => {
    let value = window.scrollY;

   //  background.style.top = value * 1.5 + 'px';
   //  logo.style.top = value * 0.5 + 'px';

//     if(value > 150){
//    logo.style.bottom = value * 0.5 + 'px';
//     }
});

// window.onscroll = function() {myFunction()};
 
// function myFunction() {
// var x = document.body.scrollTop || document.documentElement.scrollTop;
// var h = document.getElementById("logo").offsetHeight;
// var b = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
 
// if (x > 100 && h < b) 
// {
// document.getElementById("logo").className = "fixed";
// }
// else
// {
// document.getElementById("logo").className = "";
// }
// }

// Apparition des titre au scroll

const ratio = .5
const options = {
   root: null,
   rootMargin:'0px',
   threshold: ratio
}

const handleIntersect = function (entries, observer) {
   entries.forEach(function(entry) {
      console.log("hello")
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

// Menu burger

const menuBurger = document.getElementById("menu_burger");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
   menuBurger.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
   menuBurger.classList.remove("active");
}

const ulMenu = document.querySelector(".burger");

document.querySelectorAll(".lien_burger").forEach(n => n.addEventListener("click", () => {
   menuBurger.classList.remove("active");
 }));

// document.getElementById("burger_menu").addEventListener("click", function(event){
//    event.preventDefault()
//  });