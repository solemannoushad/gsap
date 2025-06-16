var initialPosition = `M 10 100 Q 450 100 890 100`;

let svg = document.querySelector("svg");
let pathEl = document.querySelector("svg path");

svg.addEventListener("mousemove", function (dets) {
    let path = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 890 100`;
    console.log(path)
    gsap.to(pathEl, {
        attr: { d: path },
        duration: 0.2
    });
});

svg.addEventListener("mouseleave", function () {
    gsap.to(pathEl, {
        attr: { d: initialPosition },
        duration: 1.2,
        ease: "elastic.out(1, 0.2)"
    });
});
