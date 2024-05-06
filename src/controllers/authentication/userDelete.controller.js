const db = require('../../db/models');

module.exports = (req, res) => {
    const {id_user} = req.query

    db.Users.destroy({
        where: {     
            // id_user: req.session.userLogin 
            id: id_user ? id_user : req.session?.userLogin?.id

        }
    })

    
    req.session.destroy();
    res.cookie("userLogin", "", { maxAge: -1 });
        //  .then(() => {
             res.redirect("/")
        //  })
        .catch((err) => {
            res.send(err.message)
        })
}