import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jp-v6f5.vercel.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
