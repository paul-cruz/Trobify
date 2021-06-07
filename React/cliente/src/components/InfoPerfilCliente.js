import React, { useState } from 'react'
import './InfoPerfil.css'
import InfoBasica from './InfoBasica'

export default function InfoPerfilCliente() {

    return (
        <div className="card text-center">
            <div className="card-head">
                <InfoBasica />
            </div>
            <div className="card-body">
                <button type="button" class="btn btn-primary btn-lg btn-block">Modificar foto de perfil</button>
            </div>
        </div>

    )
}
