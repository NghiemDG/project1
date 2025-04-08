let users = JSON.parse(localStorage.usersDatabase);
let form = document.getElementById("form");
let signupError = document.getElementById("errorAlert");
let signupSuccess = document.getElementById("successAlert");
let alertCloseBtn = document.getElementById("alertCloseBtn");

// Đăng ký

form.addEventListener("submit", function (e) {
  // e.preventDefault();
  let index = users.findIndex((element) => element.email === form.email.value);
  if (index !== -1) {
    alert("Email đã được sử dụng");
  }
  if (!validEmail(form.email.value)) {
    alert("Email không đúng định dạng");
  }
  if (!validPassword(form.password.value)) {
    alert(`Mật khẩu không đúng định dạng
        Mật khẩu tối thiểu 8 ký tự
        Mật khẩu bao gồm cả số, chữ thường và chữ hoa`);
  } else if (
    form.email.value.trim() === "" ||
    form.password.value.trim() === ""
  ) {
    signupError.style.opacity = 1;
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
    window.location.href = "./index.html";
  }

  // window.location.href();
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
