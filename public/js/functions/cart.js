// const Algo = globalConfig.server;

const $ = (element) => document.querySelector(element);

const converterMoneyArs = (num = 0) => num.toLocaleString({
    currency: "ARS",
    style: "currency",
})


const server = "http://localhost:3030";
// SERVER=https://59sxx87j-3030.brs.devtunnels.ms/
// const serverOnline = process.env.SERVER;
let productsCart = [];

const getShoppingCart = (server) => fetch(`${server}/api/carrito?id_user=1`).then(res => res.json())
const getCartSructure = (p) => {

    function talle(i) {
        return `<p class="datos-producto">
        <button onclick="changeZise(${p.id},${i})"> Talle: ${i}</button>
        </p>`;
    };
    const sizeExist = (id) => p.sizes[id] && p.sizes[id].id;
    const sizeInfo = (id) => sizeExist(id) ? p.sizes[id].id : "";
    const opcionSize = (id) => sizeExist(id) ? talle(sizeInfo(id)) : "";

    let generateSizes = (id) => {
        let t = '';
        for (let i = 0; i < 50; i++) {
            if (p.sizes[i] && p.sizes[i].id) {
                t += opcionSize(i);
            }
        }
        return t;
    };

    let Getcolor = (id) => {
        let t = "transparent";
        for (let i = 0; i < 50; i++) {
            if (colorFilter(i)) {
                if (id == p.colors[i].id) {
                    t = p.colors[i].hexadecimal
                    break
                }
            }
        }
        return t;
    };

    let orderColor = p.Orders_Products.id_color > 0 ? p.Orders_Products.id_color : 1;
    let colorSelect = (id) => Getcolor(id) !== "transparent" ? Getcolor(id) : "transparent";

    const colorFilter = (id) => p.colors[id] && p.colors[id].hexadecimal;
    let hexadecimalColor = (id) => colorFilter(id) ? p.colors[id].hexadecimal : "";
    let colorExist = (id) => colorFilter(id) ? "revert" : "none";
    let colorName = (id) => colorFilter(id) ? p.colors[id].name : "";
    let colorInfo = (id) => colorFilter(id) ? p.colors[id].id : "";

    function opcionColor(i) {
        if (p.colors[i] && p.colors[i].hexadecimal) {
            return `<p>
<button onclick="changeColor(${p.id},${colorInfo(i)})">
${colorName(i)}:&nbsp;<i class="fa-regular fa-circle" style="background-color: ${hexadecimalColor(i)}; display:${colorExist(i)}"></i>
</button>
</p>`
        } else {
            return ""
        }
    };
    const circleColor = `<i class="fa-regular fa-circle" style="background-color: ${colorSelect(orderColor)};"></i>`;
    const emoteAlert = `<i class="fa-solid fa-triangle-exclamation" id="danger" style="color: #ff0000;"></i>`;

    let ColorsExist = () => {
        let c = '';
        for (let i = 0; i <= 50; i++) {
            c += opcionColor(i)
        }
        return c;
    };
    return `
            <div class="info-compra" id="info-compra"> 
                            <div class="info-datos-img">
                                 <input type="checkbox" id="boton-carrito-colores-${p.id}" class="input-carrito-colores" style="display: none;">
                                 <input type="checkbox" id="boton-carrito-talles-${p.id}" class="input-carrito-talles" style="display: none;">
                                 
                                <img src="${server}/api/producto-detalle/image/${p.images[0].name}" alt="imagen-de-carrito" class="img-carrito">
                                
                                <div class="producto-info">
                                    <p class="datos-producto">${p.name}</p>
                                    <p class="datos-producto">Precio $ ${p.price}</p>
                                    <p class="datos-producto">Cantidad <button onclick="lessProduct(${p.id})">-</button>  ${p.Orders_Products.quantity} <button onclick="moreProduct(${p.id})">+</button></p>
                                    <p class="datos-producto" id="talle">Talle: ${p.Orders_Products.id_size === null ? emoteAlert : p.Orders_Products.id_size}&nbsp; <label for="boton-carrito-talles-${p.id}"><i class="fa-solid fa-caret-down boton-talles"></i></label></p>
                                    <div class="talles-opciones">
                                    ${generateSizes()}
                                    </div>
                                    <p class="datos-producto id="color">Color: ${p.Orders_Products.id_color === null ? emoteAlert : circleColor}&nbsp;
                                        <label for="boton-carrito-colores-${p.id}"><i class="fa-solid fa-caret-down boton-colores"></i></label> </p>
                                                <div class="colores-opciones">
                                                ${ColorsExist()}
                                            </div>
                                </div>
                            </div>
                            <div class="opciones">
                            <button onclick="deleteProduct(${p.id})">
                            <i class="fa-solid fa-trash"></i>
                            </button>
                            </div>
                        </div>`
};


