import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/HeaderAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';

function EditMovie() {
    const { idMovie } = useParams();
    const [movie, setMovie] = useState({});

    // state for fields
    const [selectedImg, setSelectedImg] = useState('');

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState([]);
    const [actor, setActor] = useState([]);
    const [description, setDescription] = useState('');
    const [filmUrl, setFilmUrl] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/movies/detailsFilm?id=${idMovie}`)
            .then((res) => setMovie(res.data.movie));
    }, [idMovie]);

    useEffect(() => {
        if (Object.keys(movie).length) {
            setTitle(movie.title);
            setGenre(movie.genre.join(', '));
            setActor(movie.actor.join(', '));
            setDescription(movie.description);
            setFilmUrl(movie.filmUrl);
        }
    }, [movie]);
    // const handleFile = (e) => {
    //     const formData = new FormData();
    //     formData.append('file', selectedImg);
    //     formData.append('upload_preset', 'gymxyjh5');
    //     axios.post('https://api.cloudinary.com/v1_1/bcvt/upload', formData)
    //         .then((res) => setPosterImg(res.data.secure_url));
    // };
    const handleSave = async (e) => {
        e.preventDefault();
        let x;
        const formData = new FormData();
        formData.append('file', selectedImg);
        formData.append('upload_preset', 'gymxyjh5');
        await axios.post('https://api.cloudinary.com/v1_1/bcvt/upload', formData)
            .then((res) => {
                x = res.data.secure_url;
            });
        axios.post(`http://localhost:8000/admin/changeDetailsMovie?idFilm=${idMovie}`, {
            title,
            genre,
            actor,
            description,
            posterImg: x,
            filmUrl
        })
            .then(alert('Sửa thành công'));
    };
    return (
        <div className='bg-admin h-full text-white'>
            <Header />
            <div className='text-white flex w-screen'>
                <SidebarAdmin />
                <div className='pl-24 pt-20 flex flex-col flex-1 items-center'>
                    {Object.keys(movie).length
                        ? (
                            <div className='border-collapse border border-black w-2/3 p-10 bg-white h-screen text-black text-sm'>
                                <div className='flex mb-5'>
                                    <p>Title :</p>
                                    <input onChange={(e) => setTitle(e.target.value)} className='outline-none ml-14 w-2/5 border border-gray-500' type='text' defaultValue={movie.title} />
                                </div>
                                <div className='flex mb-5'>
                                    <p>Thể loại :</p>
                                    <input onChange={(e) => setGenre(e.target.value.split(', '))} className='outline-none ml-8 w-2/5 border border-gray-500' type='text' defaultValue={movie.genre.join(', ')} />
                                </div>
                                <div className='flex mb-5'>
                                    <p>Diễn viên :</p>
                                    <input onChange={(e) => setActor(e.target.value.split(', '))} className='w-2/5 ml-6 border border-gray-500 outline-none' type='text' defaultValue={movie.actor.join(', ')} />
                                </div>
                                <div className='flex mb-5'>
                                    <p>Mô tả :</p>
                                    <textarea onChange={(e) => setDescription(e.target.value)} className='outline-none w-2/5 ml-11 h-20 border border-gray-500'>{movie.description}</textarea>
                                </div>
                                <div className='flex mb-5'>
                                    <p>Poster :</p>
                                    <img className='w-24 ml-10 border border-gray-500' src={movie.posterImg} alt='img' />
                                    <input type='file' onChange={(e) => setSelectedImg(e.target.files[0])} />
                                </div>
                                <div className='flex mb-5'>
                                    <p>URL phim : </p>
                                    <input onChange={(e) => setFilmUrl(e.target.value)} className='outline-none w-2/5 ml-5 border border-gray-500' type='text' defaultValue={movie.filmUrl} />
                                </div>
                                <button className='bg-red-600 rounded p-2 font-semibold text-white' type='button' onClick={handleSave}>Save changes</button>
                            </div>
                        )
                        : ''}
                </div>
            </div>
        </div>
    );
}

export default EditMovie;
