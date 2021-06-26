const menuIcon = document.getElementById("menu_icon");
const menuLinks = document.querySelector(".menu_links");
var displayMenu = false;

menuIcon.addEventListener("click", function () {
  displayMenu = !displayMenu;
  menuLinks.style.display = displayMenu ? "inline-block" : "none";
  menuLinks.style.animation = "menuDisplay 0.2s ease-in-out 1 ";
  // console.log(menuLinks);
});

window.addEventListener("resize", function (event) {
  if (this.screen.width > 665) {
    displayMenu = false;
    menuLinks.style.display = "none";
  }
});
