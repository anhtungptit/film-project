import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { movieSelectors } from '../../../state/modules/movie';

function FilmFrame() {
    const movie = useSelector(movieSelectors.movie);
    useEffect(() => {
        if (movie !== null) {
            console.log(movie.toJS());
        }
    }, [movie]);
    return (
        <div className='w-screen h-screen'>
            {movie !== null ? (
                <iframe className='w-full h-full' src={movie.toJS().movie.filmUrl} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            ) : ''}

        </div>
    );
}

export default FilmFrame;
