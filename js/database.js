let curId = null;
let usersDB = [
  {
    id: 1,
    username: "Bret",
    email: "Sicere@april.biz",
    password: "sincerE123",
    role: "ADMIN",
    status: true,
    birthday: "1995-31-01",
  },
  {
    id: 2,
    username: "Antonette",
    email: "Shanna@melisssa.tv",
    password: "Shanna123",
    role: "USER",
    status: false,
    birthday: "1994-02-01",
  },
  {
    id: 3,
    username: "Ervin Howell",
    email: "evhowell@vipz.vn",
    password: "evhoWell1",
    role: "USER",
    status: true,
    birthday: "1985-25-03",
  },
  {
    id: 4,
    username: "Lena Lee",
    email: "lenalee21@zmail.com",
    password: "leeLena1",
    role: "USER",
    status: false,
    birthday: "1999-01-12",
  },
  {
    id: 5,
    username: "Edward Newgate",
    email: "whitebeard@yahee.vliz",
    password: "Acewasdead123",
    role: "ADMIN",
    status: true,
    birthday: "1970-14-12",
  },
];
localStorage.usersDatabase = JSON.stringify(usersDB);
localStorage.setId = JSON.stringify(curId);
