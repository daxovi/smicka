import React from 'react'
import socialX from "../img/social/x.svg"
import socialFacebook from "../img/social/facebook.svg"
import socialWhatsapp from "../img/social/whatsapp.svg"
import socailMessenger from "../img/social/messenger.svg"

const Footer = () => {
  return (
    <footer>
            <div className='container'>
              <img className='social' alt='social X' src={socialX} height={24} />
              <img className='social' alt='social Facebook' src={socialFacebook} height={24} />
              <img className='social' alt='social WhatsApp' src={socialWhatsapp} height={24} />
              <img className='social' alt='social Messenger' src={socailMessenger} height={24} />
            </div>
    </footer>
  )
}

export default Footer