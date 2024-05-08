const { Op, where } = require('sequelize')
const db = require('../../../db/models')

module.exports = async (req, res) => {
    try {
        const [ orders, isCreate ] = await db.Orders.findOrCreate({
            where: {
                [Op.and]: [
                    {
                        id_user: 1 //req.session?.userLogin?.id,
                    },
                    {
                        state: "pending",
                    }
                ]
            },
            defaults : {
                id_user: 1 // req.session?.userLogin?.id
            },
            include: ["products"]
        });

        const statusCode = isCreate ? 201 : 200; 
        res.status(statusCode).json({
            ok: true,
            isCreate,
            data: orders
            //.reload({ include :["products"]})
        })
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message,
        })
    }
    //res.status(500).json({ok: false,msg: "ok"})
}