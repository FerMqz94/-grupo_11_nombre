const db = require("../../db/models");

module.exports = async (req,res) => {
    // res.redirect("/");
    // console.log(req.session.passport)
    try {
        const {user: {_json, provider}} = req.session.passport

        const {sub, name, email, picture, displayName, given_name} = _json;

        console.log(sub)

        const [users, _] = await db.Users.findOrCreate({
            where: {
                socialId: sub,
            },
            defaults: {
                socialId: sub,
                provider,
                name: given_name,
                username: displayName,
                email,
                avatar: picture,
            },
        })

        // console.log("User found or created:", users);
        
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
