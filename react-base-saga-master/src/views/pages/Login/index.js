import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';

function Login() {
    const responseSuccessGoogle = (res) => {
        console.log(res);
        console.log('success');
    };

    const responseFailGoogle = (res) => {
        console.log(res);
        console.log('fail');
    };

    return (
        <div className='login w-full h-screen bg-login-background bg-cover flex justify-center items-center'>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
                alt='t'
                className='w-44 absolute top-6 left-8'
            />
            <form className='bg-black bg-opacity-80 flex flex-col justify-center text-white text-lg px-12 w-2/7 h-3/4'>
                <span className='text-3xl font-medium'>Đăng nhập</span>
                <div className='w-full mt-8 mb-4'>
                    <input
                        type='text'
                        placeholder='Email or phone number'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                    <input
                        type='text'
                        placeholder='Password'
                        className='bg-gray-900 w-full px-5 py-3 my-2 outline-none rounded'
                    />
                </div>

                <button className='bg-red-700 px-5 py-3 mb-3 font-medium rounded' type='submit'>Đăng nhập</button>
                <Link className='text-base text-red-600 mb-2' to='/'>Quên mật khẩu</Link>
                <div className='text-base font-medium mb-4'>
                    <span>Chưa có tài khoản ? </span>
                    <Link className='text-red-600' to='/'>Đăng ký ngay</Link>
                </div>
                <div className='flex flex-col items-center mb-1 border-t border-gray-800'>
                    <span className='text-sm text-gray-400 font-medium my-3'>Đăng nhập bằng</span>
                    <GoogleLogin
                        clientId='733397129937-suoq2fgffo8br6hsqutkubqtn80u0bqf.apps.googleusercontent.com'
                        buttonText='Login with Google'
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseFailGoogle}
                        cookiePolicy='single_host_origin'
                    />
                    <FacebookLogin
                        appId='1088597931155576'
                        autoLoad
                        fields='name,email,picture'
                        onClick={componentClicked}
                        callback={responseFacebook}
                    />
                </div>

            </form>
        </div>
    );
}

export default Login;
