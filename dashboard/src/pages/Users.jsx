import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
// import '../assets/css/products.css'
import { Button } from '@mui/material';
import styles from '../../public/css/Users/Users.module.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useParams } from 'react-router-dom';


const Users = () => {
  let [users, setUsers] = useState([])

const [open, setOpen] = useState(false);

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const urlApiUsers = 'http://localhost:3030/api/users'

useEffect(() => {
    fetch(urlApiUsers)
        .then(response => response.json())
        .then(data => {setUsers(data)  
})
}, [])

const infoUsers = users.data || []
const listUsers = infoUsers.rows || []
console.log(listUsers)
//const listInfoUsers = infoUsers.rows
//console.log(listInfoUsers)

function handleButtonDetail(id) {
  const url = 'http://localhost:3030/api/users/detail' + id
  window.open(url, '_blank')
}


const handleButtonEdit = (id) => {
 navigate(`/api/users/detail/edit/${id}`)
}

function handleButtonDelete(id) {

}

let rows = listUsers.map(({id, name, username, email, avatar, rols}) => ({
    id: id,
    name: name,
    username: username, 
    email: email,
    avatar: avatar,
    rol: rols.name
}))

console.log(rows)

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'Nombre', flex: 1 },
  { field: 'username', headerName: 'Nombre de usuario', width: 100 },
  { field: 'email', headerName: 'Email', flex: 1 },
  {field: 'rol', headerName: 'Rol', width: 80,},
  {
      field: 'avatar',
      headerName: 'Imagen',
      width: 200,
      renderCell: (params) => (
          <img src={params.value.toString()} alt={params.row.fullName} style={{ width: 'auto', height: '100%', padding: "7px", borderRadius: '50%' }} />
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
            <h1 className={styles.titulo} style={{textAlign: 'center'}}>Usuarios</h1>
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
                        ¿Estas Seguro que deseas eliminar este usuario?
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

export default Users;