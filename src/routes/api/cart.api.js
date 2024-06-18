
const router = require("express").Router()
const { getOrder, addProductToOrder, removeProductToOrder, moreQuantity,lessQuantity, canceledOrder, completedOrder, colorProductOrder, ziseProductOrder, clearProducts } = require("../../controllers/api/cart")


router.get("/", getOrder);

router.patch("/add/:id", addProductToOrder);

router.patch("/remove/:id", removeProductToOrder);
// clearProducts
router.patch("/removeAll", clearProducts);

router.patch("/more/:id", moreQuantity);

router.patch("/less/:id", lessQuantity)

router.patch("/canceled", canceledOrder)

router.patch("/completed", completedOrder)

router.patch("/numero_orden_product/:id/color/:idColor", colorProductOrder);

router.patch("/numero_orden_product/:id/size/:idSize", ziseProductOrder)

module.exports = router;
