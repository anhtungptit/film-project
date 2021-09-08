import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { adminActions, adminSelectors } from '../../../../../state/modules/admin';

function LoginAdmin() {
    const [loginID, setLoginID] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(adminActions.loginAdmin({
            loginID,
            password
        }));
    };

    const admin = useSelector(adminSelectors.admin);
    const history = useHistory();
    useEffect(() => {
        if (admin !== null) {
            console.log(admin.toJS());
            if (admin.toJS().message === 'You are logged in') {
                history.push('/admin/home');
            }
        }
    }, [admin, history]);

    return (
        <div className='login w-full h-screen bg-login-background bg-cover flex justify-center items-center'>
            <Link to='/admin'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
                    alt='logo'
                    className='w-44 absolute top-6 left-8 cursor-pointer'
                />
            </Link>
            <form onSubmit={handleSubmit} className='bg-black bg-opacity-80 flex flex-col justify-center text-white text-lg px-12 sm:w-2/4 lg:w-2/7 h-2/4'>
                <span className='text-3xl font-medium'>Đăng nhập</span>
                <div className='w-full mt-8 mb-4'>
                    <input
                        onChange={(e) => setLoginID(e.target.value)}
                        type='text'
                        placeholder='LoginID'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Password'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                </div>

                <button
                    className='bg-red-700 px-5 py-3 mb-3 font-medium rounded'
                    type='submit'
                >
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}

export default LoginAdmin;
