import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Header from '../../components/HeaderAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';

function MovieAdmin() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/admin/allMovies')
            .then((res) => setMovies(res.data));
    }, []);

    const history = useHistory();

    const handleDetail = (e) => {
        e.preventDefault();
        history.push(`/admin/editMovie/${e.target.value}`);
        console.log(e.target.value);
    };

    return (
        <div className='bg-admin'>
            <Header />
            <div className='text-white flex w-screen'>
                <SidebarAdmin />
                <div className='pl-24 pt-20 flex flex-col flex-1 items-center'>
                    <button type='button' className='bg-blue-600 rounded p-2'>Thêm phim mới</button>
                    <table className='border-collapse border border-black w-2/3 bg-white text-black text-sm'>
                        <tr className='border border-black bg-yellow-100'>
                            <th className='border border-black'>Tên phim</th>
                            <th className='border border-black'>Chỉnh sửa</th>
                        </tr>
                        {movies.map((movie) => (
                            <tr className='border border-black'>
                                <td className='border-black w-2/3 text-center'>{movie.title}</td>
                                <td className='border border-black flex justify-center'>
                                    <button onClick={handleDetail} className='bg-blue-600 rounded w-16 py-3' value={movie._id} type='button'>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    );
}

export default MovieAdmin;
