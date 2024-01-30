// menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});
var index = 0;
hinh_anh = function () {
  var arr_hinh = ["./img/0.jpg", "./img/1.jpg", "./img/2.jpg"];
  document.getElementById("hinh").src = arr_hinh[index];
  index++;
  if (index >= arr_hinh.length) index = 0;
};
setInterval(hinh_anh, 1000);
