function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// for floating effect

const dynamicText = document.querySelector("h2 span");
const words = ["Full Stack Developer"];

let wordIdx = 0;
let charIdx = 1;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIdx];
  const currentchar = currentWord.substring(0, charIdx);
  dynamicText.textContent = currentchar;

  if (!isDeleting && charIdx < currentWord.length) {
    charIdx++;
    setTimeout(typeEffect, 200);
  } else if (isDeleting && charIdx > 0) {
    charIdx--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    setTimeout(typeEffect, 1200);
  }
};
typeEffect();


// sticky nav bar

window.addEventListener("scroll", function() {
  let header = document.querySelector("nav");
  header.classList.toggle("sticky",window.scrollY > 0);
})


