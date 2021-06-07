import React, { Component } from 'react'

class ModificarPerfil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const data = this.state
        console.log("Nombre final", data)
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.firstName]: event.target.value
        })
    }



    render() {
        const { firstName } = this.state
        return (
            <div className="container text-center">
                <div className="card mt-4">
                    <div className="card-header">
                        <h3>Modificar Perfil</h3>
                        <p>Esta información se puede modificar</p>
                    </div>
                    <form className="card-body" onSubmit={this.handleSubmit}>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre(s): </span>
                            <input
                                type="text"
                                name="firstname"
                                className="form-control"
                                placeholder="Nombre(s): "
                                value={firstName}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon2">Apellido(s): </span>
                            <input
                                type="text"
                                name="lastname"
                                className="form-control"
                                placeholder="Apellido(s): "
                            />
                        </div>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon3">E-mail: </span>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                placeholder="E-mail: "
                            />
                        </div>
                        <div className="form-group input-group mb-3">
                            <span className="input-group-text" id="basic-addon4">Número de teléfono: </span>
                            <input
                                type="text"
                                name="phonenumber"
                                className="form-control"
                                placeholder="Número de teléfono: "
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar cambios</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ModificarPerfil
