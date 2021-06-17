import React from 'react';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import { Redirect } from 'react-router-dom';
import GridView from '../Components/GridView';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../Routes/nested.routes';
import '../Styles/custom.css';
import {getLoggedUserId} from '../Utils/auth';

function MasterPage({ routes }) {
    if (!getLoggedUserId()) {
        return <Redirect to='/login' />
       }
    return (
        <div>
            <Header />
            <SideMenu />
            <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
            {/*<GridView/>*/}
        </div>
    );
}

export default MasterPage;