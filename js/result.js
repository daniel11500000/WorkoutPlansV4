"use strict";

// Selectors
let localString = [];
const result = document.querySelector(".result");
for (let i = 1; i < 8; i++) {
  localString.push(window.localStorage.getItem(`Que${i}`));
}
localStorage.clear();
console.log(localString);
// Setting result
let folderPath = [];
if (localString[0] == 1) {
  folderPath.push("Male");
} else {
  folderPath.push("Female");
}

if (localString[1] == 1) {
  folderPath.push("2-days");
} else if (localString[1] == 2) {
  folderPath.push("4-days");
} else if (localString[1] == 3) {
  folderPath.push("5-days");
} else {
  folderPath.push("6-days");
}
if (localString[2] == 1) {
  folderPath.push("45min");
} else if (localString[2] == 2) {
  folderPath.push("75min");
} else if (localString[2] == 3) {
  folderPath.push("120");
} else {
  folderPath.push("2h");
}

if (localString[3] == 1) {
  folderPath.push("muscle");
} else if (localString[3] == 2) {
  folderPath.push("strong");
} else {
  folderPath.push("fit");
}

if (localString[4] == 1) {
  folderPath.push("6mon");
} else if (localString[4] == 2) {
  folderPath.push("18mon");
} else {
  folderPath.push("18+mon");
}

if (localString[5] == 1) {
  folderPath.push("arms");
} else if (localString[5] == 2) {
  folderPath.push("chest");
} else if (localString[5] == 3) {
  folderPath.push("back");
} else {
  folderPath.push("legs");
}
if (localString[6] == 1) {
  folderPath.push("armsW");
} else if (localString[6] == 2) {
  folderPath.push("chestW");
} else if (localString[6] == 3) {
  folderPath.push("backW");
} else {
  folderPath.push("legsW");
}

const url = `./Programs/${folderPath[0]}/${folderPath[1]}/${folderPath[2]}/${folderPath[3]}/${folderPath[4]}/${folderPath[5]}/${folderPath[6]}`;
console.log(url);
