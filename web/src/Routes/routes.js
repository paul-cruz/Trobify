import MasterPage from '../Views/MasterPage';
import GridView from '../Components/GridView'
import SearchPropertyView from '../Views/searchPropery';
import NotFound from '../Components/NotFound';
import RedirectNotFound from '../Components/Redirect/not-found';
import PropertyView from '../Views/Property';
import NewProperty from '../Views/NewProperty';
import SignUp from '../Views/SignUp';
import Login from '../Views/Login';
import ReportForm from '../Components/ReportForm';
import ProfileView from '../Components/ProfileView/View';

const routes = [
    /*{
    path: '/signin',
    component: Login,
    },*/
    {
        path: '/signup',
        component: SignUp,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/newproperty',
        component: NewProperty,
    },
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
                path: '/app/report',
                component: ReportForm,
            },
            {
                path: '/app/profile',
                component: ProfileView,
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