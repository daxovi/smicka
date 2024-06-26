import React from 'react'
import logo from '../img/logo.svg';
import logoalternate from '../img/logo-alternate.svg';
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';


const Header = () => {  
  return (
    <header>
      
        <div className="contact">
        <div className="container">
          <h1>Elektroinstalace Smička</h1>
          <p>Telefon: +420 777 072 633</p>
        </div>
      </div>
    <div className='container'>
    <NavLink to="/" activeClassName="active">
        <img src={logo} alt="Smička elektroinstalace logo" width={300} />
        </NavLink>
    </div>
    </header>
  )
}

export default Header