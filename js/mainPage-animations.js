// Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});
// Selectors

const rightContainers = document.querySelectorAll(".rightContainer");
const leftContainers = document.querySelectorAll(".leftContainer");
const servicesSubContainersUp = document.querySelectorAll(
  ".servicesSubContainer-up"
);
const servicesSubContainersDown = document.querySelectorAll(
  ".servicesSubContainer-down"
);
const frontContentDelay = document.querySelectorAll(".frontContent-delay");
const navBar = document.querySelector(".navBar");
const topBtn = document.querySelector(".topBtn");
const service = document.querySelectorAll(".service");
const servicesSubContainer = document.querySelectorAll(".servicesSubContainer");
aboutInfoSubContainer = document.querySelectorAll(".aboutInfoSubContainer");

// Events
leftContainers.forEach((element) => {
  observer.observe(element);
});
rightContainers.forEach((element) => {
  observer.observe(element);
});
servicesSubContainersUp.forEach((element) => {
  observer.observe(element);
});
servicesSubContainersDown.forEach((element) => {
  observer.observe(element);
});
frontContentDelay.forEach((element) => {
  observer.observe(element);
});
service.forEach((element) => {
  observer.observe(element);
});
aboutInfoSubContainer.forEach((element) => {
  observer.observe(element);
});

servicesSubContainer.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.add("serviceSubContainer-active");
  });
  element.addEventListener("mouseout", () => {
    element.classList.remove("serviceSubContainer-active");
  });
});
setTimeout(() => {
  navBar.classList.add("active");
}, 1300);
