let menu = document.querySelector('#nav-menu');
let navLinks = document.querySelectorAll('#nav-menu li');
let close = document.querySelector('#nav-menu i');
let menuIcon = document.querySelector('#menu-icon');

let tl = gsap.timeline();

tl.to(menu, {
    right: 0,
    opacity: 1,
    duration: 0.3
});

tl.from(navLinks, {
    x: 150,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7
});

tl.from(close , {
    opacity: 0,
    y: 50,
})

tl.pause();

menuIcon.addEventListener('click', () => {
  tl.play(); 
})

close.addEventListener("click" , () => {
    tl.reverse();
})
