import React from 'react';
import { Link } from 'react-router-dom';

function SidebarAdmin() {
    return (
        <div className='w-56 z-10 flex flex-col h-screen bg-banner text-white pt-20 fixed'>
            <Link to='/admin/user' className='border-b border-gray-200 border-opacity-5 p-5'>
                Quản lý khách hàng
            </Link>
            <Link to='/admin/category' className='border-b border-gray-200 border-opacity-5 p-5'>
                Quản lý danh mục
            </Link>
            <Link to='/admin/movie' className='border-b border-gray-200 border-opacity-5 p-5'>
                Quản lý danh sách phim
            </Link>
        </div>
    );
}

export default SidebarAdmin;
