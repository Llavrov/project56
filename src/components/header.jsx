import React from 'react';
import '../css/header-css.css';
import armOpen from "../images/Arm open.png";
import armClose from "../images/Arm close.png";
import Label from "../images/icon lev.png";

function Header(){
    const [armImg, setArmImg] = React.useState(armOpen);

    return (
        <div className='Header_container'>
            <div className="Header-border">
                <div className="Header-content">
                    <div className="Header-img">
                        <img src={Label} alt="OOps"/>
                    </div>
                    <ul className="Header-menu">
                        <li>Contacts</li>
                        <li>Skills</li>
                        <li>Parallax</li>
                    </ul>
                </div>
                <div className="Arm-container"
                     onMouseDown={() => setArmImg(armClose)}
                     onMouseUp={() => setArmImg(armOpen)}
                ><img src={armImg} alt="OOps"/></div>
            </div>
        </div>
    );
}

export default Header;