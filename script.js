const navlinks = document.querySelector(".navlinks");
const bars = document.querySelector(".bars");
const close = document.querySelector(".close");

bars.addEventListener("click", () => {
  navlinks.style.right = "0";
});

close.addEventListener("click", () => {
  navlinks.style.right = "-250px";
});
