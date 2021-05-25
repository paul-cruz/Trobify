import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { getProperties } from '../Utils/functions';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, fade } from '@material-ui/core/styles';
import PropertyTumbnail from '../Components/Property/tumbnail';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.10),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function SearchPropertyView() {
    const classes = useStyles();
    const GRID_SPACING = 1;
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getProperties().then((propertylist) => { setProperties(propertylist) });
    }, []);

    return (
        <div className={classes.root}>
            <Grid container spacing={GRID_SPACING}>
                <Grid item xs={12}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={GRID_SPACING}>
                {properties && properties.map((property, index) => {
                    return <Grid key={index} item lg={6} md={6} sm={12} spacing={GRID_SPACING}>
                        <PropertyTumbnail property={property} />
                    </Grid>;
                })}
            </Grid>
        </div>
    );
}