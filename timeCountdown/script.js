"use strict";

let time = 10; // Time in minutes
let promotTime = time * 60;

let counting = document.getElementById("countdown");

function startCountdown() {
  let promoTimer = setInterval(() => {
    if (promoTimer <= 0) {
      clearInterval(promoTimer);
      counting.textContent = "Promo has ended";
    } else {
      promotTime--;
      const hours = Math.floor(promotTime / 3600) % 24;
      const min = Math.floor(promotTime / 60) % 60;
      const sec = Math.floor(promotTime % 60);

      counting.textContent = `Time : ${format(hours)}hr : ${format(
        min
      )}min : ${format(sec)}`;

      if (hours === 0 && min === 0 && sec === 0) {
        counting.textContent = `TIME OUT !`
        clearInterval(promoTimer)
      }
    }
  }, 1000);
}

function format(t) {
  return t < 10 ? `0${t}` : t;
}

startCountdown();
