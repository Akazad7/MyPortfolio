let rootElement = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");

rootElement.classList.add("light-mode");
toggleBtn.children[1].classList.add("displayNone");

function modeToggle() {
  rootElement.classList.toggle("dark-mode");
  toggleBtn.children[0].classList.toggle("displayNone");
  toggleBtn.children[1].classList.toggle("displayBlock");
}

// Set project thumbnail

let allProjectThumbnails = document.querySelectorAll(".thumbnail");

function setProjectThumbnail (allProjectThumbnails, projectName, color) {
  allProjectThumbnails.style = `
    background: url(./Assets/ProjectThumbnails/${projectName}.png) no-repeat center;
    background-size: contain;
    background-color: ${color};
  `;
}

setProjectThumbnail(allProjectThumbnails[0], "project1", "#3e284f");
setProjectThumbnail(allProjectThumbnails[1], "project2", "#a35252");
setProjectThumbnail(allProjectThumbnails[2], "project3", "#000");
setProjectThumbnail(allProjectThumbnails[3], "project4", "#202020");
setProjectThumbnail(allProjectThumbnails[4], "project5", "#272727");
setProjectThumbnail(allProjectThumbnails[5], "project6", "#ccbbba");

// navShadow

window.addEventListener("scroll", ()=> {
  let navbar = document.querySelector("nav");
  if(window.scrollY > 0){
    navbar.classList.add("navShadow");
  }
  else{
    navbar.classList.remove("navShadow");
  }
});

// navMennu toggle

let allNavMenuItems = document.querySelectorAll(".navMenuItem");
let navLogo = document.querySelector(".navLogo a");
let hireMe = document.querySelector(".hireMe");

function activeClassFunction(cliclEle, addClassEle){
  cliclEle.addEventListener("click", () => {
    allNavMenuItems.forEach((e) => {
      e.classList.remove("navActive")
    });
    addClassEle.classList.add("navActive");
  });
}

for(let i=0; i< allNavMenuItems.length; i++) {
  activeClassFunction(allNavMenuItems[i], allNavMenuItems[i])
}

activeClassFunction(navLogo, allNavMenuItems[0]);
activeClassFunction(hireMe, allNavMenuItems[4]);

//  animation on scroll

let revealAnimationElements = document.querySelectorAll("li, .name, .heading h1, .projectName");

revealAnimationElements.forEach((revealAnimationElement) => {
  revealAnimationElement.style = `
    position: relative;
    overflow: hidden;
  `;
  revealAnimationElement.classList.add("hiddenRevealAnimation");
});

let leftAnimationElements = document.querySelectorAll(".position, #aboutSection .left");
leftAnimationElements.forEach((leftAnimationElement) => {
  leftAnimationElement.classList.add("hiddenLeftAnimation");
});

let rightAnimationElements = document.querySelectorAll(".circle, #aboutSection .right");
rightAnimationElements.forEach((rightAnimationElement) => {
  rightAnimationElement.classList.add("hiddenRightAnimation");
});

let upAnimationElements = document.querySelectorAll(".about, .btns button, .links, .skills h1, .projectDesc, input, textarea");
upAnimationElements.forEach((upAnimationElement) => {
  upAnimationElement.classList.add("hiddenUpAnimation");
});

let progressBarAnimationElements = document.querySelectorAll(".progressBar");
progressBarAnimationElements.forEach((progressBarAnimationElement) => {
  progressBarAnimationElement.classList.add("hiddenProgressBarAnimation");
});

let thumbnailAnimationElements = document.querySelectorAll(".thumbnail");
thumbnailAnimationElements.forEach((thumbnailAnimationElement) => {
  thumbnailAnimationElement.classList.add("hiddenThumbnailAnimation");
});



function observeFunction(elements, className) {
  const observer = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add(className);
    }
    // for animate everytime
    //else {entry.target.classList.remove(className)};
   });
  });
  elements.forEach((el) => observer.observe(el));
};

observeFunction (revealAnimationElements, "showRevealAnimation");
observeFunction (leftAnimationElements, "showLeftAnimation");
observeFunction (rightAnimationElements, "showRightAnimation");
observeFunction (upAnimationElements, "showUpAnimation");
observeFunction (progressBarAnimationElements, "showProgressBarAnimation");
observeFunction (thumbnailAnimationElements, "showThumbnailAnimation");

// hamburgerAnimation

let hamburger = document.querySelectorAll(".hamburger, .navMenu, header");
let body = document.querySelector("body");

function hamburgerAnimation() {
  hamburger[2].classList.toggle("hamburgerAnimation");
  hamburger[1].classList.toggle("navMenuAnimation");
  hamburger[0].classList.toggle("navMenuBackgroundAnimation");
  body.classList.toggle("scrollOff");
};

allNavMenuItems.forEach((e) => {
  e.addEventListener("click", ()=> {
    hamburger[2].classList.toggle("hamburgerAnimation");
    hamburger[1].classList.toggle("navMenuAnimation");
    hamburger[0].classList.toggle("navMenuBackgroundAnimation");
    body.classList.toggle("scrollOff");
  });
});

let nameOfThePerson = document.getElementById("nameX");
function sendMessage() {
  alert(`Thank you ${nameOfThePerson.value} for contacting me`);
}