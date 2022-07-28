"use strict";

const userLocation = document.querySelector(".location");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(showPosition);
});

const showPosition = function (position) {
  userLocation.innerHTML = `
    Latitude: ${position.coords.latitude} <br>
    Longiude: ${position.coords.longitude}
    `;
};
