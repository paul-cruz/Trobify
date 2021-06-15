import React from 'react'
import DatosPropiedad from './vivienda.json'

function VisitData() {
    return (
        <div className="container text-center">
            <div className="card mt-4">
                {DatosPropiedad.map((infoPropiedad, index) => {
                    return (
                        <div key={infoPropiedad.id} className="card-body">
                            <h5 className="card-title">{infoPropiedad.nombrePropiedad}</h5>
                            <p className="card-text text-secondary">{infoPropiedad.descripcionPropiedad}</p>
                            <h5 className="card-title">Fecha de la visita</h5>
                            <p className="card-text text-secondary"> {infoPropiedad.fechaVisita} </p>
                            <h5 className="card-title">Horario de la visita</h5>
                            <p className="card-text text-secondary"> {infoPropiedad.horaVisita} </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VisitData
