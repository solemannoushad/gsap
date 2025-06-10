gsap.to(".box" , {
    x:1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    scale: 0.5,
    backgroundColor: "blue",
    borderRadius: "50%",
})

gsap.from(".box1" , {
    x:1000,
    duration: 2,
    delay: 1,
})

gsap.from(".heading" , {
    y: 30,
    duration: 1,
    delay: 1,
    opacity: 0,
    stagger: 0.2
})

gsap.to("#box" , {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    scale: 0.5,
    backgroundColor: "green",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
})


