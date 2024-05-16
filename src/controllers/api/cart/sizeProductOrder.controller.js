const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
module.exports = async (req, res) => {
    try {

        const { idSize } = req.params
        if (!idSize || idSize <= 0) throw new Error("el id no fue recivido")
        let [orders, isCreate] = await getOrder(req);

        // este codigo de abajo sirve aun que no lo paresca y si lo borras te aniquilo
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

        let parseIdSize = parseInt(idSize)


        // if (algo === idSize5) {
        //     return res.json("toma")
        // } else {
        //     return res.json("no sirvio")
        // }
        // return res.json(idSize3)
        


        // console.log(idSize3)
        // console.log("dato " )

        // return res.json(idSize2C)
        // console.log(casa)

        // const id_size_cliente = {
        //     id_size: idSize ? idSize : null
        // }


        // return res.json(idSize1)

        if (parseIdSize === idSize1 || parseIdSize === idSize2 || parseIdSize === idSize3 || parseIdSize === idSize4 || parseIdSize === idSize5) { //throw new Error("el producto no tiene ese talle disponible")

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


            recond.id_size++
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