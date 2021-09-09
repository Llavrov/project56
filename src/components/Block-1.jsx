import React from 'react';
import "../css/block-1-css.css"


function Block1 (){
    let textMessages = [
        <div className="text-opacity"><p>Привет, давай немного расскажу о себе. Мне 19 лет, IT увлечен с 6 класса. Обожаю хороший кофе и бумажные стаканчики с интересными артами)</p></div>,
        <div className="text-opacity"><p>Умею работать с figma, React, Python, Javascript, Photoshop, Blender 3d. Живу и работаю в Москве. Могу нарисовать твой портрет карандашом:)</p></div>,
        <div className="text-opacity"><p>На этом сайте ты можешь посмотреть, что я могу сделать, а также ознакомиться с моими другими работами. Если тебе что-то понравится, или ты просто захочешь написать мне, то листай в самый низ сайта.</p></div>,
    ]
    const [textIndex, setTextIndex] = React.useState(0);
    // let textIndex = 0;

    React.useEffect(() => {
        const slider = setInterval(() => {
            setTextIndex((textIndex + 1) % 3);
        }, 8000);

        return () => clearInterval(slider);
    })

    return (
        <div className="Block-1-container">
            <div className="Block-1-img">
                <div className="about-myself">
                    <h1>Lev Lavrov</h1>
                    <div className="slider-text">
                        {textMessages[textIndex]}
                        <div className="slider-position">
                            <div className={textIndex !== 0 ? "slider-dot" : "slider-dot active-dot"}></div>
                            <div className={textIndex !== 1 ? "slider-dot" : "slider-dot active-dot"}></div>
                            <div className={textIndex !== 2 ? "slider-dot" : "slider-dot active-dot"}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Block1;
