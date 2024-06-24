import React from 'react'
import Gallery from '../components/Gallery';
import { NavLink } from 'react-router-dom';

import img1 from "../img/reference/bezpecnostnizarizeni_1.jpg"
import img2 from "../img/reference/bezpecnostnizarizeni_2.jpg"
import img3 from "../img/reference/bezpecnostnizarizeni_3.jpg"
import img4 from "../img/reference/bezpecnostnizarizeni_4.jpg"

const Bezpecnostnizarizeni = () => {
    const images = [
        img1, img2, img3, img4
    ];

    return (
        <div className="services--content">
            <div className="services--content-volt">
                <h2>Zajistěte svůj domov nebo firmu s našimi bezpečnostními a&nbsp;kamerovými systémy</h2>
                <p>
                    Chcete zvýšit bezpečnost a klid ve vašem domově nebo podniku?
                    Naše firma s více než 20 lety zkušeností nabízí špičkové bezpečnostní a kamerové systémy, které vám poskytnou maximální ochranu.
                </p>
                <h3>Výhody Našich Bezpečnostních a Kamerových Systémů</h3>
                <ol>
                    <li><strong>Nejmodernější Technologie: </strong>
                        <ul>
                            <li><strong>Pokročilé kamerové systémy:</strong> Využíváme nejnovější technologie, včetně HD a 4K rozlišení, nočního vidění a inteligentního rozpoznávání obličejů.</li>
                            <li><strong>Integrované bezpečnostní systémy:</strong> Kombinujeme kamerové systémy s alarmy, senzory pohybu a dalšími bezpečnostními prvky pro maximální ochranu.</li>
                        </ul>
                    </li>
                    <li><strong>Profesionální Instalace:</strong>
                        <ul>
                            <li><strong>Zkušený tým odborníků:</strong> Naši technici mají více než 20 let zkušeností s instalací bezpečnostních systémů v různých prostředích.</li>
                            <li><strong>Komplexní řešení:</strong> Zajišťujeme vše od návrhu systému až po jeho plnou realizaci a integraci.</li>
                        </ul>
                    </li>
                    <li><strong>Nepřetržitý Dohled a Podpora:</strong>
                        <ul>
                            <li><strong>24/7 monitoring:</strong> Naše systémy umožňují nepřetržitý dohled nad vaším majetkem, s možností vzdáleného přístupu prostřednictvím mobilní aplikace.</li>
                            <li><strong>Rychlá reakce:</strong> Nabízíme rychlou technickou podporu a servisní zásahy v případě potřeby.</li>
                        </ul>
                    </li>
                </ol>
            </div>

            <Gallery images={images} />

            <div className="services--content-white">

                <h3>Naše dlouholeté zkušenosti</h3>
                <ol>
                    <li><strong>Více než 20 let na trhu: </strong>
                        <ul>
                            <li><strong>Ověřená kvalita: </strong> Naše dlouholetá praxe a spokojení zákazníci jsou důkazem naší spolehlivosti a odbornosti.</li>
                            <li><strong>Rozmanité projekty: </strong> Máme zkušenosti s instalacemi v rezidenčních, komerčních i průmyslových objektech.</li>
                        </ul>
                    </li>
                    <li><strong>Přizpůsobení na míru:</strong>
                        <ul>
                            <li><strong>Individuální přístup: </strong> Každý projekt přizpůsobíme vašim specifickým potřebám a požadavkům.</li>
                            <li><strong>Flexibilita:</strong> Naše systémy jsou škálovatelné a mohou růst spolu s vašimi potřebami.</li>
                        </ul>
                    </li>
                    <li><strong>Certifikace a standardy:</strong>
                        <ul>
                            <li><strong>Mezinárodní standardy: </strong> Dodržujeme nejvyšší standardy kvality a bezpečnosti dle mezinárodních norem.</li>
                            <li><strong>Certifikovaní odborníci: </strong> Naši technici jsou pravidelně školeni a certifikováni v nejnovějších technologiích a postupech.</li>
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

export default Bezpecnostnizarizeni