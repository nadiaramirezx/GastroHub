import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',  // Cambia este puerto si tu backend está en otro
  timeout: 5000,  // Tiempo máximo para esperar una respuesta
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
