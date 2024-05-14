const { getOrder } = require('../../utils');
const getUrlOrigin  = require('../../utils/getUrlOrigin');
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
                       
                            include: [{
                                
                                association: "productSizes",
                                attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'id_product'] }

                            }],    
                            // include: [{
                            //     association: "productColors",
                            //     attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'id_product'] }
                            // }],
                        // include: [{
                        //     association: "images",
                        //     attributes:{ 
                        //     include: [[literal(`CONCAT('${getUrlOrigin(req)}/api/products/', file )`), "file",]]
                        //     }
                        // }],
                        through: {
                            attributes: ["quantity"]
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