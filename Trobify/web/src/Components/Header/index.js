import React from 'react';
import '../../Styles/custom.css';

export default function Header(){
    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark fixed-top glow-border">
            <div className="navbar-collapse order-1 order-md-0">
                <ul className="navbar-nav">
                    <li>
                        <button id="hideBtn" className="btn btn-secondary btn-margin" onClick={hideMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </button>  
                    </li>
                    <li>
                        <a className="btn btn-secondary btn-margin" href="#">
                            Log In&nbsp;&nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="btn btn-secondary btn-margin " href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

let rot = 180;
function hideMenu(){
    console.log("Btn pressed!");
    let btn = document.getElementById("hideBtn");
    btn.style = 'transform: rotate(' + rot + 'deg)';
    rot += 180;
    let menu = document.getElementById("sideMenu");
    let grid = document.getElementById("girdDiv");
    console.log(grid);
    if(rot%360 === 0){
        menu.style = 'transform: translate(-1000vh, 0)';
        grid.style = 'margin-left: 0';
    }
    else{
        menu.style = 'transform: translate(0vh, 0)';
        grid.style = 'margin-left: 40vh';
    }
}