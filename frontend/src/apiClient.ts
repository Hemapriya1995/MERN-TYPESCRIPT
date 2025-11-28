import axios from 'axios';


const apiClient = axios.create({
    baseURL:
    import.meta.env.MODE === 'development' ? 'http://localhost:5000' : '/',
    headers: {
        'Content-type': 'application/json',
    },
});

export default apiClient;