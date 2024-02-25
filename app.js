const express = require('express');
const app = express();
const path = require('path');

const port = 3030;

// CONFIGURACIONES

app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname,"./views"))

// MEDIA

app.use(express.static('public'));


// ROUTERS 
const otherRoutes = require("./routes/other.routes")
const cartRoutes = require("./routes/cart.routes")
const loginRoutes = require("./routes/login.routes")
const productDetailRoutes = require("./routes/productDetail.routes")
const registerRoutes = require("./routes/register.routes")
const adminRoutes = require("./routes/admin.routes")

// ROUTES
app.use("/", otherRoutes)
app.use("/carrito", cartRoutes)
app.use("/ingreso", loginRoutes)
app.use("/producto-detalle", productDetailRoutes)
app.use("/registro", registerRoutes)
app.use("/admin", adminRoutes)
// error 404
app.use((req,res,next) => {
    res.status(404).render('notFound')
})

//  SERVER
app.listen(port, () => console.log(`http://localhost:${port}`));





