import React, { useState, useEffect } from "react";
import "../assets/css/App.css";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";

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

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  useEffect(() => {
    const endpoint = "http://localhost:3030/api/admin/products";

    const getProducts = async () => {
      try {
        const response = await fetch(endpoint);
        const { ok, products = [], msg = null } = await response.json();

        if (!ok) throw new Error(msg);

        setStatesProducts({
          ...statesProducts,
          products,
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
    const dataObjProduct = statesProducts.products.length
      ? Object.entries(statesProducts.products[0])
      : [];

    const listWrite = ["id", "name", "price", "description"];
    const headerNameTable = {
      id: "ID",
      name: "NOMBRE",
      price: "PRECIO",
      description: "DESCRIPCION",
    };

    const columnsFormat = dataObjProduct
      .filter(([key, value]) => listWrite.includes(key))
      .map(([key, value]) => ({
        field: key,
        headerName: headerNameTable[key],
        width: 150,
        type: typeof value,
        editable: true, // Adjust as needed
      }));

    // Filter products based on search term
    const filteredProducts = statesProducts.products.filter((product) =>
      Object.values(product)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    const rowsFormat = filteredProducts.map((product) => ({
      ...product, // Extract all product properties
    }));

    setDataGrid({
      rows: rowsFormat,
      columns: columnsFormat,
    });
  }, [statesProducts.products, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1 className="text-center my-4">LISTA DE PRODUCTOS</h1>
      <Container maxWidth="lg" className="d-flex justify-content-center">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
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

export default Product;




