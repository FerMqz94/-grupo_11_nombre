const { getOrder } = require('../../utils');

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
                        througth: {
                            attrubutes: ["quantity"]
                        }
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