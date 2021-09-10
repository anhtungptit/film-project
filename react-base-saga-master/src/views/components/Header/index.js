import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import SearchIcon from '@material-ui/icons/Search';

import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelectors } from '../../../state/modules/user';

function Header({showOption, setShowOption}) {
    const [show, handleShow] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [isLogged, setIsLogged] = useState(false);
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

    const user = useSelector(userSelectors.user);
    useEffect(() => {
        if (user !== null) {
            console.log(user.toJS());
            localStorage.setItem('login', JSON.stringify(user.toJS()));
        }
    }, [user]);

    useEffect(() => {
        if (localStorage.getItem('login')) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, [isLogged]);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleLogin = () => {
        history.push('/login');
    };

    const handleLogout = () => {
        dispatch(userActions.signout());
        localStorage.clear();
        setIsLogged(false);
        history.push('/');
    };

    const handleOption = () => {
        setShowOption(!showOption);
    };

    const handleSearch = () => {
        history.push(`/search/${inputSearch}`);
    };
    return (
        <div className={`fixed flex items-center justify-between text-white px-10 py-3 z-50 w-screen ${show ? 'bg-banner' : ''}`}>
            <div className='flex'>
                <Link to='/'>
                    <img
                        src='https://res.cloudinary.com/bcvt/image/upload/v1630481896/movies/logo_sf2aia.png'
                        alt='Logo'
                        className='w-28 object-contain cursor-pointer'
                    />
                </Link>
                <div className='flex cursor-pointer ml-4 px-3 border-2 border-white' onClick={handleOption}>
                    <p>Thể loại</p>
                    <ArrowDropDownIcon />
                </div>
            </div>
            <div className='flex items-center'>
                <form onSubmit={handleSearch} className='bg-banner mr-3 py-1 flex items-center border-2 border-white'>
                    <input type='input' onChange={(e) => setInputSearch(e.target.value)} className='bg-transparent mr-1 px-2 outline-none' placeholder='Tên phim...' />
                    <SearchIcon className='text-white' />
                </form>
                {!isLogged
                    ? <button type='button' className='bg-red-700 px-3 py-2 rounded' onClick={handleLogin}>Đăng nhập</button>
                    : <button type='button' className='bg-red-700 px-3 py-2 rounded' onClick={handleLogout}>Đăng xuất</button>}
            </div>
        </div>
    );
}

Header.propTypes = {
    showOption: PropTypes.bool,
    setShowOption: PropTypes.func
};

Header.defaultProps = {
    showOption: false,
    setShowOption: () => {}
};

export default Header;
