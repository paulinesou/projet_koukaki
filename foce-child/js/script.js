// EFFET PARALLAXE ENTRE LE BACKGROUND/VIDEO ET LE TITRE

// const logo = document.getElementById('logo');

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;

//     logo.style.top = value * 0.5 + 'px';
// });

window.onscroll = function() {myFunction()};
 
function myFunction() {
var x = document.body.scrollTop || document.documentElement.scrollTop;
var h = document.getElementById("logo").offsetHeight;
var b = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; 
 
if (x > 560 && h < b) 
{
document.getElementById("logo").className = "fixed";
}
else
{
document.getElementById("logo").className = "";
}
}

// APPARITION DES TITRES AU SCROLL

const targets = document.querySelectorAll('.title_anim');

function handleIntersection(entries) {
    entries.map((entry) => {
      entry.target.classList.remove('active')
        if (entry.isIntersecting) {
            entry.target.classList.add('active')
        } else {
            entry.target.classList.remove('active')
        }
    });
}

const observer = new IntersectionObserver(handleIntersection);

targets.forEach(target => observer.observe(target));


// MOUVEMENT DES NUAGES AU SCROLL

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

// CAROUSSEL - SWIPER 

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
    },
   //  loop: true,
 });

// MENU BURGER

const menuBurger = document.getElementById("menu_burger");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
   menuBurger.classList.add("active");
}

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