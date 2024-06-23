// import React, { useState, useEffect } from "react";
// import "../assets/css/App.css";
// import { DataGrid } from "@mui/x-data-grid";
// import { Container } from "@mui/system";

// const Product = () => {
//   const [statesProducts, setStatesProducts] = useState({
//     loading: true,
//     products: [],
//     error: "",
//   });

//   const [dataGrid, setDataGrid] = useState({
//     columns: [],
//     rows: [],
//   });

//   const [searchTerm, setSearchTerm] = useState(""); // State for search term

//   useEffect(() => {
//     const endpoint = "http://localhost:3030/api/admin/products";

//     const getProducts = async () => {
//       try {
//         const response = await fetch(endpoint);
//         const { ok, products = [], msg = null } = await response.json();

//         if (!ok) throw new Error(msg);

//         setStatesProducts({
//           ...statesProducts,
//           products,
//           loading: false,
//         });
//       } catch (error) {
//         setStatesProducts({
//           ...statesProducts,
//           error: error.message,
//         });
//       }
//     };

//     getProducts();
//   }, []);

//   useEffect(() => {
//     const dataObjProduct = statesProducts.products.length
//       ? Object.entries(statesProducts.products[0])
//       : [];

//     const listWrite = ["id", "name", "price", "description"];
//     const headerNameTable = {
//       id: "ID",
//       name: "NOMBRE",
//       price: "PRECIO",
//       description: "DESCRIPCION",
//     };

//     const columnsFormat = dataObjProduct
//       .filter(([key, value]) => listWrite.includes(key))
//       .map(([key, value]) => ({
//         field: key,
//         headerName: headerNameTable[key],
//         width: 150,
//         type: typeof value,
//         editable: true, // Adjust as needed
//       }));

//     // Filter products based on search term
//     const filteredProducts = statesProducts.products.filter((product) =>
//       Object.values(product)
//         .join("")
//         .toLowerCase()
//         .includes(searchTerm.toLowerCase())
//     );

//     const rowsFormat = filteredProducts.map((product) => ({
//       ...product, // Extract all product properties
//     }));

//     setDataGrid({
//       rows: rowsFormat,
//       columns: columnsFormat,
//     });
//   }, [statesProducts.products, searchTerm]);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <>
//       <h1 className="text-center my-4">LISTA DE PRODUCTOS</h1>
//       <Container maxWidth="lg" className="d-flex justify-content-center">
//         <div className="mb-3">
//           <input
//             type="text"
//             placeholder="Buscar productos..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="w-100" style={{ height: 400 }}>
//           <DataGrid
//             rows={dataGrid.rows}
//             columns={dataGrid.columns}
//             initialState={{
//               pagination: {
//                 paginationModel: { page: 0, pageSize: 5 },
//               },
//             }}
//             pageSizeOptions={[5, 10]}
//             checkboxSelection
//           />
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Product;




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

function Products() {

    const navigate = useNavigate()

    let [products, setProducts] = useState([])

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const urlApiProducts = 'http://localhost:3030/api/admin/products'
    const urlApiImage = 'http://localhost:3030/api/producto-detalle/image/image-1710443655501.png'

    useEffect(() => {
        fetch(urlApiProducts)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const prods = products.products || []

    function handleButtonDetail(id) {
        const url = 'http://localhost:3030/api/producto-detalle' + id
        window.open(url, '_blank')
    }


    const handleButtonEdit = (id) => {
        navigate(`/admin/products/edit/${id}`)
    }

    function handleButtonDelete(id) {

    }


    let rows = prods.map(p => ({
        id: p.id,
        name: p.name,
        price: `$ ${p.price}`,

        category: p.category.name,
        photo: urlApiImage 
    }))

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
                        onClick={() => handleButtonDetail(params.row.id)}
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
            <h1 style={{textAlign: 'center'}}>Productos</h1>
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
                        Estas Seguro que deseas eliminar este producto?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={handleClose}>Cancelar</Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={handleClose} autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Products



