const { loadData } = require("../../database");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

module.exports = (req, res) => {
  const { email, password, recordame} = req.body;
  const users = loadData("users");
  const errors = validationResult(req);

  const userFind = users.find((u) => u.email === email);

  /*if (!userFind) res.render("./authentication/login");

  const isPasswordValid = bcrypt.compareSync(password, userFind.password);

  if (!isPasswordValid) res.render("./authentication/login");*/

  if(errors.isEmpty()){

      req.session.userLogin = {
      name: userFind.name,
      username: userFind.username,
      role: userFind.role,    
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
