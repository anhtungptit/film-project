import React from 'react';
import { useSelector } from 'react-redux';

import { movieSelectors } from '../../../state/modules/movie';
import FilmComment from '../FilmComment';

function FilmDescription() {
    const movie = useSelector(movieSelectors.movie);
    return (
        <div className='w-full h-full'>
            {movie !== null ? (
                <div className='flex'>
                    <img src={movie.toJS().movie.posterImg} alt='poster' className='w-1/5 h-5/6' />
                    <div className='px-8'>
                        <p className='text-4xl font-bold pb-6'>{movie.toJS().movie.title}</p>
                        <p>
                            <span className='text-gray-500 text-base font-bold'>Diễn viên:</span>
                            {movie.toJS().movie.actor.map((i) => ` ${i},`)}
                        </p>
                        <p>
                            <span className='text-gray-500 text-base font-bold'>Thể loại:</span>
                            {movie.toJS().movie.genre.map((i) => ` ${i},`)}
                        </p>
                        <p className='text-gray-500 text-base font-bold pt-6'>
                            <span>Nội dung: </span>
                        </p>
                        <p>
                            {movie.toJS().movie.description}
                        </p>
                    </div>
                </div>
            ) : ''}
            <FilmComment />
        </div>
    );
}

export default FilmDescription;
