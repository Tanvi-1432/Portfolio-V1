# Protfolio V1
This is my personal portfolio.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Initial prototype design](#initial-prototype-design)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](images/readme%20images/webpage-screenshot.jpg)

### Links

- Live Site URL: [tanvich.com](https://tanvich.com/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- [Vanilla-tilt.js](https://micku7zu.github.io/vanilla-tilt.js/) - JS library

### Initial prototype design
-
![](images/readme%20images/Screenshot%202023-06-03%20at%203.46.50%20PM.png)

-
![](images/readme%20images/Screenshot%202023-06-03%20at%203.46.56%20PM.png)

-
![](images/readme%20images/Screenshot%202023-06-03%20at%203.46.59%20PM.png)


### What I learned

While working on this project, I learned a lot about web development and software engineering. Here are some of the key takeaways:
 - Technical skills: I learned to make custom cursors, learned how to use js libraries, learned to make circular text and I learned how to use intersection observer api.
 - Collaborations: I worked closely with a UI/UX designer on this project, and I learned a lot about how to communicate effectively and collaborate efficiently.
 - Personal growth: Overall, this project was a great learning experience for me, and I feel much more confident as a web developer and software engineer. I gained a deeper understanding of how web applications work and how to build them from scratch, and I also developed valuable soft skills like communication, collaboration.

```html
<div class="project-image" data-tilt data-tilt-max="5">
```
```js
const observerForLeftItems = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left-to-right')
        }
    });
},
    { threshold: .7 }
);
```


## Author

- LinkedIn - [Tanvi Chowdhury](https://www.linkedin.com/in/tanvi-chowdhury/)


## Acknowledgments

I would like to thank the following individual for their contributions to this project:
 - Ishtiaq Isha [linkedin](https://www.linkedin.com/in/ishtiaq-isha-7709251a2/), for creating the intial desktop layout and being an awesome collaborator throughout this project.
