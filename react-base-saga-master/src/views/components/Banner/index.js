import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function Banner() {
    const [filmForBanner, setFilmForBanner] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/movies/filmForBanner', {
            withCredentials: true
        })
            .then((res) => setFilmForBanner(res.data));
    }, []);
    return (
        <div className='bg-banner-background h-screen bg-cover flex flex-col justify-end text-white cursor-pointer'>
            <div className='ml-28 w-6/12'>
                <p className='text-6xl font-semibold'>{filmForBanner.title}</p>
                <p className='text-xl'>{filmForBanner.description}</p>
            </div>
            <div className='background_fadeBottom' />
        </div>
    );
}

export default Banner;
