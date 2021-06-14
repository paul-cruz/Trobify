import React from 'react';
import { useIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function PropertyContact({ contact }) {
    const classes = useStyles();
    const intl = useIntl();

    return (
        <List className={classes.root}>
            <ListItem>
                <Typography variant="h5" label={intl.formatMessage({ id: "app.property.contact.label" })} />
                <ListItemAvatar>
                    <Avatar>
                        <RecentActorsIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={intl.formatMessage({ id: "app.property.contact.name.label" })} secondary={contact.name} />
                <ListItemText primary={intl.formatMessage({ id: "app.property.contact.phone.label" })} secondary={
                    <React.Fragment>
                        {contact.phones && contact.phones.map((phone, index) => {
                            return <Typography key={index} variant="body2" component="span">{phone}<br /></Typography>;
                        })}
                    </React.Fragment>
                } />
                <ListItemText primary={intl.formatMessage({ id: "app.property.contact.email.label" })} secondary={contact.email} />
            </ListItem>
        </List>
    );
}
