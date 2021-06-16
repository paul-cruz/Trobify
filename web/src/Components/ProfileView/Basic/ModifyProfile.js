import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getLoggedUserId } from '../../../Utils/auth'
import { getUser, updateUser } from '../../../Utils/functions'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    }
}))

function ModifyProfile() {

    const classes = useStyles()
    const [inputField, setInputField] = useState([
        { first_name: '', last_name: '', email: '', phone_number: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputField);
        updateUser(getLoggedUserId(), inputField);
    };

    const handleChangeInput = (event) => {
        const values = { ...inputField };
        values[event.target.name] = event.target.value;
        setInputField(values);
    };

    useEffect(() => {
        getUser(getLoggedUserId()).then((info) => {
            setInputField({ first_name: info.first_name, last_name: info.last_name, email: info.email, phone_number: info.phone_number })
        });
    }, []);


    return (
        <Container className="container text-center">
            <div className="card mt-4 align-items-center text-center">
                <div className="card-header">
                    <h3>Modificar Perfil</h3>
                </div>
                <div className="card-body">
                    <form className={classes.root} onSubmit={handleSubmit}>
                        <div className="justify-content-center">
                            <div className="form-group input-group mb-3">
                                <TextField
                                    id="outlined-full-width"
                                    name="first_name"
                                    label="Nombre"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={inputField.first_name}
                                    onChange={event => handleChangeInput(event)}
                                />
                            </div>
                            <div className="form-group input-group mb-3">
                                <TextField
                                    id="outlined-full-width"
                                    name="last_name"
                                    label="Apellido"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={inputField.last_name}
                                    onChange={event => handleChangeInput(event)}
                                />
                            </div>
                            <div className="form-group input-group mb-3">
                                <TextField
                                    id="outlined"
                                    name="email"
                                    label="E-mail"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={inputField.email}
                                    onChange={event => handleChangeInput(event)}
                                />
                                <TextField
                                    id="outlined"
                                    name="phone_number"
                                    label="Teléfono"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                    value={inputField.phone_number}
                                    onChange={event => handleChangeInput(event)}
                                />
                            </div>
                        </div>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            type="submit"
                            onClick={handleSubmit}
                        >Guardar
                        </Button>
                    </form>
                </div>
            </div>
        </Container >
    )
}

export default ModifyProfile
