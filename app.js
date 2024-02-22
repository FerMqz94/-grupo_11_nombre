const express = require('express');
const app = express();
const path = require('path');

const port = 3030;

// CONFIGURACIONES

app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname,"./views"))

// MEDIA

app.use(express.static('public'));


// ROTERS
const otherRoutes = require("./routes/other.routes")
const carritoRoutes = require("./routes/carrito.routes")
const loginRoutes = require("./routes/login.routes")
const productDetailRoutes = require("./routes/productDetail.routes")
const registerRoutes = require("./routes/register.routes")

// ROUTES
app.use("/", otherRoutes)
app.use("/", carritoRoutes)
app.use("/", loginRoutes)
app.use("/", productDetailRoutes)
app.use("/", registerRoutes)

//  SERVER
app.listen(port, () => console.log(`http://localhost:${port}`));





