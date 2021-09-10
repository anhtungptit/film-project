import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
// import { movieActions, movieSelectors} from '../../../state/modules/movie';
// import getMovieAPI from '../../../apis/movieAPI';

function Row({ genre, title }) {
    // const dispatch = useDispatch();
    // const movies = useSelector(movieSelectors.movies);
    const [movies, setMovies] = useState([]);

    // useEffect(() => {
    //     dispatch(movieActions.movieByCategory({genre}));
    // }, [genre, dispatch]);

    useEffect(() => {
        axios.get(`http://localhost:8000/movies/filmByCategory?genre=${genre}`, {
            withCredentials: true
        })
            .then((res) => setMovies(res.data));
    }, [genre]);

    useEffect(() => {
        if (movies !== null) {
            console.log(movies);
        }
    }, [movies]);
    return (
        <div className='w-screen px-9 text-white pb-7'>
            <p className='text-3xl font-bold mb-3'>{title}</p>
            <div className='flex w-full'>
                {movies.map((movie) => (
                    <Link to={`/detailFilm/${movie._id}`} key={movie._id} className='w-img mr-6 cursor-pointer'>
                        <img src={movie.posterImg} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

Row.propTypes = {
    genre: PropTypes.string,
    title: PropTypes.string
};

Row.defaultProps = {
    genre: '',
    title: ''
};

export default Row;
