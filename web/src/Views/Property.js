import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import { getProperty } from '../Utils/functions';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Loading';
import PropertyCarousel from '../Components/Property/carousel';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import PropertyMap from '../Components/Property/map';
import { Alert } from 'react-bootstrap';
import MainInfo from '../Components/Property/mainInfo';
import PropertyContact from '../Components/Property/contact';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: "40vh",
        marginTop: "65px",
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PropertyView() {
    const { id } = useParams();
    const classes = useStyles();
    const GRID_SPACING = 1;
    const LG_SCREEN_GRID = 6;
    const SM_SCREEN_GRID = 12;
    const [property, setProperty] = useState(null);

    useEffect(() => {
        getProperty(id).then((prop) => { setProperty(prop) });
    }, []);


    return (
        property ? <div id="gridDiv" className={classes.root}>
            <Grid container spacing={GRID_SPACING}>
                <Grid item xs={SM_SCREEN_GRID}>
                    <Typography variant="h3" className={classes.paper}>{property.tittle}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={GRID_SPACING}>
                <Grid item lg={LG_SCREEN_GRID} md={LG_SCREEN_GRID} sm={SM_SCREEN_GRID}>
                    <Paper className={classes.paper}>
                        <PropertyCarousel images={property.images} type="card_view" />
                    </Paper>
                </Grid>
                <Grid item lg={LG_SCREEN_GRID} md={LG_SCREEN_GRID} sm={SM_SCREEN_GRID}>
                    <Paper className={classes.paper}>
                        <PropertyMap lat={property.location.lat} lng={property.location.lng} />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={GRID_SPACING}>
                <Grid container item lg={LG_SCREEN_GRID} md={LG_SCREEN_GRID} sm={SM_SCREEN_GRID}>
                    <Grid item xs={SM_SCREEN_GRID} className={classes.paper}>
                        <Alert variant="success">
                            <FormattedMessage
                                id="app.property.priceLabel"
                                defaultMessage="Sell Price"
                            /><br />
                            <strong>$
                                <FormattedNumber
                                    value={property.price}
                                    style="currency"
                                    currencyDisplay="symbol"
                                    currency="MXN"
                                />
                            </strong>
                        </Alert>
                    </Grid>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <MainInfo features={property.features} />
                    </Grid>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>
                            <Typography variant="body1">{property.description}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={SM_SCREEN_GRID}>
                        <Paper className={classes.paper}>
                            <PropertyContact contact={property.contact} />
                        </Paper>
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
        </div > : <Loading />
    );
}