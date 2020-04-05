import axios from 'axios';
import Cookie from 'js-cookie';

let token = Cookie.get('token');

export function GET(path) {
    return axios.get(`/api/${path}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    })
    //     .catch(error => {
    //     console.log(error);
    //     throw error;
    // });
}

export function POST(path, payload) {
    return axios.post(`/api/${path}`, payload, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}

export function setAuthToken(newToken) {
    token = newToken;
}
