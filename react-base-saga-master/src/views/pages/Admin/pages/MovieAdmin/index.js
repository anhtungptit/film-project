import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Header from '../../components/HeaderAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';

function MovieAdmin() {
    const [movies, setMovies] = useState([]);
    const [checkUpdate, setCheckUpdate] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/admin/allMovies')
            .then((res) => setMovies(res.data));
    }, [checkUpdate]);

    const history = useHistory();

    const handleDetail = (e) => {
        e.preventDefault();
        history.push(`/admin/editMovie/${e.target.value}`);
        console.log(e.target.value);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.get(`http://localhost:8000/admin/removeFilm?idFilm=${e.target.value}`)
            .then(alert('Xóa phim thành công'));
        setCheckUpdate(!checkUpdate);
    };

    const handleAddMovie = () => {
        history.push('/admin/addMovie');
    };

    return (
        <div className='bg-admin'>
            <Header />
            <div className='text-white flex w-screen'>
                <SidebarAdmin />
                <div className='pl-24 pt-20 flex flex-col flex-1 items-center'>
                    <button onClick={handleAddMovie} type='button' className='bg-blue-600 rounded p-2'>Thêm phim mới</button>
                    <table className='border-collapse border border-black w-2/3 bg-white text-black text-sm'>
                        <tr className='border border-black bg-yellow-100'>
                            <th className='border border-black'>Tên phim</th>
                            <th className='border border-black'>Chức năng</th>
                        </tr>
                        {movies.map((movie) => (
                            <tr className='border border-black'>
                                <td className='border-black w-2/3 text-center py-2'>{movie.title}</td>
                                <td className='border border-black flex justify-center py-2'>
                                    <button onClick={handleDetail} className='text-white font-semibold bg-blue-600 rounded w-16 py-2' value={movie._id} type='button'>Edit</button>
                                    <button onClick={handleDelete} className='text-white font-semibold bg-red-600 rounded w-16 py-2 ml-1' value={movie._id} type='button'>Delete</button>
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
