import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import { getUser, updateUser } from '../../Utils/functions';
import { getLoggedUserId } from '../../Utils/auth';
import Loading from '../Loading'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
	const property = props.property;
	const classes = useStyles();
	const [user, setUser] = useState({});
	useEffect(() => {
		getUser(getLoggedUserId()).then((data) => {
			setUser(data);
		});
	}, []);
	return (
		user ?
		<Card className="MuiPaper-root MuiCard-root jss224 MuiPaper-outlined MuiPaper-rounded" variant="outlined">
		<CardContent>
			<Typography className={classes.title} color="textSecondary" gutterBottom>
				{property && property.tittle ? property.tittle : "El propietario no espeificó un nombre para este inmueble"}
			</Typography>
			<Typography variant="h5" component="h2">
				{property && property.description ? property.description : "El propietario no espeificó una descripción"}
			</Typography>
			<Typography className={classes.pos} color="textSecondary">
				{property && property.type ? property.type : "El propietario no espeificó el tipo de inmueble"}
			</Typography>
			<Typography variant="body2" component="p">
				Edad: {property && property.age ? `${property.age} años` : "El propietario no espeificó una edad para este inmueble"}<br/>
				Pisos: {property && property.floors ? property.floors : "El propietario no espeificó una cantidad de pisos"}<br/>
				Propietario: {property && property.contact.name ? property.contact.name : "No hay propietario especificado"}
			</Typography>
		</CardContent>
		<CardActions>
			<Button size="small" onClick={()=>{deleteFav(user, property)}}>Eliminar de favoritos</Button>
		</CardActions>
		</Card> : <Loading/>
	);
}

function deleteFav(user, property){
	if(user && property && user.favorites){
		const index = user.favorites.indexOf(user.favorites.find(element => element.id == property._id));
		if (index > -1) {
			user.favorites.splice(index, 1);
			updateUser(getLoggedUserId(), { favorites : user.favorites });
			console.log("Se quitó el inmueble de favoritos!");
		}
	} else{
		console.log("Hubo un error al quitar el inmueble de favoritos");
	}
	window.location.reload();
}