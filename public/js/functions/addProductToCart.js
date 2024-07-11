let size_id = null;
let color_id = null;

const cantidadInput = document.getElementById('cantidad');

const redirect = (url) => {
  window.location.href = url;
};

const getSize = async (id) => {
    size_id = id;
    console.log(size_id) 
    return size_id
};

const getcolor = (id) => {
    color_id = id;
    console.log(color_id) 
    return color_id
};

const addProductCart = async (id,id_color,id_size, image) => {

    const server = "http://localhost:3030";

    let sizeId = size_id > 0 ? size_id: id_size;

    let colorId = color_id > 0 ? color_id : id_color;

    console.log(id,sizeId, colorId)
    console.log(image)
    console.log(cantidadInput)

    try {
      const { ok, msg } = await fetch(`${server}/api/carrito/add/${id}?id_user=1`, {
        method: "PATCH",
      }).then((res) => res.json());
      console.log(ok, msg)
  
    } catch (error) {
      console.error(error.message);
    };

    try {
        const { ok, msg } = await fetch(`${server}/api/carrito/product/${id}/size/${sizeId}?id_user=1`, {
          method: "PATCH",
        }).then((res) => res.json());
        console.log(ok, msg)
    
      } catch (error) {
        console.error(error.message);
      };

      try {
        const { ok, msg } = await fetch(`${server}/api/carrito/product/${id}/color/${colorId}?id_user=1`, {
          method: "PATCH",
        }).then((res) => res.json());
        console.log(ok, msg)
    
      } catch (error) {
        console.error(error.message);
      };
      Swal.fire({
        width: 300,
        // height: auto,
        position: "top-end",
        // icon: "success",
        imageUrl:`${server}/api/producto-detalle/image/${image}`,
        imageWidth: 140,
        imageHeight: 180,
        title: "producto agregado al carrito con exito",
        html: `<a href="/carrito" class="ver-carrito"> ver carrito</a>`,
        // titleFontSize: 10,
        showConfirmButton: false,
        timer: 3500,
        customClass: {
          title: 'alerta-carrito'
      }
      });

}