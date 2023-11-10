let nav_button = document.getElementById("nav-button");
let nav = document.getElementById("nav");

nav_button.addEventListener("click", function () {
  if (nav.style.width == "100%") {
    nav.style.width = "0%";
    nav_button.childNodes[3].style.opacity = "1";
    nav_button.childNodes[1].style.transform = "rotate(0deg)";
    nav_button.childNodes[5].style.transform = "rotate(0deg)";
    document.getElementsByTagName("*")[0].style.overflowY = "visible";
  } else {
    nav.style.width = "100%";
    nav_button.childNodes[3].style.opacity = "0";
    nav_button.childNodes[1].style.transformOrigin = "5px 0px";
    nav_button.childNodes[1].style.transform = "rotate(45deg)";
    nav_button.childNodes[5].style.transformOrigin = "2px 2px";
    nav_button.childNodes[5].style.transform = "rotate(-45deg)";
    document.getElementsByTagName("*")[0].style.overflowY = "hidden";
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
