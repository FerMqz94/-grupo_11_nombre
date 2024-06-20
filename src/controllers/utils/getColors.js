
const { Op, where } = require('sequelize')
const db = require('../../db/models')
module.exports = async (req) => {
    const colors = await db.colors.findAll()
    return colors
}
