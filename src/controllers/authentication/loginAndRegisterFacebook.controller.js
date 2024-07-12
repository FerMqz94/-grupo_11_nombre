const db = require("../../db/models");

module.exports = async (req,res) => {
    try {
        const {user: {_json, provider}} = req.session.passport

        const { name, email} = _json;
        const [users, _] = await db.Users.findOrCreate({
            where: {
                socialId: provider,
            },
            defaults: {
                socialId: provider,
                provider,
                name: name,
                username: name,
                email: email || "email@gmail.com",
                avatar:  "default-avatar.jpg",
            },
        })

        req.session.userLogin = {
            id: users.id,
            name: users.name,
            username: users.username,
            avatar: users.avatar,
            rol: "REGULAR",
        }

        res.cookie("userLogin", req.session.userLogin, { maxAge: 6000 * 30 * 100 });

        res.redirect('/')


    }
    catch (error) {
        res.json(error);
    }
}