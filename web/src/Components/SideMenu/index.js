import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/custom.css';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import ApartmentIcon from '@material-ui/icons/Apartment';

export default function SideMenu() {
    return (
        <div className="sideMenu bg-dark text-light link-light" id="sideMenu">
            <h4>Trobify <ApartmentIcon /></h4>
            <ul className="side-ul">
                <li className="side-li">
                    <button className="btn btn-dark">
                        <Link className="linkMenu" to="/app/properties">
                            <FormattedMessage
                                id="app.menu.search"
                                defaultMessage="Search"
                            />
                        </Link>
                    </button>
                </li>
                <li className="side-li">
                    <button className="btn btn-dark">
                        <Link className="linkMenu" to="/app/grid">
                            <FormattedMessage
                                id="app.menu.notif"
                                defaultMessage="Notifications"
                            />
                        </Link>
                    </button>
                </li>
                {/*<li className="side-li"><button className="btn btn-dark">Alertas</button></li>*/}
                <li className="side-li">
                    <button className="btn btn-dark">
                        <Link className="linkMenu" to="/app/profile">
                            <FormattedMessage
                                id="app.menu.profile"
                                defaultMessage="Profile"
                            />
                        </Link>
                    </button>
                </li>
                <li className="side-li">
                    <button className="btn btn-dark">
                        <Link className="linkMenu" to="/newproperty">
                            <FormattedMessage
                                id="app.menu.new"
                                defaultMessage="New"
                            />
                        </Link>
                    </button>
                </li>
                {/*<li className="side-li"><button className="btn btn-dark">3D</button></li>*/}
                <li className="side-li">
                    <button className="btn btn-dark">
                        <FormattedMessage
                            id="app.menu.agenda"
                            defaultMessage="Agenda"
                        />
                    </button>
                </li>
                <li className="side-li">
                    <button className="btn btn-dark">
                        <Link className="linkMenu" to="/app/report">
                            <FormattedMessage
                                id="app.menu.report"
                                defaultMessage="Report Error"
                            />
                        </Link>
                    </button>
                </li>
            </ul>
        </div>
    );
}