import React, { useState, useEffect } from 'react';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';



function CreateProduct() {


  {/*-------------- ESTADOS --------- */}
  const [errors, setErrors] = useState("")
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [colorsStoreArray, setColorsStoreArray] = useState([])
  const [sizes, setSizes] = useState([]);
  const[sizesStoreArray, setSizesStoreArray] = useState([])
  const [previewImages, setPreviewImages] = useState([]);
  const [fileImgSelected, setFileImgSelected] = useState()
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    featuredDescription: '',
    price: '',
   // new: false,
   // sale: false,
    available: false,
    id_category: '',
  });


  {/*-----APIS UTILIZADAS------*/}
  const urlApiCategories = 'http://localhost:3030/api/admin/categorias';
  const urlApiColors = 'http://localhost:3030/api/admin/colors';
  const urlApiSizes = 'http://localhost:3030/api/admin/sizes';
  const urlApiCreateProduct = 'http://localhost:3030/api/admin/crear-productos';


  useEffect(() => {
    const categoriesFetch =  () => {
       fetch(urlApiCategories)
      .then((response) => response.json())
      .then((data) => setCategories(data));
    }
   
    const colorsFetch = () => {
        fetch(urlApiColors)
        .then((response) => response.json())
        .then((data) => setColors(data))

    }

    const sizesFetch = () => {
        fetch(urlApiSizes)
        .then((response) => response.json())
        .then((data) => setSizes(data))
        
    }

   categoriesFetch() 
   colorsFetch()
   sizesFetch()

  }, []);


  {/* ------FUNCIÓN QUE MANEJA EL ESTADO NEWPRODUCT-------- */}

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setNewProduct(prevProduct => ({
        ...prevProduct,
        [name]: type === 'radio' ? value : value,
        neworsale: type === 'radio' ? value : prevProduct.neworsale,
    }));
}

{/* -------FUNCIONES QUE MANEJAN LOS ESTADOS DE LAS IMÁGENES------- */}

  const handleChangeInputImg = (e) => {
    const files = Array.from(e.target.files); // Con esto consigo "capturar" los archivos seleccionados
  
    if (files.length) {
   
      setFileImgSelected(files); // Acá guardamos los archivos en el estado fileImgSelected
    }
  };

    const handleChangeInputPreviewImg = (event) => {
      const files = Array.from(event.target.files);
      const imageUrls = files.map(file => URL.createObjectURL(file));
      setPreviewImages(imageUrls);
     }



{/* ------FUNCIÓN QUE MANEJA LOS ESTADOS DE LOS TALLES -------- */}

const handleSizeChange = (event) => {
  const { name, checked } = event.target;
  const sizeNumber = Number(name); // Con esto paso a número lo que obtengo como string

  setSizesStoreArray((prevState) => {
      if (checked) {
          return [...prevState, sizeNumber]; // Acá agrego ese talle como número al estado
      } else {
          return prevState.filter(size => size !== sizeNumber); // Usando filter como mostró el profe en otros ejemplos podemos eliminar el talle del estado
      }
  });
};

{/* ESTA FUNCIÓN ES PARA MANEJAR LOS COLORES */}

const handleColorChange = (event) => {
  const { name, checked } = event.target;

  setColorsStoreArray((prevState) => {
      const color = colors.data.find(c => c.name === name);
      const colorId = color ? color.id : null;

      if (checked && colorId) {
          
          return [...prevState, colorId];
      } else {
          
          return prevState.filter(id => id !== colorId);
      }
  });
};

{/*-------FUNCIÓN PARA MANEJAR EL AVAILABLE QUE SE OBTIENE DE UN SWITCH----------- */}

  const handleAvailableChange = (e) => {
    const { checked } = e.target;
    setNewProduct(prevProduct => ({
      ...prevProduct,
      available: checked,
    }));
  };


