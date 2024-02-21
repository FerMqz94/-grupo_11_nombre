const express = require('express');
const app = express();
const path = require('path');

const port = 3030;

// CONFIGURACIONES

app.set("view engine" , "ejs")
app.set("views" ,path.join(__dirname,"./views"))

// MEDIA

app.use(express.static('public'));

// RUTAS 

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'./views/home.html'))
// });
// app.get('/carrito', (req, res) => {
//     res.sendFile(path.join(__dirname,'./views/carrito.html'))
// });
// app.get('/producto-detalle', (req, res) => {
//     res.sendFile(path.join(__dirname,'./views/productDetail.html'))
// });
// app.get('/registro', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/register.html'))
// });
// app.get('/ingreso', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/login.html'))
// });

// ROTERS
const otherRoutes = require("./routes/other.routes")

// ROUTES 
app.use("/", otherRoutes)

//  SERVER
app.listen(port, () => console.log(`http://localhost:${port}`));





