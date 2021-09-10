import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/HeaderAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';

function MovieAdmin() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/admin/allMovies')
            .then((res) => setMovies(res.data));
    }, []);

    return (
        <div className='bg-admin'>
            <Header />
            <div className='text-white flex w-screen'>
                <SidebarAdmin />
                <div className='pl-24 pt-20 flex flex-col flex-1 items-center'>
                    <table className='border-black w-2/3 bg-white text-black text-sm'>
                        <tr>
                            <th>Tên phim</th>
                            <th>Diễn viên</th>
                        </tr>
                        {movies.map((movie) => (
                            <tr>
                                <td>{movie.title}</td>
                                <td>{movie.actor.toString()}</td>
                                <td>
                                    <button type='button'>Detail</button>
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
