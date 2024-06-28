const db = require("../../../db/models")
const {literal, Association} =require("sequelize")

module.exports = (req,res) => {
    
  db.Users.findAndCountAll({
    include: ['rols','favorites','orders'],
    attributes:{
      exclude: ["createdAt","updatedAt", "password"],
      include:[[literal("CONCAT('http://localhost:3030/api/users/', avatar)"),"avatar"]]
        
  
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