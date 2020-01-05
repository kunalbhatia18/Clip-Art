import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID f044f37c94782c7a09af1e51e0edae5665de475efc12be190db43e42df5fcb1d'
    }
});