{/* FUNCIÓN PARA HACER LA SOLICITUD A LA API DE CREAR PRODUCTO CUANDO HACEMOS CLICK EN EL BOTÓN */}

  const handleCrearProducto = async () => {
    const formData = new FormData();

    //Estos append me sirven para agregar las propiedades seteadas en el estado newProduct
    formData.append('name', newProduct.name);
    formData.append('description', newProduct.description)
    formData.append('featuredDescription', newProduct.featuredDescription);
    formData.append('id_category', newProduct.id_category) 
    formData.append('available', newProduct.available);
    formData.append('neworsale', newProduct.neworsale); 
    formData.append('price', newProduct.price)

    // Como se manejan con otros estados los talles y los colores se agregan aparte haciendo un forEach y añadiendo esos datos a un array ya que modifiqué la api para que espere un array directamente y no talle por talle o color por color - Las imágenes también se agregan de otra forma, atención a una nota más abajo
    sizesStoreArray.forEach(size => {
        formData.append('sizesArrayStore[]', size);
    });

    colorsStoreArray.forEach(color => {
        formData.append('colorsArrayStore[]', color)
    });

    
    if (fileImgSelected) {
        fileImgSelected.forEach(file => {
            formData.append('image', file); // Muy importante que el primer parámetro que le pasamos, tenga el mismo nombre que le ponemos a la ruta de crear-producto en el parámetro del middleware del multer,  uploadProducts.array('image') este porque sino se rompe todo
        });
    }

    try {
      fetch(urlApiCreateProduct, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          window.location = ' http://localhost:5173/'; //esto lo puse para que redirija a la página principal del dashboard de react
        })
        
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};


  


 if (categories.length < 1 || colors.length < 1 || sizes.length < 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <CircularProgress color="inherit" />
      </div>
    );
  } else {
    return (
      <Box sx={{ width: '90%', maxWidth: '700px', display: 'flex', flexWrap: 'wrap', margin: '50px auto', padding: '10px', paddingLeft: '35px', borderRadius: '10px', paddingTop: '20px', paddingBottom: '60px', boxShadow: '0 2px 8px 0 rgba(65, 161, 160, 0.4)', alignItems: 'flex-start' }}>
        <h1 style={{ width: '100%', textAlign: 'center', color: '#99d3bf', fontWeight: 'bold' }}> Crear Producto </h1>
    
        <TextField
          id="outlined-required"
          color="success" 
          label="Nombre del producto"
          name="name"
          value={newProduct.name}
          sx={{ width: '45%', margin: '3px', marginTop: '30px' }}
          onChange={handleChange}
        />
        <TextField
          id="outlined-required"
          label="Precio"
          color="success" 
          name="price"
          value={newProduct.price}
          type="number"
          sx={{ width: '45%', margin: '3px', marginTop: '30px' }}
          onChange={handleChange}
        />
     
        <FormControl sx={{ width: '45%', margin: '3px', marginTop: '15px'}}>
          <InputLabel 
          color="success" 
          id="demo-simple-select-label" sx={{ margin: '2.5%' }}>
            Categoria
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            color="success" 
            label="Categoria"
            name="id_category"
            value={newProduct.id_category}
            sx={{ width: '100%' }}
            onChange={handleChange}
          >
            {categories.data.map((c) => {
              return (
                <MenuItem key={c.id} value={c.id}>
                  {c.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
            
        {/*----DESCRIPCIÓN ---- */}
        <TextField
        id="outlined-multiline-static"
        label="Descripción"
        color="success"
        name="description"
        multiline
        rows={6}
        value={newProduct.description}
        sx={{ width: '95%', margin: '3px', marginTop: '15px' }}
        onChange={handleChange}
      />

      {/*--DESCRIPCIÓN DESTACADA-- */}
      <TextField
        id="outlined-multiline-static"
        label="Descripción destacada"
        color="success"
        name="featuredDescription" 
        multiline
        rows={3}
        value={newProduct.featuredDescription}
        sx={{ width: '95%', margin: '3px', marginTop: '15px' }}
        onChange={handleChange}
      />
       

        {/* ----COLORS----- */}    

        <FormControl sx={{ width: '100%', margin: '3px', marginTop: '20px', height: '250px', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginBottom: '15px' }}>
        <FormLabel sx={{ margin: '2.5%', fontSize: '30px', color: 'var(--verde-azulado-claro)' }}>
            Colores
        </FormLabel>

        <FormGroup color='success' sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
            {colors.data.map((c) => {
            return (
                <FormControlLabel
                    key={c.id}
                    control={
                        <Checkbox
                            color='success'
                            size='large'
                            value={c.name}
                            checked={colorsStoreArray.includes(c.id)}
                            onChange={handleColorChange}
                            name={c.name}
                            sx={{ fontSize: '30px' }}
                        />
                    }
                    label={c.name}
                />
            );
        })}
          </FormGroup>
      </FormControl>
        {console.log(colorsStoreArray)}

      {/* ----SIZES---- */}
    
      <FormControl color='success' sx={{ width: '100%', margin: '3px', marginTop: '25px', height: '100px' }}>
        <FormLabel sx={{ margin: '2.5%', fontSize: '30px', color: 'var(--verde-azulado-claro)', marginTop: '15px' }}>
            Talles
        </FormLabel>

        <FormGroup sx={{ display: 'flex', flexDirection: 'row', gap: '15px' }} color='success'>
                {sizes.data.map((s) => (
                    <FormControlLabel
                        key={s.id}
                        control={
                            <Checkbox
                                color='success'
                                size='large'
                                value={s.size}
                                checked={sizesStoreArray.includes(s.size)} 
                                onChange={handleSizeChange}
                                name={s.size} 
                            />
                        }
                        label={s.size}
                    />
                ))}
            </FormGroup>
      </FormControl>

      {console.log(sizesStoreArray)}

        {/* -----BUTTON RADIO-------- */}
        <FormControl sx={{ marginTop: '70px' }}>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="neworsale" 
              sx={{ marginTop: '20px', margin: '3px', marginBottom: '20px' }}
              onChange={handleChange}
            >
              <FormControlLabel
                value="new"
                control={<Radio size='large' color='success' />}
                label="Nuevo"
                sx={{ fontSize: '18px', color: 'var(--verde-azulado-claro)' }}
                checked={newProduct.new}
              />
              <FormControlLabel
                value="sale"
                control={<Radio size='large' color='success' />}
                label="Oferta"
                sx={{ fontSize: '18px', color: 'var(--verde-azulado-claro)' }}
                checked={newProduct.sale}
              />
            </RadioGroup>
      </FormControl>
       

      {/* -----COMPONENTE CAJA QUE CONTIENE AL SWITCH Y AL INPUT FILE-------- */}

      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '5px', marginTop: '180px', marginBottom: '20px' }}>

        {/* --------SWITCH---------- */}
        <FormControl>
          <FormControlLabel
            sx={{ fontSize: '20px', color: 'var(--verde-azulado-claro)' }}
            control={
              <Switch
                color="success"
                size="large"
                sx={{ marginLeft: '5px' }}
                checked={newProduct.available} 
                onChange={handleAvailableChange} 
                name="available" // Nombre del switch
                value={newProduct.available ? "true" : "false"} 
              />
            }
            label="Disponible"
          />
          </FormControl>
        {/* -----------INPUT-TYPE-FILE- IMAGENES ----------- */}  

        <FormControl>
            <Input
              id="file-upload"
              type="file"
              name="imageProduct"
              onChange={(event) => {
                handleChangeInputImg(event);
                handleChangeInputPreviewImg(event);
              }}
              inputProps={{ accept: 'image/*', multiple: true }} 
              sx={{ display: 'none' }}
            />
            
            <Button
              variant="contained"
              component="label"
              sx={{
                width: 300,
                height: 300,
                border: '2px solid #cdaa98',
                borderRadius: '5%',
                marginTop: '20px',
                textTransform: 'none',
                backgroundColor: '#cdaa98',
                fontSize: 'var(--letra-grande)',
                '&:hover': {
                  border: '2px solid var(--verde-azulado-claro)',
                  backgroundColor: 'var(--verde-azulado-claro)', 
                },
              }}
            >
              Subir Imagen
              <Input
                type="file"
                name="imageProduct"
                onChange={(event) => {
                  handleChangeInputImg(event);
                  handleChangeInputPreviewImg(event);
                }}
                inputProps={{ accept: 'image/*', multiple: true }} 
                sx={{ display: 'none' }} 
              />
              <div style={{ marginTop: '10px', marginBottom: '10px', display: 'flex', flexWrap: 'wrap' }}>
              {previewImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`preview ${index}`}
                  style={{
                    width: '90px',
                    height: '90px',
                    objectFit: 'cover',
                    borderRadius: '5%',
                    margin: '5px',
                  }}
                />
              ))}
            </div>

            </Button>

            
          </FormControl>

       {/* </FormControl>
            <Input
              id="file-upload"
              type="file"
              name="imageProduct"
              onChange={handleChangeInputImg}
              inputProps={{ accept: 'image/*', multiple: true }} 
              sx={{
                display: 'none', 
              }}
            />

            <Button
              variant="contained"
              component="label"
              sx={{
                width: 230,
                height: 230,
                border: '2px solid #cdaa98',
                borderRadius: '5%',
                marginTop: '20px',
                textTransform: 'none',
                backgroundColor: '#cdaa98',
                fontSize: 'var(--letra-grande)',
                '&:hover': {
                  border: '2px solid var(--verde-azulado-claro)',
                  backgroundColor: 'var(--verde-azulado-claro)', 
                },
              }}
            >
              Subir Imagen
              <Input
                type="file"
                name="imageProduct"
                onChange={handleChangeInputImg}
                inputProps={{ accept: 'image/*', multiple: true }} 
                sx={{ display: 'none' }} 
              />
            </Button>
            {console.log(fileImgSelected)}
        {/*<Input
          id="file-upload"
          type="file"
          name="imageProduct"
          onChange={handleChangueInputImg}
          inputProps={{ accept: 'image/*' }}
          sx={{
            width: 230,
            height: 230,
            border: '2px solid var(--gris-claro)',
            borderRadius: '5%',
            marginTop: '20px',
          }}
        />*/}
      </Box>
    

      <FormControl sx={{marginTop: '10px', width: '60%'}}>
        <Button
          variant="contained"
          size="large"
          onClick={handleCrearProducto}
          sx={{ height: '50px', width: '200px', marginLeft: '400px', marginTop: '60px',   background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(249,155,125,1) 100%)' }}
        >
          Crear Producto
        </Button>

        </FormControl>

          {console.log(newProduct)}

      </Box>
    );
  }
}

export default CreateProduct;