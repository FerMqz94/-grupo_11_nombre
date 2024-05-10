
const { Op, where } = require('sequelize')
const db = require('../../db/models')
module.exports = async (req) => {
    const dataOrder = await db.Orders.findAll({
        where: {
            [Op.and]: [
                {
                    id_user: req.query.id_user,
                },
                {
                    state: req.query.state || "pending",
                }
            ]
        },

        include: {
            association : "products",
            througth: {
                attrubutes: ["quantity"]
            }
        }
    })
    return dataOrder
}


// es por si se quiere usar en la vista admin cuando queres ver todos los productos y es lo que dijo el profe asi que no hagas mas preguntas por favor y este es un texto que deja claro mi primera parte del decenso a la locura (se recomienda borrar este comentario cuando no sea util)

