import axios from 'axios';
const token = localStorage.getItem('jwttoken');
const http_create = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/api/v1`,
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

http_create.interceptors.request.use(
    (config) => {
        // if (typeof window !== 'undefined') {
        const token = localStorage.getItem('jwttoken');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        // }
        return config;
    },
    (error) => {
        console.log(error)
        return Promise.reject(error);
    }
);

const http = {
    get: http_create.get,
    post: http_create.post,
    put: http_create.put,
    delete: http_create.delete,
};
export default http;