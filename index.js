// custom cursor

const cursor = document.querySelector('.cursor1');
const cursor2 = document.querySelector('.cursor2');

document.addEventListener('mousemove', (e) => {
    cursor.setAttribute("style", "top: " + (e.clientY - 20) + "px; left: " + (e.clientX - 20) + "px;")
    cursor2.setAttribute("style", "top: " + (e.clientY) + "px; left: " + (e.clientX) + "px;")
})



// logo animation

const logoText = document.querySelector('.logo-text');
logoText.innerHTML = logoText.innerText.split('').map(
    (char, i) =>
        `<span style="transform:rotate(${i * 22.5}deg)">${char}</span>`
).join('');




// scroll animation

const hiddenToLeft = document.querySelectorAll('.hidden-to-left');
const hiddenToRight = document.querySelectorAll('.hidden-to-right');

// animation from left to right
const observerForLeftItems = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left-to-right')
        }
    });
},
    { threshold: .7 }
);

// animation from right to left
const observerForRightItems = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right-to-left')
        }
    });
},
    { threshold: .7 }
)

hiddenToLeft.forEach(item => observerForLeftItems.observe(item));
hiddenToRight.forEach(item => observerForRightItems.observe(item));