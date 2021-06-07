import React from 'react';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import GridView from '../Components/GridView';
import { Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../Routes/nested.routes';
import '../Styles/custom.css';

function MasterPage({ routes }) {
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