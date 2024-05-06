const adminValidation = (req, res, next)=>{
    if(req.session.user && req.session.user.id_rol == 2){
        next();
    }else{
        res.redirect("/")
    }
    
}

module.exports = adminValidation;