import React from 'react'
import logo from './logo.svg';


const Header = () => {
  return (
    <header>
      
        <div className="contact">
        <div className="container">
          Telefon: 123 456 789
        </div>
      </div>
    <div className='container'>
        <img src={logo} alt="" srcset="" width={300} />
    </div>
    </header>
  )
}

export default Header