

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

gsap.to("#page3 h1" , {
    // transform: "translateX(-70%)",
    xPercent: -70,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        markers: true,
        scrub: 5,
        pin: true,
        // start: "top 0%",
        // end: "top -100%"
        start: "top top",
    end: "bottom+=800 top" // increase scroll distance
    }
})