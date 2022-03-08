import React from 'react';
import img01 from "../../images/01.jpg";
import img02 from "../../images/02.jpg";
import img03 from "../../images/03.jpg";
import img04 from "../../images/04.jpg";
import img05 from "../../images/05.jpg";
import leftBtn from "../../images/left-btn.png";
import rightBtn from "../../images/right-btn.png";


function JsComponent(){
    let imgArray = [
        <img key={img01} src={img01} alt="oops" />,
        <img key={img02} src={img02} alt="oops" />,
        <img key={img03} src={img03} alt="oops" />,
        <img key={img04} src={img04} alt="oops" />,
        <img key={img05} src={img05} alt="oops" />,
    ];
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [lastTime, setlastTime] = React.useState(0);

    function GoodIndex(number, modul){
        return Math.abs(modul + number) % modul;
    }

    function Next(number, evt){
        if (evt.timeStamp - lastTime > 1000) {
            setActiveIndex(GoodIndex(number + 1, 5));
            setlastTime(evt.timeStamp);
        }
        console.log(evt);
    }

    function Prev(number) {
        setActiveIndex(GoodIndex(number-1, 5));
        console.log("prev " + activeIndex);
    }

    return (
        <div className="JsComponent-container">
            <div className="JsComponent-text">
                <h1 className="Yellow-text">J</h1>
                <h1>ava</h1>
                <h1 className="Yellow-text">S</h1>
                <h1>cript</h1>
            </div>
            <div className="JsComponent-slider">
                <div className="PrePrev-elem" key={GoodIndex(activeIndex-2, 5)}> {imgArray[GoodIndex(activeIndex-2, 5)]}</div>
                <div className="Prev-elem" key={GoodIndex(activeIndex-1, 5)}>{imgArray[GoodIndex(activeIndex-1, 5)]}</div>
                <div className="Activ-elem" key={GoodIndex(activeIndex, 5)}>{imgArray[GoodIndex(activeIndex, 5)]}</div>
                <div className="Next-elem" key={GoodIndex(activeIndex+1, 5)}>{imgArray[GoodIndex(activeIndex+1, 5)]}</div>
                <div className="NeNext-elem" key={GoodIndex(activeIndex+2, 5)}>{imgArray[GoodIndex(activeIndex+2, 5)]}</div>
            </div>
            <div className="Next-btn" onClick={(event) => Next(activeIndex, event)}>
                <img src={rightBtn} alt="OOps"/>
            </div>
            {/*<div className="Prev-btn" onClick={() => Prev(activeIndex)}>*/}
            {/*    <img src={leftBtn} alt="OOps"/>*/}
            {/*</div>*/}
        </div>
    );
}


export default JsComponent;
