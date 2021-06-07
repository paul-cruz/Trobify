import React from 'react'
import DatosVisita from './DatosVisita'
import InfoPerfilCliente from './InfoPerfilCliente'
import InfoPerfilPropietario from './InfoPerfilPropietario'
import ModDyn from './ModDyn'
import ModificarPerfil from './ModificarPerfil'

function Perfil() {
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-4">
                    <InfoPerfilCliente />
                </div>
                <div className="col-md-8">

                </div>
                <div className="col-md-4">
                    <InfoPerfilPropietario />
                </div>
                <DatosVisita />
            </div>
        </div>
    )
}

export default Perfil
