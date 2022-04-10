import axios from 'axios'
const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-type': 'application/json;charset=utf-8',
        'Authorization': ''
    }
})

export default tmdb