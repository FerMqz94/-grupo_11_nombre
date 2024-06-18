// 1:33:31

const $ = (element) => document.querySelector(element)

const converterMoneyArs = (num = 0) => num.toLocaleString({
    currency: "ARS",
    style: "currency",
})



const server = "http://localhost:3030"

let productsCart = [];


const getShoppingCart = (server) => fetch(`${server}/api/carrito?id_user=1`).then(res => res.json())
const getCartSructure = (p) => {

    function color(a) {
        if (p.Orders_Products.id_color == p.colors[0].id) {
            return p.colors[0].hexadecimal
        } else if (p.Orders_Products.id_color == p.colors[1].id) {
            return p.colors[1].hexadecimal
        } else if (p.Orders_Products.id_color == p.colors[2].id) {
            return p.colors[2].hexadecimal
        } else {
            return ""
        }
    }

    // function colorName(a){
    //     if (a == p.colors[0].id){
    //         return p.colors[0].name
    //     } else if (a == p.colors[1].id){
    //         return p.colors[1].name
    //     }else if (a == p.colors[2].id){
    //         return p.colors[2].name
    //     } else {
    //         return "none"
    //     }
    // }

    const color1 = (p.colors[0] && p.colors[0].hexadecimal) ? p.colors[0].hexadecimal : "";
    const color1Exist = (p.colors[0] && p.colors[0].hexadecimal) ? "revert" : "none";
    const color1Name = (p.colors[0] && p.colors[0].hexadecimal) ? p.colors[0].name : "";

    const color2 = (p.colors[1] && p.colors[1].hexadecimal) ? p.colors[1].hexadecimal : "";
    const color2Exist = (p.colors[1] && p.colors[1].hexadecimal) ? "revert" : "none";
    const color2Name = (p.colors[1] && p.colors[1].hexadecimal) ? p.colors[1].name : "";

    const color3 = (p.colors[2] && p.colors[2].hexadecimal) ? p.colors[2].hexadecimal : "";
    const color3Exist = (p.colors[2] && p.colors[2].hexadecimal) ? "revert" : "none";
    const color3Name = (p.colors[2] && p.colors[2].hexadecimal) ? p.colors[2].name : "";

    // ${color(p.Orders_Products.id_color >= 1 ? p.Orders_Products.id_color : 0)}
    // ${converterMoneyArs(p.price)}
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
                                    <p class="datos-producto">color:  <i class="fa-regular fa-circle" style="background-color: black;"></i>&nbsp;
                                        <label for="boton-carrito-colores-${p.id}"><i class="fa-solid fa-caret-down"></i></label> </p>
                                                <div class="colores-opciones">
                                                <p style="display:${color1Exist}">${color1Name}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${color1}; display:${color1Exist}"></i></p>
                                                <p style="display:${color2Exist}">${color2Name}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${color2}; display:${color2Exist}"></i></p>
                                                <p style="display:${color3Exist}">${color3Name}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${color3}; display:${color3Exist}"></i></p>


                                            </div>
                                </div>
                            </div>
                            <div><i class="fa-solid fa-trash"></i></div>
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
    painCartsInView(productsCart, containerProducts);
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
// odio la vida y a todos por igual 