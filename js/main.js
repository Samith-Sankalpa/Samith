// NavBar
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// Typewriter Animation
var string =
  "Hello everyone , 👋  I’m Samith Sankalpa"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper() {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
  }
  loopTimer = setTimeout("frameLooper()", 70); /* change 70 for speed */
}
frameLooper();

// Bottom to Top btn
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Active Status
var header = document.getElementById("activeNav");
var btns = header.getElementsByClassName("active-tab");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
