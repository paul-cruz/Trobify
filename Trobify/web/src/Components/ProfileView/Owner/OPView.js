import React from 'react'
import OwnerProfile from './OwnerProfile'
import ModifyProfile from '../Basic/ModifyProfile'


function OPView() {
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-4">
                    <OwnerProfile />
                </div>
                <div className="col-md-8">
                    <ModifyProfile />
                </div>
            </div>
        </div>
    )
}

export default OPView