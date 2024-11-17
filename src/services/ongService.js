import axios from 'axios';

const API_URL = 'http://localhost:3000/api/ongs';

// Criar uma ONG (POST)
export const createOng = async (formData) => {
    try {
        const response = await axios.post(API_URL, formData);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar ONG:', error.response?.data || error.message);
        throw error;
    }
};

// Buscar todas as ONGs (GET)
export const getAllOngs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar ONGs:', error.response?.data || error.message);
        throw error;
    }
};

// Deletar uma ONG pelo CNPJ (DELETE)
export const deleteOng = async (cnpj) => {
    try {
        const response = await axios.delete(`${API_URL}/${cnpj}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao deletar ONG:', error.response?.data || error.message);
        throw error;
    }
};
