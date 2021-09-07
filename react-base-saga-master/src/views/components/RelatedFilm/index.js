import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { movieSelectors } from '../../../state/modules/movie';

function RelatedFilm() {
    const related = useSelector(movieSelectors.movie);
    return (
        <div className='w-full flex flex-col'>
            <p className='text-2xl font-semibold pb-4'>Phim liên quan</p>
            <div className='flex flex-wrap'>
                {related !== null ? related.toJS().related.map((i) => (
                    <Link to={`/detailFilm/${i._id}`}>
                        <img src={i.posterImg} alt='poster' className='w-32 pb-2 mr-2' />
                    </Link>
                )) : ''}
            </div>

        </div>
    );
}

export default RelatedFilm;
