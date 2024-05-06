import React from 'react'
import logo from '../logo.svg';
import logoalternate from '../logo-alternate.svg';
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
          Telefon: +420 777 072 633
        </div>
      </div>
    <div className='container'>
        <img src={isLoading ? logoalternate : logo} alt="" srcset="" width={300} />
    </div>
    </header>
  )
}

export default Header