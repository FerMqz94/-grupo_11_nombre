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
                        id_product: id
                    }
                ]
            }
        })


        let total = 0;
        orders.products.forEach(({ price,
            Orders_Products : { 
                dataValues: { quantity }
             }, }) => {
            total += price * quantity;
        })
        orders.total = total;
        await orders.save()
        // return res.json(recond)
        let cantidad = recond.quantity + 1
        // await recond.save();


        db.Orders_Products.update(
            {
                quantity: cantidad
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
            msg: "cantidad aumentada como se deberia aumentar"
        })

    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}