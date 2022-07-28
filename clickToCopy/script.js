"use strict";

const btn = document.querySelector(".btn");
const copy = document.querySelector(".copy");

const copyText = function (e) {
  e.preventDefault();

  //navigator tarayıcının algılanması için, clipboard API'si, tarayıcı arabirimine clipboard içeriğini okumak ve yazma özelliğini için, writeText ise belirtilen metini sisteme yazar 
  navigator.clipboard.writeText(copy.value).then(function() {
    btn.textContent = "Copied!";
    
    setTimeout(function() {
        btn.textContent = "Copy"
    }, 3000);
})
};

btn.addEventListener("click", copyText);
