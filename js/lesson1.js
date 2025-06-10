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


const tl = gsap.timeline();

tl.from(".logo" , {
    y: -100,
    duration: 0.5,
    opacity: 0,
    ease: "bounce.out",
})

tl.from(".list-items li" , {
    y: 30,
    duration: 0.5,
    opacity: 0,
    stagger: 0.2,
    ease: "back.out(1.7)",
})

tl.from("h1" ,{
    y:20,
    opacity: 0,
    scale: 0.2,
    duration: 0.5,
})


