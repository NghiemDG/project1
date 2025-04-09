let curId = null;
let usersDB = [
  {
    id: 1,
    username: "Bret",
    email: "Sicere@april.biz",
    password: "sincerE123",
    role: "ADMIN",
    status: true,
    birthday: "31/01/1995",
  },
  {
    id: 2,
    username: "Antonette",
    email: "Shanna@melisssa.tv",
    password: "Shanna123",
    role: "USER",
    status: false,
    birthday: "02/01/1994",
  },
  {
    id: 3,
    username: "Ervin Howell",
    email: "evhowell@vipz.vn",
    password: "evhoWell1",
    role: "USER",
    status: true,
    birthday: "25/10/1985",
  },
  {
    id: 4,
    username: "Lena Lee",
    email: "lenalee21@zmail.com",
    password: "leeLena1",
    role: "USER",
    status: false,
    birthday: "20/07/1999",
  },
  {
    id: 5,
    username: "Edward Newgate",
    email: "whitebeard@yahee.vliz",
    password: "Acewasdead123",
    role: "ADMIN",
    status: true,
    birthday: "01/10/1970",
  },
];
localStorage.usersDatabase = JSON.stringify(usersDB);
localStorage.setId = JSON.stringify(curId);
