function toggleMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const burgerMenu = document.querySelector(".block.bg-gray-800:nth-child(1)");
  const burgerMenuMiddle = document.querySelector(
    ".block.bg-gray-800:nth-child(2)"
  );
  const burgerMenuBottom = document.querySelector(
    ".block.bg-gray-800:nth-child(3)"
  );
  const menu = document.getElementById("menu");

  if (menuToggle.checked) {
    burgerMenu.classList.add("rotate-45", "translate-y-1");
    burgerMenuMiddle.classList.add("opacity-0");
    burgerMenuBottom.classList.add("-rotate-45", "-translate-y-3");
    menu.classList.remove("opacity-0", "pointer-events-none");
    menu.classList.add("opacity-100", "pointer-events-auto");
  } else {
    burgerMenu.classList.remove("rotate-45", "translate-y-1");
    burgerMenuMiddle.classList.remove("opacity-0");
    burgerMenuBottom.classList.remove("-rotate-45", "-translate-y-3");
    menu.classList.remove("opacity-100", "pointer-events-auto");
    menu.classList.add("opacity-0", "pointer-events-none");
  }
}
