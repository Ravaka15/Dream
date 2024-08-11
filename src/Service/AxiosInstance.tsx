import axios from 'axios';

// const baseURL =
//     process.env.REACT_APP_MODE === 'prod' ? 'https://staging-api-ivehte.madait-lab.com' : 'https://localhost:8000/';
const baseURL = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default instance;