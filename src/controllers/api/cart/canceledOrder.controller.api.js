const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')

module.exports = async (req, res) => {
    try {

        const [orders, isCreate] = await getOrder(req)

        if(!isCreate) {
            orders.state = "canceled";
            await orders.save();
        }
        res.status(200).json({
            ok: true,
            msg: "orden cancelada como se deberia"
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