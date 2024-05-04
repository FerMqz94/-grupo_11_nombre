const db = require('../../db/models');

module.exports = (req, res) => {

    db.Users.destroy({
        where: {      
            id: id_user ? id_user : req.session?.userLogin?.id
        }
    })
    
         .then(() => {
             res.redirect("/")
         })
        .catch((err) => {
            res.send(err.message)
        })
}