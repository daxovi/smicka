import React from 'react'
import Gallery from '../components/Gallery';
import { NavLink } from 'react-router-dom';

import img1 from "../img/reference/montazevyrobnichlinek_1.jpg"
import img2 from "../img/reference/montazevyrobnichlinek_2.jpg"
import img3 from "../img/reference/montazevyrobnichlinek_3.jpg"
import img4 from "../img/reference/montazevyrobnichlinek_4.jpg"
import img5 from "../img/reference/montazevyrobnichlinek_5.jpg"

const Instalaceazprovoznenilinek = () => {
    const images = [
        img1, img2, img3, img4, img5
    ];

    return (
        <div className="services--content">
            <div className="services--content-volt">
                <h2>Profesionální instalace a&nbsp;zprovoznění výrobních linek</h2>
                <p>
                    Hledáte odborníky na instalaci a zprovoznění vašich výrobních linek? <br />
                    S naší firmou získáte spolehlivého partnera s bohatými zkušenostmi v oblasti instalace a zprovoznění výrobních linek po celém světě.
                </p>
                <h3>Jak pracujeme</h3>
                <ol>
                    <li><strong>Důkladné plánování a příprava: </strong>
                        <ul>
                            <li><strong>Konzultace s klientem: </strong> Společně probereme vaše potřeby a specifikace výrobní linky.</li>
                            <li><strong>Detailní plánování: </strong> Připravíme podrobný projektový plán a harmonogram instalace.</li>
                        </ul>
                    </li>
                    <li><strong>Profesionální instalace:</strong>
                        <ul>
                            <li><strong>Kvalifikovaný tým: </strong> Naši technici mají bohaté zkušenosti s instalací různých typů výrobních linek.</li>
                            <li><strong>Precizní práce: </strong> Každou část linky instalujeme s maximální přesností a pečlivostí.</li>
                        </ul>
                    </li>
                    <li><strong>Zprovoznění a testování:</strong>
                        <ul>
                            <li><strong>Komplexní testování:</strong> Před uvedením do provozu důkladně testujeme všechny funkce výrobní linky.</li>
                            <li><strong>Optimalizace:</strong> Zajistíme, aby vaše linka fungovala efektivně a bezchybně.</li>
                        </ul>
                    </li>
                    <li><strong>Zaškolení personálu:</strong>
                        <ul>
                            <li><strong>Detailní školení: </strong> Po instalaci a zprovoznění provedeme zaškolení vašeho personálu v obsluze a údržbě výrobní linky.</li>
                            <li><strong>Podpora na místě: </strong> Naši odborníci zůstanou na místě, dokud si nebudete jisti, že váš tým zvládne obsluhu samostatně.</li>
                        </ul>
                    </li>
                    <li><strong>Globální instalace:</strong>
                        <ul>
                            <li><strong>Mezinárodní zkušenosti: </strong> Po zaškolení vašeho personálu jsme připraveni provádět instalace po celém světě.</li>
                            <li><strong>Flexibilita a přizpůsobivost: </strong> Naše týmy jsou schopny pracovat v různých prostředích a podmínkách, včetně dlouhodobých projektů mimo EU.</li>
                        </ul>
                    </li>
                </ol>
            </div>
            
            <Gallery images={images} />

            <div className="services--content-white">
                <h3>Výhody spolupráce s námi</h3>
                <ol>
                    <li><strong>Bohaté zkušenosti:</strong>
                        <ul>
                            <li><strong>Různé typy linek: </strong>Máme zkušenosti s instalací a zprovozněním široké škály výrobních linek v různých průmyslových odvětvích.</li>
                            <li><strong>Mezinárodní projekty: </strong>Realizujeme projekty nejen v Evropě, ale i na dalších kontinentech.</li>
                        </ul>
                    </li>
                    <li><strong>Profesionální přístup:</strong>
                        <ul>
                            <li><strong>Individuální řešení:</strong> Každý projekt přizpůsobíme vašim specifickým potřebám.</li>
                            <li><strong>Kvalifikovaný tým:</strong> Naši technici a inženýři jsou pravidelně školeni a certifikováni v nejnovějších technologiích a postupech.</li>
                        </ul>
                    </li>
                    <li><strong>Dlouhodobá podpora:</strong>
                        <ul>
                            <li><strong>Servis a údržba:</strong> Nabízíme pravidelnou údržbu a servisní smlouvy pro zajištění dlouhodobé spolehlivosti vašich výrobních linek.</li>
                            <li><strong>Rychlá reakce: </strong>Jsme zde pro vás, kdykoliv potřebujete technickou podporu nebo konzultaci.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <nav>
                <NavLink to="/kontakt" activeClassName="active">
                    zjistěte jak můžeme pomoci vám
                </NavLink>
            </nav>
        </div>

    )
}

export default Instalaceazprovoznenilinek