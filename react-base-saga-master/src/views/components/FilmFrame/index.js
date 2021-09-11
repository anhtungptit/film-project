import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

import { movieSelectors } from '../../../state/modules/movie';

function FilmFrame() {
    // const { id } = useParams();
    const movie = useSelector(movieSelectors.movie);
    // const [flatCheck, setFlatCheck] = useState(false);
    // useEffect(() => {
    //     if (localStorage.getItem('login') && movie !== null) {
    //         const {history} = JSON.parse(localStorage.getItem('login'));
    //         for (let i = 0; i < login.history.length; i++) {
    //             if (history._id === id) {
    //                 setFlatCheck(true);
    //                 break;
    //             }
    //         }
    //         if (!flatCheck) {
    //             if (history.length === 8) {
    //                 history.pop();
    //             }
    //             history.unshift({
    //                 _id: id,
    //                 posterImg: movie.toJS().movie.posterImg
    //             });
    //         }
    //     }
    // }, [movie, id, flatCheck]);
    return (
        <div className='w-screen h-screen'>
            {movie !== null ? (
                <iframe className='w-full h-full' src={movie.toJS().movie.filmUrl} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
            ) : ''}
        </div>
    );
}

export default FilmFrame;
