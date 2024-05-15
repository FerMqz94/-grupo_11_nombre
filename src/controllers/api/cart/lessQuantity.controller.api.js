const { Op, where } = require('sequelize')
const db = require('../../../db/models')
const { getOrder } = require('../../utils')
module.exports = async (req, res) => {
    try {
        /*
        const { id } = req.params
        const [orders, isCreate] = await getOrder(req);

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
                
            },
            // attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
        })



        return res.json(recond)*/
        const { id: id_product } = req.params;

        if (!id_product) throw new Error("El id no fue recibido");

        let [orders, isCreate] = await getOrder(req);

        await db.Orders_Products.create({
            id_order: orders.id,
            id_product
        });

        orders = await orders.reload({
            include: [
                {
                    association: "products",
                    where: { id: id_product },
                    include: [
                        {
                            association: "productSizes",
                            attributes: ['id_size']
                        }
                    ],
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        const product = orders.products.find(product => product.id === parseInt(id_product));
        const productSizes = product ? product.productSizes.map(size => ({ id_size: size.id_size })) : [];

        const size1 = productSizes.length > 0 ? productSizes[0] : null;
        const size2 = productSizes.length > 1 ? productSizes[1] : null;
        const size3 = productSizes.length > 2 ? productSizes[2] : null;
        const size4 = productSizes.length > 3 ? productSizes[3] : null;
        const size5 = productSizes.length > 4 ? productSizes[4] : null;

        return res.json(size5);

        if (recond.quantity > 1) {
            recond.quantity--
            await recond.save();
        }


        res.status(200).json({
            ok: true,
            msg: "cantidad disminuida como se deberia"
        })

    }
    catch (err) {
        res.status(500).json({
            ok: false,
            msg: err.message
        })
    }
}