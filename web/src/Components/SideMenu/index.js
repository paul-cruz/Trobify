import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/custom.css';
import { Link } from 'react-router-dom';
import ApartmentIcon from '@material-ui/icons/Apartment';

export default function SideMenu() {
    return (
        <div className="sideMenu bg-dark text-light link-light" id="sideMenu">
            <h4>Trobify <ApartmentIcon /></h4>
            <ul className="side-ul">
                <li className="side-li"><button className="btn btn-dark"><Link className="linkMenu" to="/app/properties">Buscar</Link></button></li>
                <li className="side-li"><button className="btn btn-dark"><Link className="linkMenu" to="/app/favorites">Favoritos</Link></button></li>
                <li className="side-li"><button className="btn btn-dark">Alertas</button></li>
                <li className="side-li"><button className="btn btn-dark"><Link className="linkMenu" to="/app/profile">Perfil</Link></button></li>
                <li className="side-li"><button className="btn btn-dark"><Link className="linkMenu" to="/newproperty">Nuevo</Link></button></li>
                <li className="side-li"><button className="btn btn-dark">3D</button></li>
                <li className="side-li"><button className="btn btn-dark">Agenda</button></li>
                <li className="side-li"><button className="btn btn-dark"><Link className="linkMenu" to="/app/report">Reportar error</Link></button></li>
            </ul>
        </div>
    );
}