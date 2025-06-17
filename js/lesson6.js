
let splitText = () => {
    let heading = document.querySelector('#main h1');
    let headingText = document.querySelector('#main h1').textContent;

    let splittedText = headingText.split('');

    let separatedSpans = ``

    splittedText.forEach(element => {
        separatedSpans += `<span>${element}</span>`;
    });

    heading.innerHTML = separatedSpans;
}

splitText();

gsap.from('#main h1 span', {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.1,
    delay: 0.5
})
