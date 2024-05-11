module.exports = (req,res) => {

const {userDetail}=require("./userDetail.controller.api")

userDetail: async(req,res)=>{
    try {
const {id} = req.params;
const userDetail = await db.Users.findByPk(id,{
    attributes:{
        exclude:['password','rol_id','avatar',]
    }
    
});

return res.status(200).json({userDetail,imageURL:` http://localhost:3030/users/avatar/${id}`})

} 

catch (error) {
    res.status(400).send(error.message)
}
}
}
