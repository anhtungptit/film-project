import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const Login = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Login'));
const Register = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Register'));
const Category = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Category'));
const Search = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Search'));
const DetailFilm = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/DetailFilm'));

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
    },
    {
        path: '/category/:genre',
        component: Category
    },
    {
        path: '/search/:movieName',
        component: Search
    },
    {
        path: '/detailFilm/:id',
        component: DetailFilm
    }
];

export default routers;
