import React from 'react';
import '../css/popUp-css.css'
import LighthHouse from '../images/Lighthouse.jpg';


function PopUp({state, setState}) {

    return (
        <div className={state ? "PopUp-container": ""}>
            <div className={state ? "PopUp-content": "PopUp-close"}>
                <div className="PopUp-btn" onClick={() => setState(!state)}> X </div>
                <div className="PopUp-img">
                    <img alt="oops" src={LighthHouse}/>
                </div>
                <div className="PopUp-text">
                    <div className="PopUp-text-content">
                        <h1>Оцените сайт</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;