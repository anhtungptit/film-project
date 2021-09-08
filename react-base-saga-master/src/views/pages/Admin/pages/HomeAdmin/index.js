import React from 'react';

import HeaderAdmin from '../../components/HeaderAdmin';
import SidebarAdmin from '../../components/SidebarAdmin';

function HomeAdmin() {
    return (
        <div className='bg-banner w-screen h-screen'>
            <HeaderAdmin />
            <SidebarAdmin />
        </div>
    );
}

export default HomeAdmin;
