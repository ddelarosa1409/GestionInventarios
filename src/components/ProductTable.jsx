import React from 'react';
import '../styles/ProductTable.css';

function ProductTable({ productos }) {
  return (
    <div className="table-container">
      <h2>Catálogo de Productos</h2>
      <table className="productos-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Existencia</th>
            <th>Precio con Descuento</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => {
            const precioConDescuento = producto.precio * (1 - producto.descuento / 100);
            
            return (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>${producto.precio.toFixed(2)}</td>
                <td>{producto.descuento}%</td>
                <td>{producto.existencia}</td>
                <td>${precioConDescuento.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;