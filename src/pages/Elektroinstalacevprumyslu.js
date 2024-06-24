import React from 'react'
import Gallery from '../components/Gallery'
import { NavLink } from 'react-router-dom'

import img1 from "../img/reference/elektroinstalacevprumyslu_1.jpg"
import img2 from "../img/reference/elektroinstalacevprumyslu_2.jpg"
import img3 from "../img/reference/elektroinstalacevprumyslu_3.jpg"
import img4 from "../img/reference/elektroinstalacevprumyslu_4.jpg"
import img5 from "../img/reference/elektroinstalacevprumyslu_5.jpg"

const Elektroinstalacevprumyslu = () => {
    const images = [
        img1, img2, img3, img4, img5
    ];

    return (
        <div className="services--content">
            <div className="services--content-volt">
                <h2>Profesionální průmyslová elektroinstalace na&nbsp;míru vašim potřebám</h2>
                Potřebujete spolehlivého partnera pro realizaci průmyslové elektroinstalace?
                Jsme tu pro Vás! Naše služby zahrnují:
                <ul>
                    <li><strong>Komplexní instalace elektro rozvodů:</strong> Od návrhu po realizaci, včetně všech nezbytných technických dokumentací.</li>
                    <li><strong>Zapojování technologických zařízení:</strong> Zajistíme, aby všechna vaše zařízení fungovala spolehlivě a efektivně.</li>
                    <li><strong>Instalace a údržba rozvaděčů:</strong> Od malých rozvodných skříní po velké průmyslové rozvaděče.</li>
                </ul>

                <h3>Jak probíhá spolupráce na Vašem projektu?</h3>
                <ol>
                    <li><strong>Analýza a Plánování:</strong>
                        <ul>
                            <li><strong>Konzultace s klientem:</strong> Nasloucháme vašim požadavkům a cílům.</li>
                            <li><strong>Návrh řešení:</strong> Připravíme detailní projektový plán odpovídající vašim potřebám.</li>
                        </ul>
                    </li>
                    <li><strong>Realizace projektu:</strong>
                        <ul>
                            <li><strong>Instalace elektro rozvodů:</strong> Profesionální instalace kabeláže a rozvodných systémů.</li>
                            <li><strong>Montáž a zapojení technologických zařízení:</strong> Bezpečné a efektivní propojení všech vašich zařízení.</li>
                            <li><strong>Instalace rozvaděčů:</strong> Kompletní montáž a zapojení rozvaděčových skříní dle nejvyšších standardů.</li>
                        </ul>
                    </li>
                    <li><strong>Testování a Uvedení do Provozu:</strong>
                        <ul>
                            <li><strong>Komplexní testování:</strong> Zajištění, že všechny systémy fungují správně a bezpečně.</li>
                            <li><strong>Uvedení do provozu:</strong> Uvedení celého systému do plného provozu s minimálními odstávkami.</li>
                        </ul>
                    </li>
                    <li><strong>Servis a Podpora:</strong>
                        <ul>
                            <li><strong>Pravidelná údržba:</strong> Zajišťujeme dlouhodobou spolehlivost vašich elektroinstalací.</li>
                            <li><strong>Rychlá odezva na servisní požadavky:</strong> Jsme zde pro vás 24/7.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <Gallery images={images} />

            <div className="services--content-white">
                <h3>Proč si vybrat právě nás?</h3>
                <ul>
                    <li><strong>Zkušenosti a odbornost:</strong> Naše týmy mají dlouholeté zkušenosti s průmyslovými instalacemi.</li>
                    <li><strong>Inovace a technologie:</strong> Využíváme nejmodernější technologie a postupy.</li>
                    <li><strong>Flexibilita a přizpůsobivost:</strong> Přizpůsobíme se specifickým požadavkům každého projektu.</li>
                </ul>
            </div>

            <nav>
                <NavLink to="/kontakt" activeClassName="active">
                    zjistěte jak můžeme pomoci vám
                </NavLink>
            </nav>
        </div>
    )
}

export default Elektroinstalacevprumyslu