
const router = require("express").Router()
const { getOrder, addProductToOrder, removeProductToOrder, moreQuantity,lessQuantity, canceledOrder, completedOrder, colorProductOrder, ziseProductOrder } = require("../../controllers/api/cart")


router.get("/", getOrder);

router.patch("/add/:id", addProductToOrder);

router.patch("/remove/:id", removeProductToOrder);

router.patch("/more/:id", moreQuantity);

router.patch("/less/:id", lessQuantity)

router.patch("/canceled", canceledOrder)

router.patch("/completed", completedOrder)

// router.patch("/color/:id", colorProductOrder);

router.patch("/product/:id_pproduct/size/:id", ziseProductOrder)

module.exports = router;
