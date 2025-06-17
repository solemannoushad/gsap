
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
let splitTextFromBetween = () => {
    let heading = document.querySelector('#main h1');
    let headingText = document.querySelector('#main h1').textContent;

    let splittedText = headingText.split('');

    let length = splittedText.length;
    let middleIndex = Math.floor(length / 2);

    let separatedSpans = ``

    splittedText.forEach((element , index) => {
        if(index <= middleIndex) {
            separatedSpans += `<span class="left">${element}</span>`;
        } else {
            separatedSpans += `<span class="right">${element}</span>`;
        }
    });

    heading.innerHTML = separatedSpans;
}

splitTextFromBetween();

gsap.from('#main h1 span.left', {
    duration: 0.6,
    opacity: 0,
    y: 80,
    stagger: 0.15,
    delay: 0.5,

})
gsap.from('#main h1 span.right', {
    duration: 0.6,
    opacity: 0,
    y: 80,
    stagger: -0.15,
    delay: 0.5,

})
