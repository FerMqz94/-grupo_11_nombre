// const { loadData, saveData } = require("../../database");
// const bcrypt = require("bcryptjs");
// const { validationResult } = require("express-validator");


// module.exports = (req, res) => {
//   const errors = validationResult(req);

//   if (errors.isEmpty()) {
//     const { email, password, name, username } = req.body;
//     const users = loadData("users");

//     const newUser = {
//       id: !users.length ? 1 : users[users.length - 1].id + 1,
//       name: name?.trim(),
//       username: username?.trim(),
//       email: email?.trim().toLowerCase(),
//       password: bcrypt.hashSync(password?.trim(), 12),
//       rol: "REGULAR",
//       avatar: "default-avatar.jpg",
//     };

//     users.push(newUser);

//     saveData(users, "users");

//     res.redirect("/");
//     return;
//   }

//   res.render("authentication/register", {
//     old: req.body,
//     errors: errors.mapped(),
//   });
// };





const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../db/models");

module.exports = (req, res) => {
  const { email, password, name, username } = req.body;
  const errors = validationResult(req);

  if (errors.isEmpty()) {
  

    db.Users.create({
      // id: !users.length ? 1 : users[users.length - 1].id + 1,
      name: name?.trim(),
      username: username?.trim(),
      email: email?.trim().toLowerCase(),
      password: bcrypt.hashSync(password?.trim(), 12),
      avatar: "default-avatar.jpg",
      rol: id_rol = 1
    })
   
  
    .then(() => {
      res.redirect("/");
    });
   
  }else{

    res.render("authentication/register", {
      old: req.body,
      errors: errors.mapped(),
    })
    .catch((err) => {
      res.send(err.message)
  })

  }

};























