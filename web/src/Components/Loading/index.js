import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Grid from '@material-ui/core/Grid';

export default function Loading() {
    return (
        <div className="root">
            <Grid container spacing={0} direction="row" justify="center" alignItems="center">
                <Spinner animation="grow" variant="primary" />
            </Grid>
        </div>
    );
}