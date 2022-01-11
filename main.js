import './style.css';

const navBtn = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-menu__link');
const track  = document.querySelector('.carousel__tracker');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__buttons--right');
const prevBtn = document.querySelector('.carousel__buttons--left');
const carouselContainer = document.querySelector('.designs');

const slideWidth = slides[0].getBoundingClientRect().width;
carouselContainer.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${slides[0].children[0].attributes.src.value}) no-repeat center/cover`;

const setSlidePostion = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
}

slides.forEach(setSlidePostion);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  carouselContainer.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(${targetSlide.querySelector('img').src}) no-repeat center/cover`;
}

const nextSlide = () => {
    setInterval(() => {
    const currentSlide = track.querySelector(".current-slide");
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide.nextElementSibling !== null){
      moveToSlide(track, currentSlide, nextSlide);
    }
    else{
      const sliderFirst = track.querySelectorAll(".carousel__slide")[0];
      track.insertAdjacentElement("beforeend", sliderFirst);
      moveToSlide(track, currentSlide, nextSlide);
    }
    }, 10000);
};

document.addEventListener("DOMContentLoaded", (e) => {
  nextSlide();
}); 

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    let nextSlide = currentSlide.nextElementSibling;

    if(nextSlide.nextElementSibling !== null){
      moveToSlide(track, currentSlide, nextSlide);
    }
    else{
      const sliderFirst = track.querySelectorAll(".carousel__slide")[0];
      track.insertAdjacentElement("beforeend", sliderFirst);
      moveToSlide(track, currentSlide, nextSlide);
    }
});

prevBtn.addEventListener("click", (e) => {
    const currentSlide = track.querySelector(".current-slide");
    const sliders = track.querySelectorAll(".carousel__slide");
    const sliderLast = sliders[sliders.length - 1]
    track.insertAdjacentElement("afterbegin", sliderLast);
    let prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
});

//nav menu functionallity

navBtn.addEventListener('click', () =>{
  navBtn.classList.contains("is-active")
    ? navBtn.classList.remove("is-active")
    : navBtn.classList.add("is-active");

  navMenu.classList.contains("nav-menu-active")
    ? navMenu.classList.remove("nav-menu-active")
    : navMenu.classList.add("nav-menu-active");
});

navLink.forEach(navLink => {
  navLink.addEventListener("click", () => {
    if (navMenu.classList.contains("nav-menu-active") && navBtn.classList.contains("is-active")) 
    {
      navMenu.classList.remove("nav-menu-active");
      navBtn.classList.remove("is-active");
    }
  });
});


