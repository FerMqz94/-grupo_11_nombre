const { op, where } = require('sequelize')
const db = require('../../../db/models')

module.exports = async (req, res) => {
    try {
        const { order, isCreate } = await db.Orders.findOrdCreate({
            where: {
                [op.and]: [
                    {
                        id_user: 1 //req.session?userLogin?.id,
                    },
                    {
                        state: "pending",
                    }
                ]
            },
            default : {
                id_user: 1 // req.session?userLogin?.id
            }
        });

        const statusCode = isCreate ? 2001 : 200; 
        res.tatus(statusCode).json({
            ok: true,
            data: order
        })
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.sensage,
        })
    }
}