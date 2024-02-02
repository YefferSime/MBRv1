import React, { useState, useEffect } from 'react';
import api from '../api';

const ListaBancos = () => {
  const [bancos, setBancos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.listarBancos();
        setBancos(response);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleEnlaceClic = (id) => {
    console.log(`Se hizo clic en el enlace del banco con ID: ${id}`);
    // Agrega aquí cualquier lógica adicional que desees realizar al hacer clic en el enlace
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Lista de Bancos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Moneda</th>
            <th>Tipo de Cuenta</th>
            {/* Agrega más encabezados según la estructura de tus datos */}
          </tr>
        </thead>
        <tbody>
          {bancos.map((banco) => (
            
            <tr  key={banco.id}>
              <td><a href={`/editar/${banco.id}`}>{banco.id}</a></td>
              <td>{banco.nombre}</td>
              <td>{banco.moneda}</td>
              <td>{banco.tipo_cuenta}</td>
              {/* Agrega más celdas según la estructura de tus datos */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaBancos;
