let users = JSON.parse(localStorage.usersDatabase);
let tableBody = document.getElementById("tableBody");
let currentId = JSON.parse(localStorage.setId);
let modalHtml = document.getElementById("modalHtml");
let deleteBtn = document.getElementById("deleteBtn");
function upData() {
  localStorage.usersDatabase = JSON.stringify(users);
}
function render() {
  tableBody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    if (users[i].status) {
      let html = `<tr>
                <td>TR${users[i].id}</td>
                <td>${users[i].username}</td>
                <td>${users[i].email}</td>
                <td>${users[i].role}</td>
                <td>${users[i].birthday}</td>
                <td>
                  <div
                  id="statusTag"
                    style="color: #12B76A"
                    class="bg-success-subtle rounded-pill"
                  >
                    &bull; Active
                  </div>
                </td>
                <td>
                  <button onclick="setCurrentId(${i})" class="border-0 bg-white" data-bs-toggle="modal"
      data-bs-target="#deleteModal">
                    <i
                      class="fa-solid fa-trash-can"
                      style="color: #ee2b2b"
                    ></i></button
                  ><button onclick="setCurrentId(${i})" class="border-0 bg-white">
                    <a href="./edit_user.html" ><i class="fa-solid fa-pen" style="color: #ff8e24"></i></a>
                  </button>
                </td>
              </tr>`;
      tableBody.innerHTML += html;
    } else {
      let html = `<tr>
        <td>TR${users[i].id}</td>
        <td>${users[i].username}</td>
        <td>${users[i].email}</td>
        <td>${users[i].role}</td>
        <td>${users[i].birthday}</td>
        <td>
         <div  id="statusTag" style="color: rgb(209, 6, 73)" class="bg-danger-subtle rounded-pill"> &bull; Deactive</div>
        </td>
        <td>
          <button onclick="setCurrentId(${i})" class="border-0 bg-white" data-bs-toggle="modal"
      data-bs-target="#deleteModal">
            <i
              class="fa-solid fa-trash-can"
              style="color: #ee2b2b"
            ></i></button
          ><button onclick="setCurrentId(${i})" class="border-0 bg-white">
            <a href="./edit_user.html" ><i class="fa-solid fa-pen" style="color: #ff8e24"></i></a>
          </button>
        </td>
      </tr>`;
      tableBody.innerHTML += html;
    }
  }
  upData();
}
render();
// pages
//delete
function setCurrentId(id) {
  modalHtml.innerText = "";
  currentId = id;
  console.log(currentId);
  let deleteUserInfo = `
  Tên : ${users[currentId].username}
  User Code : TR${users[currentId].id}
  Email : ${users[currentId].email}`;
  modalHtml.innerText = deleteUserInfo;
  localStorage.setId = JSON.stringify(currentId);
}
deleteBtn.addEventListener("click", function () {
  users.splice(currentId, 1);
  localStorage.usersDatabase = JSON.stringify(users);
  render();
});
//edit
