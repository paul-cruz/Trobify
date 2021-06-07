import React, { Component } from 'react';

class ModificarPerfil extends Component {
    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        console.log('sending data...');
    }

    render() {
        return (
            <div className="col-md-8">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>Modificar perfil</h3>
                        <p>Esta información puede ser modificada.</p>
                    </div>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre(s): </span>
                            <input
                                type="text"
                                name="firstname"
                                className="form-control"
                                placeholder="Nombre(s): "
                                aria-describedby="basic-addon1"
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Apellido(s): </span>
                            <input
                                type="text"
                                name="lastname"
                                className="form-control"
                                placeholder="Apellido(s): "
                                aria-describedby="basic-addon2"
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">E-mail: </span>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="E-mail: "
                                aria-describedby="basic-addon3"
                                onChange={this.handleInput}
                            />
                        </div>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon4">Número de teléfono: </span>
                            <input
                                type="text"
                                name="phonenumber"
                                className="form-control"
                                placeholder="Número de teléfono: "
                                aria-describedby="basic-addon4"
                                onChange={this.handleInput}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar cambios</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ModificarPerfil;