import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Row from '../../components/Row';

function HomePage() {
    const [showOption, setShowOption] = useState(true);
    return (
        <div className='bg-banner w-screen h-full'>
            <div className={`${showOption ? 'invisible' : ''} flex justify-between w-2/6 h-1/5 bg-black fixed top-14 left-40 z-50 px-6 py-2 bg-opacity-70 text-white border border-gray-700`}>
                <div className='flex flex-col'>
                    <Link to='/test' className='hover:underline'>Finction</Link>
                    <Link to='/test' className='hover:underline'>Mystery</Link>
                    <Link to='/test' className='hover:underline'>War</Link>
                    <Link to='/test' className='hover:underline'>Comedy</Link>
                    <Link to='/test' className='hover:underline'>Horror</Link>
                </div>
                <div className='flex flex-col'>
                    <Link to='/test' className='hover:underline'>Music</Link>
                    <Link to='/test' className='hover:underline'>Fantasy</Link>
                    <Link to='/test' className='hover:underline'>Documentary</Link>
                    <Link to='/test' className='hover:underline'>Romance</Link>
                    <Link to='/test' className='hover:underline'>Action</Link>
                </div>
                <div className='flex flex-col'>
                    <Link to='/test' className='hover:underline'>Crime</Link>
                    <Link to='/test' className='hover:underline'>Animated</Link>
                    <Link to='/test' className='hover:underline'>Adventure</Link>
                    <Link to='/test' className='hover:underline'>Thriller</Link>
                    <Link to='/test' className='hover:underline'>Drama</Link>
                </div>
            </div>
            <Header showOption={showOption} setShowOption={setShowOption} />
            <Banner />
            <Row genre='drama' title='Drama' />
            <Row genre='fantasy' title='Fantansy' />
            <Row genre='action' title='Action' />
            <Row genre='adventure' title='Adventure' />
            <Row genre='mystery' title='Mystery' />

        </div>
    );
}

export default HomePage;
