import './style.css';

const navBtn = document.querySelector('.hamburger'),
  navMenu = document.querySelector('.nav-menu'),
  navLink = document.querySelectorAll('.nav-menu__link');

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
})
