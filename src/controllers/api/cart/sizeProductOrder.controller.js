const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
module.exports = async (req, res) => {
    try {

        const { id } = req.params
        const [orders, isCreate] = await getOrder(req);
        
        const sizes_product_select = await orders.reload({
            include: [
                {
                    association: "products",
                   
                        include: [{
                            
                            association: "productSizes",
                            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'id_product'] }
                        }],    

                    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
                }]
        })


        // attributes: ['id_size']
        const id_size_cliente = {
            id_size: id ? id : null
        }
        return res.json(sizes_product_select)

        // if (id_size_cliente && sizes_products) throw new Error("el id no fue recivido")

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
            }
        })
        return res.json(recond)

        // if (recond. > 1) {
        //     recond.
        //     await recond.save();
        // }


        // res.status(200).json({
        //     ok: true,
        //     msg: "talle " + talle + "seleccionado"
        // })

    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}