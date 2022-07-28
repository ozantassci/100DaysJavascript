'use strict'
const word = document.querySelector(".input-text");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

const countVowel = function () {
  let vovelCount = 0;
  let wordVal = word.value.toLowerCase();

  for (let i = 0; i < wordVal.length; i++) {
    let letter = wordVal[i];
    if (letter.match(/([a,e,ı,i,o,ö,u,ü])/)) {
      vovelCount++;
    }
  }
  result.textContent = `${word.value.toUpperCase()} has ${vovelCount} vowels`
};

btn.addEventListener("click", countVowel);

