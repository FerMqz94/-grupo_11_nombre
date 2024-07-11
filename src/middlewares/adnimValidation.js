const adminValidation = (req, res, next)=>{
    if(req.session.userLogin && req.session.userLogin.id_rol == 2){
        next();
    }else{
        res.redirect("/")
    }
    
}
const userLogin = (req, res, next)=>{
    if(req.session.userLogin){
        next();
    }else{
        res.redirect("/autenticacion/iniciar")
    }
}

module.exports = {adminValidation,userLogin};