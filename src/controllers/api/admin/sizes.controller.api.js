const db = require("../../../db/models");

module.exports = async (req, res) => {
    try {
        
        const sizes = await db.Sizes.findAll()

        return res.status(200).json({
            data: sizes
        });
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
}