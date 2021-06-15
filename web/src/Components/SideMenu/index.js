import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/custom.css';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

export default function SideMenu() {
    return (
        <div className="sideMenu bg-dark text-light link-light" id="sideMenu">
            <h6>Menú principal</h6>
            <img src={logo} alt="logo" />
            <ul className="side-ul">
                <li className="side-li"><button className="btn btn-dark"><Link to="/app/properties">Buscar</Link></button></li>
                <li className="side-li"><button className="btn btn-dark"><Link to="/app/grid">Notificaciones</Link></button></li>
                <li className="side-li"><button className="btn btn-dark">Alertas</button></li>
                <li className="side-li"><button className="btn btn-dark">Perfil</button></li>
                <li className="side-li"><button className="btn btn-dark"><Link to="/newproperty">Nuevo</Link></button></li>
                <li className="side-li"><button className="btn btn-dark">3D</button></li>
                <li className="side-li"><button className="btn btn-dark">Agenda</button></li>
                <li className="side-li"><button className="btn btn-dark"><Link to="/app/report">Reportar error</Link></button></li>
            </ul>
        </div>
    );
}