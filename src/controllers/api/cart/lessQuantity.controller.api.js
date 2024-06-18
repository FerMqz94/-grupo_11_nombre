const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
module.exports = async (req, res) => {
    try {
        const { id } = req.params
        const [orders, isCreate] = await getOrder(req);

        const recond = await db.Orders_Products.findOne({
            where: {
                [Op.and]: [
                    {
                        id_order: orders.id,
                    },
                    {
                        id_product: id,
                    }
                ]
                
            },
        })


let algo = recond.quantity > 1 ? recond.quantity - 1 : recond.quantity

        // return res.json(recond)
        // if (recond.quantity > 1) {
        //     algo = recond.quantity--
        //     // await recond.save();
        //     await algo  
        // }
        // return res.json(algo)

        db.Orders_Products.update(
            {
                quantity: algo
            },
            {
            where: {
                [Op.and]: [
                    {
                        id_order: orders.id,
                    },
                    {
                        id_product: id,
                    }
                ]
            }
        })


        res.status(200).json({
            ok: true,
            msg: "cantidad disminuida como se deberia"
        })

    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}