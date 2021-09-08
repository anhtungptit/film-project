import axios from 'axios';

export const getDetailsFimAPI = async (id) => {
    const response = await axios.get(`http://localhost:8000/movies/detailsFilm?id=${id}`, {withCredentials: true});
    return response;
};

export const addCommentAPI = async ({id, comment}) => {
    const response = await axios.post(`http://localhost:8000/movies/addComment?id=${id}`, {comment}, {withCredentials: true});
    return response;
};

export default getDetailsFimAPI;
