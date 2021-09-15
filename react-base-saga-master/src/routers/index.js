import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));
const Login = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Login'));
const Register = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Register'));
const Category = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Category'));
const Search = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Search'));
const DetailFilm = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/DetailFilm'));
const LoginAdmin = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Admin/pages/LoginAdmin'));
const UserAdmin = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Admin/pages/UserAdmin'));
const MovieAdmin = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Admin/pages/MovieAdmin'));
const EditMovie = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Admin/pages/EditMovie'));
const AddMovie = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Admin/pages/AddMovie'));

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
    },
    {
        path: '/admin',
        component: LoginAdmin
    },
    {
        path: '/admin/user',
        component: UserAdmin
    },
    {
        path: '/admin/movie',
        component: MovieAdmin
    },
    {
        path: '/admin/editMovie/:idMovie',
        component: EditMovie
    },
    {
        path: '/admin/addMovie',
        component: AddMovie
    }
];

export default routers;
