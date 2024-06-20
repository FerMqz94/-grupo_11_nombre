// aca dejaba anotado el minuto de la clase x las dudas si tanta curiosidad te da esta linea y yo solo la puedo eliminar

const $ = (element) => document.querySelector(element)

const converterMoneyArs = (num = 0) => num.toLocaleString({
    currency: "ARS",
    style: "currency",
})



const server = "http://localhost:3030"
let productsCart = [];

const getShoppingCart = (server) => fetch(`${server}/api/carrito?id_user=1`).then(res => res.json())
const getCartSructure = (p) => {

    function color(id) {
        if (id == p.colors[0].id) {
            return p.colors[0].hexadecimal
        } else if (id == p.colors[1].id) {
            return p.colors[1].hexadecimal
        } else if (id == p.colors[2].id) {
            return p.colors[2].hexadecimal
        } else {
            return "transparent"
        }
    }
    let colorSelect = (id) => color(id) !== "transparent" ? color(id) : "transparent"

    const colorFilter = (id) => p.colors[id] && p.colors[id].hexadecimal
    let hexadecimalColor = (id) => colorFilter(id) ? p.colors[id].hexadecimal : ""
    let colorExist = (id) => colorFilter(id) ? "revert" : "none";
    let colorName = (id) => colorFilter(id) ? p.colors[id].name : "";
    let colorInfo = (id) => colorFilter(id)  ? p.colors[id].id : "";

    function opcionColor(i) {
        if (p.colors[i] && p.colors[i].hexadecimal) {
            return `
            <p>
<button onclick="changeColor(${p.id},${colorInfo(i)})">
${colorName(i)}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${hexadecimalColor(i)}; display:${colorExist(i)}"></i>
</button>
</p>`
        } else {
            return ""
        }
    }

    return `
            <div class="info-compra"> 
                            <div class="info-datos-img">
                                 <input type="checkbox" id="boton-carrito-colores-${p.id}" class="input-carrito-colores" style="display: none;">
                                <img src="${server}/api/producto-detalle/image/${p.images[0].name}" alt="imagen-de-carrito" class="img-carrito">
                                <div class="producto-info">
                                    <p class="datos-producto">${p.name}</p>
                                    <p class="datos-producto">precio $ ${p.price}</p>
                                    <p class="datos-producto">cantidad <button onclick="lessProduct(${p.id})">-</button>  ${p.Orders_Products.quantity} <button onclick="moreProduct(${p.id})">+</button></p>
                                    <p class="datos-producto">talle: ${p.Orders_Products.id_size} </p>
                                    <p class="datos-producto">color:  <i class="fa-regular fa-circle" style="background-color: ${colorSelect(p.Orders_Products.id_color)};"></i>&nbsp;
                                        <label for="boton-carrito-colores-${p.id}"><i class="fa-solid fa-caret-down"></i></label> </p>
                                                <div class="colores-opciones">
                                                ${opcionColor(0)}
                                                ${opcionColor(1)}
                                                ${opcionColor(2)}
                                                ${opcionColor(3)}
                                                ${opcionColor(4)}
                                                ${opcionColor(5)}
                                            </div>
                                </div>
                            </div>
                            <div>
                            <button onclick="deleteProduct(${p.id})">
                            <i class="fa-solid fa-trash"></i>
                            </button>
                            </div>
                        </div>`
}
const painCartsInView = (products = [], elementContainerProduct) => {
    elementContainerProduct.innerHTML = ""
    productsCart.forEach((product) => {

        elementContainerProduct.innerHTML += getCartSructure(product)
    })
}
const processReloadCart = async (server, containerProducts,outputTotal) => {
    const { ok,
        data: { total, products }
    } = await getShoppingCart(server)
    ok && (productsCart = products);
    painCartsInView(productsCart, containerProducts,outputTotal);

    outputTotal.innerHTML = total

}


window.addEventListener('load', async (event) => {
    const containerProducts = $('#carrito')
    const binClearCart = $('#vaciar')
    const binBuy = $("#comprar")
    const outputTotal = $('#total')

    try {
        processReloadCart(server, containerProducts, outputTotal)
    }
    catch (error) {
        console.error(error.menssage)
    }

    binClearCart.addEventListener("click", async () => {
        //   alert("alalla")
        try {
            const containerProducts = $('#carrito')
            const { ok, msg } = await fetch(`${server}/api/carrito/removeAll?id_user=1`, {
                method: "PATCH"
            }).then(res => res.json())
            console.log(ok, msg)
            if (ok) {
                processReloadCart(server, containerProducts,outputTotal)
            }
        }
        catch (error) {
            console.error(error.menssage)
        }
    })
  
})
const lessProduct = async (id) => {
    try {
        const outputTotal = $('#total')
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/less/${id}?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        if (ok) {
            processReloadCart(server, containerProducts,outputTotal)
        }


    }
    catch (error) {
        console.error(error.menssage)
    }
}
const moreProduct = async (id) => {
    try {
        const outputTotal = $('#total')
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/more/${id}?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        if (ok) {
            processReloadCart(server, containerProducts,outputTotal)
        }


    }
    catch (error) {
        console.error(error.menssage)
    }
    
}
const changeColor = async (id,id_color) => {
    try {
        const outputTotal = $('#total')
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/product/${id}/color/${id_color}?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        if (ok) {
            processReloadCart(server, containerProducts,outputTotal)
        }
    }
    catch (error) {
        console.error(error.menssage)
    }
}

const changeZise = async (id,id_size) => {
    try {
        const outputTotal = $('#total')
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/product/${id}/color/${id_size}?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        if (ok) {
            processReloadCart(server, containerProducts,outputTotal)
        }
    }
    catch (error) {
        console.error(error.menssage)
    }
}

const deleteProduct = async (id) => {
    try {
        const outputTotal = $('#total')
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/remove/${id}?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        // if (ok) {
            processReloadCart(server, containerProducts,outputTotal)
        // }
    }
    catch (error) {
        console.error(error.menssage)
    }
}
// odio la vida y a todos por igual 