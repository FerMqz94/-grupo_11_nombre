const path =require("path")
const fs = require('fs')
const db = require("../../../db/models")

module.exports = (req, res) => {
    const { image } = req.params

    
   
    db.Images.findOne({
        where: {
            name: image
        }
    })
    .then(({name}) => {
         res.render("./admin/renderImgApi", {name})
    })
    .catch((err) => {
        res.status(500).json({
          ok: false,
          msg: err.message,
        });
    });
}