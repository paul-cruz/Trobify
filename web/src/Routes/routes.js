import MasterPage from '../Views/MasterPage';
import GridView from '../Components/GridView'
import SearchPropertyView from '../Views/searchPropery';
import NotFound from '../Components/NotFound';
import RedirectNotFound from '../Components/Redirect/not-found';
import PropertyView from '../Views/Property';

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
                path: '/app/property/:id',
                component: PropertyView,
            },
            {
                path: '/app/grid',
                component: GridView,
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