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
          role: "REGULAR",
          avatar:  "default-avatar.jpg"
         
       };

        return userEdit;
      }

      return u;
    });

    
    saveData(usersMap, "users");
    res.redirect("/");
  }
}  // hasta acá la primera parte de la lógica//
 /* else { NO DESCOMENTAR ESTO, PORQUE SÓLO FUNCIONARÁ CUANDO ESTÉ LA
   /* const users = loadData("users");
    const user = users.find((u) => u.id === +id);
    const errorsMapped = errors.mapped();
    res.render(
      "users/perfil-usuario",
      { user, errors: errorsMapped, old: req.body },
   
  );
  } hasta acá tiene que quedar comentado hasta que esté la validación*/
/*};*/