const painCartsInView = (products = [], elementContainerProduct) => {
    elementContainerProduct.innerHTML = ""
    productsCart.forEach((product) => {

        elementContainerProduct.innerHTML += getCartSructure(product)
    })
};
const processReloadCart = async (server, containerProducts, outputTotal) => {
    const { ok,
        data: { total, products }
    } = await getShoppingCart(server)
    ok && (productsCart = products);
    painCartsInView(productsCart, containerProducts, outputTotal);

    outputTotal.innerHTML = total
};
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
        const info = $('#info-compra');
        // console.log(info)
        if (info == null) {
            // alert("alfo")
            document.info.disabled = true;
        } else {


            Swal.fire({
                title: "¿Estas seguro?",
                text: "¡No se puede revertir!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, ¡quiero eliminar todo!",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteAllProducts()
                    processReloadCart(server, containerProducts, outputTotal)
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "Vaciaste el carrito.",
                        icon: "success"
                    });
                    processReloadCart(server, containerProducts, outputTotal)
                    processReloadCart(server, containerProducts, outputTotal)
                    processReloadCart(server, containerProducts, outputTotal)
                }
            });
        }

    });

    binBuy.addEventListener("click", async () => {
        const info = $('#info-compra');
        const error = $('#danger');
        // console.log(error)
        if (info == null) {
            // alert("alfo")
            document.info.disabled = true;
        } else {

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    //   confirmButton: "confirmar-carrito",
                    //   cancelButton: "btn btn-danger"
                },
                // buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "¿Deseas confirmar la compra?",
                // text: "You won't be able to revert this!",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: '<span class="carrito-comfirmar" style="color: #000">Sí, confirmar compra</span>',
                confirmButtonColor: "#32e0c4",
                cancelButtonText: "No, seguir mirando",
                cancelButtonColor: "#000",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    let timerInterval;
                    Swal.fire({
                        title: "Procesando compra",
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);

                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer && info !== null && error === null) {

                            buyProducts()

                            Swal.fire({
                                icon: "success",
                                text: "Tu compra fue realizada con exito",
                            });

                            setTimeout(() => {
                                location.href = "/";
                            }, 1000);




                        } else if (result.dismiss !== Swal.DismissReason.timer || info === null || error !== null) {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Algo salio mal",
                            });

                        }
                    });


                }

            })





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
            processReloadCart(server, containerProducts, outputTotal)
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
            processReloadCart(server, containerProducts, outputTotal)
        }
    }
    catch (error) {
        console.error(error.menssage)
    }

}
const changeColor = async (id, id_color) => {
    try {
        const outputTotal = $('#total')
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/product/${id}/color/${id_color}?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        if (ok) {
            processReloadCart(server, containerProducts, outputTotal)
        }
    }
    catch (error) {
        console.error(error.menssage)
    }
}
const changeZise = async (id, id_size) => {
    try {
        const outputTotal = $('#total')
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/product/${id}/size/${id_size}?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        if (ok) {
            processReloadCart(server, containerProducts, outputTotal)
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
        processReloadCart(server, containerProducts, outputTotal)
    }
    catch (error) {
        console.error(error.menssage)
    }
}

const deleteAllProducts = async (id) => {
    try {
        const containerProducts = $('#carrito')
        if (!productsCart.length) return

        const { ok, msg } = await fetch(`${server}/api/carrito/removeAll?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())

        console.log(ok, msg)
        if (ok) {
            processReloadCart(server, containerProducts, outputTotal)
        }
    }
    catch (error) {
        console.error(error.menssage)
    }

}

const buyProducts = async (id) => {
    try {
        const containerProducts = $('#carrito')
        const { ok, msg } = await fetch(`${server}/api/carrito/completed?id_user=1`, {
            method: "PATCH"
        }).then(res => res.json())
        console.log(ok, msg)
        if (ok) {

            processReloadCart(server, containerProducts, outputTotal)
        }
    }
    catch (error) {
        console.error(error.menssage)
    }

}

const productDetail = (name, img, des) => {

    console.log("ayhsgbagsgjhqas")

    Swal.fire({
        title: `${name}`,
        text: `${name}`,
        imageUrl: `${server}/api/producto-detalle/image/${img}`,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });

}
// odio la vida y a todos por igual 