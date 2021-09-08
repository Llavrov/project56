import React from 'react';
import '../css/popUp-css.css'

function PopUp() {
    let isOpen = false;
    return (
        <div className={isOpen ? "PopUp-container": ""}>
        </div>
    )
}

export default PopUp;