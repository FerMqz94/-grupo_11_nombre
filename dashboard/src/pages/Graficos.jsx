import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import styles from "../../public/css/Graficos/Graficos.module.css"

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
  const { chartId } = useParams();

  const navigate = useNavigate();

  const handleBarClick = (data) => {
   
    console.log('Bar clicked:', data);

    
    if (data.name) {
      navigate(`/details/${data.name}`); 
    }
  };

  return (
    <div><h1 className={styles.titulo} style={{textAlign: 'center'}}>Grafico de productos</h1>
<br />
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




