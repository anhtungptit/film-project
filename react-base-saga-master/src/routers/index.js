import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const Login = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Login'));

const routers = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: Login
    }
];

export default routers;
