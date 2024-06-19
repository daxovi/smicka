import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Services.css"

const Services = () => {
  return (
    <div className="services--content">
      <div className="services--content-volt">
        <h2>Elektroinstalace <em>Smička</em></h2>
        <p>
          Vítejte na stránkách firmy Smička Elektroinstalace, vašeho partnera pro profesionální elektroinstalace a bezpečnostní řešení jak v domácnostech, tak i v průmyslových prostředích. Jsme specialisté na širokou škálu elektroinstalačních služeb, včetně instalace elektro rozvodů, osvětlení, průmyslových zařízení, a kamerových systémů.
        </p>
        <p>
          S více než dvaceti lety zkušeností jsme si vydobyli reputaci spolehlivého a kvalitního dodavatele elektroinstalačních řešení. Naši kvalifikovaní technici jsou vybaveni nejmodernějšími technologiemi a postupy, aby splnili vaše požadavky s maximální profesionalitou a precizností.
        </p>
      </div>

      <div className="services--category">

        <NavLink to="/reference">
          <div className="services--category--tile" id='elektroinstalacevdomech'>
            Elektroinstalace v domech
          </div>
        </NavLink>

        <NavLink to="/reference">
          <div className="services--category--tile" id='elektroinstalacevprumyslu'>
            Elektroinstalace v průmyslu
          </div>
        </NavLink>

        <NavLink to="/reference">
          <div className="services--category--tile" id='bezpecnostnizarizeni'>
            Bezpečnostní zařízení
          </div>
        </NavLink>

        <NavLink to="/reference">
          <div className="services--category--tile" id='zahranicnispoluprace'>
            Zahraniční spolupráce
          </div>
        </NavLink>

        <NavLink to="/reference">
          <div className="services--category--tile" id='instalaceazprovoznenilinek'>
            Instalace a zprovoznění výrobních linek
          </div>
        </NavLink>

      </div>
    </div>
  )
}

export default Services