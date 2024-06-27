const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
const { getTotalOrder } = require('../../utils/getTotalOrder')
module.exports = async (req, res) => {
    try {
        const { id } = req.params
        let [orders, isCreate] = await getOrder(req)

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


        orders = await orders.reload({
            include: [
                {
                    association: "products",
                    through: {
                        attributes: ["quantity", "id_color", "id_size"]
                    },
                }]
        })
        
        let total = getTotalOrder(orders.products)
        orders.total = total;
        await orders.save()


        let cantidad = recond.quantity > 1 ? recond.quantity - 1 : recond.quantity

  

        await db.Orders_Products.update(
            {
                quantity: cantidad,
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