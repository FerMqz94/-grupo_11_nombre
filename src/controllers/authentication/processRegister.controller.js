const { loadData, saveData } = require("../../database");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
  const { name, username, email, password } = req.body;
  const users = loadData("users");
  const newUser = {
    id: !users.length ? 1 : users[users.length - 1].id + 1,
    name: name?.trim(),
    username: username?.trim(),
    email: email?.trim(),
    password: bcrypt.hashSync(password?.trim(), 10),    
    category: "user"
  };

  users.push(newUser);

  saveData(users, "users");

  res.redirect("/");
};
