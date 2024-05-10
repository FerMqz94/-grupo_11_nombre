// const { loadData } = require("../../database");
// const bcrypt = require("bcryptjs");
// const { validationResult } = require("express-validator");

// module.exports = (req, res) => {
//   const { email, password, recordame} = req.body;
//   const users = loadData("users");
//   const errors = validationResult(req);

//   const userFind = users.find((u) => u.email === email);

//   if(errors.isEmpty()){

//       req.session.userLogin = {
//       id: userFind.id, 
//       name: userFind.name,
//       username: userFind.username,
//       rol: userFind.rol,    
//       avatar: userFind.avatar
  
//       };

//        if(recordame ) res.cookie("userLogin", req.session.userLogin, {maxAge: 6000 * 30 * 100})
  
//        res.redirect("/")

//   } else {

//     res.render("./authentication/login", {
//       old: req.body,
//       errors: errors.mapped(),
//     });

//   }
// };

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../db/models");

module.exports = (req, res) => {
  const { email, password, recordame } = req.body;
  // const users = loadData("users");

  // const userFind = users.find((u) => u.email === email);
  const errors = validationResult(req);
  if(errors.isEmpty()){
  db.Users.findOne({
    where: {
      email,
    },
    
    include:["rols"]
  }).then((user) => {
    req.session.userLogin = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      avatar: user.avatar,
      id_rol: user.id_rol.name,
    };
  
    if(recordame ){
      res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 });
    } 
    res.redirect("/");

    console.log(user);
  }
  )
  .catch((err) => {
    res.send(err.message)
})
      }else{

          res.render("./authentication/login", {
            old: req.body,
           errors: errors.mapped(),
        })
    
      }
};
