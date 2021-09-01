import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SearchIcon from '@material-ui/icons/Search';

function Header() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll', null);
        };
    }, []);

    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };
    return (
        <div className={`fixed flex items-center justify-between text-white px-10 py-3 w-screen ${show ? 'bg-banner' : ''}`}>
            <div className='flex'>
                <img
                    src='https://res.cloudinary.com/bcvt/image/upload/v1630481896/movies/logo_sf2aia.png'
                    alt='Logo'
                    className='w-28 object-contain cursor-pointer'
                />
                <div className='flex cursor-pointer ml-4 px-3 border-2 border-white'>
                    <p>Thể loại</p>
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className='flex items-center'>
                <div className='bg-banner mr-3 py-1 flex items-center border-2 border-white'>
                    <input type='input' className='bg-transparent mr-1 px-2 outline-none' placeholder='Tên phim...' />
                    <SearchIcon className='text-white' />
                </div>
                <button type='button' className='bg-red-700 px-3 py-2 rounded' onClick={handleLogin}>Đăng nhập</button>
            </div>
        </div>
    );
}

export default Header;
