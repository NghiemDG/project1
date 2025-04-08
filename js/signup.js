let users = JSON.parse(localStorage.usersDatabase);
let form = document.getElementById("form");
let signupError = document.getElementById("errorAlert");
let signupSuccess = document.getElementById("successAlert");
let alertCloseBtn = document.getElementById("alertCloseBtn");
let errorMessage = document.getElementById("errorMessage");
let message = "";
// Đăng ký
function errorAlert(message) {
  errorMessage.innerText = "";
  errorMessage.innerText = message;
  signupError.style.opacity = 1;
  setTimeout(() => {
    signupError.style.opacity = 0;
  }, 5000);
}
//validate & signup
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let index = users.findIndex((element) => element.email === form.email.value);
  if (
    form.email.value.trim() === "" ||
    form.username.value.trim() === "" ||
    form.password.value.trim() === ""
  ) {
    errorAlert(`  Mật khẩu không được bỏ trống
        Email không được bỏ trống
        Username không được để trống`);
  } else if (index !== -1) {
    errorAlert("Email đã được sử dụng");
  } else if (!validEmail(form.email.value)) {
    errorAlert("Email không đúng định dạng");
  } else if (!validPassword(form.password.value)) {
    errorAlert(`Mật khẩu không đúng định dạng
        Mật khẩu tối thiểu 8 ký tự
        Mật khẩu bao gồm cả số, chữ thường và chữ hoa`);
  } else {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      username: form.username.value,
      email: form.email.value,
      password: form.password.value,
      role: "USER",
      status: false,
      birthday: "",
    };
    signupSuccess.style.opacity = 1;

    users.push(newUser);
    localStorage.usersDatabase = JSON.stringify(users);
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 1000);
  }
});

alertCloseBtn.addEventListener("click", function () {
  signupError.style.opacity = 0;
});
console.log(users);
// regex
function validEmail(email) {
  // sử dụng regex -> regular expression
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}
