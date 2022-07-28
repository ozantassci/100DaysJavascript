"use strict";

const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const close = document.querySelector(".close");

const openModal = function (e) {
  e.preventDefault();
  modal.style.display = "block";
};

const closeModal = function () {
  modalContent.classList.add("slide-up");
  setTimeout(() => {
    modal.style.display = "none";
    modalContent.classList.remove("slide-up");
  }, 500);
};

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);


document.body.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
