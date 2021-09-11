import axios from 'axios';

const loginUser = async (body) => {
    const response = await axios.post('http://localhost:8000/users/login', body, {
        withCredentials: true
    });
    return response;
};

export const loginFacebookAPI = async (userID, accessToken) => {
    const response = await axios.post('http://localhost:8000/users/loginFacebook', {userID, accessToken}, {
        withCredentials: true
    });
    return response;
};

export const loginGoogleAPI = async (tokenId) => {
    const response = await axios.post('http://localhost:8000/users/loginGoogle', {tokenId}, {
        withCredentials: true
    });
    console.log(response);
    return response;
};

export const signupAPI = async (userName, userEmail, password) => {
    const response = await axios.post('http://localhost:8000/users/signup', {userName, userEmail, password}, {
        withCredentials: true
    });
    return response;
};

export const signoutAPI = async () => {
    const r = await axios.post('http://localhost:8000/users/signout', {
        withCredentials: true
    });
    console.log(r);
};

export default loginUser;
