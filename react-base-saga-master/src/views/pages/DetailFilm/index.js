import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';

import { movieActions } from '../../../state/modules/movie';
import Header from '../../components/Header';
import FilmFrame from '../../components/FilmFrame';
import FilmDescription from '../../components/FilmDescription';
import RelatedFilm from '../../components/RelatedFilm';
// import { userActions } from '../../../state/modules/user';

function DetailFilm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(movieActions.getDetailsFilm({id}));
    }, [id, dispatch]);

    // const movie = useSelector(movieSelectors.movie);

    // useEffect(() => {
    //     if (movie !== null && JSON.parse(localStorage.getItem('login'))._id) {
    //         const idUser = JSON.parse(localStorage.getItem('login'))._id;
    //         dispatch(userActions.addHistory({idUser, movie}));
    //     }
    // }, [movie, id, dispatch]);

    const [showOption, setShowOption] = useState(true);
    const [showUser, setShowUser] = useState(false);

    return (
        <div className='w-screen h-full bg-banner'>
            <div className={`${showOption ? 'invisible' : ''} flex justify-between w-2/6 h-1/5 bg-black fixed top-14 left-40 z-50 px-6 py-2 bg-opacity-70 text-white border border-gray-700`}>
                <div className='flex flex-col'>
                    <Link to='/category/fiction' className='hover:underline'>Fiction</Link>
                    <Link to='/category/mystery' className='hover:underline'>Mystery</Link>
                    <Link to='/category/war' className='hover:underline'>War</Link>
                    <Link to='/category/comedy' className='hover:underline'>Comedy</Link>
                    <Link to='/category/horror' className='hover:underline'>Horror</Link>
                </div>
                <div className='flex flex-col'>
                    <Link to='/category/music' className='hover:underline'>Music</Link>
                    <Link to='/category/fantasy' className='hover:underline'>Fantasy</Link>
                    <Link to='/category/documentary' className='hover:underline'>Documentary</Link>
                    <Link to='/category/romance' className='hover:underline'>Romance</Link>
                    <Link to='/category/action' className='hover:underline'>Action</Link>
                </div>
                <div className='flex flex-col'>
                    <Link to='/category/crime' className='hover:underline'>Crime</Link>
                    <Link to='/category/animated' className='hover:underline'>Animated</Link>
                    <Link to='/category/adventure' className='hover:underline'>Adventure</Link>
                    <Link to='/category/thriller' className='hover:underline'>Thriller</Link>
                    <Link to='/category/drama' className='hover:underline'>Drama</Link>
                </div>
            </div>
            <Header showOption={showOption} setShowOption={setShowOption} showUser={showUser} setShowUser={setShowUser} />
            <FilmFrame />
            <div className='w-screen p-10 text-white flex'>
                <div>
                    <FilmDescription />
                </div>
                <RelatedFilm />
                {/* <Comment />
                <RealatedFilm /> */}
            </div>
            {/* <Headder />
            <FilmFrame />
            <FilmInfo /> */}
        </div>
    );
}

export default DetailFilm;
