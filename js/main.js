let users = JSON.parse(localStorage.usersDatabase);
let tableBody = document.getElementById("tableBody");
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
                  <button class="border-0 bg-white">
                    <i
                      class="fa-solid fa-trash-can"
                      style="color: #ee2b2b"
                    ></i></button
                  ><button class="border-0 bg-white">
                    <i class="fa-solid fa-pen" style="color: #ff8e24"></i>
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
          <button class="border-0 bg-white">
            <i
              class="fa-solid fa-trash-can"
              style="color: #ee2b2b"
            ></i></button
          ><button class="border-0 bg-white">
            <i class="fa-solid fa-pen" style="color: #ff8e24"></i>
          </button>
        </td>
      </tr>`;
      tableBody.innerHTML += html;
    }
  }
  upData();
}
render();
