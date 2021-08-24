import axios from 'axios';

const loginUser = async (body) => {
    const response = await axios.post('http://localhost:8000/users/login', body);
    return response;
};

export default loginUser;
