const db = require("../../../db/models");

module.exports = async (req, res) => {
    try {
        
        const colors = await db.Colors.findAll()

        return res.status(200).json({
            data: colors
        });
    } catch (error) {
        res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
}