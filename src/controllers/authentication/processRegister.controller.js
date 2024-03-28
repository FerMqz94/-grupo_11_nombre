const { loadData, saveData } = require("../../database");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

// module.exports = (req, res) => {
//   const { name, username, email, password } = req.body;
//   const users = loadData("users");
//   const newUser = {
//     id: !users.length ? 1 : users[users.length - 1].id + 1,
//     name: name?.trim(),
//     username: username?.trim(),
//     email: email?.trim(),
//     password: bcrypt.hashSync(password?.trim(), 10),    
//     category: "user"
//   };

//   users.push(newUser);

//   saveData(users, "users");

//   res.redirect("/");
// };
module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { email, password } = req.body;
    const users = loadData("users");

    const newUser = {
      id: !users.length ? 1 : users[users.length - 1].id + 1,
      name: "",
      surname: "",
      email: email?.trim().toLowerCase(),
      // email: email ? email.trim() : ""
      password: hashSync(password?.trim(), 12),
      role: "REGULAR",
      avatar: "default-avatar.jpg",
    };

    users.push(newUser);

    saveData(users, "users");

    res.redirect("/");
    return;
  }

  res.render("authentication/register", {
    old: req.body,
    errors: errors.mapped(),
  });
};