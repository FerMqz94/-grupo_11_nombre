const db = require("../../../db/models")

module.exports = (req,res) => {
    const {id} = req.params
    const { name, username, email, password, passwordConfirm } = req.body;

    db.Product.update({
        name: name.trim(),
        username: username.trim(),
        email: email.trim(),
        password: password ? bcrypt.hashSync(password, 10) : password,
        // avatar: "default-avatar.jpg", // revisar esto 
        id_rol: 1

    },{
        where: {
            id
        }
    })
}