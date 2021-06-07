import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RedirectNotFound() {
    return (
        <Route exact path='*'>
            <Redirect to='/not-found' />
        </Route>
    );
}