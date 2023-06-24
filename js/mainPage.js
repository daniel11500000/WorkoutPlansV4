"use strict";

// SELECTORS
const logo = document.querySelector(".lift");
const aboutContainer = document.querySelector(".aboutContainer");
const aboutBtn = document.querySelector(".thirText");
const servicesBtn = document.querySelector(".aboutThirText");
const wrapper = document.querySelector(".wrapper");
const topBtn = document.querySelector(".topBtn");
const navBar = document.querySelector(".navBar");
const dropDown = document.querySelectorAll(".dropDown");
const navSubDiv = document.querySelectorAll(".navSubDiv");
const progSelect = document.querySelector(".progSelect");
const freeSelect = document.querySelector(".freeSelect");
const aboutInfoSubContainer = document.querySelectorAll(
  ".aboutInfoSubContainer"
);
const aboutInfoContainer = document.querySelector(".aboutInfoContainer");
const aboutExtraInfoExp = document.querySelector(".aboutExtraInfo-exp");
const aboutDropDownAnch = document.querySelectorAll(".aboutDropDownAnch");

// FUNCTIONS
function getPositionY(el) {
  var rect = el.getBoundingClientRect();
  return rect.y;
}
// EVENTS
aboutDropDownAnch.forEach((el) => {
  el.addEventListener("click", () => {
    for (let i = 0; i < 4; i++) {
      if (el.classList.contains(`dropDown-${i}`)) {
        let currentItem = aboutInfoContainer.children[i - 1];
        currentItem.classList.add("aboutActive-active");
        currentItem.children[2].classList.add("aboutActive");
        currentItem.children[0].classList.add("hidden");
        currentItem.children[1].classList.remove("infoText");
      }
    }
  });
});

logo.addEventListener("click", function (e) {
  window.location.href = "/";
});
aboutBtn.addEventListener("click", function (e) {
  setTimeout(function () {
    window.scrollTo({
      top: getPositionY(aboutUs),
      left: 0,
      behavior: "smooth",
    });
  }, 400);
});

progSelect.addEventListener("click", function (e) {
  window.location.href = "/program-selector";
});
freeSelect.addEventListener("click", function (e) {
  window.location.href = "/free-programs";
});

aboutInfoSubContainer.forEach((el) => {
  el.addEventListener("click", () => {
    if (!el.children[2].classList.contains("aboutActive")) {
      aboutInfoSubContainer.forEach((el) => {
        el.children[2].classList.remove("aboutActive");
        el.classList.remove("aboutActive-active");
      });
      el.children[2].classList.add("aboutActive");
      el.classList.add("aboutActive-active");
      el.children[0].classList.add("hidden");
      el.children[1].classList.remove("infoText");
    } else {
      aboutInfoSubContainer.forEach((el) => {
        el.children[2].classList.remove("aboutActive");
        el.classList.remove("aboutActive-active");
        el.children[0].classList.remove("hidden");
        el.children[1].classList.add("infoText");
      });
    }
  });
});
