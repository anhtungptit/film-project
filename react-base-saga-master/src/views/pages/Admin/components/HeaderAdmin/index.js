import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { adminActions, adminSelectors } from '../../../../../state/modules/admin';

import SearchIcon from '@material-ui/icons/Search';

function HeaderAdmin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(adminActions.logoutAdmin());
    };
    const admin = useSelector(adminSelectors.admin);
    useEffect(() => {
        if (admin === null) {
            history.push('/admin');
        }
    }, [admin, history]);
    return (
        <div className='fixed flex bg-banner items-center justify-between text-white px-10 py-3 z-50 w-screen'>
            <div className='flex'>
                <Link to='/'>
                    <img
                        src='https://res.cloudinary.com/bcvt/image/upload/v1630481896/movies/logo_sf2aia.png'
                        alt='Logo'
                        className='w-28 object-contain cursor-pointer'
                    />
                </Link>
            </div>
            <div className='flex items-center'>
                <form className='bg-banner mr-3 py-1 flex items-center border-2 border-white'>
                    <input type='input' className='bg-transparent mr-1 px-2 outline-none' />
                    <SearchIcon className='text-white' />
                </form>
                <button onClick={handleLogout} type='button' className='bg-red-700 px-3 py-2 rounded'>Đăng xuất</button>
            </div>
        </div>
    );
}

export default HeaderAdmin;
