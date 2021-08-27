import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSelectors } from '../../../state/modules/user';

function Register() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCf, setPasswordCf] = useState('');

    const user = useSelector(userSelectors.user);

    useEffect(() => {
        if (user !== null) {
            const entries = new Map(user._root.entries);
            const userObj = Object.fromEntries(entries);
            console.log(userObj);
        }
    }, [user]);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName, userEmail, password, passwordCf);
        if (password === passwordCf) {
            dispatch(userActions.signup({
                userName,
                userEmail,
                password
            }));
            history.push('/');
        } else {
            alert('Mật khẩu không khớp');
        }
    };

    return (
        <div className='login w-full h-screen bg-login-background bg-cover flex justify-center items-center'>
            <Link to='/home'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
                    alt='logo'
                    className='w-44 absolute top-6 left-8 cursor-pointer'
                />
            </Link>
            <form onSubmit={handleSubmit} className='bg-black bg-opacity-80 flex flex-col justify-center text-white text-lg px-12 sm:w-2/4 lg:w-2/7 h-3/4'>
                <span className='text-3xl font-medium'>Đăng ký</span>
                <div className='w-full mt-8 mb-4'>
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        type='text'
                        placeholder='Tên người dùng'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                    <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        type='text'
                        placeholder='Email'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Mật khẩu'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                    <input
                        onChange={(e) => setPasswordCf(e.target.value)}
                        type='password'
                        placeholder='Nhập lại mật khẩu'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                </div>

                <button
                    className='bg-red-700 px-5 py-3 mb-3 font-medium rounded mt-6'
                    type='submit'
                    disabled={!userName || !userEmail || !password || !passwordCf}
                >
                    Đăng ký
                </button>
            </form>
        </div>
    );
}

export default Register;
