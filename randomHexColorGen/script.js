"use strict";

const hex = document.querySelector(".color");
const btnGenerate = document.querySelector(".generate");

const randomColor = function () {
  const color = Math.random().toString(16).substring(2, 8);
  document.querySelector("body").style.backgroundColor = `#${color}`;
  hex.textContent = `#${color}`;
};

btnGenerate.addEventListener("click", randomColor);
