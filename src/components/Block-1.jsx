import React from 'react';
import "../css/block-1-css.css"


function Block1 (){

    return (
        <div className="Block-1-container">
            <div className="Block-1-img">
                <div className="about-myself">
                    <h1>Lev Lavrov</h1>
                    <div className="slider-text">
                        <p>Привет, давай немного расскажу о себе. Мне 19 лет, IT увлечен с 6 класса. Обожаю хороший кофе и бумажные стаканчики с интересными артами)</p>
                        <div className="slider-position">
                            <div className="slider-dot"></div>
                            <div className="slider-dot"></div>
                            <div className="slider-dot"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Block1;
