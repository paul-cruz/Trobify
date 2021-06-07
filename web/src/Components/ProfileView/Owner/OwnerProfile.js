import React from 'react'
import BasicInfoUser from '../Basic/BasicInfoUser'


function OwnerProfile() {
    return (
        <div className="card mt-4 text-center">
            <div className="card-head">
                <BasicInfoUser />
            </div>
            <div className="card-body">
                <button type="button" className="btn btn-primary btn-lg btn-block">Modificar foto de perfil.</button>
                <button type="button" className="btn btn-secondary btn-lg btn-block">Ver mis inmuebles</button>
            </div>
        </div>
    )
}

export default OwnerProfile
