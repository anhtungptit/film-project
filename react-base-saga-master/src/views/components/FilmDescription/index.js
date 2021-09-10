import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ShareLink from 'react-facebook-share-link';
import StarRatings from 'react-star-ratings';

import { movieSelectors } from '../../../state/modules/movie';
import FilmComment from '../FilmComment';

function FilmDescription() {
    const movie = useSelector(movieSelectors.movie);
    const [rating, changeRating] = useState(0);
    // useEffect(() => {
    //     if (movie !== null && movie.toJS().movie.reviews.length !== 0) {
    //         let sum = 0;
    //         for (let i = 0; i < movie.toJS().movie.reviews.length; i++) {
    //             sum += movie.toJS().movie.reviews[i].scrore;
    //         }
    //         changeRating(sum / movie.toJS().movie.reviews.length);
    //     }
    // }, [movie]);
    useEffect(() => {
        if (movie !== null && movie.toJS().movie.reviews.length !== 0) {
            let sum = 0;
            for (let i = 0; i < movie.toJS().movie.reviews.length; i++) {
                sum += movie.toJS().movie.reviews[i].score;
            }
            changeRating(sum / movie.toJS().movie.reviews.length);
        } else {
            changeRating(0);
        }
    }, [movie]);
    return (
        <div className='w-full h-full'>
            {movie !== null ? (
                <div className='flex'>
                    <img src={movie.toJS().movie.posterImg} alt='poster' className='w-1/5 h-5/6' />
                    <div className='px-8'>
                        <p className='text-4xl font-bold pb-6'>{movie.toJS().movie.title}</p>
                        <p>
                            <span className='text-gray-500 text-base font-bold'>Diễn viên: </span>
                            {movie.toJS().movie.actor.join(', ')}
                        </p>
                        <p>
                            <span className='text-gray-500 text-base font-bold'>Thể loại: </span>
                            {movie.toJS().movie.genre.join(', ')}
                        </p>
                        <StarRatings
                            rating={rating}
                            starRatedColor='red'
                            numberOfStars={5}
                            name='rating'
                            starDimension='30px'
                            starSpacing='3px'
                            isSelectable='false'
                        />
                        <ShareLink link={movie.toJS().movie.filmUrl}>
                            {(link) => (
                                <a className='bg-blue-700 ml-3 mt-2 p-1 rounded' href={link} target='_blank' rel='noreferrer'>Share this on Facebook</a>
                            )}
                        </ShareLink>

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
