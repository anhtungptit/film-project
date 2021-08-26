import axios from 'axios';

const loginUser = async (body) => {
    const response = await axios.post('http://localhost:8000/users/login', body, {withCredentials: true});
    return response;
};

export const loginFacebookAPI = async (userID, accessToken) => {
    const response = await axios.post('http://localhost:8000/users/loginFacebook', {userID, accessToken}, {withCredentials: true});
    return response;
};

export const loginGoogleAPI = async (tokenId) => {
    const response = await axios.post('http://localhost:8000/users/loginGoogle', {tokenId}, {withCredentials: true});
    return response;
};

export default loginUser;
