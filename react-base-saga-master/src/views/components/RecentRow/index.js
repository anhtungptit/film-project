import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RecentRow() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        // setMovies(JSON.parse(localStorage.getItem('login')).history);
        const idUser = JSON.parse(localStorage.getItem('login'))._id;
        axios.get(`http://localhost:8000/users/getUserHistory?idUser=${idUser}`)
            .then((res) => setMovies(res.data));
    }, []);
    return (
        <div className={`w-screen px-9 text-white pb-7 ${!movies ? 'hidden' : ''}`}>
            <p className='text-3xl font-bold mb-3'>Recent</p>
            <div className='flex w-full'>
                {movies.map((movie) => (
                    <Link to={`/detailFilm/${movie._id}`} key={movie._id} className='w-img mr-6 cursor-pointer'>
                        <img src={movie.posterImg} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RecentRow;
