import React from "react";
import { Link } from "react-router-dom";

export const TableRow = ({ id,title, duration, rating, genre, awards }) => {
  return (
    <tr>
      <td><Link to={`/productos/${id}`}>{id}</Link></td>
      <td><Link to={`/usuarios/${id}`}>{id}</Link></td>
      <td><Link to={`/graficos/${id}`}>{id}</Link></td>
      <td>Opcion</td>
      <td><h3>Opcion 1</h3></td>
      <td><h3>Opcion 2</h3></td>
      <td><h3>Opcion 3</h3></td>
      <td>
        <ul>
          <h3>map</h3>
        </ul>
      </td>
      <td>Opcion 4</td>
    </tr>
  );
};
