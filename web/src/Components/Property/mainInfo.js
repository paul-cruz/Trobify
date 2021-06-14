import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Chip } from '@material-ui/core';
import { ICONS } from '../../Utils/icons';
import { useIntl } from 'react-intl';


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    chip: {
        margin: theme.spacing(1),
    }
}));

export default function MainInfo({ features }) {
    const classes = useStyles();
    const intl = useIntl();

    return (
        <Paper className={classes.paper}>
            {features && Object.entries(features).map((prop) => {
                return <Chip className={classes.chip} key={prop[0]} variant="outlined" color="primary" icon={ICONS[prop[0]]} label={intl.formatMessage({ id: `app.property.${prop[0]}-label` }, { prop: prop[1] })} />;
            })}
        </Paper>
    );
}