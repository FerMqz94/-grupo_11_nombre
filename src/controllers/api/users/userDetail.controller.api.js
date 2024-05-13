const db = require('../../../db/models');
const {literal} =require("sequelize")
module.exports  =  async (req,res) => {


    try {
const {id} = req.params;
const userDetail = await db.Users.findByPk(id,{
    attributes:{
        exclude:['password','rol_id'],
       
            include:[[literal("CONCAT('http://localhost:3030/api/users/',avatar)"),"avatar"]]
        
    }
    
});
console.log();
return res.status(200).json({userDetail})

} 

catch (error) {
    res.status(400).send(error.message)
}
}

