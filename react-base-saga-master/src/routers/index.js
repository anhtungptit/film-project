import Loadable from '../utils/Loadable';

const HomePage = Loadable(() => import(/* webpackChunkName: "js/home" */ '@Views/pages/Home'));

const routers = [
    {
        path: '/',
        component: HomePage
    }
];

export default routers;
