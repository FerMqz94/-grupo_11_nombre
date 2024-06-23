import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/system";

const Users = () => {
  const [statesUsers, setStatesUsers] = useState({
    loading: true,
    users: [],
    error: "",
  });

  const [dataGrid, setDataGrid] = useState({
    columns: [],
    rows: [],
  });

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  const urlApiUsers = 'http://localhost:3030/api/users'; // Defined outside of useEffect for clarity

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(urlApiUsers);
        const { ok, data = [], msg = null } = await response.json();
console.log(data);
        if (!ok) throw new Error(msg);
        console.log(data);
        setStatesUsers({
          ...statesUsers,
          data,
          loading: false,
        });
      } catch (error) {
        setStatesUsers({
          ...statesUsers,
          error: error.message,
        });
      }
    };

    getUsers();
  }, []);

  useEffect(() => {
    const dataObjUser = statesUsers.users.length
      ? Object.entries(statesUsers.users[0])
      : [];

    // Customize these lists for user data
    const listWrite = ["id", "name", "email"]; // Replace with relevant user properties
    const headerNameTable = {
      id: "ID",
      name: "Name",
      email: "Email",
    
    };

    const columnsFormat = dataObjUser
      .filter(([key, value]) => listWrite.includes(key))
      .map(([key, value]) => ({
        field: key,
        headerName: headerNameTable[key],
        width: 150,
        type: typeof value,
        editable: true, // Adjust as needed
      }));

    // Filter users based on search term
    const filteredUsers = statesUsers.users.filter((user) =>
      Object.values(user)
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    const rowsFormat = filteredUsers.map((users) => ({
      ...user, // Extract all user properties
    }));

    setDataGrid({
      rows: rowsFormat,
      columns: columnsFormat,
    });
  }, [statesUsers.user, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1 className="text-center my-4">LISTA DE USUARIOS</h1>
      <Container maxWidth="lg" className="d-flex justify-content-center">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Buscar usuarios..."
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

export default Users;

        



// import React from 'react'
// import { useEffect, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { Maximize } from '@mui/icons-material';


// function Users() {
//     let [Users, setUsers] = useState([]);

//     const urlApiUsers = 'http://localhost:3030/api/users';

//     useEffect(() => {
//         fetch(urlApiUsers)
//             .then(response => response.json())
//             .then(data => setUsers(data));
//     }, []);

//     console.log(Users);


//     const columns = [
//         { field: 'id', headerName: 'ID', width: 50 },
//         { field: 'name', headerName: 'Nombre', width: 150 },
//         { field: 'lastName', headerName: 'Apellido', width: 150 },
//         { field: 'email', headerName: 'Email', width: 350 },
//         // {
//         //     field: 'photo',
//         //     headerName: 'Imagen',
//         //     width: 200,
//         //     renderCell: (params) => (
//         //         <img src={''} alt={params.row.fullName} style={{ width: 'auto', height: '100%', padding: "7px" }} />
//         //     ),
//         // },
//       ];
      
//       const usersMap = users

//       const rows = usersMap.map(u => (
//         { id: u.id, name: u.name, lastName: u.surname, email: u.email }
//       ))


      


//     return (
//         <div style={{ width: '100%' }}>
//             <h1 style={{textAlign: 'center'}}>Usuarios</h1>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 10 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           sx={{margin: '10px auto', width: '700px', minHeight: '500px', height: 'auto',}}
//         //   checkboxSelection
//         />
//       </div>
//     )
// }

// export default Users


