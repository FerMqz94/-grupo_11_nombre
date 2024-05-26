const { getOrder } = require('../../utils');
const getUrlOrigin = require('../../utils/getUrlOrigin');
const { literal } = require("sequelize");
module.exports = async (req, res) => {
    try {
        const [orders, isCreate] = await getOrder(req)

        const statusCode = isCreate ? 201 : 200;
        res.status(statusCode).json({
            ok: true,
            isCreate,
            data: await orders.reload({
                include: [
                    {
                        association: "products",
                 
                        // include: [{
                        //     association: "images",
                        //     attributes: {
                        //         include:
                        //             [[literal(`CONCAT('${getUrlOrigin(req)}/api/producto-detalle/', +)`), "+",]],
                        //     },
                        // }],
                        through: {
                            attributes: ["quantity", "id_color", "id_size"]
                        },
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
                    }]
            })
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