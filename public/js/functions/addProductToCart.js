let size_id = null;
let color_id = null;

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

const addProductCart = async (id,id_color,id_size) => {

    const server = "http://localhost:3030";

    let sizeId = size_id > 0 ? size_id: id_size;

    let colorId = color_id > 0 ? color_id : id_color;

    console.log(id,sizeId, colorId)

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
        position: "top-end",
        icon: "success",
        title: "producto agregado al carrito con exito",
        showConfirmButton: false,
        timer: 1500
      });

}