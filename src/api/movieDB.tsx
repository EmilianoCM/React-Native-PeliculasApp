import axios from 'axios';

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'e5d376f4b3c006fdadfce0e6006cfea3',
        language:'es-ES'
    }
});

export default movieDB;


