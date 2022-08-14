const menu = document.querySelector(".context__menu");
const menuItems = document.querySelectorAll(".context__menu ul li");

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  menu.style.display = "flex";
  menu.style.left = e.pageX + "px";
  menu.style.top = e.pageY + "px";
});

window.addEventListener("click", hideMenu);

function hideMenu() {
  menu.style.display = "none";
}
