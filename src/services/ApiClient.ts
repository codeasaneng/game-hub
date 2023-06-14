import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '949fd2d167d34dd19b103fbc3c5e2e6d'
    }
})