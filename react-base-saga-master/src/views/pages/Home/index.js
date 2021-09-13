import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

// import { userActions } from '../../../state/modules/user';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import RecentRow from '../../components/RecentRow';
import Row from '../../components/Row';

function HomePage() {
    const [showOption, setShowOption] = useState(true);
    const [showUser, setShowUser] = useState(false);

    // const dispatch = useDispatch();

    // const handleSignout = () => {
    //     dispatch(userActions.signout());
    //     console.log('clicked');
    // };
    return (
        <div className='bg-banner w-screen h-full'>
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
            <Banner />
            {(JSON.parse(localStorage.getItem('login')) !== null)
                ? <RecentRow />
                : ''}
            <Row genre='drama' title='Drama' />
            <Row genre='fantasy' title='Fantansy' />
            <Row genre='action' title='Action' />
            <Row genre='adventure' title='Adventure' />
            <Row genre='mystery' title='Mystery' />

        </div>
    );
}

export default HomePage;
