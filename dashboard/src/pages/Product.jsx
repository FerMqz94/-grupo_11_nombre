import React, { useEffect, useState } from "react";
import "../assets/css/App.css";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";
// import PropTypes from 'prop-types'
// import { TableHead } from '../components/Products/TableHead';

const Product = () => {
  const [statesProducts, setStatesProducts] = useState({
    loading: true,
    products: [],
    error: "",
  });

  const [dataGrid, setDataGrid] = useState({
    columns: [],
    rows: [],
  });

  useEffect(() => {
    const endpoint = "http://localhost:3030/api/admin/products";
    const getProducts = async () => {
      try {
        const {
          ok,
          products = [],
          msg = null,
        } = await fetch(endpoint).then((res) => res.json());
        // quizas no funcione

        if (!ok) throw new Error(msg);

        ok &&
        setStatesProducts({
            ...statesProducts,
            products: products,
            loading: false,
          });
      } catch (error) {
        setStatesProducts({
          ...statesProducts,
          error: error.message,
        });
      }
    };

    getProducts();
  }, []);

  useEffect(() => {
    
    const dataObjProduct = Object.entries(statesProducts.products.length ? statesProducts.products[0] : {})
   
    const listWrite = ["id","name","price","description"];
    const headerNameTable = {id:"ID",name:"NOMBRE",price:"PRECIO",description:"DESCRIPCION"}
    const columnsFormat = dataObjProduct
    .filter(([key,value]) => listWrite.includes(key))

    .map(([key, value]) => {
      return {
        field: key,
        headerName: headerNameTable[key],
        width: 150,
        type: typeof value,
        editable: true
      }
    })
    
    const rowsFormat = [];
    statesProducts.products
    .forEach((product) => {
      const objData = {};
      Object.entries(product).forEach(([key,value]) => {
        if(listWrite.includes(key)) {
          objData[key] = value;
        }
      });
      rowsFormat.push(objData);
    })

    setDataGrid({
      rows: rowsFormat,
      columns: columnsFormat
    })    
  }, [statesProducts.products]);


  const rowProduct = [
    {
      id: 1,
      name: "Remera",
      price: 1000,
      description: "Descripcion de la remera"
    },
  ];

  const columnsProducts = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
      type: "number"
    },
    {
      field: "title",
      headerName: "Titulo",
      width: 150,
      type: "string"
    },
  ];



  return (
    <>
    <h1 className="text-center my-4">LISTA DE PRODUCTOS</h1>
    <Container maxWidth="lg" className="d-flex justify-content-center">
      <div className="w-100" style={{ height: 400 }}>
        <DataGrid
          rows={dataGrid.rows}
          columns={dataGrid.columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </Container>
  </>
  );
};

Product.propTypes = {};
export default Product;
