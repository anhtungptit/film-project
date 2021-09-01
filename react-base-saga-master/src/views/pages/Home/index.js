import React from 'react';

import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Row from '../../components/Row';

function HomePage() {
    return (
        <div className='bg-banner w-screen h-full'>
            <div className='w-10 h-10 bg-black fixed top-14 left-40'>
                <h1>Test</h1>
            </div>
            <Header />
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
