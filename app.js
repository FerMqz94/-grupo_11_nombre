const express = require('express');
const app = express();
const path = require('path');
const port = 3030;


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
});
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/carrito.html'))
});
app.get('/producto-detalle', (req, res) => {
    res.sendFile(path.join(__dirname,'./views/productDetail.html'))
});
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});
app.get('/ingreso', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
});

app.listen(port, () => console.log(`http://localhost:${port}`));





