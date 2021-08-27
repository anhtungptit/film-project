import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const Login = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Login'));
const Register = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Register'));

const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
];

export default routers;
