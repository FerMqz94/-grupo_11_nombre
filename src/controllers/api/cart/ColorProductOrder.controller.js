const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
module.exports = async (req, res) => {
    try {

        const { idColor } = req.params
        if (!idColor || idColor <= 0) throw new Error("el id no fue recivido")
        let [orders, isCreate] = await getOrder(req);

        const sizes_product_select = await orders.reload({
            include: [
                {
                    association: "products",

                    include: [{

                        association: "productColors",
                        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'id_product'] }
                    }],

                    attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
                }]
        })
        let { id: id_product } = req.params;


        const product = orders.products.find(product => product.id === parseInt(id_product));
        const productColors = product ? product.productColors.map(color => ({ id_color: color.id_color })) : [];

        // return res.json(productColors)
        

        const color1 = productColors.length > 0 ? productColors[0] : -1;
        const color2 = productColors.length > 1 ? productColors[1] : -1;
        const color3 = productColors.length > 2 ? productColors[2] : -1;
        const color4 = productColors.length > 3 ? productColors[3] : -1;
        const color5 = productColors.length > 4 ? productColors[4] : -1;


        // return res.json(color1)



        let Numcolor1 = parseInt(color1["id_color"])
        let Numcolor2 = parseInt(color2["id_color"])
        let Numcolor3 = parseInt(color3["id_color"])
        let Numcolor4 = parseInt(color4["id_color"])
        let Numcolor5 = parseInt(color5["id_color"])

        let parseIdColor = parseInt(idColor)

        // return res.json(Numcolor1)




        // console.log(casa)

        // const id_size_cliente = {
        //     id_size: idSize ? idSize : null
        // }

        if (parseIdColor === Numcolor1) {
            console.log("si funciona")
        } else {
            console.log("no funciona")
        }
        if (parseIdColor === Numcolor1 || parseIdColor === Numcolor2 || parseIdColor === Numcolor3 || parseIdColor === Numcolor4 || parseIdColor === Numcolor5) { //throw new Error("el producto no tiene ese talle disponible")

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


            recond.id_color = idColor
            await recond.save();

            res.status(200).json({
                ok: true,
                msg: "color seleccionado con existo"
            })
        } else {
            return res.json("el producto no tiene esa color")
        }
    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}