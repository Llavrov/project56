import React from 'react';
import '../css/header-css.css';
import armOpen from "../images/Arm open.png";
import Label from "../images/icon lev.png";
import {Link} from "react-router-dom";

function Header(){
    const [armImg, setArmImg] = React.useState(armOpen);

    return (
        <div className='Header_container'>
            <div className="Header-border">
                <div className="Header-content">
                    <div className="Header-img">
                        <Link to="/" replace>
                            <img src={Label} alt="OOps"/>
                        </Link>
                    </div>
                    <ul className="Header-menu">
                        <Link to="/Contacts" replace>
                            <li>Contacts</li>
                        </Link>
                        <li><a href={'#skills'}>Skills</a></li>
                        <li><a href={'#Projects'}>Projects</a></li>
                    </ul>
                </div>
                {/*<div className="Arm-container"*/}
                {/*     onMouseDown={() => setArmImg(armClose)}*/}
                {/*     onMouseUp={() => setArmImg(armOpen)}*/}
                {/*><img src={armImg} alt="OOps"/></div>*/}
            </div>
        </div>
    );
}

export default Header;