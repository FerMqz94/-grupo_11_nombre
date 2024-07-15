
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
// import '../assets/css/products.css'
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../public/css/Products/Product.module.css';

function Products() {

    {/* EJECUCIÓN DEL HOOK NAVIGATE QUE ME PERMITE NAVEGAR ENTRE DISTINTAS RUTAS SIN USAR LINK */}
    const navigate = useNavigate()


    {/* ESTADOS */}

    let [products, setProducts] = useState([])
    const [open, setOpen] = useState(false);
     const [productIdToDelete, setProductIdToDelete] = useState(null)
    const [shouldRefreshProducts, setShouldRefreshProducts] = useState(false);

    {/* ----API CONSUMIDA---- */}
    const urlApiProducts = 'http://localhost:3030/api/admin/products'
  

    useEffect(() => {
        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => {setProducts(data)  
    })
              
    }, [])
 

    {/* CONSTANTE PARA OBTENER LOS PRODUCTS QUE DE LA API VIENEN CON UN FORMATO EN DONDE products, es una de las propiedades que contiene un array con todos los productos */}

    const prods = products.products || []
    
    let rows = prods.map(({id, name, price, images, category}) => ({
        id: id,
        name: name,
        price: `$ ${price}`,
        category: category.name,
        photo: images.length > 1 ? images[1].images : images[0].images
    }))


    {/* --------FUNCIONES ADICIONALES---------- */}

    {/* ---------estas funciones las podríamos usar si agregamos un modal para eliminar por ejemplo------- */}
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    {/* ESTA ES LA FUNCIÓN QUE ME PERMITE REDIRIGIRNOS A LA VISTA DETALLE DEL PRODUCTO QUE ESTÁ EN EL PROYECTO CON NODEJS Y EJS, ABRIENDO OTRA PESTAÑA */}
    const handleButtonDetailProduct = (id) => {
        const url = "http://localhost:3030/producto-detalle/" + id
        window.open(url, '_blank')
    }


    {/*  ESTAS FUNCIONES NOS PERMITIRÍA NAVEGAR HACIA VISTAS COMO EDIT PRODUCT O DELETE */}
    const handleButtonEdit = (id) => {

        window.location = ' http://localhost:5173/editar-producto/' + id
        
       // navigate(`/admin/products/edit/${id}`)
    }

    function handleButtonDelete(id) {

        window.location = ' http://localhost:5173/eliminar-producto/' + id

    }



    
    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Nombre', flex: 1 },
        {
            field: 'price', headerName: 'Precio', width: 100,
            renderCell: (params) => (
                <div style={{ width: '100%', textAlign: 'center' }}>
                    {params.value}
                </div>
            ),
        },
        
       { field: 'category', headerName: 'Categoria', flex: 1 },
        {
            field: 'photo',
            headerName: 'Imagen',
            width: 200,
            renderCell: (params) => (
                <img src={params.value.toString()} alt={params.row.fullName} style={{ width: 'auto', height: '100%', padding: "7px" }} />
            ),
        },
        {
            field: 'ver',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => handleButtonDetailProduct(params.row.id)}
                        sx={{
                            backgroundColor: 'var(--verde-azulado-claro)',
                            color: '#fff',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                              backgroundColor: '#7ed9d0', 
                            },
                          }}
                    >
                        Ver
                    </Button>
                </div>
            ),
        },
        {
            field: 'actionEdit',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{
                            backgroundColor: '#ffcd9e',
                            color: '#2d6a4f', 
                            transition: 'background-color 0.3s',
                            '&:hover': {
                              backgroundColor: '#ffb76b'
                            }
                          }}
                        onClick={() => handleButtonEdit(params.row.id)}
                    >
                        Editar
                    </Button>
                </div>
            ),
        },
        {
            field: 'actionDelete',
            headerName: '',
            width: 120,
            renderCell: (params) => (
                <div className='buttonDashboardContainer'>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{
                            backgroundColor: '#d19a6b',
                            color: '#fff',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                              backgroundColor: '#e4b286'
                            }
                          }}
                        onClick={() => handleClickOpen()}
                    >
                        Eliminar
                    </Button>
                </div>
            ),
        }
    ];



    return (
        <div className='DataGridContainer'>
            <h1 className={styles.titulo} style={{textAlign: 'center'}}>Productos</h1>
            <div style={{ height: '100', width: '400', overflow: 'scroll' }}>
              
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowHeight={80}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 5 },
                         
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                />
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
            >
                <DialogTitle id="alert-dialog-title">
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¡Atención! ¿Deseas eliminar este producto?
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{margin: 'auto'}}>
                    <Button
                        variant="contained"
                        color="info"
                        sx={{
                            backgroundColor: 'var(--verde-azulado-claro)',
                            color: '#fff',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                              backgroundColor: '#7ed9d0', 
                            },
                          }}
                        onClick={handleClose}>Cancelar</Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{
                            backgroundColor: 'var(--molocoton-oscuro)',
                            color: '#2d6a4f',
                            transition: 'background-color 0.3s',
                            '&:hover': {
                              backgroundColor: '#e68a62', 
                            },
                          }}
                        onClick={handleClose} autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Products










