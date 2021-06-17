import React, { useEffect } from 'react'
import './InfoPerfil.css'
import { getLoggedUserId } from '../../../Utils/auth'
import { getUser } from '../../../Utils/functions'
import { useState } from 'react'
import Loading from '../../Loading'

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
                {infoUsuario ?
                    <div>
                        <div className="image-container">
                            <img src="http://www.pngall.com/profile-png/download/51607" alt=" " height="150px" width="150px" />
                        </div>
                        <div key={infoUsuario.id} className="card-body">
                            <h4 className="card-title"> {infoUsuario.first_name} </h4>
                            <h4 className="card-title"> {infoUsuario.last_name} </h4>
                            <p className="card-text text-secondary"> {infoUsuario.email} </p>
                            <p className="card-text text-secondary"> {infoUsuario.phone_number} </p>
                        </div>
                    </div>

                    : <Loading></Loading>}
            </div>
        </div>
    )
}

export default BasicInfoUser
