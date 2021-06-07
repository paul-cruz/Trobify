import React from 'react'
import VisitData from './VisitData'
import BasicInfoUser from '../ProfileView/Basic/BasicInfoUser'

function VisitView() {
    return (
        <div className="container mt-4 justify-content-center align-items-center">
            <h3>Datos de visita</h3>
            <div className="row">
                <div className="col-md-6">
                    <h4>Datos del inmueble</h4>
                    <VisitData />
                </div>
                <div className="col-md-4">
                    <h4>Datos de contacto</h4>
                    <BasicInfoUser />
                </div>
            </div>
        </div>
    )
}

export default VisitView
