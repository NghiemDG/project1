let users = JSON.parse(localStorage.usersDatabase);
let form = document.getElementById("form");
let signinError = document.getElementById("errorAlert");
let signinSuccess = document.getElementById("successAlert");
let alertCloseBtn = document.getElementById("alertCloseBtn");
let errorMessage = document.getElementById("errorMessage");
let message = "";
//alert
function errorAlert(message) {
  errorMessage.innerText = "";
  errorMessage.innerText = message;
  signinError.style.opacity = 1;
  setTimeout(() => {
    signinError.style.opacity = 0;
  }, 5000);
}
//signin

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let index = users.findIndex((user) => user.email === form.email.value);
  console.log(index);
  if (form.email.value.trim() === "") {
    errorAlert("Email không được để trống");
  } else if (form.password.value.trim() === "") {
    errorAlert("Password không được để trống");
  } else if (index === -1) {
    errorAlert("Email không tồn tại");
  } else if (index !== -1) {
    if (form.password.value !== users[index].password) {
      errorAlert("Mật khẩu không chính xác");
    } else {
      signinSuccess.style.opacity = 1;
      setTimeout(() => {
        signinSuccess.style.opacity = 0;
        window.location.href = "./Dashboard.html";
      }, 1500);
    }
  }
});
