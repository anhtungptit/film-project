import axios from 'axios';

const loginAdminAPI = async ({loginID, password}) => {
    const response = await axios.post('http://localhost:8000/admin', {loginID, password}, {
        withCredentials: true
    });
    return response;
};

export const logoutAdminAPI = async () => {
    const response = await axios.post('http://localhost:8000/admin/signout', {withCredentials: true});
    console.log(response);
};

export default loginAdminAPI;
