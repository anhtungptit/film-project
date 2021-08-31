import React from 'react';

import Row from '../../components/Row';

function HomePage() {
    return (
        <div className=''>
            <Row genre='drama' title='Drama' />
            <Row genre='fantasy' title='Fantansy' />
            <Row genre='action' title='Action' />
            <Row genre='adventure' title='Adventure' />
            <Row genre='mystery' title='Mystery' />

        </div>
    );
}

export default HomePage;
