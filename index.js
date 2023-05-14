document.querySelector("#stylesheet").removeAttribute("disabled");
let front = document.getElementById("front");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let title = document.getElementById("name");

let top_button = document.getElementById("top_btn");

window.addEventListener("scroll", parallax);

window.onscroll = function () {
  revealButton();
};

function parallax() {
  let value = window.scrollY;
  front.style.top = value * -0.45 + "px";

  second.style.top = value * -0.4 + "px";

  third.style.top = value * -0.3 + "px";

  fourth.style.top = value * -0.2 + "px";

  fifth.style.top = value * -0.1 + "px";

  title.style.top = value * 1.05 + "px";
}

function revealButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
}
