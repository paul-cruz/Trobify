import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { getProperty } from '../../Utils/functions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PropertyView() {
    const classes = useStyles();
    const GRID_SPACING = 1;
    const LG_SCREEN_GRID = 6;
    const SM_SCREEN_GRID = 12;
    const [property, setProperty] = useState(null);

    getProperty('60a88e5d38b1a34b12f9c350').then((property) => { setProperty(property) });

    console.log(property);

    return (
        <div className={classes.root}>
            <Grid container spacing={GRID_SPACING}>
                <Grid item xs={SM_SCREEN_GRID}>
                    <Paper className={classes.paper}>Title</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={GRID_SPACING}>
                <Grid item lg={LG_SCREEN_GRID} md={LG_SCREEN_GRID} sm={SM_SCREEN_GRID}>
                    <Paper className={classes.paper}>Carrousel</Paper>
                </Grid>
                <Grid item lg={LG_SCREEN_GRID} md={LG_SCREEN_GRID} sm={SM_SCREEN_GRID}>
                    <Paper className={classes.paper}>Map</Paper>
                </Grid>
            </Grid>
            <Grid container spacing={GRID_SPACING}>
                <Grid container item lg={LG_SCREEN_GRID} md={LG_SCREEN_GRID} sm={SM_SCREEN_GRID}>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>Price</Paper>
                    </Grid>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>Info</Paper>
                    </Grid>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>Description</Paper>
                    </Grid>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>Extra info</Paper>
                    </Grid>
                </Grid>
                <Grid container item lg={LG_SCREEN_GRID} md={LG_SCREEN_GRID} sm={SM_SCREEN_GRID}>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>Calendar</Paper>
                    </Grid>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>Simulator</Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}