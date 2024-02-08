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

function validateForm() {
  var x = document.getElementById("Email").value;
  var y = document.getElementById("SDT").value;
  var z = document.getElementById("MS").value;

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(x)) {
    alert("Vui lòng nhập email hợp lệ.");
    return false;
  }
  var teleregex = /^[0-9]{10}$/;
  if (!teleregex.test(y)) {
    alert("Vui lòng nhập đúng định dạng số điện thoại");
    return false;
  }
  if (z.trim() === "") {
    alert("vui lòng điền nội dung");
    return false;
  }
  alert("Thông tin đã được gửi!");
  return true;
}
document.getElementById("backToTopBtn").addEventListener("click", function () {
  // Sử dụng window.scrollTo để cuộn về đầu trang web
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Tạo hiệu ứng cuộn mượt nếu trình duyệt hỗ trợ
  });
});
