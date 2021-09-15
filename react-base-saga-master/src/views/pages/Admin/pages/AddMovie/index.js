import React, { useState } from 'react';
import axios from 'axios';

import Header from '../../components/HeaderAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';

function AddMovie() {
    const [selectedImg, setSelectedImg] = useState('');

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState([]);
    const [actor, setActor] = useState([]);
    const [description, setDescription] = useState('');
    const [filmUrl, setFilmUrl] = useState('');

    // const handleFile = async () => {
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
                console.log(x);
            });
        axios.post('http://localhost:8000/admin/addMovie', {
            actor,
            genre,
            title,
            posterImg: x,
            description,
            filmUrl
        })
            .then(alert('Thêm phim thành công'));
    };
    return (
        <div className='bg-admin h-full text-white'>
            <Header />
            <div className='text-white flex w-screen'>
                <SidebarAdmin />
                <div className='pl-24 pt-20 flex flex-col flex-1 items-center'>
                    <form onSubmit={handleSave} className='border-collapse border border-black w-2/3 p-10 bg-white h-screen text-black text-sm'>
                        <div className='flex mb-5'>
                            <p>Title :</p>
                            <input onChange={(e) => setTitle(e.target.value)} className='outline-none w-2/5 ml-14 border border-gray-500' type='text' required />
                        </div>
                        <div className='flex mb-5'>
                            <p>Thể loại :</p>
                            <input onChange={(e) => setGenre(e.target.value.split(', '))} className='outline-none w-2/5 ml-8 border border-gray-500' type='text' required />
                        </div>
                        <div className='flex mb-5'>
                            <p>Diễn viên :</p>
                            <input onChange={(e) => setActor(e.target.value.split(', '))} className='outline-none w-2/5 ml-6 border border-gray-500' type='text' required />
                        </div>
                        <div className='flex mb-5'>
                            <p>Mô tả :</p>
                            <textarea onChange={(e) => setDescription(e.target.value)} className='outline-none w-2/5 ml-11 h-20 border border-gray-500' required />
                        </div>
                        <div className='flex mb-5'>
                            <p>Poster :</p>
                            <input type='file' onChange={(e) => setSelectedImg(e.target.files[0])} className='outline-none ml-10' required />
                        </div>
                        <div className='flex mb-5'>
                            <p>URL phim : </p>
                            <input onChange={(e) => setFilmUrl(e.target.value)} className='outline-none w-2/5 ml-4 border border-gray-500' type='text' required />
                        </div>
                        <button className='bg-red-600 rounded p-2 font-semibold text-white' type='submit'>Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddMovie;
