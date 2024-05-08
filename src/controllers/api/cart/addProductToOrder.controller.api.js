const { Op, where } = require('sequelize')
const db = require('../../../db/models')

module.exports = async (req, res) => {
    try {
        const {id: id_product} = req.params

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

        await db.Orders_Products.create({
            id_order: orders.id,
            id_product
        })


        res.status(201).json({
            ok: true,
            msg: "producto agregado como se deberia" 
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