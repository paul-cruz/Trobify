import MasterPage from '../Views/MasterPage';
import GridView from '../Components/GridView'
import SearchPropertyView from '../Views/searchPropery';
import NotFound from '../Components/NotFound';
import RedirectNotFound from '../Components/Redirect/not-found';
import NewProperty from '../Views/NewProperty';
import SignUp from '../Views/SignUp';

const routes = [
    /*{
    path: '/signin',
    component: Login,
    },*/
    {
        path: '/app',
        component: MasterPage,
        routes: [
            {
                path: '/app/properties',
                component: SearchPropertyView,
            },
            {
                path: '/app/grid',
                component: GridView,
            },
            {
                path: '/app/newproperty',
                component: NewProperty,
            },
            {
                path: '/app/signup',
                component: SignUp,
            },
            {
                path: '/app/*',
                component: RedirectNotFound,
            },
        ],
    },
    {
        path: '/not-found',
        component: NotFound,
    }
];

export default routes;