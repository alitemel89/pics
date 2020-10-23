import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID TmNRJbHn2mdjr2rIPtoOu5eCejK1LEIWfiec_KscoP8'
    }
})