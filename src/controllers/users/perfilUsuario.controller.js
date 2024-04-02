const { loadData } = require('../../database')
module.exports = (req,res) => {
    
    const { id }  = req.params
    const users = loadData("users")
    const userFind = users.find(u => u.id === +id);
    res.render("./users/perfilUsuario", { user: userFind })
  }

