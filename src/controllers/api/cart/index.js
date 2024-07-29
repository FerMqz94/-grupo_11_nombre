module.exports = {
    getOrder: require("./getOrder.controller.api"),
    addProductToOrder: require("./addProductToOrder.controller.api"),
    removeProductToOrder: require("./removeProductToOrder.controller.api"),
    moreQuantity: require("./moreQuantity.controller.api"),
    lessQuantity: require("./lessQuantity.controller.api"),
    canceledOrder: require("./canceledOrder.controller.api"),
    completedOrder: require("./completedOrder.controller.api"),
    colorProductOrder: require("./ColorProductOrder.controller"),
    ziseProductOrder: require("./sizeProductOrder.controller"),
    clearProducts: require("./clearProducts.controller"),
    changeQuantity: require("./changeQuantity.controller.api")
}