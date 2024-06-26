import React from 'react'
import socialX from "../img/social/x.svg"
import socialFacebook from "../img/social/facebook.svg"
import socialWhatsapp from "../img/social/whatsapp.svg"
import socailMessenger from "../img/social/messenger.svg"
import "./Footer.css";
import djlogo from "../img/djlogo.svg"

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className="footer">

          <div>
            <a href="https://www.facebook.com/msmicka1" target='_blank'>
            <img className='social' alt='social Facebook' src={socialFacebook} height={24} />
            </a>

            <a href="https://www.m.me/msmicka1" target='_blank'>
            <img className='social' alt='social Messenger' src={socailMessenger} height={24} />
            </a>

            <a href="https://wa.me/420777072633" target='_blank'>
            <img className='social' alt='social WhatsApp' src={socialWhatsapp} height={24} />
            </a>
          </div>
          <div className="end">
            <a href="http://www.daliborjanecek.cz" target='_blank'>
            <img src={djlogo} alt="Webdesign Dalibor Janeček" height={24} />
            </a>
          </div>
        </div>
      </div>

    </footer >
  )
}

export default Footer