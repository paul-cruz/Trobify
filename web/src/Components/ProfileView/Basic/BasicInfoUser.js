import React, { useEffect } from 'react'
import './InfoPerfil.css'
import { getLoggedUserId } from '../../../Utils/auth'
import { getUser } from '../../../Utils/functions'
import { useState } from 'react'

function BasicInfoUser() {

    const [infoUsuario, setinfoUsuario] = useState({});

    useEffect(() => {
        getUser(getLoggedUserId()).then((info) => {
            setinfoUsuario(info)
        });
    }, []);

    return (

        <div className="card mt-4 align-items-center text-center">

            <div className="card-body">
                {infoUsuario.map((info, index) => {
                    return (
                        <div>
                            <div className="image-container">
                                <img src={info.url} alt=" " height="150px" width="150px" />
                            </div>
                            <div key={info.id} className="card-body">
                                <h4 className="card-title"> {info.firstName} </h4>
                                <h4 className="card-title"> {info.lastName} </h4>
                                <p className="card-text text-secondary"> {info.email} </p>
                                <p className="card-text text-secondary"> {info.phoneNumber} </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default BasicInfoUser
