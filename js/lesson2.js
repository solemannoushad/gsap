

gsap.from("#page1 .box" , {
    y:20,
    opacity:0,
    scale: 0.2,
    duration: 1,
    rotate: 360,
    delay: 1
})

gsap.from("#page2 .box" , {
    y:20,
    opacity:0,
    scale: 0.2,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page2 .box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 3,
    }
})