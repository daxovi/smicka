import React from 'react'
import logo from '../img/logo.svg';
import logoalternate from '../img/logo-alternate.svg';
import { useState, useEffect } from "react";


const Header = (props) => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Zde můžete nastavit čas, po kterém bude animace odebrána

    return () => clearTimeout(timer);
  }, [props.isLoading])
  
  return (
    <header>
      
        <div className="contact">
        <div className="container">
          <h1>Elektroinstalace Smička</h1>
          <p>Telefon: +420 777 072 633</p>
        </div>
      </div>
    <div className='container'>
        <img src={isLoading ? logoalternate : logo} alt="" srcset="" width={300} />
    </div>
    </header>
  )
}

export default Header