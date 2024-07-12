import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  {
    name: 'Comprando',
    value: 400,
  },
  {
    name: 'Pendiente',
    value: 300,
  },
  {
    name: 'Cancelados',
    value: 200,
  },
];

const colors = ['#00FF00', '#1d5dec', '#FF0000']; // Green, Yellow, Red

export default class Ventas extends React.Component {
  render() {
    return (
      <PieChart width={730} height={350} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
            const RADIAN = Math.PI / 180;
            const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="#000"
                textAnchor="middle"
                dominantBaseline="central"
              >
                {data[index].value}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend horizontalAlign="middle" align="center" />
      </PieChart>
    );
  }
}
