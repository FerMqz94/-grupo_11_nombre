const express = require('express');
const app = express();
const path = require('path');
const partials = require('express-partials')
const port = 3030;

// CONFIGURACIONES

app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname,"./src/views"))

// MEDIA

app.use(express.static('public'));
app.use(partials());

// ROUTERS 
const otherRoutes = require("./src/routes/other.routes")
const cartRoutes = require("./src/routes/cart.routes")
const productDetailRoutes = require("./src/routes/productDetail.routes")
const authRoutes = require("./src/routes/authentication.routes")
const adminRoutes = require("./src/routes/admin.routes")

// ROUTES
app.use("/", otherRoutes)
app.use("/carrito", cartRoutes)
// login register
app.use("/", authRoutes)
app.use("/producto-detalle", productDetailRoutes)
app.use("/admin", adminRoutes)
// error 404
app.use((req,res,next) => {
    res.status(404).render('notFound')
})

//  SERVER
app.listen(port, () => console.log(`http://localhost:${port}`));





