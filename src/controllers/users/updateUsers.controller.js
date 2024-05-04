const { validationResult } = require("express-validator");
const { saveData, loadData } = require("../../database");
const bcrypt = require('bcryptjs')

module.exports = (req, res) => {
  const errors = validationResult(req);
  const { id } = req.params;
  const users = loadData("users");

  if (errors.isEmpty()) {
    const { name, username, email, password, passwordConfirm } = req.body;

    const userFind = users.find(u => u.id === +id);

    const usersMap = users.map((u) => {
      if (u.id === +id) {
        const userEdit = {
          ...u,
          name: name.trim(),
          username: username.trim(),
          email: email.trim(),
          password: password? bcrypt.hashSync(password, 10) : userFind.password,
          rol: "REGULAR",
          avatar:  "default-avatar.jpg"
         
       };

        return userEdit;
      } 

      return u;
    });
    saveData(usersMap, "users");
    res.redirect("/");
  } else {
    const errorsArray = errors.array();
    res.status(422).json({ errors: errorsArray });
  }
};

