import { useState, useEffect } from 'react';
import ProductTable from './components/ProductTable';
import productosData from './data/productos.json';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga desde una API
    const cargarProductos = () => {
      setTimeout(() => {
        setProductos(productosData);
        setLoading(false);
      }, 800); // Simula un pequeño retraso de carga
    };

    cargarProductos();
  }, []);

  return (
    <div className="app">
      <h1>Gestión de Inventario</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ProductTable productos={productos} />
      )}
    </div>
  );
}

export default App;