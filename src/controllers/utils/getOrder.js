const { Op, where } = require('sequelize')
const db = require('../../db/models')
module.exports = async (req) => {
    const dataOrder = await db.Orders.findOrCreate({
        where: {
            [Op.and]: [
                {
                    id_user: req.query.id_user,
                },
                {
                    state: "pending",
                }
            ]
        },
        defaults: {
            id_user:  req.query.id_user
        },
        include: [ 
            {
            association : "products",
            through: {
                attributes: ["quantity"]
            }
        }]
    })
    return dataOrder
}

