import React from 'react'
import BasicInfoUser from '../Basic/BasicInfoUser'
import ModifyProfile from '../Basic/ModifyProfile'


function CPView() {
    return (
        <div id="gridDiv" className="grid-fix">
            <div className="row">
                <div className="col-md-4">
                    <BasicInfoUser />
                </div>
                <div className="col-md-8">
                    <ModifyProfile />
                </div>
            </div>
        </div>
    )
}

export default CPView
