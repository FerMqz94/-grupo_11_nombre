const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
module.exports = async (req, res) => {
    try {

        const { idSize } = req.params
        if (!idSize) throw new Error("el id no fue recivido")
        let [orders, isCreate] = await getOrder(req);

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
        let { id: id_product } = req.params;

        // if (!id_product) throw new Error("El id no fue recibido");

        // let [orders, isCreate] = await getOrder(req);

        // await db.Orders_Products.create({
        //     id_order: orders.id,
        //     id_product
        // });

        // orders = await orders.reload({
        //     include: [
        //         {
        //             association: "products",
        //             where: { id: id_product },
        //             include: [
        //                 {
        //                     association: "productSizes",
        //                     attributes: ['id_size']
        //                 }
        //             ],
        //             through: {
        //                 attributes: []
        //             }
        //         }
        //     ]
        // });

        const product = orders.products.find(product => product.id === parseInt(id_product));
        const productSizes = product ? product.productSizes.map(size => ({ id_size: size.id_size })) : [];

        const size1 = productSizes.length > 0 ? productSizes[0] : -1;
        const size2 = productSizes.length > 1 ? productSizes[1] : -1;
        const size3 = productSizes.length > 2 ? productSizes[2] : -1;
        const size4 = productSizes.length > 3 ? productSizes[3] : -1;
        const size5 = productSizes.length > 4 ? productSizes[4] : -1;

        // console.log(size1)
        // console.log(size2)
        // console.log(size3)
        // console.log(size4)
        // console.log(size5)

        let idSize1 = parseInt(size1["id_size"])
        let idSize2 = parseInt(size2["id_size"])
        let idSize3 = parseInt(size3["id_size"])
        let idSize4 = parseInt(size4["id_size"])
        let idSize5 = parseInt(size5["id_size"])

        // console.log(idSize3)
        // console.log("dato " )

        const idSizeConparation = `\x1b[33m${idSize}\x1b[0m`

        const idSize1C = `\x1b[33m${idSize1}\x1b[0m`
        const idSize2C = `\x1b[33m${idSize2}\x1b[0m`
        const idSize3C = `\x1b[33m${idSize3}\x1b[0m`
        const idSize4C = `\x1b[33m${idSize4}\x1b[0m`
        const idSize5C = `\x1b[33m${idSize5}\x1b[0m`

        // console.log(casa)

        // const id_size_cliente = {
        //     id_size: idSize ? idSize : null
        // }

        if (idSizeConparation === idSize1C) {
            console.log("si funciona")
        } else {
            console.log("no funciona")
        }
        if (idSizeConparation === idSize1C || idSizeConparation === idSize2C || idSizeConparation === idSize3C || idSizeConparation === idSize4C || idSizeConparation === idSize5C) { //throw new Error("el producto no tiene ese talle disponible")

            // return res.json(idSizeConparation)
            const { id } = req.params

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
            // return res.json(recond)


            recond.id_size = idSize
            await recond.save();

            res.status(200).json({
                ok: true,
                msg: "talle " + idSize + " seleccionado"
            })
        } else {
            return res.json("el producto no tiene esa talla")
        }
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}