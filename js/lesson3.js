
var initialPosition = `M 10 100 Q 450 100 890 100`;

let svg = document.querySelector("svg");
svg.addEventListener("mousemove", function (dets) {
    path = `M 10 100 Q ${dets.offsetX} ${dets.offsetY} 890 100`;
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.2,
        // ease: "power1.inOut"
    });
})

svg.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: { d: initialPosition },
        duration: 1.2,
        ease: "elastic.out(1,0.2)"
    });
})