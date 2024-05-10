const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')



module.exports = async (req, res) => {
    try {
        
       const {id: id_product} = req.params

       if(!id_product) throw new Error("el id no fue recivido")
        
       const [orders, isCreate] = await getOrder(req)

        await db.Orders_Products.destroy({
            where:{
            id_order: orders.id,
            id_product
        }
        })


        res.status(200).json({
            ok: true,
            msg: "producto eliminado como se deberia" 
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