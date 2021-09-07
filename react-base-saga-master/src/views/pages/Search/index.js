import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header';

function Search() {
    const { movieName } = useParams();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/movies/filmBySearch?movieName=${movieName}`)
            .then((res) => setMovies(res.data));
    }, [movieName]);
    const [showOption, setShowOption] = useState(true);
    const [showUser, setShowUser] = useState(false);
    return (
        <div className='bg-banner w-screen h-screen text-white'>
            <Header showOption={showOption} setShowOption={setShowOption} showUser={showUser} setShowUser={setShowUser} />
            <div className={`${showOption ? 'invisible' : ''} flex justify-between w-2/6 h-1/5 bg-black fixed top-14 left-40 z-50 px-6 py-2 bg-opacity-70 text-white border border-gray-700`}>
                <div className='flex flex-col'>
                    <Link to='/category/fiction' className='hover:underline'>Fiction</Link>
                    <Link to='/category/mystery' className='hover:underline'>Mystery</Link>
                    <Link to='/category/war' className='hover:underline'>War</Link>
                    <Link to='/category/comedy' className='hover:underline'>Comedy</Link>
                    <Link to='/category/horror' className='hover:underline'>Horror</Link>
                </div>
                <div className='flex flex-col'>
                    <Link to='/category/music' className='hover:underline'>Music</Link>
                    <Link to='/category/fantasy' className='hover:underline'>Fantasy</Link>
                    <Link to='/category/documentary' className='hover:underline'>Documentary</Link>
                    <Link to='/category/romance' className='hover:underline'>Romance</Link>
                    <Link to='/category/action' className='hover:underline'>Action</Link>
                </div>
                <div className='flex flex-col'>
                    <Link to='/category/crime' className='hover:underline'>Crime</Link>
                    <Link to='/category/animated' className='hover:underline'>Animated</Link>
                    <Link to='/category/adventure' className='hover:underline'>Adventure</Link>
                    <Link to='/category/thriller' className='hover:underline'>Thriller</Link>
                    <Link to='/category/drama' className='hover:underline'>Drama</Link>
                </div>
            </div>
            <p className='pt-20 flex justify-center text-5xl font-semibold'>
                KẾT QUẢ TÌM KIẾM:
                {movieName.toUpperCase()}
            </p>
            <div className='flex flex-wrap pl-24 pr-10 pt-10'>
                {movies.map((movie) => (
                    <Link to={`/detailFilm/${movie._id}`} className='w-img mr-6 mb-6 cursor-pointer'>
                        <img src={movie.posterImg} alt='poster' />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Search;
