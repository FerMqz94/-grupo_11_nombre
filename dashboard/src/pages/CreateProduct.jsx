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
  const [errors, setErrors] = useState("")
  const [categories, setCategories] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [preview, setPreview] = useState('');
  const [fileImgSelected, setFileImgSelected] = useState();
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    featuredDescription: '',
    price: '',
    new: false,
    sale: false,
    available: '',
    id_category: '',
  });

  const urlApiCategories = 'http://localhost:3030/api/admin/categorias';
  const urlApiColors = 'http://localhost:3030/api/admin/colors';
  const urlApiSizes = 'http://localhost:3030/api/admin/sizes';
  const urlApiCreateProduct = 'http://localhost:3030/api/admin/crear-producto';

  useEffect(() => {
    const categoriesFetch =  () => {
       fetch(urlApiCategories)
      .then((response) => response.json())
      .then((data) => setCategories(data));
    }
   
    const colorsFetch = () => {
        fetch(urlApiColors)
        .then((response) => response.json())
        .then((data) => setColors(data));

    }

    const sizesFetch = () => {
        fetch(urlApiSizes)
        .then((response) => response.json())
        .then((data) => setSizes(data));
        
    }

   categoriesFetch() 
   colorsFetch()
   sizesFetch()

  }, []);


  {/*const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };*/}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };


  const handleRadioChange = (e) => {
    const { value } = e.target;
    setNewProduct(prevProduct => ({
      ...prevProduct,
      new: value === 'new',   // Establece true o false para "Nuevo"
      sale: value === 'sale',  // Establece true o false para "Oferta"
    }));
  };


  const handleChangueInputImg = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setFileImgSelected(file);
    }
  };



  const handleSubmit = () => {
    let formData = new FormData();
    formData.append('name', newProduct.name);
    formData.append('description', newProduct.description);
    formData.append('featuredDescription', newProduct.featuredDescription);
    formData.append('id_category', newProduct.id_category);
    formData.append('price', newProduct.price);
    formData.append('imageProduct', fileImgSelected);
    formData.append('new', newProduct.new);
    formData.append('sale', newProduct.sale);
    formData.append('available', newProduct.available);
    formData.append('colors', newProduct.colors)





    fetch(urlApiCreateProduct, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location = '/admin/products';
      })
      .catch((error) => console.error('Error:', error))
      
  };

 if (categories.length < 1 || colors.length < 1 || sizes.length < 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <CircularProgress color="inherit" />
      </div>
    );
  } else {
    return (
      <Box sx={{ width: '90%', maxWidth: '700px', display: 'flex', flexWrap: 'wrap', margin: '50px auto', padding: '10px', paddingLeft: '35px', borderRadius: '10px', paddingTop: '20px', paddingBottom: '60px', boxShadow: ' 0 0 5px 6px rgba(249, 155, 128, 0.4)', alignItems: 'flex-start' }}>
        <h1 style={{ width: '100%', textAlign: 'center', color: '#99d3bf', fontWeight: 'bold' }}> Crear Producto </h1>
       {/*} <img src={preview} alt="img-product" className="editProductImg" />*/}
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
            name="categoryId"
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
          <TextField
          id="outlined-multiline-static"
          label="Descripción destacada"
          color="success" 
          name="description"
          multiline
          rows={3}
          value={newProduct.featuredDescription}
          sx={{ width: '95%', margin: '3px', marginTop: '15px' }}
          onChange={handleChange}
        />
        
        <FormControl sx={{ width: '100%', margin: '3px', marginTop: '20px', height: '250px', display: 'flex', flexWrap: 'wrap', flexDirection: 'row', marginBottom: '15px' }}>
        <FormLabel sx={{ margin: '2.5%', fontSize: '30px', color:'var(--verde-azulado-claro)' }}>Colores</FormLabel>

        <FormGroup color='success' sx={{display: 'flex', flexDirection:'row', gap: '15px'}}>
        {console.log(colors.data)}
         {colors.data.map((c) => {
            return (
             <FormControlLabel color='success' key={c.id}
            control={
              <Checkbox color='success' key={c.name} value={c.id} size='large' onChange={handleChange} name={c.name} sx={{fontSize: '30px'}} />
            }
            label= {c.name}
          />
        )
       
        })
        }
        </FormGroup>
        </FormControl>
      
        <FormControl  color='success' sx={{ width: '100%', margin: '3px', marginTop: '25px', height: '100px' }}>
        <FormLabel sx={{ margin: '2.5%', fontSize: '30px', color: 'var(--verde-azulado-claro)', marginTop: '15px' }}>Talles</FormLabel>

        <FormGroup sx={{display: 'flex', flexDirection:'row', gap: '15px'}} color='success'>
        {console.log(sizes.data)}
         {sizes.data.map((s) => {
            return (
             <FormControlLabel color='success' key={s.id}
            control={
              <Checkbox color='success' key={s.size} size='large' value={s.id} onChange={handleChange} name={s.size} />
            }
            label= {s.size}
          />
        )
        })
        }
        </FormGroup>
        </FormControl>

       <FormControl sx={{marginTop: '70px' }}>
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        sx={{ marginTop: '20px', margin: '3px', marginBottom: '20px' }}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="new"
          control={<Radio size='large' color='success' />}
          label="Nuevo"
          sx={{fontSize: '18px', color:'var(--verde-azulado-claro)'}}
          checked={newProduct.new}
        />
        <FormControlLabel
          value="sale"
          control={<Radio size='large' color='success' />}
          label="Oferta"
          sx={{fontSize: '18px', color:  'var(--verde-azulado-claro)'}}
          checked={newProduct.sale}
        />
      </RadioGroup>
      </FormControl>

      <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '5px', marginTop: '180px', marginBottom: '20px' }}>
        <FormControl>
          <FormControlLabel
          sx={{fontSize: '20px', color:  'var(--verde-azulado-claro)'}}
            control={<Switch color='success' size='large' sx={{ marginLeft: '5px'}} defaultChecked />}
            label="Disponible"
          />
        </FormControl>
        <Input
          id="file-upload"
          type="file"
          name="imageProduct"
          onChange={handleChangueInputImg}
          inputProps={{ accept: 'image/*' }}
          sx={{
            display: 'none', // Ocultar el input por defecto
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
            onChange={handleChangueInputImg}
            inputProps={{ accept: 'image/*' }}
            sx={{ display: 'none' }} // Ocultar el input nuevamente
          />
        </Button>
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
          onClick={handleSubmit}
          sx={{ height: '50px', width: '200px', marginLeft: '400px', marginTop: '60px',   background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(249,155,125,1) 100%)' }}
        >
          Crear Producto
        </Button>

        </FormControl>
      </Box>
    );
  }
}

export default CreateProduct;
