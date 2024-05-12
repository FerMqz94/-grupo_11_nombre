const db = require("../../../db/models")

module.exports = (req,res) => {
    
  db.Users.findAndCountAll({
    include: ['rols','favorites','orders'],
    attributes:{
      exclude: ["createdAt","updatedAt"]
    }          
  })
  .then((users) => {
    res.status(200).json({
      ok: true,
      data: users
    })
      
  }).catch(err => {
    res.status(500).json({
       ok: false, 
       msg: err.message })
  })

}