import React from 'react';
import "../../css/block-2-css.css"
import CircleCards from "./CircleCards";
import BoxCards from "./BoxCards";

function ReactComp(){
    let circleCards = [1, 2, 3, 4, 5];
    let numberCircle = 600;
    let numberBox = 600;
    function cardCircleTranslate() {
        let circleElem = document.querySelector('.circle-cards');
        let mainElem = document.querySelector('.ReactComp-container')
        circleElem.style.transition = 'transform';
        circleElem.style.transitionDuration = '2s';
        circleElem.style.transform = 'translateX(-'+numberCircle+'px)';
        numberCircle += 300;
        if (circleElem.offsetWidth < numberCircle + mainElem.offsetWidth) {
            numberCircle = 1;
        }
    }

    function cardBoxTranslate() {
        let BoxElem = document.querySelector('.box-cards');
        let mainElem = document.querySelector('.ReactComp-container')
        BoxElem.style.transition = 'transform';
        BoxElem.style.transitionDuration = '2s';
        BoxElem.style.transform = 'translateX(-'+numberBox+'px)';
        numberBox += 300;
        if (BoxElem.offsetWidth < numberBox + mainElem.offsetWidth) {
            numberBox = 1;
        }
    }

    return (
        <div className="ReactComp-container">
            <div className="ReactComp-img">
                <div className="ReactComp-text">
                    <h1>React</h1>
                </div>
                <div className="circle-cards" onClick={() => cardCircleTranslate()}>
                    {circleCards.map((item) => {
                        return (<CircleCards index={item}></CircleCards>);
                    })}
                </div>
                <div className="box-cards" onClick={() => cardBoxTranslate()}>
                    {circleCards.map((item) => {
                        return (<BoxCards index={item}></BoxCards>);
                    })}
                </div>
            </div>
        </div>
    );
}


export default ReactComp;
