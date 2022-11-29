const bgBlur = document.getElementById("bgBlur");
const sideNav = document.getElementById("sideNav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

const handleToggleMenu = () => {
  document.body.classList.toggle("overflow-y-hidden");
  bgBlur.classList.toggle("opacity-0");
  bgBlur.classList.toggle("-z-10");
  sideNav.classList.toggle("opacity-0");
  sideNav.classList.toggle("translate-x-full");
  closeBtn.classList.toggle("rotate-180")
};

openBtn.addEventListener("click", () => handleToggleMenu());
closeBtn.addEventListener("click", () => handleToggleMenu());
