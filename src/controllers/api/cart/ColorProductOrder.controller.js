const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
module.exports = async (req, res) => {
    try {

        const { idColor } = req.params
        let { id: id_product } = req.params;

        if (!idColor || idColor <= 0 || !id_product || id_product <= 0) throw new Error("el id no fue recivido")
        let [orders, isCreate] = await getOrder(req);

        // return res.json(orders)
        // no eliminar!!!!
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
        


        const product = orders.products.find(product => product.id === parseInt(id_product));
        const productColors = product ? product.productColors.map(color => ({ id_color: color.id_color })) : [];

        // return res.json(productColors)
        // console.log
        

        const color1 = productColors.length > 0 ? productColors[0] : -1;
        const color2 = productColors.length > 1 ? productColors[1] : -1;
        const color3 = productColors.length > 2 ? productColors[2] : -1;
        const color4 = productColors.length > 3 ? productColors[3] : -1;
        const color5 = productColors.length > 4 ? productColors[4] : -1;

        const color6 = productColors.length > 5 ? productColors[5] : -1;
        const color7 = productColors.length > 6 ? productColors[6] : -1;
        const color8 = productColors.length > 7 ? productColors[7] : -1;
        const color9 = productColors.length > 8 ? productColors[8] : -1;
        const color10 = productColors.length > 9 ? productColors[9] : -1;

        const color11 = productColors.length > 10 ? productColors[10] : -1;
        const color12 = productColors.length > 11 ? productColors[11] : -1;
        const color13 = productColors.length > 12 ? productColors[12] : -1;
        const color14 = productColors.length > 13 ? productColors[13] : -1;
        const color15 = productColors.length > 14 ? productColors[14] : -1;

        // return res.json(color1)

        let Numcolor1 = parseInt(color1["id_color"])
        let Numcolor2 = parseInt(color2["id_color"])
        let Numcolor3 = parseInt(color3["id_color"])
        let Numcolor4 = parseInt(color4["id_color"])
        let Numcolor5 = parseInt(color5["id_color"])

        let Numcolor6 = parseInt(color6["id_color"])
        let Numcolor7 = parseInt(color7["id_color"])
        let Numcolor8 = parseInt(color8["id_color"])
        let Numcolor9 = parseInt(color9["id_color"])
        let Numcolor10 = parseInt(color10["id_color"])

        let Numcolor11 = parseInt(color11["id_color"])
        let Numcolor12 = parseInt(color12["id_color"])
        let Numcolor13 = parseInt(color13["id_color"])
        let Numcolor14 = parseInt(color14["id_color"])
        let Numcolor15 = parseInt(color15["id_color"])

        let parseIdColor = parseInt(idColor)

        // return res.json(Numcolor1)


        if (parseIdColor === Numcolor1 ||
            parseIdColor === Numcolor2 ||
            parseIdColor === Numcolor3 ||
            parseIdColor === Numcolor4 ||
            parseIdColor === Numcolor5 ||

            parseIdColor === Numcolor6 ||
            parseIdColor === Numcolor7 ||
            parseIdColor === Numcolor8 ||
            parseIdColor === Numcolor9 ||
            parseIdColor === Numcolor10 ||
            parseIdColor === Numcolor11 ||
            parseIdColor === Numcolor12 ||
            parseIdColor === Numcolor13 || 
            parseIdColor === Numcolor14 ||
            parseIdColor === Numcolor15 ) { //throw new Error("el producto no tiene ese talle disponible")

            // return res.json(idSizeConparation)
            const { id } = req.params

            const recond = await db.Orders_Products.update(
                {
                    id_color: parseIdColor
                },
                {
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

            // console.log()
            // console.log(id)

            // console.log(orders.id)

            // recond.id_color = parseIdColor

    //    console.log(recond.id_color)     
            // await recond.save();



            res.status(200).json({
                ok: true,
                msg: "color seleccionado con exito"
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