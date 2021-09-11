import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link, useHistory } from 'react-router-dom';

import { userActions, userSelectors } from '../../../state/modules/user';

function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const responseSuccessGoogle = (res) => {
        console.log(res);
        dispatch(userActions.loginGoogle({tokenId: res.tokenId}));
    };

    const responseFailGoogle = (res) => {
        console.log(res);
        console.log('fail');
    };

    const responseFacebook = (res) => {
        dispatch(userActions.loginFacebook({userID: res.userID, accessToken: res.accessToken }));
    };

    const user = useSelector(userSelectors.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(userActions.login({userEmail, password }));
        // if (responseAction.payload.message === 'Password is incorrect') {
        //     alert('Password incorrect');
        // } else {
        //     history.push('/');
        // }
    };

    useEffect(() => {
        if (user !== null && user.toJS().message === 'You are logged in') {
            history.push('/');
        } else if (user !== null) {
            alert(user.toJS().message);
        }
    }, [user, history]);

    return (
        <div className='login w-full h-screen bg-login-background bg-cover flex justify-center items-center'>
            <Link to='/'>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
                    alt='logo'
                    className='w-44 absolute top-6 left-8 cursor-pointer'
                />
            </Link>
            <form onSubmit={handleSubmit} className='bg-black bg-opacity-80 flex flex-col justify-center text-white text-lg px-12 sm:w-2/4 lg:w-2/7 h-3/4'>
                <span className='text-3xl font-medium'>Đăng nhập</span>
                <div className='w-full mt-8 mb-4'>
                    <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        type='text'
                        placeholder='Email or phone number'
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
                    disabled={(!userEmail || !password)}
                >
                    Đăng nhập
                </button>
                <Link className='text-base text-red-600 mb-2' to='/'>Quên mật khẩu</Link>
                <div className='text-base font-medium mb-4'>
                    <span>Chưa có tài khoản ? </span>
                    <Link className='text-red-600' to='/register'>Đăng ký ngay</Link>
                </div>
                <div className='flex flex-col items-center mb-1 border-t border-gray-800'>
                    <span className='text-sm text-gray-400 font-medium my-3'>Đăng nhập bằng</span>
                    <div className='flex justify-around w-full'>
                        <GoogleLogin
                            clientId='733397129937-suoq2fgffo8br6hsqutkubqtn80u0bqf.apps.googleusercontent.com'
                            buttonText='Google'
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseFailGoogle}
                            cookiePolicy='single_host_origin'
                            className='w-32 flex justify-center'
                            icon={false}
                        />
                        <FacebookLogin
                            appId='518729469235949'
                            autoLoad={false}
                            fields='name,email,picture'
                            callback={responseFacebook}
                            textButton='Facebook'
                            cssClass='text-sm bg-blue-500 w-32 h-full rounded'
                        />
                    </div>

                </div>

            </form>
        </div>
    );
}

export default Login;
