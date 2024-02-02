const API_BASE_URL = 'http://localhost:8000/mbr/api';

const api = {
  async nuevaUnidad(datosUnidad) {
    try {
      const response = await fetch(`${API_BASE_URL}/nueva_unidad/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUnidad),
        credentials: 'include',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al registrar nueva unidad:', error);
      throw error;
    }
  },

  async nuevaArea(datosArea) {
    try {
      const response = await fetch(`${API_BASE_URL}/nueva_area/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosArea),
        credentials: 'include',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al registrar nueva área:', error);
      throw error;
    }
  },

  async obtenerDatos() {
    try {
      const response = await fetch(`${API_BASE_URL}/consultar/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener datos:', error);
      throw error;
    }
  },

  async listarBancos() {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/bancos/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const data = await response.json();
      return data; // Retorna el array de bancos
    } catch (error) {
      console.error('Error al listar bancos:', error);
      throw error;
    }
  },
  
  async agregarBanco(nuevoBanco) {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/bancos/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoBanco),
        credentials: 'include',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al agregar banco:', error);
      throw error;
    }
  },
  

};
  
export default api;
