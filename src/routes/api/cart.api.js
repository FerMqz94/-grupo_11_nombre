const router = require("express").Router()
const { getOrder, addProductToOrder, removeProductToOrder, moreQuantity,lessQuantity, canceledOrder, completedOrder, colorProductOrder, ziseProductOrder, clearProducts, changeQuantity } = require("../../controllers/api/cart")


router.get("/", getOrder);

router.patch("/add/:id", addProductToOrder);

router.patch("/remove/:id", removeProductToOrder);

router.patch("/removeAll", clearProducts);

router.patch("/more/:id", moreQuantity);

router.patch("/less/:id", lessQuantity)

router.patch("/canceled", canceledOrder)

router.patch("/changeQuantity/:id/:quantity", changeQuantity)

router.patch("/completed", completedOrder)

router.patch("/product/:id/color/:idColor", colorProductOrder);

router.patch("/product/:id/size/:idSize", ziseProductOrder)



module.exports = router;
