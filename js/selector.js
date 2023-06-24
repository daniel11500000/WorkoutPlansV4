"use strict";
// Clear the session storage when reloading the page
window.localStorage.clear();

// Selectors
const logo = document.querySelector(".lift");
const filling = document.querySelector(".filling");
const awnser = document.querySelectorAll(".awnser");
const pro = document.querySelector(".pro");
const backBtn = document.querySelector(".backBtn");
const questionContainer = document.querySelectorAll(".questionContainer-");

// Button to home screen
logo.addEventListener("click", function (e) {
  window.location.href = "/";
});

// Setting the empty variables
let counter = 0;
let fullLocalStorage = [];
let fullLocalStorageString = "";

// Showing the question number
let queNumber = counter + 1;
pro.textContent = queNumber + " / 7";

// Setting Params for the Progress Bar
const totalProgress = 100 / 7;

// Hide and show the right questions
const queConAdd = () => {
  if (counter < 7) {
    questionContainer[counter].classList.add("questionContainer");
    pro.textContent = counter + " / 7";
    filling.style.width = totalProgress * counter + "%";
  }
};
const queConRemove = () => {
  if (counter < 7) {
    questionContainer[counter].classList.remove("questionContainer");
    pro.textContent = counter + " / 7";
    filling.style.width = totalProgress * counter + "%";
  }
};

// Hide and show the back button
const hideBack = () => {
  backBtn.style.display = "none";
};
const showBack = () => {
  backBtn.style.display = "block";
};

// Making first question visible
queConAdd();

// Hiding back button at first question
hideBack();

// Set local storage
const localStorage = (el) => {
  for (let i = 1; i < 8; i++) {
    if (el.classList.contains(`awnser-${i}`)) {
      window.localStorage.setItem(`Que${counter + 1}`, i);
    }
  }
};

// Handling the awnsers to the questions
awnser.forEach((el) => {
  el.addEventListener("click", function (e) {
    localStorage(e.target);
    queConRemove();
    counter++;
    if (counter < 7) {
      showBack();
      queConAdd();
    } else {
      localStorage(e.target);
      window.location.href = "/program-selector/result";
    }
  });
});

// Handling the back button
backBtn.addEventListener("click", function (e) {
  queConRemove();
  counter--;
  if (counter < 1) hideBack();
  queConAdd();
});
