import React from 'react'
import CustomerProfile from './CustomerProfile'
import ModifyProfile from '../Basic/ModifyProfile'


function CPView() {
    return (
        <div className="container justify-content-center align-items-center">
            <div className="row">
                <div className="col-md-4">
                    <CustomerProfile />
                </div>
                <div className="col-md-8">
                    <ModifyProfile />
                </div>
            </div>
        </div>
    )
}

export default CPView
