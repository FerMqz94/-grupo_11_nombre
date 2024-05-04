const db = require('../../db/models');

module.exports = (req, res) => {

    db.Users.destroy({
        where: {
            id: req.params.id
        }
    })
    
         .then(() => {
             res.redirect("/")
         })
        .catch((err) => {
            res.send(err.message)
        })
}