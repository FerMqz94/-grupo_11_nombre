const { loadData } = require("../../database");
const bcrypt = require("bcryptjs");

module.exports = (req, res) => {
  const { email, password, recordame} = req.body;
  const users = loadData("users");

  const userFind = users.find((u) => u.email === email);

  if (!userFind) res.render("./authentication/login");

  const isPasswordValid = bcrypt.compareSync(password, userFind.password);

  if (!isPasswordValid) res.render("./authentication/login");

  req.session.userLogin = {
    name: userFind.name,
    username: userFind.username,
    category: userFind.category,    
  };

  if(recordame ) res.cookie("userLogin", req.session.userLogin, {maxAge: 6000 * 30 * 100})
  
  res.redirect("/")
};
