import React from 'react';
import "../css/block-2-css.css"
import ReactComp from "./block-2-components/react-comp";
import JsComponent from "./block-2-components/js-comp";

function Block2 (){

    return (
        <div className="Block-2-container">
            <ReactComp></ReactComp>
            <JsComponent></JsComponent>
        </div>
    );
}


export default Block2;
