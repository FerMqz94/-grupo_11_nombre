{/* <div class="info-compra">
                            <div class="info-datos-img">
                                <img src="/images/products/norm-core.png" alt="imagen-de-carrito" class="img-carrito">
                                <div class="producto-info">
                                    <p class="datos-producto">${p.name}</p>
                                    <p class="datos-producto">precio $${converterMoneyArs(p.price)}</p>
                                    <p class="datos-producto">cantidad - ${p.Orders_Products.quantity} +</p>
                                    <p class="datos-producto">talle: ${p.Orders_Products.id_size} </p>
                                    <p class="datos-producto">color: <i class="fa-regular fa-circle"
                                            style="background-color: black;"></i></p>
                                </div>
                            </div>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>` */}
// 44:00

const $ = (element) => document.querySelector(element)

const converterMoneyArs = (num = 0) => num.toLocaleString({
    currency: "ARS",
    style: "currency",
})

const containerProducts = $('#carrito')
const binClearCart = $('#vaciar')
const binBuy = $("#comprar")
const outputTotal = $('#total')

const server = "http://localhost:3030"

let productsCart = [];

window.addEventListener('load', async (event) => {
    try {
        const { ok, data: { products } } = await fetch(`${server}/api/carrito?id_user=1`).then(res => res.json())

        ok && (productsCart = products);

        productsCart.forEach((p) => {

            containerProducts.innerHTML += `
            <div class="info-compra">
                            <div class="info-datos-img">
                                <img src="http://localhost:3030/api/producto-detalle/image/${p.images[0].name}" alt="imagen-de-carrito" class="img-carrito">
                                <div class="producto-info">
                                    <p class="datos-producto">${p.name}</p>
                                    <p class="datos-producto">precio $ ${converterMoneyArs(p.price)}</p>
                                    <p class="datos-producto">cantidad - ${p.Orders_Products.quantity} +</p>
                                    <p class="datos-producto">talle: ${p.Orders_Products.id_size} </p>
                                    <p class="datos-producto">color: <i class="fa-regular fa-circle"
                                            style="background-color: black;"></i></p>
                                </div>
                            </div>
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>`
        })


        // console.log({ ok, isCreate, data })
    }
    catch (error) {
        console.error(error.menssage)
    }
})