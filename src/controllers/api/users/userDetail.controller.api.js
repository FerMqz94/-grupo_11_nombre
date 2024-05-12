const db = require('../../../db/models');
module.exports  =  async (req,res) => {


    try {
const {id} = req.params;
const userDetail = await db.Users.findByPk(id,{
    attributes:{
        exclude:['password','rol_id','avatar',]
    }
    
});

return res.status(200).json({userDetail})

} 

catch (error) {
    res.status(400).send(error.message)
}
}

