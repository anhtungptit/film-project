import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SidebarAdmin from '../../components/SidebarAdmin';
import Header from '../../components/HeaderAdmin';

function UserAdmin() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/admin/getUser', {withCredentials: true})
            .then((res) => setUsers(res.data));
    }, []);

    // useEffect(() => {
    //     console.log(users);
    // }, [users]);

    const handleBlock = async (e) => {
        await axios.get(`http://localhost:8000/admin/blockUser?id=${e.target.value}`);
        await axios.get('http://localhost:8000/admin/getUser', {withCredentials: true})
            .then((res) => setUsers(res.data));
    };

    const handleUnblock = async (e) => {
        await axios.get(`http://localhost:8000/admin/unblockUser?id=${e.target.value}`);
        await axios.get('http://localhost:8000/admin/getUser', {withCredentials: true})
            .then((res) => setUsers(res.data));
    };

    return (
        <div className='bg-admin h-screen'>
            <Header />
            <div className='text-white flex w-screen'>
                <SidebarAdmin />
                <div className='pl-24 pt-20 flex flex-col flex-1 items-center'>
                    <table className='border-collapse border-black w-2/3 bg-white text-black text-sm'>
                        <tr>
                            <th>Username</th>
                            <th>User email</th>
                        </tr>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td className='text-center'>{user.userName}</td>
                                <td className='text-center'>{user.userEmail}</td>
                                {user.isActive
                                    ? (
                                        <td className='text-center'>
                                            <button type='button' onClick={handleBlock} value={user._id} className='bg-red-600 rounded w-16 py-3'>Block</button>
                                        </td>
                                    )
                                    : (
                                        <td className='text-center'>
                                            <button type='button' onClick={handleUnblock} value={user._id} className='bg-blue-300 rounded w-16 py-3'>Unblock</button>
                                        </td>
                                    )}

                            </tr>
                        ))}
                    </table>

                </div>
            </div>
        </div>
    );
}

export default UserAdmin;
