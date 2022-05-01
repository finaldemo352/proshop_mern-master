import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Anurag Sharma",
    email: "anurag@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Neelesh Ranjan",
    email: "neeleshsir@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Naitik Sharma",
    email: "naitik@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ashok Sharma",
    email: "ashok@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Aakarsh Verna",
    email: "aakarsh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
