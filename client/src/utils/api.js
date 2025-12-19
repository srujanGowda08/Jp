import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://jp-e761exoo8-srujan-s-projects.vercel.app/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
