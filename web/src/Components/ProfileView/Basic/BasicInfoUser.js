import React from 'react'
import './InfoPerfil.css'
import DatosUsuario from '../usuario.json'

function BasicInfoUser() {
    return (

        <div className="card mt-4 align-items-center text-center">
            <div className="image-container">
                <img src={infoUsuario.url} alt=" " height="150px" width="150px" />
            </div>
            <div className="card-body">
                {DatosUsuario.map((infoUsuario, index) => {
                    return (
                        <div key={infoUsuario.id} className="card-body">
                            <h4 className="card-title"> {infoUsuario.firstName} </h4>
                            <h4 className="card-title"> {infoUsuario.lastName} </h4>
                            <p className="card-text text-secondary"> {infoUsuario.email} </p>
                            <p className="card-text text-secondary"> {infoUsuario.phoneNumber} </p>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default BasicInfoUser
