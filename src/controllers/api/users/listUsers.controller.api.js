const db = require("../../../db/models")

module.exports = (req,res) => {

  db.Users.findAll({
    // include: ['rols','favorites','orders']        
  })
  .then((users) => {
      res.status(200).json(users)
  })

}