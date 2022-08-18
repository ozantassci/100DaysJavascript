"use strict";

const links = document.querySelectorAll(".nav-list li a");

for (let link of links) {
  link.addEventListener("click", smoothScroll);
}

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

window.onscroll = () => scrollProgress();

function scrollProgress() {
  //ilk atama safari browser için, ikincisi de chrome/mozilla
  const currentState =
    document.body.scrollTop || document.documentElement.scrollTop;

  const pageHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercentage = (currentState / pageHeight) * 100;

  const progressBar = document.querySelector(".progress");
  progressBar.style.visibility = "visible";
  progressBar.style.width = scrollPercentage + "%";
}
