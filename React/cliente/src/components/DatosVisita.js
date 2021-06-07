import React from 'react'
import InfoBasica from './InfoBasica'
import Visita from './Visita'

function DatosVisita() {
    return (
        <div className="row">
            <div className="col-md-6">
                <Visita />
            </div>
            <div className="col-md-4">
                <InfoBasica />
            </div>
        </div>
    )
}

export default DatosVisita
