import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { movieSelectors } from '../../../state/modules/movie';

function FilmFrame() {
    // const { id } = useParams();
    const movie = useSelector(movieSelectors.movie);
    useEffect(() => {
        if (movie !== null && JSON.parse(localStorage.getItem('login')) !== null) {
            const idUser = JSON.parse(localStorage.getItem('login'))._id;
            axios.post(`http://localhost:8000/users/saveHistory?idUser=${idUser}`, {
                _id: movie.toJS().movie._id,
                posterImg: movie.toJS().movie.posterImg
            });
        }
    }, [movie]);
    // useEffect(() => {
    //     if (movie !== null && JSON.parse(localStorage.getItem('login')) !== null) {
    //         let flatCheck = false;
    //         const login = JSON.parse(localStorage.getItem('login'));
    //         const idFilm = movie.toJS().movie._id;
    //         for (let i = 0; i < login.history.length; i++) {
    //             if (login.history[i]._id === idFilm) {
    //                 flatCheck = true;
    //                 break;
    //             }
    //         }
    //         if (!flatCheck) {
    //             if (login.history.length === 8) {
    //                 login.history.pop();
    //             }
    //             login.history.unshift({
    //                 _id: idFilm,
    //                 posterImg: movie.toJS().movie.posterImg
    //             });
    //             localStorage.setItem('login', JSON.stringify(login));
    //         }
    //     }
    // }, [movie]);
    return (
        <div className='w-screen h-screen'>
            {movie !== null ? (
                <iframe className='w-full h-full' src={movie.toJS().movie.filmUrl} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            ) : ''}
        </div>
    );
}

export default FilmFrame;
