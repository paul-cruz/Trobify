import React from 'react'

function Visita() {
    return (
        <div className="container text-center">
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Datos de visita</h3>
                </div>
                <div className="card-body">
                    <p className="card-title">Nombre del cliente: </p>
                    <p className="card-text text-secondary"> infoDelCliente </p>
                    <p className="card-title">Inmueble: </p>
                    <p className="card-text text-secondary"> infoDelCliente </p>
                    <p className="card-title">Horario de visita: </p>
                    <p className="card-text text-secondary"> infoDelCliente </p>
                </div>
            </div>
        </div>
    )
}

export default Visita
