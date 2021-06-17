import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from 'react-bootstrap/Button';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PropertyCarousel from './carousel';
import { yellow } from '@material-ui/core/colors';
import { getUser, updateUser } from '../../Utils/functions';
import { getLoggedUserId } from '../../Utils/auth';
import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        position: 'absolute'
    },
    controls: {
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    scheduleButton: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
    },
}));

export default function PropertyTumbnail({ property }) {
    const [ShowToast, setShowToast] = useState(false);
    const [toastText, setToastText] = useState("Se agregó el inmueble a favoritos!");
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <PropertyCarousel type="tumbnail" images={property.images} />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        <Link to={`/app/property/${property._id}`} color="inherit">
                            {property.tittle}
                        </Link>
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary">{property.description}</Typography>                </CardContent>
                <div className={classes.controls}>
                    <IconButton aria-label="notification">
                        <NotificationsActiveIcon style={{ color: yellow[800] }} />
                    </IconButton>
                    <Button variant="success" className="schbtn">Agendar cita</Button>
                    <IconButton aria-label="favorite" onClick={()=>{
                        getUser(getLoggedUserId()).then((user)=>{
                            if(user && property && user.favorites){
                                if(user.favorites.find(element => element.id == property._id)){
                                    setToastText("El inmueble ya está en favoritos");
                                }
                                else{
                                    user.favorites.push({id : property._id});
                                    updateUser(getLoggedUserId(), { favorites : user.favorites });
                                    setToastText("Se agregó el inmueble a favoritos!");
                                }
                                setShowToast(true);
                            } else{
                                console.log(user);
                                console.log(property);
                                console.log("Hubo un error al agregar el inmueble a favoritos");
                            }
                        });
                    }}>
                        <FavoriteIcon color="secondary" />
                    </IconButton>
                    <Toast show={ShowToast} onClose={()=>{setShowToast(false)}}>
                        <Toast.Header>
                            <strong className="mr-auto">Trobify</strong>
                        </Toast.Header>
                        <Toast.Body>{toastText}</Toast.Body>
                    </Toast>
                </div>
            </div>
        </Card>
    );
}