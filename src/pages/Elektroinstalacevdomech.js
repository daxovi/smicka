import React from 'react'
import Gallery from '../components/Gallery';

import img1 from "../img/reference/elektroinstalacevdomech_1.jpg"
import img2 from "../img/reference/elektroinstalacevdomech_2.jpg"
import img3 from "../img/reference/elektroinstalacevdomech_3.jpg"
import img4 from "../img/reference/elektroinstalacevdomech_4.jpg"
import img5 from "../img/reference/elektroinstalacevdomech_5.jpg"


const Elektroinstalacevdomech = () => {
    const images = [
        img1, img2, img3, img4, img5
    ];

    return (
        <div className="services--content">
            <div className="services--content-volt">
                <h2>Profesionální Domovní Elektroinstalace pro Váš Domov</h2>
                <p>
                    Chcete zajistit bezpečnost a spolehlivost Vaší elektroinstalace?
                </p>
                <h3>U nás jste na správném místě! Nabízíme:</h3>
                <p>
                    <ul>
                        <li><strong>Kompletní elektroinstalační služby:</strong> Od návrhu po realizaci.</li>
                        <li><strong>Moderní technologie:</strong> Zajišťujeme nejnovější a nejefektivnější řešení.</li>
                        <li><strong>Bezpečnost na prvním místě:</strong> V souladu s nejvyššími standardy a předpisy.</li>
                        <li><strong>Zkušený tým odborníků:</strong> Profesionálové s dlouholetou praxí.</li>
                    </ul>
                </p>
            </div>
           
        <Gallery images={images} />

            <div className="services--content-white">
                <h3>
                    Proč si vybrat právě nás?
                </h3>
                <ul>
                    <li><strong>Kvalita a spolehlivost:</strong> Naše práce mluví za nás.</li>
                    <li><strong>Individuální přístup:</strong> Každý projekt je pro nás jedinečný.</li>
                    <li><strong>Rychlá a efektivní realizace:</strong> Dodržujeme termíny a šetříme Váš čas.</li>
                </ul>
            </div>
        </div>
    )
}

export default Elektroinstalacevdomech