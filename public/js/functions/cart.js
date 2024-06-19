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
    // function filterColors(id_color) {} 
    // if (p.colors[0] && p.colors[0].hexadecimal) {
    //     let color1 = p.colors[0].hexadecimal
    //     let color1Exist = "revert"
    // }

// si te preguntas por no directamente hago que te haga el if ternario tambien en la constante colorFilter 
// la respuesta es que se rompe cuando supero el numero de colores que tiene el producto pero si lo dejo asi eso no pasa
    const colorFilter = (id) => p.colors[id] && p.colors[id].hexadecimal 

    let color1 = colorFilter(0) ? p.colors[0].hexadecimal : ""
    let color1Exist = colorFilter(0) ? "revert" : "none";
    let color1Name =  colorFilter(0) ? p.colors[0].name : "";
    let color1Info = colorFilter(0) ? p.colors[0].id : "";

    let color2 = colorFilter(1)? p.colors[1].hexadecimal :""
    let color2Exist = colorFilter(1)? "revert" : "none";
    let color2Name = colorFilter(1)? p.colors[1].name : "";
    let color2Info = colorFilter(1)? p.colors[1].id : "";

    let color3 = colorFilter(2) ? p.colors[2].hexadecimal :""
    let color3Exist = colorFilter(2) ? "revert" : "none";
    let color3Name = colorFilter(2) ? p.colors[2].name : "";
    let color3Info = colorFilter(2)? p.colors[2].id : "";

    let color4 = colorFilter(3) ? p.colors[3].hexadecimal : "";
    let color4Exist = colorFilter(3) ? "revert" : "none";
    let color4Name = colorFilter(3) ? p.colors[3].name : "";
    let color4Info = colorFilter(3)? p.colors[3].id : "";

    let color5 = colorFilter(4) ? p.colors[4].hexadecimal : "";
    let color5Exist = colorFilter(4) ? "revert" : "none";
    let color5Name = colorFilter(4) ? p.colors[4].name : "";
    let color5Info = colorFilter(4)? p.colors[4].id : "";

    // ${color(p.Orders_Products.id_color >= 1 ? p.Orders_Products.id_color : 0)}
    // ${converterMoneyArs(p.price)} infinite power

    // <button onclick="changeColor(${p.id},${p.colors[0].id})">aaaaaaaa</button>

    return `
            <div class="info-compra"> ${color3}
                            <div class="info-datos-img">
                                 <input type="checkbox" id="boton-carrito-colores-${p.id}" class="input-carrito-colores" style="display: none;">
                                <img src="${server}/api/producto-detalle/image/${p.images[0].name}" alt="imagen-de-carrito" class="img-carrito">
                                <div class="producto-info">
                                    <p class="datos-producto">${p.name}</p>
                                    <p class="datos-producto">precio $ ${p.price}</p>
                                    <p class="datos-producto">cantidad <button onclick="lessProduct(${p.id})">-</button>  ${p.Orders_Products.quantity} <button onclick="moreProduct(${p.id})">+</button></p>
                                    <p class="datos-producto">talle: ${p.Orders_Products.id_size} </p>
                                    <p class="datos-producto">color:  <i class="fa-regular fa-circle" style="background-color: ${color(p.id)};"></i>&nbsp;
                                        <label for="boton-carrito-colores-${p.id}"><i class="fa-solid fa-caret-down"></i></label> </p>
                                                <div class="colores-opciones">

                                                <p style="display:${color1Exist}">
                                                <button onclick="changeColor(${p.id},${color1Info})">
                                                ${color1Name}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${color1}; display:${color1Exist}"></i>
                                                </button>
                                                </p>

                                                <p style="display:${color2Exist}">
                                                <button onclick="changeColor(${p.id},${color2Info})">
                                                ${color2Name}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${color2}; display:${color2Exist}"></i>
                                                </button>
                                                </p>

                                                <p style="display:${color3Exist}">
                                                <button onclick="changeColor(${p.id},${color3Info})">
                                                ${color3Name}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${color3}; display:${color3Exist}"></i>
                                                </button>
                                                </p>


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
// odio la vida y a todos por igual 