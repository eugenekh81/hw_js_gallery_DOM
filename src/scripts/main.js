"use strict";

const largeImg = document.querySelector("#largeImg");

const smallImges = document.querySelectorAll(".gallery__img gallery__thumb");

const list = document.querySelector("ul");

list.addEventListener("click", (event) => {
  event.preventDefault();
  const largeImgSrc = event.target.closest(".list-item__link").href;
  largeImg.src = largeImgSrc;
});
