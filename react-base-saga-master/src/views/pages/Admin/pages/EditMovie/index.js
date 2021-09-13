import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/HeaderAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';

function EditMovie() {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:8000/movies/detailsFilm?id=${idMovie}`)
            .then((res) => setMovie(res.data.movie));
    }, [idMovie]);
    const theLoai1 = ['fiction', 'mystery', 'war', 'comedy', 'horror'];
    const theLoai2 = ['documentary', 'romance', 'action', 'crime', 'animated'];
    const theLoai3 = ['music', 'fantasy', 'adventure', 'thriller', 'drama'];
    return (
        <div className='bg-admin h-full text-white'>
            <Header />
            <div className='text-white flex w-screen'>
                <SidebarAdmin />
                <div className='pl-24 pt-20 flex flex-col flex-1 items-center'>
                    {Object.keys(movie).length
                        ? (
                            <div className='border-collapse border border-black w-2/3 bg-white h-screen text-black text-sm'>
                                <div className='flex'>
                                    <p>Title :</p>
                                    <input className='w-max' type='text' value={movie.title} />
                                </div>
                                <div>
                                    <p>Thể loại :</p>
                                    <div className='flex'>
                                        <div className='flex flex-col'>
                                            {theLoai1.map((i) => (
                                                <div>
                                                    <input type='checkbox' />
                                                    <lable>{i}</lable>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex flex-col'>
                                            {theLoai2.map((i) => (
                                                <div>
                                                    <input type='checkbox' />
                                                    <lable>{i}</lable>
                                                </div>
                                            ))}
                                        </div>
                                        <div className='flex flex-col'>
                                            {theLoai3.map((i) => (
                                                <div>
                                                    <input type='checkbox' />
                                                    <lable>{i}</lable>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <p>Diễn viên :</p>
                                    <input className='w-2/3 outline-none' type='text' value={movie.actor.join(', ')} />
                                </div>
                                <div>
                                    <p>Mô tả: </p>
                                    <textarea className='w-2/3 h-20'>{movie.description}</textarea>
                                </div>
                                <div>
                                    <p>Poster :</p>
                                    <img className='w-24' src={movie.posterImg} alt='img' />
                                </div>
                            </div>
                        )
                        : ''}
                </div>
            </div>
        </div>
    );
}

export default EditMovie;
