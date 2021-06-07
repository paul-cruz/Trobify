import React, { useState } from 'react'
import './InfoPerfil.css'
import InfoBasica from './InfoBasica'

function InfoPerfilPropietario() {

    return (
        <div className="card text-center">
            <div className="card-head">
                <InfoBasica />
            </div>
            <div className="card-body">
                <button type="button" class="btn btn-primary btn-lg btn-block">Modificar foto de perfil</button>
                <button type="button" class="btn btn-secondary btn-lg btn-block">Ver mis inmuebles</button>
            </div>
        </div>
    )
}

export default InfoPerfilPropietario
