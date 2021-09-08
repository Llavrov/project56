import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, SplitLetters } from 'react-gsap';
import Video from '../images/Apple-Dev Ed Pro.mp4';
import "../css/block-6-css.css";


function Block6(){

    let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    // setInterval(() => {
    //     let VideoBox = document.querySelector('.Block-3-container');
    //     let VideoBoxPosition = VideoBox.offset().top;
    //     let video = VideoBox.querySelector('video');
    //     delay += (scrollpos - delay) * accelamount;
    //     console.log(scrollpos, delay);
    //
    //     video.currentTime = delay;
    // }, 50);
    //
    //
    // window.addEventListener('scroll', () => {
    //     scrollpos = window.pageYOffset / 1000;
    // })

    return (
        <div className="Block-3-container">
            <div className="b3"></div>
            <Controller>
                <Scene duration={200}
                triggerElement=".b3"
                triggerHook={0.5}
                indicators={true}
                pin={this}
                >
                        <Tween
                            to={{
                                transform: 'translateX(0)',
                                rotation: -720,
                                color: '#ff0000',
                                ease: 'Expo.easeOut',
                            }}
                            paused
                        >
                            <h1>Как дела?</h1>
                            {/*<div className="intro">*/}
                            {/*    <video id="video">*/}
                            {/*        <source src={Video} type='video/mp4' />*/}
                            {/*    </video>*/}
                            {/*</div>*/}
                        </Tween>
                </Scene>
                <Scene duration={400}
                       triggerElement=".b3"
                       triggerHook={0.5}
                       indicators={true}
                       pin={this}
                >
                    <Tween
                        to={{
                            transform: 'translateX(0)',
                            rotation: -720,
                            color: '#ff0000',
                            ease: 'Expo.easeOut',
                        }}
                        paused
                    >
                        <h2>Как дела?</h2>
                    </Tween>
                </Scene>
            </Controller>
        </div>
    )
}

export default Block6;