import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 527f7c9e810a42f1c37a43fc4788f889a98fc241919fd7eb8228072fe1ff885a'
    }
});