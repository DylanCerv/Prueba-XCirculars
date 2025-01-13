import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_APP_API_TOKEN}`,
  },
});


export const getProducts = async () => {
  try {
    const response = await apiClient.get('/getProducts');
    return response.data; // Asegúrate de devolver solo el array de productos
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Función para obtener los productos con el límite de página
export const getProductsLimit = async (page: number) => {
  try {
    const response = await apiClient.post('/getProductLimit', {
      page, // Enviar la página como parámetro
    });
    return response.data; // Devolver la respuesta con los productos
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Lanza el error para que pueda ser manejado en el componente
  }
};