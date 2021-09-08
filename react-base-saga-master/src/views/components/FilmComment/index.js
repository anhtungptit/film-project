import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import { movieActions } from '../../../state/modules/movie';

function FilmComment() {
    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [comment, setComment] = useState([]);
    const [reload, setReload] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/movies/getComment?id=${id}`)
            .then((res) => setComment(res.data.reviews));
    }, [id, reload]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setReload(!reload);
        if (type && localStorage.getItem('login')) {
            dispatch(movieActions.addComment({id,
                comment: {
                    name: JSON.parse(localStorage.getItem('login')).username,
                    cmt: type
                }}));
        }
        setType('');
    };

    const history = useHistory();
    const handleLogin = () => {
        history.push('/login');
    };
    return (
        <div className='w-full mt-10 pr-10'>
            <p className='text-2xl font-bold mb-4'>Bình luận</p>
            {localStorage.getItem('login')
                ? (
                    <form className='w-full bg-comment px-5 pt-10 pb-14 relative'>
                        <textarea value={type} onChange={(e) => setType(e.target.value)} className='w-full border-white border bg-area rounded p-2 outline-none' placeholder='Mời bạn viết bình luận ...' rows='4' />
                        <button type='submit' onClick={handleSubmit} className='bg-red-600 px-2 py-1 rounded font-medium absolute bottom-5 right-5'>Gửi</button>
                    </form>
                )
                : (
                    <div className='bg-comment px-5 pt-10 pb-14 flex flex-col items-center'>
                        <p className='font-semibold pb-5'>Vui lòng đăng nhập để bình luận</p>
                        <button type='button' className='bg-red-700 px-3 py-2 rounded' onClick={handleLogin}>Đăng nhập</button>
                    </div>
                )}

            {comment.map((i) => (
                <div className='border-b flex border-gray-50 border-opacity-5 p-5'>
                    <img className='w-11 h-11 rounded mr-2' src='https://res.cloudinary.com/nghiemduong2000/image/upload/v1620266729/VMOflix%20Project/VMOflix%20-%20base/flat_1000x1000_075_f.u2_lnllya.webp' alt='avatar' />
                    <div>
                        <p className='text-red-700 text-xl font-semibold'>{i.name}</p>
                        <p>{i.cmt}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FilmComment;
