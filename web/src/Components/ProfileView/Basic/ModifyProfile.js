import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '', email: '', phoneNumber: '', url: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    };

    return (
        <Container className="container text-center">
            <div className="card mt-4 align-items-center text-center">
                <div className="card-header">
                    <h3>Modificar Perfil</h3>
                </div>
                <div className="card-body">
                    <form className={classes.root} onSubmit={handleSubmit}>
                        {inputFields.map((inputField, index) => (
                            <div key={index} className="justify-content-center">
                                <div className="form-group input-group mb-3">
                                    <TextField
                                        id="filled-full-width"
                                        name="firstName"
                                        label="Nombre"
                                        fullWidth
                                        variant="filled"
                                        value={inputField.firstName}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </div>
                                <div className="form-group input-group mb-3">
                                    <TextField
                                        id="filled-full-width"
                                        name="lastName"
                                        label="Apellido"
                                        fullWidth
                                        variant="filled"
                                        value={inputField.lastName}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </div>
                                <div className="form-group input-group mb-3">
                                    <TextField
                                        name="email"
                                        label="E-mail"
                                        variant="filled"
                                        value={inputField.email}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                    <TextField
                                        name="phoneNumber"
                                        label="Teléfono"
                                        variant="filled"
                                        value={inputField.phoneNumber}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </div>
                                <div className="form-group input-group mb-3">
                                    <TextField
                                        id="standard-full-width"
                                        name="url"
                                        label="URL"
                                        fullWidth
                                        variant="filled"
                                        helperText="Si desea cambiar su foto de perfil, ingrese la URL de la nueva."
                                        value={inputField.url}
                                        onChange={event => handleChangeInput(index, event)}
                                    />
                                </div>
                            </div>
                        ))}
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
