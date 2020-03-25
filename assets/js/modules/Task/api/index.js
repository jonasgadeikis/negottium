import axios from 'axios';

export function GET(path, token) {

}

export function POST(path, payload, token) {
    return axios.post(`/api/task/${path}`, payload,{
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
}