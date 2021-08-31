import axios from 'axios';

const getMovieAPI = async ({genre}) => {
    const response = await axios.get(`http://localhost:8000/movies/filmByCategory?genre=${genre}`);
    return response;
};

export default getMovieAPI;
