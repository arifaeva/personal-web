const inputEmail = document.getElementById("emailInput");
const subscribeBtn = document.getElementById("subscribeBtn");
const confetti = require("canvas-confetti");

subscribeBtn.addEventListener("click", () => {
  //   const email = inputEmail.value;

  const myCanvas = document.createElement("canvas");
  myCanvas.style.width = "100vw";
  myCanvas.style.height = "100vh";
  myCanvas.style.position = "fixed"; //sesuai posisi penuh layarnya
  myCanvas.style.inset = 0; // semacam padding, kalau 0 berarti gaada padding
  myCanvas.style.zIndex = 9999; // untuk ngasih layer-layer

  document.body.appendChild(myCanvas);

  const myConfetti = confetti.create(myCanvas, { resize: true });
  myConfetti({
    particleCount: 500,
    spread: 160,
  });
});

const Typed = require("typed.js");

const element = new Typed("#message", {
  strings: ["Hello world!", "I am Arifa!", "Welcome!"],
  typeSpeed: 30,
  loop: true,
});

const itemNav = document.querySelectorAll("header nav a");
const cards = document.querySelectorAll("main .card");

itemNav.forEach((item) => {
  item.addEventListener("click", () => {
    const navActive = document.querySelector(".linkActive");

    if (navActive) {
      navActive.classList.remove("linkActive");
    }

    if (!item.classList.contains("linkActive")) {
      item.classList.add("linkActive");
    }

    cards.forEach((card) => {
      card.classList.add("invisible");
      if (item.textContent.includes("All")) {
        card.classList.toggle("invisible");
      }
    });

    if (item.textContent.includes("About")) {
      const aboutElement = document.getElementById("about");
      const mediaElement1 = document.getElementById("media-1");
      const mediaElement2 = document.getElementById("media-2");

      if (aboutElement) {
        aboutElement.classList.toggle("invisible");
      }
      if (mediaElement1) {
        mediaElement1.classList.toggle("invisible");
      }
      if (mediaElement2) {
        mediaElement2.classList.toggle("invisible");
      }
    }

    if (item.textContent.includes("Projects")) {
      const project1 = document.getElementById("porto-1");
      const project2 = document.getElementById("porto-2");
      const project3 = document.getElementById("porto-3");

      if (project1) {
        project1.classList.toggle("invisible");
      }
      if (project2) {
        project2.classList.toggle("invisible");
      }
      if (project3) {
        project3.classList.toggle("invisible");
      }
    }

    if (item.textContent.includes("Social Media")) {
      const social1 = document.getElementById("social-1");
      const social2 = document.getElementById("social-2");
      const social3 = document.getElementById("social-3");
      const social4 = document.getElementById("social-4");

      if (social1) {
        social1.classList.toggle("invisible");
        if (social2) {
          social2.classList.toggle("invisible");
        }
        if (social3) {
          social3.classList.toggle("invisible");
        }
        if (social4) {
          social4.classList.toggle("invisible");
        }
      }
    }
  });
});
