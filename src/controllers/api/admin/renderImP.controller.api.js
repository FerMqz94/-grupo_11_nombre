const path =require("path")
const fs = require('fs')
const db = require("../../../db/models")


module.exports = (req, res) => {
    const { image } = req.params

    try {
        
        res.sendFile(path.join(__dirname,"../../../../public/images/products/" + image))
    } catch (error) {
       console.log(error); 
    }


}





/*const path =require("path")
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
}*/