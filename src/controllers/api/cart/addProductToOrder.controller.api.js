const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
const { getTotalOrder } = require('../../utils/getTotalOrder')

module.exports = async (req, res) => {
    try {
        const { id: id_product } = req.params

        if (!id_product) throw new Error("el id no fue recivido")

        let [orders, isCreate] = await getOrder(req)

        await db.Orders_Products.create({
            id_order: orders.id,
            id_product
        })

        orders = await orders.reload({
            include: [
                {
                    association: "products",
                    include: [{
                                
                        association: "productSizes",
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'id_product'] }
                    }],  
                    through: {
                        attributes: ["quantity", "id_color", "id_size"]
                    },
                }]
        })



        // let total = 0;
        // orders.products.forEach(({ price,
        //     Orders_Products : { 
        //         dataValues: { quantity }
        //      }, }) => {
        //     total += price * quantity;
        // })
        // return res.json(orders)

        const total = getTotalOrder(orders.products);
        orders.total = total;
        await orders.save()


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