let users = JSON.parse(localStorage.usersDatabase);
console.log(users);

let form = document.getElementById("form");
let userNameValid = document.getElementById("userNameValid");
let emailValid = document.getElementById("emailValid");
let passwordValid = document.getElementById("passwordValid");
let successAlert = document.getElementById("successAlert");
//validate
//code
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateEmail() && validateName() && validatePassword()) {
    const newUser = {
      id: Math.floor(Math.random() * 1000),
      username: form.userName.value,
      email: form.email.value,
      password: form.password.value,
      role: form.role.value,
      status: !!form.status.value,
      birthday: form.birthday.value,
    };
    successAlert.style.opacity = 1;
    users.push(newUser);
    localStorage.usersDatabase = JSON.stringify(users);
    setTimeout(() => {
      successAlert.style.opacity.value = 0;
      window.location.href = "./Dashboard.html";
    }, 1500);
  } else {
    validateEmail();
    validateName();
    validatePassword();
  }
});
//Validate

//name
function validateName() {
  let check = false;
  if (form.userName.value.trim() === "") {
    userNameValid.innerText = "Username can't be empty";
  } else {
    userNameValid.innerText = "";
    check = true;
  }

  return check;
}
//email
function validateEmail() {
  let check = false;
  if (form.email.value.trim() === "") {
    emailValid.innerText = "Email can't be empty";
  } else if (!validEmail(form.email.value)) {
    emailValid.innerText = "Your email format is incorrect.";
  } else {
    let index = users.findIndex((user) => user.email === form.email.value);
    if (index !== -1) {
      emailValid.innerText = "Email already exists.";
    } else if (index === -1) {
      emailValid.innerText = "";
      check = true;
    }
    return check;
  }
}
//pass
function validatePassword() {
  let check = false;
  if (form.password.value.trim() === "") {
    passwordValid.innerText = "Password can't be empty";
  } else if (!validPassword(form.password.value)) {
    passwordValid.innerText =
      "Passwords must be at least 8 characters long and include uppercase letters, lowercase letters, and numbers";
  } else {
    passwordValid.innerText = "";
    check = true;
  }

  return check;
}

//regex pattern
function validEmail(email) {
  // sử dụng regex -> regular expression
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

function validPassword(password) {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
}
