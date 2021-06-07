import React from 'react';
import Header from '../Components/Header';
import SideMenu from '../Components/SideMenu';
import GridView from '../Components/GridView';
import '../Styles/custom.css';

function MasterPage(){
    return(
        <div>
            <Header/>
            <SideMenu/>
            <GridView/>
        </div>
    );
}

export default MasterPage;