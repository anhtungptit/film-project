import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { movieActions, movieSelectors } from '../../../state/modules/movie';

function FilmComment() {
    const dispatch = useDispatch();
    const movie = useSelector(movieSelectors.movie);
    const [type, setType] = useState('');
    const { id } = useParams();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (type && localStorage.getItem('login')) {
            dispatch(movieActions.addComment({id,
                comment: {
                    name: JSON.parse(localStorage.getItem('login')).username,
                    cmt: type
                }}));
        }
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
                        <textarea onChange={(e) => setType(e.target.value)} className='w-full border-white border bg-area rounded p-2 outline-none' placeholder='Mời bạn viết bình luận ...' rows='4' />
                        <button type='submit' onClick={handleSubmit} className='bg-red-600 px-2 py-1 rounded font-medium absolute bottom-5 right-5'>Gửi</button>
                    </form>
                )
                : (
                    <div className='bg-comment px-5 pt-10 pb-14 flex flex-col items-center'>
                        <p className='font-semibold pb-5'>Vui lòng đăng nhập để bình luận</p>
                        <button type='button' className='bg-red-700 px-3 py-2 rounded' onClick={handleLogin}>Đăng nhập</button>
                    </div>
                )}

            {movie !== null ? movie.toJS().movie.reviews.map((i) => (
                <div>
                    <p>{i.cmt}</p>
                </div>
            )) : ''}
        </div>
    );
}

export default FilmComment;
