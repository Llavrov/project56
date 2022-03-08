import React from 'react';
import "./Contacts.css";
import tg from '../images/telegram-icon.png';
import gh from '../images/github-icon.png';
import gm from '../images/gmail-icon.png';
import vk from '../images/vk-icon.png';
import CoffeCup from '../images/coffee-cup.png';
import Vk from "../images/vk-icon.png";
import gmail from "../images/gmail-icon.png";


function Contacts() {
    let array = [1];
    array.length = 200;
    array.fill(1);


    function ContactLink(link) {
        document.location.href = link;
    }

    return (
        <div className="Contacts-container">
            {array.map(() => {
                return (
                    <div className="ImagePixels">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/image-uploader-fe3b2.appspot.com/o/images%2Fpixels.png?alt=media&token=3e96f39f-ae2d-4864-85dd-1203d52f6631"
                            alt="img_name.jpg"/>
                    </div>
                );
            })}
            <div className="contentContacts">
                <h1>Напиши мне</h1>
                <div className="tetxContent">
                    {[
                        {
                            name: 'telegram',
                            img: tg,
                            link: "https://t.me/Lion_arr"
                        },
                        {
                            name: 'Vk',
                            img: vk,
                            link: "https://vk.com/leva_vk14"
                        },
                        {
                            name: 'Gmail',
                            img: gm,
                            link: "mailto:levlevlavrov@gmail.com"
                        }
                        ,
                        {
                            name: 'GitHub',
                            img: gh,
                            link: "https://github.com/Llavrov"
                        }
                    ].map(elem => {
                        return (
                            <div onClick={() => ContactLink(elem.link)} className="btn-contact">
                                <img src={elem.img} alt={elem.name}/>
                                {elem.name}
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="CoffeeCupImg">
                <img src={CoffeCup} alt={CoffeCup}/>
            </div>
        </div>
    )
}

export default Contacts;