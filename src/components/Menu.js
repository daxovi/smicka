import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.css"

const Menu = () => {
  return (
    <div className='container'>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Služby
        </NavLink>
        <NavLink to="/reference" activeClassName="active">
          Reference
        </NavLink>
        <NavLink to="/kontakt" activeClassName="active">
          Kontakt
        </NavLink>

      </nav>
    </div>
  )
}

export default Menu