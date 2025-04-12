let users = JSON.parse(localStorage.usersDatabase);
let tableBody = document.getElementById("tableBody");
let currentId = JSON.parse(localStorage.setId);
let modalHtml = document.getElementById("modalHtml");
let deleteBtn = document.getElementById("deleteBtn");
let pages = document.getElementById("pages");

function upData() {
  localStorage.usersDatabase = JSON.stringify(users);
}
//Set pages
function setpages() {
  pages.innerHTML = "";
  for (let i = 1; i <= Math.ceil(users.length / 5); i++) {
    let pageshtml = `<li class="page-item"><a onclick="render(${i})" class="page-link" href="#">${i}</a></li>`;
    pages.innerHTML += pageshtml;
  }
}
setpages();
//render table theo page
function render(page) {
  tableBody.innerHTML = "";
  for (let i = page * 5 - 5; i <= page * 5 - 1 && i < users.length; i++) {
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
render(1);
//delete
function setCurrentId(id) {
  modalHtml.innerText = "";
  currentId = id;
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
  //trả về page 1 sau khi xóa
  render(1);
  setpages();
});
//search
// let searchKey = document.getElementById("search");

// searchKey.addEventListener("submit", function (ev) {
//   function searchByName() {
//     users = [];
//     const searchResult = users.filter((element) =>
//       element.name.includes(searchKey)
//     );
//     users = searchResult;
//   }
//   render(1);
// });
