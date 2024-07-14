require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');
const partials = require('express-partials');
const port = 3030;
const methodOverride = require('method-override');
const session = require("express-session")
let cookieParser = require('cookie-parser');
const cors = require('cors')

const passport = require('passport');
const { configServicegoogle } = require("./src/service/google.service");
const { configServiceTwitter } = require("./src/service/twitter.service");
const { configServiceFacebook } = require("./src/service/facebook.service");

const checkSession = require("./src/middlewares/checkSession")
const checkCookie = require('./src/middlewares/checkCookie');

// CONFIGURACIONES

app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname,"./src/views"))

// MiDDLEWARES
app.use(cors())

// app.use(cors({
//     origin: '*', // Permitir todos los orígenes
//     methods: 'GET, POST, PUT, DELETE, OPTIONS',
//     allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
// }));


app.use(express.static('public'));
app.use(partials());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(session({ secret: "palabra secreta" }))
app.use(passport.initialize());
app.use(passport.session());
configServicegoogle()
configServiceTwitter()
configServiceFacebook()

app.use(checkCookie)
app.use(checkSession)

// ROUTERS 
const otherRoutes = require("./src/routes/other.routes")
const cartRoutes = require("./src/routes/cart.routes")
const productDetailRoutes = require("./src/routes/productDetail.routes")
const listProductsRoutes = require("./src/routes/listProducts.routes")
const authRoutes = require("./src/routes/authentication.routes")
const adminRoutes = require("./src/routes/admin.routes")
const usersRoutes = require("./src/routes/users.routes")

// API
const apiOtherRoutes = require ("./src/routes/api/other.api")
const apiCartRoutes = require ("./src/routes/api/cart.api")
const apiProductDetailRoutes = require ("./src/routes/api/productDetail.api")
const apiAuthRoutes = require ("./src/routes/api/authentication.api")
const apiAdminRoutes = require ("./src/routes/api/admin.api")
const apiUsersRoutes = require ("./src/routes/api/users.api");



// ROUTES
app.use("/", otherRoutes)
app.use("/carrito", cartRoutes)
// login register
app.use('/autenticacion', authRoutes)
app.use("/lista",  listProductsRoutes)
app.use("/producto-detalle", productDetailRoutes)
app.use("/admin", adminRoutes);
app.use("/users", usersRoutes);


// API
app.use("/api", apiOtherRoutes)
app.use("/api/carrito", apiCartRoutes)
// login register
app.use('/api/autenticacion', apiAuthRoutes)
app.use("/api/producto-detalle", apiProductDetailRoutes)
app.use("/api/admin", apiAdminRoutes);
app.use("/api/users", apiUsersRoutes);


// error 404
app.use((req,res,next) => {
    res.status(404).render('other/notFound')
})

//  SERVER
app.listen(port, () => console.log(`http://localhost:${port}`));





