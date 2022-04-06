import axios fomr 'axios'
const tmdb = axios.create({
    baseURL: 'https://api.themoviedb.org/4/',
    headers:{
        'Authorization':'',
        'Content-Type':'application/json;charset=utf-8'
    }
})

export default tmdb