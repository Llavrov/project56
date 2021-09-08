import React from 'react';
import Label from "../images/icon lev.png";
import Vk from '../images/vk-icon.png';
import tg from '../images/telegram-icon.png';
import gmail from '../images/gmail-icon.png';
import git from '../images/github-icon.png';
import "../css/footer-css.css";

function Footer(){

    return (
      <div className="footer">
          <div className="footer-border">
              <div className="footer-logo">
                  <img src={Label} alt="OOps"/>
              </div>
              <div className="footer-contact-box">
                  <ul className="footer-massengers">
                      <li><a href="https://vk.com/leva_vk14" target="_blank"><img src={Vk} alt="OOps"/></a></li>
                      <li><a href="https://t.me/Lion_arr" target="_blank"><img src={tg} alt="OOps"/></a></li>
                      <li><a href="mailto:levlevlavrov@gmail.com" target="_blank"><img src={gmail} alt="OOps"/></a></li>
                      <li><a href="https://github.com/Llavrov" target="_blank"><img src={git} alt="OOps"/></a></li>
                  </ul>
                  <div className="footer-date">
                    <h1>© 2021 Lev Lavrov</h1>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Footer;