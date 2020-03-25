import axios from 'axios';

export function GET(path, token) {
    return axios.get(`/api/${path}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export function POST(path, payload, token) {
    return axios.post(`/api/${path}`, payload, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}