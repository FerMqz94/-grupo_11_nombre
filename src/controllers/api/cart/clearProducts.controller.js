const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')



module.exports = async (req, res) => {
    const [orders] = await getOrder(req)
  
    try {
        await db.Orders_Products.destroy({
            where:{
            id_order: orders.id,
        }
        })

        orders.total = 0
        await orders.save()

   
        res.status(200).json({
            ok: true,
            msg: "productos de la orden eliminados como se deberia"
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