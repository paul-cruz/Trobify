import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/custom.css';
import logo from '../../logo.svg';

export default function SideMenu() {
    return(
        <div className="sideMenu bg-dark text-light link-light" id="sideMenu">
            <h6>Menú principal</h6>
            <img src={logo} alt="logo"/>
            <ul className="side-ul">
                <li className="side-li"><button className="btn btn-dark">Buscar</button></li>
                <li className="side-li"><button className="btn btn-dark">Notificaciones</button></li>
                <li className="side-li"><button className="btn btn-dark">Alertas</button></li>
                <li className="side-li"><button className="btn btn-dark">Perfil</button></li>
                <li className="side-li"><button className="btn btn-dark">Nuevo</button></li>
                <li className="side-li"><button className="btn btn-dark">3D</button></li>
                <li className="side-li"><button className="btn btn-dark">Agenda</button></li>
            </ul>
        </div>
    );
}