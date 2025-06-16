window.addEventListener("mousemove", (e) => {
  gsap.to(".cursor", {
    x: e.clientX,
    y: e.clientY,
    duration: 0.5,
  });
});

let image = document.querySelector("#image");
image.addEventListener("mouseenter", () => {
    gsap.to(".cursor", {
    scale: 2,
    duration: 0.5,
  });
})

image.addEventListener("mouseleave", () => {
    gsap.to(".cursor", {
    scale: 1,
    duration: 0.5,
  });
})
