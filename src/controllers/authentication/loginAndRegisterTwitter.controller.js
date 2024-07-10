const db = require("../../db/models");

module.exports = async (req,res) => {
    console.log(req.session.passport)


    try {
    // console.log("añgp")
    // console.log("añgp")
    // console.log("añgp")
    // console.log("añgp")

        /**/
        const {user: {_json, provider}} = req.session.passport

        const { name, email, screen_name, profile_image_url} = _json;

        console.log(provider)

        const [users, _] = await db.Users.findOrCreate({
            where: {
                socialId: provider,
            },
            defaults: {
                socialId: provider,
                provider,
                name: name,
                username: screen_name,
                email,
                avatar: profile_image_url,
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
