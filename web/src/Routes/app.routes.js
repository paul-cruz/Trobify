import React from 'react';
import routes from './routes';
import RouteWithSubRoutes from './nested.routes';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from='/' to='/app/properties' />
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
        </BrowserRouter>
    );
}