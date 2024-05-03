const { loadData } = require("../../database");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const { email, password, recordame} = req.body;
  const users = loadData("users");
  const errors = validationResult(req);

  const userFind = users.find((u) => u.email === email);

  if(errors.isEmpty()){

      req.session.userLogin = {
      id: userFind.id, 
      name: userFind.name,
      username: userFind.username,
      rol: userFind.rol,    
      avatar: userFind.avatar
  
      };

       if(recordame ) res.cookie("userLogin", req.session.userLogin, {maxAge: 6000 * 30 * 100})
  
       res.redirect("/")

  } else {

    res.render("./authentication/login", {
      old: req.body,
      errors: errors.mapped(),
    });

  }
};
