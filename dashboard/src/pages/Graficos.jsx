// import { useNavigate, useParams } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';



// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400} ];
// return(
// const renderBarChart = =>(
//     <BarChart width={600} height={300} data={data}>
//       <XAxis dataKey="name" stroke="#8884d8" />
//       <YAxis />
//       <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
//       <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
//       <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
//       <Bar dataKey="uv" fill="#8884d8" barSize={30} />
//     </BarChart>
//   );
// )
// //   return renderBarChart;


//   export default enderBarChart
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [{ name: 'Remera',  uv: 400, pv: 2400, amt: 2400 },
    { name: 'shorts',  uv: 200, pv: 2400, amt: 2400 },
    { name: 'Campera',  uv: 123, pv: 2400, amt: 2400 },
    { name: 'Vestido slim',  uv: 140, pv: 2400, amt: 2400 },
    { name: 'Chaleco',  uv: 80, pv: 2400, amt: 2400 },
    { name: 'Joggin cargo',  uv: 240, pv: 2400, amt: 2400 },
    { name: 'camisa',  uv: 199, pv: 2400, amt: 2400 },
    { name: 'Abrigos',  uv: 340, pv: 2400, amt: 2400 },
    { name: 'Pantalones',  uv: 380, pv: 2400, amt: 2400 }];

const BarChartComponent = () => {
  const { chartId } = useParams(); // Assuming a dynamic chart ID in the URL

  const navigate = useNavigate();

  const handleBarClick = (data) => {
    // Handle bar click event, potentially for navigation or other actions
    console.log('Bar clicked:', data);

    // Example navigation to a detail page based on the clicked bar's data
    if (data.name) {
      navigate(`/details/${data.name}`); // Replace with your desired URL pattern
    }
  };

  return (
    <div><h1>graficos de productos </h1><br />
    <BarChart width={900} height={300} data={data} onClick={handleBarClick}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
      <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="uv" fill="#8884d8" barSize={30} />
    </BarChart>
    </div>
  );
};

export default BarChartComponent;




// import React from 'react';
// const data =[
//     {
//         "id": 1,
//         "name": "Remera",
//         "description": "Remera de algodón básica, usable en cualquier situación",
//         "featuredDescription": "Una remera que se va a convertir en tu aliada día a día",
//         "category": "Remeras",
//         "price": 8000,
    
    
//     },
//     {
//         "id": 2,
    
//         "name": "Campera/camisa ondera",
//         "description": "Campera de Jean no binarie, holgada y con mucho estilo",
//         "featuredDescription": "Una prenda para ponerle onda a tu rutina de todos los días",
//         "category": "Abrigos",
//         "price": 42000,
    
    
//     },
//     {
//         "id": 3,
    
//         "name": "Joggin cargo",
//         "description": "Joggin super comodo, para que te sientas libre y comodx siempre",
//         "featuredDescription": "¡Sentite comodx y urbanx!",
//         "category": "Pantalones y shorts",
//         "price": 18000,
    
    
//     },
//     {
//         "id": 4,
    
//         "name": "Remera overzise",
//         "description": "Remera oversize super olgada",
//         "featuredDescription": "Te sentirás libre con esta prenda super comoda",
//         "category": "Remeras",
    
//         "price": 17000,
    
//     },
//     {
//         "id": 5,
    
//         "name": "Pantalon a cuadros",
//         "description": "Pantalón a cuadros edgy y con mucho estil",
//         "featuredDescription": "Descubrirás un estilo único e innovador con esta prenda zinke",
//         "category": "Pantalones y shorts",
//         "price": 13500,
    
    
//     },
//     {
//         "id": 6,
    
//         "name": "Chaleco de jean",
//         "description": "Chaleco de jean rockero y con estilo",
//         "featuredDescription": "Sin mangas y con mucha onda, este chaleco te dará el estilo que siempre buscaste",
//         "category": "Abrigos",
//         "price": 12500,
    
    
//     },
//     {
//         "id": 7,
    
//         "name": "Short jogging",
//         "description": "Jogging de algodón que te permitirá realizar mas comodx todas tus actividades",
//         "featuredDescription": "Jogging super comodo para tu rutina",
//         "category": "Pantalones y shorts",
//         "price": 11500,
    
    
//     },
//     {
//         "id": 8,
    
//         "name": "Vestido slim fit",
//         "description": "Vestido pegado al cuerpo de algodon y spandex super comodo",
//         "featuredDescription": "En este verano sentite linx, comodx y libre con tu cuerpo",
//         "category": "",
//         "price": 22000,
    
//     }
// ]
// <BarChart width={730} height={250} data={data}>
//   <CartesianGrid strokeDasharray="3 3" />
//   <XAxis dataKey="name" />
//   <YAxis />
//   <Tooltip />
//   <Legend />
//   <Bar dataKey="pv" fill="#8884d8" />
//   <Bar dataKey="uv" fill="#82ca9d" />
// </BarChart>




