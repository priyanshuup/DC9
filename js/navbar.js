const navbtnmob = document.querySelector(".navbtnmob");
const navbarcontmob = document.querySelector(".navbarcontmob");
var flag = 0;
navbtnmob.addEventListener("click", function () {
  if (flag === 0) {
    navbarcontmob.style.left = "50%";
    flag = 1;
  } else {
    navbarcontmob.style.left = "-100%";
    flag = 0;
  }
});